import { createClient } from "@supabase/supabase-js";

// these are publicly accessible values
const SB_URL = "https://jclyxeeqghnljeemfppe.supabase.co";
const SB_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjbHl4ZWVxZ2hubGplZW1mcHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY2MzE3MTcsImV4cCI6MTk2MjIwNzcxN30.Z_XjfSEn5DO6Q_2BAOxuOAWLfqGMuY1yFpP861i9w6E";

export const supabase = createClient(SB_URL, SB_ANON_KEY, {
  fetch: fetch.bind(globalThis),
});
