import * as React from "react";
import {ItemButtonType} from "./types.ts";

const ItemButton:React.FC<ItemButtonType> = ({item, addItem}) => {
    return (
        <div className="BtnDiv">
            <button onClick={() => addItem(item.name)} className="btn" type="button">
                <img className="btnImg" src={item.image} alt={item.name}/>
                {item.name}
            </button>
        </div>
    )
};

export default ItemButton;