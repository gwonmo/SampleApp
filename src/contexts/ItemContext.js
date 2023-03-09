import React, {useRef, useEffect, useState, createContext} from 'react';


const ItemContext = createContext();

export function ItemContextProvider({children}){
    const initItemRef = useRef(null);
    const [items , setItems] = useState([]);

    const onCreate = ({title, inputMoney}) => {
        const item = {
            id:uuidv4(),
            title,
            inputMoney
        }
        setItems([item, ...items]);
    }

    return(
        <ItemContext.Provider value={{items, onCreate}}>
            {children}
        </ItemContext.Provider>
    )

}
export default ItemContext;