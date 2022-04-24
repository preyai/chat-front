import {createContext} from "react";
import {storeState} from "../interfaces/store";

const defaultState:storeState = {
    currentChat: undefined,
    setChat:()=>{}
}
const storeContext = createContext(defaultState)

export {defaultState}

export default  storeContext