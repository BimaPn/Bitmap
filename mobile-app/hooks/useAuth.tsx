import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slice/authSlice';
import * as SecureStore from 'expo-secure-store';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResult {
  error?: any;
  ok: boolean;
}

const useAuth = () => {
  const dispatch = useDispatch();

 const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    try {
      const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/login`,
      { ...credentials })
      console.log("success")
      console.log(response.data)
      const accessToken = response.data.access_token
      saveToken(accessToken)
      dispatch(setAuth({ accessToken }))

      return { ok: true }

    } catch (error: any) {
      console.log("error")
      return { ok: false, error: error.response.data.errors };
    }
  };
  const saveToken = async (token: string) => {
    try {
      await SecureStore.setItemAsync('access_token', token);
    } catch (error) {
      console.error('Failed to save token:', error);
    }
};

  return { login };
};

export default useAuth;






