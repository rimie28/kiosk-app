import * as React from "react";
import type {ItemButtonType} from "./types.d.ts";

const ItemButton:React.FC<ItemButtonType> = ({item, addItem}) => {
    return (
        <div className="BtnDiv">
            <button onClick={() => addItem(item.id)} className="btn" type="button">
                <img className="btnImg" src={item.image} alt={item.name}/>
                {item.name}
                <p className="price">{item.price} сом</p>
            </button>
        </div>
    )
};

export default ItemButton;