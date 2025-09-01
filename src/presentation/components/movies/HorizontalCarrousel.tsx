import React, { FC, useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarrousel: FC<Props> = ({ movies, title, loadNextPage }) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    isLoading.current = true;

    if (isEndReached) return;

    // Load more movies
    loadNextPage?.();
  }

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && (
        <Text 
          style={{ 
            fontSize: 30, 
            fontWeight: '300', 
            marginLeft: 10, 
            marginBottom: 10 
          }}
        >
          {title}
        </Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />}
        keyExtractor={(item) => item.id.toString()}
        onScroll={onScroll}
      />
    </View>
  )
}
