
import { BleManager, Device } from 'react-native-ble-plx';
import { Buffer } from 'buffer';
import { encrypt, decrypt } from 'expo-crypto';

class BluetoothService {
  private manager = new BleManager();
  private connectedDevice: Device | null = null;

  public scanForDevices(onDeviceFound: (device: Device) => void) {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        return;
      }
      if (device) {
        onDeviceFound(device);
      }
    });
  }

  public stopScanning() {
    this.manager.stopDeviceScan();
  }

  public async connectToDevice(deviceId: string) {
    try {
      const device = await this.manager.connectToDevice(deviceId);
      this.connectedDevice = device;
      await device.discoverAllServicesAndCharacteristics();
      return device;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async sendMessage(message: string) {
    if (!this.connectedDevice) {
      return;
    }
    const encryptedMessage = encrypt(message);
    // This is a placeholder for the actual service and characteristic UUIDs
    const serviceUUID = '0000180d-0000-1000-8000-00805f9b34fb';
    const characteristicUUID = '00002a37-0000-1000-8000-00805f9b34fb';
    await this.connectedDevice.writeCharacteristicWithResponseForService(
      serviceUUID,
      characteristicUUID,
      Buffer.from(encryptedMessage).toString('base64') // BLE characteristic values are base64 encoded
    );
  }

  public onMessageReceived(callback: (message: string) => void) {
    if (!this.connectedDevice) {
      return;
    }
    // This is a placeholder for the actual service and characteristic UUIDs
    const serviceUUID = '0000180d-0000-1000-8000-00805f9b34fb';
    const characteristicUUID = '00002a37-0000-1000-8000-00805f9b34fb';
    this.connectedDevice.monitorCharacteristicForService(serviceUUID, characteristicUUID, (error, characteristic) => {
      if (error) {
        console.error(error);
        return;
      }
      if (characteristic?.value) {
        const decryptedMessage = decrypt(Buffer.from(characteristic.value, 'base64').toString());
        callback(decryptedMessage);
      }
    });
  }
}

export default new BluetoothService();
