import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/utils/config'
import { Database } from './services/game/stats/types/supabase'

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
