import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {useAxios} from '../hooks/useAxios';
import UserImage from '../images/user.png';
import styled from 'styled-components';

const CustomImage = styled.Image`
  width: 100;
  height: 100;
`;

const BookList = ({navigation, setIsLoggedIn}) => {
  const {loading, data, error, refetch} = useAxios(
    'https://simple-books-api.glitch.me/books?type=fiction',
  );

  const {bookList, setBookList} = useContext(ThemeContext);

  return (
    <View>
      <Text>책 리스트 </Text>
      <ScrollView>
        {bookList?.map(v => {
          return (
            <>
              <CustomImage source={{uri: v.image}} />
              <Text>{v.bookName}</Text>
            </>
          );
        })}
        {/* {data?.data?.map(v => {
          return (
            <>
              <Image source={UserImage} />
              <Text>ss</Text>
              <Text>{v.name}</Text>
            </>
          );
        })} */}
        <Button title="로그아웃" onPress={() => setIsLoggedIn(false)} />
      </ScrollView>
    </View>
  );
};

export default BookList;
