import React, { useState } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function SetupOticaScreen() {
  const { configurarOtica } = useAppContext();
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [salvando, setSalvando] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nomeNormalizado = nome.trim();
    if (!nomeNormalizado) {
      setErro('Informe o nome da sua ótica.');
      return;
    }
    setErro('');
    setSalvando(true);
    try {
      await configurarOtica(nomeNormalizado);
    } catch (error: any) {
      if (error?.code === 'PERMISSION_DENIED' || error?.message === 'PERMISSION_DENIED') {
        setErro('O Firebase recusou o cadastro. Publique o arquivo database.rules.json no projeto vistta-2e1df e tente novamente.');
      } else {
        setErro(error?.message || 'Não foi possível salvar os dados da ótica.');
      }
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="vistta-shell flex min-h-[100dvh] w-full items-center justify-center p-4 sm:p-6">
      <div className="vistta-grid w-full max-w-[520px] rounded-[28px] border border-[var(--vistta-border)] bg-[var(--vistta-surface)] p-7 shadow-[0_18px_55px_rgba(48,32,77,.09)] dark:bg-[var(--vistta-surface)] sm:p-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--vistta-lavender)] text-[var(--vistta-violet)]"><Building2 size={26} /></div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-[var(--vistta-ink)] dark:text-white sm:text-3xl">Vamos configurar sua ótica</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--vistta-secondary)]">Para começar, informe o nome da sua ótica.</p>
        <form onSubmit={submit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="nome-otica" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[var(--vistta-secondary)]">Nome da ótica</label>
            <input id="nome-otica" autoFocus required value={nome} onChange={event => { setNome(event.target.value); if (erro) setErro(''); }} placeholder="Digite o nome da sua ótica" className="w-full rounded-xl border border-[var(--vistta-border)] bg-[var(--vistta-muted-surface)] px-4 py-3.5 text-[14px] text-[var(--vistta-ink)] outline-none transition-all placeholder:text-[var(--vistta-secondary)] focus:border-[var(--vistta-violet)] focus:ring-2 focus:ring-[rgba(109,74,255,.16)] dark:text-white" />
          </div>
          {erro && <p role="alert" className="rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm font-semibold text-rose-600">{erro}</p>}
          <button type="submit" disabled={salvando} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--vistta-plum)] py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(48,32,77,.16)] transition-all hover:bg-[var(--vistta-violet)] disabled:cursor-not-allowed disabled:opacity-60">{salvando ? 'Salvando...' : 'Continuar'} {!salvando && <ArrowRight size={18} />}</button>
        </form>
      </div>
    </div>
  );
}
