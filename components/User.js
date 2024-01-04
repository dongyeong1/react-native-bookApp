import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Linking,
} from 'react-native';

const User = ({navigation, route}) => {
  const {params} = route;
  return (
    <View>
      <Text>Users</Text>
      <Text>{params?.dong}</Text>
      <Button title="link" />
    </View>
  );
};

export default User;
