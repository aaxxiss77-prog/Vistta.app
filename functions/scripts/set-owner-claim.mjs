import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const uid = process.argv[2];
if (!uid) {
  console.error('Uso: node functions/scripts/set-owner-claim.mjs <UID>');
  process.exit(1);
}

initializeApp();
await getAuth().setCustomUserClaims(uid, { platformOwner: true });
console.log(`Claim platformOwner aplicado ao usuário ${uid}. Faça logout/login para renovar o token.`);
