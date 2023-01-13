import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import CartScreen from './screens/CartScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import Home from './screens/Home';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import RestaurantScreen from './screens/RestaurantScreen';

import { store } from './store';
import MainContainer from './components/MainContainer';
import UserScreen from './screens/UserScreen';
import CartCheck from './screens/CartCheck';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name="MainContainer" component={MainContainer} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Cart" component={CartScreen} 
          options={{presentation:'modal', headerShown:false}}
          />
          <Stack.Screen name="User" component={UserScreen} 
          options={{presentation:'modal', headerShown:false}}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
          options={{animation:'slide_from_bottom',headerShown:false}} />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}
          options={{headerShown:false}} />
          <Stack.Screen name="CartCheck" component={CartCheck} options={{headerShown:false}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
