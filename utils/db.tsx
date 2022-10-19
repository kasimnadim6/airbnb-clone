import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export const getImageUrl = async (name: string) => {
  try {
    const url = await getDownloadURL(ref(storage, name));
    console.log('getData url:', url);
    return url;
  } catch (error) {
    console.log(error);
  }
};
