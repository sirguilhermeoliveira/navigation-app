import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Home({ navigation }: any) {
  function NavigateToDetails() {
    navigation.navigate('SignUp', 'This is from Home Screen');
  }

  return (
    <View>
      <TouchableOpacity>
        <Text onPress={NavigateToDetails}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
