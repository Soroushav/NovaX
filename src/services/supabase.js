import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tfstniqxganylntmsbfg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc3RuaXF4Z2FueWxudG1zYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMTg2OTgsImV4cCI6MjA1Nzc5NDY5OH0.hJS2-63TIYhCp-WIEU5_Ny5ZwE7FufnaVi5kf9Nj-fg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
