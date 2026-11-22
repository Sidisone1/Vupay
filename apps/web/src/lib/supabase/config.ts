/** Vrai quand les variables Supabase publiques sont renseignées (voir .env.example). */
export function supabaseConfigure(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

/** Canal d'envoi du code : SMS par défaut, WhatsApp quand le fournisseur est branché dans Supabase Auth. */
export function canalOtp(): "sms" | "whatsapp" {
  return process.env.NEXT_PUBLIC_OTP_CANAL === "whatsapp" ? "whatsapp" : "sms";
}
