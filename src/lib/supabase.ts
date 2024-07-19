import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://euwihcpbrcqurgtuatid.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1d2loY3BicmNxdXJndHVhdGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMTQ3ODgsImV4cCI6MjAzNjg5MDc4OH0.xfhp2um1PgkmhcmTs5WIMRONdjsJ6qbV2QDidokvOlo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})