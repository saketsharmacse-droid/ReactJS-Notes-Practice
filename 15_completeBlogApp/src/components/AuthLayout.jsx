//this is a mechanism jisse pages ko yaa routes ko protect kiya jaata hai.
//yaha pe hum auth ka use krenge.
//this is actually a protected container.

import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


//file ka name and function ka name alag alag ho sakta hai.

export default function Protected({children, authentication = true}){

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // if(authStatus === true){
        //     navigate("/")
        // }
        // else if( authStatus === false){
        //     navigate("/login")
        // }
        // let authValue = authStatus === true ? true : false 

        if(authentication && authStatus !== authentication){
                navigate("/login");
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/");
        }

        setLoader(false);

    }, [authStatus, navigate, authentication])//yeh btyega ki login pe bhejna hai ki homepage pe bhejna hai

    return loader ? <h1> Loading...</h1> : <>{children}</>
}