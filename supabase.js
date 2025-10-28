// 1. Import the createClient function from the Supabase library
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

// 2. Add your Supabase project URL and Anon Key HERE
// This is the ONLY place you'll need to add them.
const SUPABASE_URL = 'https://nyipywsjnbyqtqpruplc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55aXB5d3NqbmJ5cXRxcHJ1cGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NTg0NzQsImV4cCI6MjA3NzIzNDQ3NH0.0TxPgEIeFsmh7AoM6pBACM_iBatfE9hLIIRWZtqS43w';

// 3. Create and export the Supabase client
export const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
