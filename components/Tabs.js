import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import User from './User';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={User} />
    </Tab.Navigator>
  );
};

export default Tabs;
