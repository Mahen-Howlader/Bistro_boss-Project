import app from "../Firebase/Firebase";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
function Authprovider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);


    const createUser = (email, password) => {
        setLoading(false)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email, password) => {
        setLoading(false)
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = (email, password) => {
        setLoading(false)
        return signOut(auth)
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = { user, loading,createUser ,signinUser,logOut};
  return <AuthContext value={authInfo}>{children}</AuthContext>;
}

export default Authprovider;
