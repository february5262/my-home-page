import { useEffect } from 'react';
import { signInWithGoogle,signOut } from '../../../api/api';
import { createClient } from '@supabase/supabase-js'
import styles from './loginComponent.module.css';

export const Login = () => {

  return (
    <div className={styles.LoginContainer}>
      <h1 className={styles.LoginText}>Planet</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export const LogOut = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  // useEffect(() => {
  //   const session = supabase.auth.session()
  
  //   if (session) {
  //     console.log('Logged in user: ', session.user)
  //   } else {
  //     console.log('Not logged in')
  //   }
  
  //   const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
  //     if (session) {
  //       console.log('User logged in: ', session.user)
  //     } else {
  //       console.log('User logged out')
  //     }
  //   })
  
  //   return () => {
  //     authListener?.unsubscribe()
  //   }
  // }, [])
  return (
    <div className={styles.LoginContainer}>
      <h1>Supabase Google Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

