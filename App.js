import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeoplePages from './src/screen/PeoplePages';
import PeopleDetails from './src/screen/PeopleDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          },
        }}
      >
        <Stack.Screen 
          name="People" 
          component={PeoplePages}  
          options={{}}
        />

        <Stack.Screen 
          name="PeopleDetails" 
          component={PeopleDetails} 
          options={
            ({ route }) => ({ title: route.params.user.name })
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;