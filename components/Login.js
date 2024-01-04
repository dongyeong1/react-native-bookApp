import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, Text, View, Button, Pressable} from 'react-native';
import styled from 'styled-components';
import {useContext, useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ThemeContext} from '../context/ThemeContext';
const CustomInput = styled.TextInput`
  height: 50;
  border-radius: 20px;
  width: 200;
  border-top-width: 1;
  border-bottom-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  border-color: gray;
  padding: 10px;
  margin-bottom: 10px;
`;
const Wrapper = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${wp(100)};
  height: ${hp(100)};
`;

const CustomView = styled.View`
  width: 200;
  align-items: center;
`;

const CustomButton = styled.Button`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const CustomPressable = styled.Pressable`
  width: 80px;
  height: 50px;
  background-color: black;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const CustomText = styled.Text`
  font-size: 16;
  color: white;
`;
const LoginLogo = styled.Text`
  position: absolute;
  top: 100;
  font-size: 50;
`;

const Stack = createStackNavigator();

const LoginScreen = ({loginFunction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <LoginLogo>Login</LoginLogo>
      <CustomInput
        onChangeText={e => setEmail(e)}
        editable
        type="email"
        multiline
        placeholder="email을 입력하세요"
      />
      <CustomInput
        secureTextEntry={true}
        onChangeText={e => setPassword(e)}
        editable
        type="password"
        placeholder="password를 입력하세요"
      />
      <CustomView>
        <CustomPressable>
          <CustomText
            onPress={() => loginFunction(email, password)}
            // onPress={() => console.log('aaa')}
          >
            로그인s
          </CustomText>
        </CustomPressable>
      </CustomView>
    </Wrapper>
  );
};

const Login = ({loginFunction}) => {
  const loginState = useContext(ThemeContext);

  useEffect(() => {
    console.log('loginState', loginState);
  }, [loginState]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={({navigation}) => (
          <LoginScreen loginFunction={loginFunction} />
        )}
      />
    </Stack.Navigator>
  );
};

export default Login;
