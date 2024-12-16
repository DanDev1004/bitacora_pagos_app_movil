import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = ()=>{
    const save = async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
            console.log(`Item saved: ${value}`);
        } catch (error) {
            console.log('ERROR EN LOCAL STORAGE: ' + error);
        }
    }
    
    const getItem = async (key: string) => {
        try {
            const item = await AsyncStorage.getItem(key);
            console.log(`Item retrieved: ${item}`);
            return item;
        } catch (error) {
            console.log('ERROR EN LOCAL STORAGE: ' + error);
        }
    }

    const remove = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log('ERROR EN LOCAL STORAGE: ' + error);
        }
    }

    return{
        save,
        getItem,
        remove
    }
}