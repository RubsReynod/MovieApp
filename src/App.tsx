import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './presentation/navigation/StackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App
