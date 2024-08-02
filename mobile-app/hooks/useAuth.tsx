import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slice/authSlice';


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
      const auth = response.data
      dispatch(setAuth({ auth }))
      return { ok: true }
    } catch (error: any) {
      console.log("error")
      return { ok: false, error: error.response.data.errors };
    }
};

  return { login };
};

export default useAuth;
