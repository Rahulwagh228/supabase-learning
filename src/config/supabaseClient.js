
import { createClient } from '@supabase/supabase-js'
 
const supabaseUrl = "https://pskzoaudoitkafrzmgbw.supabase.co";
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_API_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3pvYXVkb2l0a2FmcnptZ2J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NTQyODAsImV4cCI6MjAyNDQzMDI4MH0.0hSTxW9-qsqPxyoDxJdgnl8XKAfyD57hLuUv_u_NwBQ"
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;