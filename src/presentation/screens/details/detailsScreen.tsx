import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/StackNavigation';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

const detailsScreen: FC<Props> = ({ route }) => {
  console.log(route.params?.movieId);
  return (
    <View>
      <Text>detailsScreen</Text>
    </View>
  )
}

export default detailsScreen
