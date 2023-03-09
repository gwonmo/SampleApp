import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'item';

const ItemStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.get(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (err) {
      throw new Error('Failed to load item');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      throw new Error('Failed to save item');
    }
  },
};

export default ItemStorage;