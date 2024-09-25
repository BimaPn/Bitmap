import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth, clearAuth, setUser,  } from '../redux/slice/authSlice';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';
import ApiClient from '../api/axios/ApiClient';
import { AuthUser } from '../types/auth';

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
      const accessToken = response.data.access_token
      saveToken(accessToken)
      dispatch(setAuth({ accessToken }))
      await getUser()
      return { ok: true }

    } catch (error: any) {
      console.log(error.response.data)
      console.log("error")
      return { ok: false, error: error.response.data.errors };
    }
  };
  const getUser = async () => {

    const exist = await ApiClient().get(`${process.env.EXPO_PUBLIC_API_URL}/api/user`)
    .then((res) => {
      const user = res.data
      dispatch(setUser({ user }))
      return true
    })
    .catch( async (err) => {
      console.log(err.response)
      await logout()
      return false 
    })

    return exist

  }

  const updateUser = async (data: Omit<AuthUser, "access_token">) => {
    dispatch(setUser({ user: data }))
  }

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('access_token');

      dispatch(clearAuth());

      router.navigate("/login")
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  }
  const saveToken = async (token: string) => {
    try {
      await SecureStore.setItemAsync('access_token', token);
    } catch (error) {
      console.error('Failed to save token:', error);
    }
  };

  return { login, logout, getUser, updateUser };
};

export default useAuth;






