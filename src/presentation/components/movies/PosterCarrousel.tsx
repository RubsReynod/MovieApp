import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import type { Movie } from '../../../core/entities/movie.entity';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarrousel: FC<Props> = ({ movies, height = 440 }: Props) => {
  return (
    <View style={{ height }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {movies.map(movie => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </ScrollView>
    </View>
  )
}
