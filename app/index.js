/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import DrawerPage from './components/Drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/Home';
import User from '../components/User';
import Tabs from '../components/Tabs';
import Drawers from '../components/Drawer';
import Login from '../components/Login';
import {ThemeContext} from '../context/ThemeContext';
const TextWrapper = styled.Text`
  background-color: red;
  width: ${wp('80%')};
  height: ${hp('50%')};
`;

const ViewWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${hp('100%')};
  width: ${wp('100%')};
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookList, setBookList] = useState([]);

  const loginFunction = (email, password) => {
    if (email == '123@123' && password == 1) {
      setIsLoggedIn(true);
    }
  };

  return (
    // <ViewWrapper>
    //   <TextWrapper>assssa</TextWrapper>
    //   {/* <User />
    //   >
    //   <ImagePage /> */}
    // </ViewWrapper>
    <ThemeContext.Provider value={{isLoggedIn, bookList, setBookList}}>
      <NavigationContainer>
        <Modal visible={modalVisible} animationType="fade">
          <Text>로그인실패</Text>
        </Modal>
        {/* <Text>aa</Text> */}
        {isLoggedIn ? (
          <Drawers setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Login loginFunction={loginFunction} />
        )}

        {/* <Tabs /> */}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
