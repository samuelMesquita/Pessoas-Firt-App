import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeoplePages from './src/screen/PeoplePages';
import PeopleDetails from './src/screen/PeopleDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="People" component={PeoplePages} />
        <Stack.Screen name="PeopleDetails" component={PeopleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;