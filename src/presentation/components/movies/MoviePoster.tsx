import React, { FC } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import type { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../presentation/navigation/StackNavigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster: FC<Props> = ({ movie, height = 420, width = 300 }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const onPress = () => {
    navigation.navigate('Details', { movieId: movie.id });
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        width,
        height,
        marginHorizontal: 8,
        paddingBottom: 20,
        paddingHorizontal: 7,
      })}
    >
      <View style={{ ...styles.imageContainer, width, height }}>
          <Image source={{ uri: movie.poster || '' }} style={styles.image} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  }
})

export default MoviePoster
