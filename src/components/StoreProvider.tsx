import storeContext from "../contexts/storeContext";
import {useStore} from "../hooks/useStore";
import {PropsWithChildren} from "react";

const Provider = storeContext.Provider

const StoreProvider = ({children}:PropsWithChildren<{}>) => {
    const store = useStore()

    return(
        <Provider value={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider