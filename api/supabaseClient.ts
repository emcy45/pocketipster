import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fpaawncupufjopqyjtdy.supabase.co";

if (!process.env.SUPABASE_KEY) {
  throw new Error(
    "Brak klucza dostępu do Supabase. Sprawdź ustawienia środowiskowe."
  );
}

const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

export default supabase;
