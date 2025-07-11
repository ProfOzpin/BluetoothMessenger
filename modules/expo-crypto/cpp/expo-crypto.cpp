
#include "expo-crypto.h"

namespace expo_crypto {

std::string encrypt(std::string text) {
  std::reverse(text.begin(), text.end());
  return text;
}

std::string decrypt(std::string text) {
  std::reverse(text.begin(), text.end());
  return text;
}

}
