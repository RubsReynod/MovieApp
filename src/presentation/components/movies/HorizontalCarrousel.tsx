import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarrousel: FC<Props> = ({ movies, title }) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && <Text style={{ fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 }}>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}
