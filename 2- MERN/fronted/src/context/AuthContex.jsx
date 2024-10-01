import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

// Para evitar importar 'useConext' y
// 'AuthContext' creamos un hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);

  const signin = async (data) => {
    const res = await axios.post("http://localhost:3000/api/signin", data, {
      withCredentials: true,
    });
    console.log(res.data);
    setUser(res.data);
  };

  const signup = async (data) => {
    // const response = await fetch("http://localhost:3000/api/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    // });

    // const dataSignup = await response.json();

    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });
    setUser(res.data);
    console.log(user);
  };

  return (
    <AuthContext.Provider
      value={{ user: user, isAuth, errors, signup, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
