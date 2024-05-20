import { useContext } from 'react';
import { AuthContext } from './Authprovider';

function Useprovider() {
    const all = useContext(AuthContext)
    // console.log(all)
    return all;
}

export default Useprovider;