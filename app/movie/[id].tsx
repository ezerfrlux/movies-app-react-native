 import { useMovie } from '@/presentation/hooks/useMovie'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

const MovieScreen = () => {
  const {id} = useLocalSearchParams()
  const {movieQuery} = useMovie(+id)


  if (movieQuery.isLoading) {
    return (<View className='flex items-center justify-center flex-1'>
      <Text className="mb-4">Espere por favor</Text>
      <ActivityIndicator color={'purple'} size={30} />
    </View>)
  }

  return (
    <ScrollView>
      <Text>{movieQuery.data?.title ?? "No hay titutlo"}</Text>
    </ScrollView>
  )
}

export default MovieScreen