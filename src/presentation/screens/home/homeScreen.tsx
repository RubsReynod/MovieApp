import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import useMovies from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarrousel } from '../../components/movies/PosterCarrousel';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { loading, nowPlaying } = useMovies();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 20 }}>
        <PosterCarrousel movies={nowPlaying} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
