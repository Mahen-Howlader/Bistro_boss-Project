import {  useContext } from "react";
import { AuthContext } from "./Authprovider";

function UseAuth() {
    const all = useContext(AuthContext)
    return all;
}

export default UseAuth;