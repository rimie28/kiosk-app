import {orderedItemsType} from "./types";
import * as React from "react";

const OrderedItems:React.FC<orderedItemsType> = ({items, deleteItem}) => {
    const orderedItems = items.filter((item) => item.count > 0);

    if (orderedItems.length === 0) {
        return (
            <p>Order is empty! <br/>
                Please add some items!</p>
        )
    }


    return (
        <div className="orderedItems">
        {orderedItems.map((item) => (
                <div className="orderedItem" key={item.id}>
                    <p>{item.name}</p>
                    <span className="count">х{item.count}</span>
                    <span>{item.price * item.count} сом</span>
                    <button className="deleteBtn" type='button' onClick={() => deleteItem(item.id)}>❌</button>
                </div>
            ))
        }
        </div>
    )}

export default OrderedItems;