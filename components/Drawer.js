import {createDrawerNavigator} from '@react-navigation/drawer';
import BookAdd from './BookAdd';
import BookList from './BookList';
import Home from './Home';
import User from './User';
const Drawer = createDrawerNavigator();

const Drawers = ({setIsLoggedIn}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={({navigation}) => <Home setIsLoggedIn={setIsLoggedIn} />}
      />
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="BookList" component={BookList} />
      <Drawer.Screen name="BookAdd" component={BookAdd} />
    </Drawer.Navigator>
  );
};

export default Drawers;
