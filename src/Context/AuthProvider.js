import React from 'react';
import { createContext } from 'react';
import useElements from '../Hook/useElements';
import useFirebase from '../Hook/useFirebase';
import useUser from '../Hook/useUser';


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const allContext=useFirebase();
    const {elements}=useElements();
    const {users,setUsers}=useUser();
    const data={allContext,elements,users,setUsers};
    return (
        <AuthContext.Provider value={data} >
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;