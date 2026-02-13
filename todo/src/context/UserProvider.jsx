import { useState } from "react";
import UserContext from "./UserContext";


const UserProvider=({children})=>{

    const [allProduct,setAllProduct]=useState([])


    return <UserContext.Provider value={{allProduct,setAllProduct}}>
        {children}
    </UserContext.Provider>

}


export default UserProvider