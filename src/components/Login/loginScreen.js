import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../auth/authContext";
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();

    //El user se desestructura para ver que si se asigna un valor
    const {user, dispatch} = useContext(AuthContext);

    //console.log(user);

    const HandleLogin = () => {

        const action = { 
            type: types.login,
            payload: {name: "Poncho"}
        }

        const lastpath = localStorage.getItem('lastpath') || '/'

        dispatch(action);
        navigate(lastpath, { replace: true });

        //console.log(user);
        
    }

    

    return (<div>
        <h1>LoginScreen</h1>
        <hr />

        <button className="btn btn-primary" onClick={HandleLogin}>Login</button>
    </div>);
}