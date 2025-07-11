
import { requireNativeModule } from 'expo-modules-core';

const ExpoCrypto = requireNativeModule('ExpoCrypto');

export function encrypt(text: string): string {
  return ExpoCrypto.encrypt(text);
}

export function decrypt(text: string): string {
  return ExpoCrypto.decrypt(text);
}
