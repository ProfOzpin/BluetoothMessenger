
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import BluetoothService from '../services/BluetoothService';
import { Device } from 'react-native-ble-plx';

type DeviceListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DeviceList'
>;

type Props = {
  navigation: DeviceListScreenNavigationProp;
};

const DeviceListScreen = ({ navigation }: Props) => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    BluetoothService.scanForDevices(device => {
      setDevices(prevDevices => {
        if (prevDevices.find(d => d.id === device.id)) {
          return prevDevices;
        }
        return [...prevDevices, device];
      });
    });

    return () => {
      BluetoothService.stopScanning();
    };
  }, []);

  const connectToDevice = async (device: Device) => {
    await BluetoothService.connectToDevice(device.id);
    navigation.navigate('Chat', { deviceName: device.name || 'Unknown Device' });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => connectToDevice(item)} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name || 'Unknown Device'}</Text>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DeviceListScreen;
