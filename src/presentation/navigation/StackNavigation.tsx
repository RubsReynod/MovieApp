import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from '../screens/home/homeScreen';
import detailsScreen from '../screens/details/detailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Details" component={detailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;

