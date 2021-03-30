import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Thongtin from './src/screens/Thongtin';
import quydinh from './src/screens/quydinh';
import luongthuong from './src/screens/luongthuong';
import kiluat from './src/screens/kiluat';
import chungchi from './src/screens/chungchi';
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Thongtin")
      }}>
      <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Thongtin" component={Thongtin} />
        <Stack.Screen name="quydinh"component={quydinh} />
        <Stack.Screen name="luongthuong"component={luongthuong} />
        <Stack.Screen name="kiluat"component={kiluat} />
        <Stack.Screen name="chungchi"component={chungchi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;