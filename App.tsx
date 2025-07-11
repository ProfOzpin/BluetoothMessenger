import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation';
import { initializeDatabase } from './src/database';

export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
