const RECAPTCHA_SCRIPT_ID = 'google-recaptcha-v3';

type RecaptchaApi = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

let scriptPromise: Promise<RecaptchaApi> | null = null;

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const verifyUrl = import.meta.env.VITE_RECAPTCHA_VERIFY_URL;

function loadRecaptcha(): Promise<RecaptchaApi> {
  if (!siteKey) return Promise.reject(new Error('reCAPTCHA não está configurado.'));
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID) as HTMLScriptElement | null;
    const script = existingScript || document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) resolve(window.grecaptcha);
      else reject(new Error('A API do reCAPTCHA não foi carregada.'));
    };
    script.onerror = () => reject(new Error('Não foi possível carregar o reCAPTCHA.'));
    if (!existingScript) document.head.appendChild(script);
  });

  return scriptPromise;
}

export async function verifyRecaptcha(action: 'login' | 'register' | 'google_login'): Promise<void> {
  if (!verifyUrl) throw new Error('A verificação do reCAPTCHA não está configurada no backend.');

  const recaptcha = await loadRecaptcha();
  const token = await new Promise<string>((resolve, reject) => {
    recaptcha.ready(() => {
      recaptcha.execute(siteKey, { action }).then(resolve).catch(() => reject(new Error('Não foi possível gerar o token do reCAPTCHA.')));
    });
  });

  const response = await fetch(verifyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, action })
  });

  if (!response.ok) throw new Error('A verificação de segurança foi recusada.');
  const result = await response.json() as { success?: boolean; score?: number; action?: string };
  if (!result.success || result.action !== action || Number(result.score || 0) < 0.5) {
    throw new Error('Não foi possível validar esta interação. Tente novamente.');
  }
}
