import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import useMovie from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

const DetailsScreen: FC<Props> = ({ route }) => {
  const { movie } = useMovie(route.params?.movieId);
  console.log('---------------', movie);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen
