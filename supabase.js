// NOTE: This file assumes the main Supabase library is ALREADY loaded
// via CDN in the HTML file (<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>)

// 1. Add your Supabase project URL and Anon Key HERE
const SUPABASE_URL = 'https://nyipywsjnbyqtqpruplc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55aXB5d3NqbmJ5cXRxcHJ1cGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NTg0NzQsImV4cCI6MjA3NzIzNDQ3NH0.0TxPgEIeFsmh7AoM6pBACM_iBatfE9hLIIRWZtqS43w';

// 2. Check if Supabase library is loaded and create the client on the window object
if (!window.supabase) {
    console.error('Supabase library not found. Make sure the CDN script is included in the HTML before supabase.js.');
} else {
    // Access createClient from the globally loaded library
    const { createClient } = window.supabase; 
    // Create the client and assign it to a global variable
    window._supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase client created successfully.');
}

// REMOVED: export const _supabase = ...

