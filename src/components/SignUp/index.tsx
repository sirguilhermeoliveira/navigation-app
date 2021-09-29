import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

function SignUp(props: any) {
  return (
    <View>
      <Text>SignUp</Text>
      <Text>{props.route.params}</Text>
    </View>
  );
}

export default SignUp;
