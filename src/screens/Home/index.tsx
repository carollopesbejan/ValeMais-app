import React, { useState, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

export const Home = ({ navigation }) => {
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

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Erro ao sair:', error.message);
    } else {
        console.log('Logout realizado com sucesso!');
        navigation.navigate('TelaLogin');
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <Text>Espaço</Text>
      <Text>Espaço</Text>
      <Text>Espaço</Text>
      <Pressable onPress={logOut}><Text>LogOut</Text></Pressable>
      <Pressable onPress={handle}><Text>Info user</Text></Pressable>
    </View>
  )
}