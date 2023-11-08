import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import HOME_ICON from '../../../assets/icons/home.svg';
import SEARCH_ICON from '../../../assets/icons/search.svg';
import ADD_TUS_ICON from '../../../assets/icons/add-tus.svg';
import CATEGORIES_ICON from '../../../assets/icons/categories.svg';
import ACCOUNT_ICON from '../../../assets/icons/account.svg';
import {View} from 'react-native';
import Search from '../../../screens/Search';
import AddTus from '../../../screens/AddTus';
import Profile from '../../../screens/Profile';
const CUSTOM_ADD_TUS_ICON = () => (
  <View
    style={{
      backgroundColor: '#050522',
      width: 55,
      height: 34,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <ADD_TUS_ICON />
  </View>
);
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HOME_ICON width={focused ? 26 : 24} height={focused ? 26 : 24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <SEARCH_ICON width={focused ? 26 : 24} height={focused ? 26 : 24} />
          ),
        }}
      />
      <Tab.Screen
        name="AddTus"
        component={AddTus}
        options={{
          tabBarIcon: () => <CUSTOM_ADD_TUS_ICON />,
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CATEGORIES_ICON
              width={focused ? 26 : 24}
              height={focused ? 26 : 24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <ACCOUNT_ICON
              width={focused ? 26 : 24}
              height={focused ? 26 : 24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
