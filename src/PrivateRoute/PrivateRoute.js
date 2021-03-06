import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user, isLoading} = useAuth();
    // if(isLoading){
    //     return;
    // }
    return (
        <Route
            {...rest}
            render={({location}) => user?.email ? children : 
            <Redirect
                to={{
                    pathname:'/login',
                    state:{from:location}
                }}
            ></Redirect>}
        >    
        </Route>
    );
};

export default PrivateRoute;