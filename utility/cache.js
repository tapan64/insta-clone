import AsyncStorage from "@react-native-async-storage/async-storage";

const store = async (key, value) => {
  AsyncStorage.setItem(key, value);
};
const get = async () => {
  AsyncStorage.getItem(key);
};

export default { store, get };
