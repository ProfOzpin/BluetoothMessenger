# 📱 BluetoothMessenger

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native Badge">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/Expo-1B232A?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Badge">
  <img src="https://img.shields.io/badge/Bluetooth-0080FF?style=for-the-badge&logo=bluetooth&logoColor=white" alt="Bluetooth Badge">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite Badge">
</p>

A secure and intuitive mobile application built with React Native for seamless peer-to-peer communication over Bluetooth. Connect with nearby devices, exchange messages, and manage your conversations with ease.

## ✨ Features

*   **Bluetooth Connectivity:** Discover, connect to, and manage Bluetooth devices.
*   **Real-time Chat:** Send and receive messages instantly with connected peers.
*   **Device Management:** View a list of available Bluetooth devices and their connection status.
*   **Secure Communication:** (Implied by `expo-crypto`) Potentially encrypted messaging for privacy.
*   **Local Storage:** Persist chat history and device information using SQLite.
*   **Intuitive UI:** Powered by React Native Paper for a clean and modern user experience.
*   **Cross-Platform:** Built with Expo for Android and iOS compatibility.

## 🚀 Technologies Used

*   **React Native:** For building native mobile applications using JavaScript/TypeScript.
*   **Expo:** A framework and platform for universal React applications.
*   **TypeScript:** For type-safe and robust code.
*   **`react-native-ble-plx`:** Bluetooth Low Energy (BLE) communication library.
*   **`react-native-quick-sqlite`:** Fast and efficient SQLite database integration.
*   **`@react-navigation/native`:** For powerful and flexible navigation within the app.
*   **`react-native-paper`:** Material Design for React Native.
*   **`expo-crypto`:** Cryptographic functionalities for secure operations.
*   **`react-native-base64`:** Base64 encoding/decoding utilities.

## 🛠️ Installation & Setup

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/BluetoothMessenger.git
    cd BluetoothMessenger/BluetoothMessenger
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Expo development server:**
    ```bash
    npm start
    ```
    This will open a new tab in your browser with the Expo Dev Tools.

4.  **Run on your device/emulator:**
    *   **Android:** Scan the QR code with the Expo Go app on your Android device, or run `npm run android` to open in an Android emulator.
    *   **iOS:** Scan the QR code with the Expo Go app on your iOS device, or run `npm run ios` to open in an iOS simulator.

    *Note: For full Bluetooth functionality, it's recommended to run on a physical device.*

## 💡 Usage

1.  **Launch the app:** Once the app is running, you will be taken to the device list screen.
2.  **Scan for devices:** The app will automatically start scanning for nearby Bluetooth devices.
3.  **Connect:** Tap on a device from the list to initiate a connection.
4.  **Chat:** Once connected, you will be navigated to the chat screen where you can send and receive messages.
5.  **Manage:** Disconnect from devices or switch between conversations from the device list.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## 📄 License

This project is currently unlicensed. Please contact the author for licensing information.
