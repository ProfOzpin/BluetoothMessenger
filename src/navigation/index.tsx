
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceListScreen from '../screens/DeviceListScreen';
import ChatScreen from '../screens/ChatScreen';

export type RootStackParamList = {
  DeviceList: undefined;
  Chat: { deviceName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeviceList">
        <Stack.Screen name="DeviceList" component={DeviceListScreen} options={{ title: 'Bluetooth Devices' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={({ route }) => ({ title: route.params.deviceName })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
