import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UserScreen from '../screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartCheck from '../screens/CartCheck';

const homeScreen = 'HOME';
const cartScreen = 'CART';
const userScreen = 'USER';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <Tab.Navigator initialRouteName={homeScreen}  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HOME') {
                iconName = focused? 'fast-food': 'fast-food-outline';
              } else if (route.name === 'CART') {
                iconName = focused ? 'cart' : 'cart-outline';
              }
              else if (route.name === 'USER') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={'#00CCBB'} />;
            },
            headerShown:false
            })}>
        <Tab.Screen name={homeScreen} component={Home}></Tab.Screen>
        <Tab.Screen name={cartScreen} component={CartCheck}></Tab.Screen>
        <Tab.Screen name={userScreen} component={UserScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}