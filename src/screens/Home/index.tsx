import { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

export const Home = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const handle = () => {
    console.log(session.user.email);
    console.log(session.user.id);
  }

  return (
    <View>
      <Text>Home</Text>
      <Text>Espaço</Text>
      <Text>Espaço</Text>
      <Text>Espaço</Text>
      <Pressable onPress={handle}><Text>Clicar</Text></Pressable>
    </View>
  )
}