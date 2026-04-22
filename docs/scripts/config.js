
import { createClient }
from "https://esm.sh/@supabase/supabase-js@2"

// ======================
// Supabase credentials
// ======================

export const SUPABASE_URL =
  'https://fvkcqttqkglzpozftvbg.supabase.co'

export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2a2NxdHRxa2dsenBvemZ0dmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjY5MTAsImV4cCI6MjA5MjQ0MjkxMH0.S3E8TIa_4ktdrD9dTBqmIJRyu3E6EN2lnnpzdUEbR2U'

// ======================
// Client
// ======================

export const supabase =
  createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  )
