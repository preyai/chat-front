import {useContext, useState} from "react";
import storeContext, {defaultState} from "../contexts/storeContext";
import {storeState} from "../interfaces/store";

const useStoreContext = ()=> useContext(storeContext)

const useStore = () => {
    const [chat,setChat] = useState<string | undefined>(undefined)
    const store:storeState = {
        currentChat:chat,
        setChat:(id)=>setChat(id)
    }
    return store
}

export {useStoreContext, useStore}