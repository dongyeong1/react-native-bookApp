import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const Home = ({navigation, setIsLoggedIn}) => {
  return (
    <View>
      <Text>Homess</Text>
      <Button
        title="유저로이동"
        onPress={() =>
          navigation.navigate('User', {
            dong: 'dong',
          })
        }>
        {' '}
      </Button>
      <Button title="로그아웃" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
};

export default Home;
