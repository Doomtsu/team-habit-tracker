// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cjaabkjjeuituqpzlojt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYWFia2pqZXVpdHVxcHpsb2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxODI5NjAsImV4cCI6MjA1MDc1ODk2MH0.cqvBZ_5bEMFcMctjLtCcVk8RFAC3LnIg21yidqDQAG4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);