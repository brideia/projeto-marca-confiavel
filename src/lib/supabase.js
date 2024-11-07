import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lydjwhtqlhsdmnpdkuqw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5ZGp3aHRxbGhzZG1ucGRrdXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MjkwMDAsImV4cCI6MjA0NjQwNTAwMH0._UQ883YsK_jsGo-2tClKB5MtmmuglVe2ZAreIMWZIJM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
