import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useAxios} from '../hooks/useAxios';
import UserImage from '../images/user.png';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ThemeContext} from '../context/ThemeContext';

const AddWrapper = styled.View`
  width: 200;
  height: 200;
  background-color: lightgray;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.View`
  align-items: center;
  margin-top: 50;
`;

const PlusText = styled.Text`
  font-size: 70;
  color: white;
  cursor: pointer;
`;

const CustomPressable = styled.Pressable`
  margin-top: 10;
  width: 120px;
  height: 50px;
  background-color: black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({plus}) =>
    plus == true &&
    `
    width:100;
    background-color:gray;
  `}
`;

const CustomText = styled.Text`
  font-size: 16;
  color: white;
`;
const CustomTextInput = styled.TextInput`
  height: 50;
  border-radius: 20px;
  width: 200;
  border-top-width: 1;
  border-bottom-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  border-color: gray;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CustomImage = styled.Image`
  width: 200;
  height: 200;
  border-radius: 20px;
`;

const BookAdd = ({navigation, setIsLoggedIn}) => {
  const {bookList, setBookList} = useContext(ThemeContext);

  const [bookName, setBookName] = useState('');
  const [image, setImage] = useState(null);

  const showPicker = async () => {
    console.log('qqq');
    let imageData = await launchImageLibrary({});

    setImage(imageData.assets[0].uri.replace('file://', ''));
  };

  useEffect(() => {
    setImage(null);
  }, []);

  const addBook = () => {
    setBookList(prev => {
      return [
        ...prev,
        {
          image: image,
          bookName: bookName,
        },
      ];
    });
    Alert.alert('추가했습니다');
  };

  useEffect(() => {
    console.log('bobobobo', bookList);
  }, [bookList]);

  return (
    <Wrap>
      {image ? (
        <View>
          <CustomImage source={{uri: image}} />
        </View>
      ) : (
        <AddWrapper>
          <PlusText onPress={showPicker}>+</PlusText>
        </AddWrapper>
      )}
      <View>
        <CustomPressable>
          <CustomText onPress={showPicker}>이미지 추가하기</CustomText>
        </CustomPressable>
      </View>
      <View>
        <CustomTextInput
          onChangeText={e => setBookName(e)}
          placeholder="책이름"
        />
      </View>
      <View>
        <CustomPressable plus={true}>
          <CustomText onPress={addBook}>추가하기</CustomText>
        </CustomPressable>
      </View>
    </Wrap>
  );
};

export default BookAdd;
