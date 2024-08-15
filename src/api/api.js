import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const signInWithGoogle = async () => {
  
  const { error } = await supabase.auth.signInWithOAuth({
  provider:"google",
  options: {
    queryParams: {
      access_type: 'offline',
      prompt: 'consent',
    },
  },
})
if (error) {
  console.error('Error: ', error.message)
} else {
  console.log('User: ', error)
}
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log('Error: ', error.message)
}