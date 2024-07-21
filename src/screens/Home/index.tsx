import { Text, AppState } from "react-native"
import { supabase } from "../../lib/supabase"

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })

export const Home = () => {
    return (
        <Text>Home</Text>
    )
}