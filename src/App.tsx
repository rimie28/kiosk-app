import {useState} from 'react'
import './App.css'
import type {ItemsType} from "./types.d.ts";
import plateImg from "./assets/plate.png";
import drinkImg from "./assets/drink.jpg"
import ItemButton from "./Buttons.tsx";
import OrderedItems from "./OrderedItems.tsx";

function App() {
    const [items, setItems] = useState<ItemsType[]>([
            {id: 1, name: 'Hamburger', image: plateImg, price: 80, count: 0},
            {id: 2, name: 'Cheeseburger', image: plateImg, price: 100, count: 0},
            {id: 3, name: 'Fries', image: plateImg, price: 50, count: 0},
            {id: 4, name: 'Coffee', image: drinkImg, price: 120, count: 0},
            {id: 5, name: 'Tea', image: drinkImg, price: 50, count: 0},
            {id: 6, name: 'Cola', image: drinkImg, price: 70, count: 0},
        ]
    );

    const addItem = (id: number) => {
        setItems((prevState) => prevState.map((item) => {
           if (item.id === id) {
               const itemCopy = {
                   ...item,
                   count: item.count + 1
               }

               item = {...itemCopy};
           }
           return item;
        }));
        };

    const deleteItem = (id: number) => {
        setItems((prevState) => prevState.map((item) => {
            if (item.id === id) {
                const itemCopy = {
                    ...item,
                    count: item.count - 1
                }

                item = {...itemCopy};
            }
            return item;
        }));
    };



        return (
            <div className="container">
                <div className="orders">
                    Order Details:
                    <OrderedItems deleteItem={deleteItem} items={items}/>
                </div>
                <div className="items">
                    {items.map((item) => (
                        <ItemButton key={item.id} item={item} addItem={addItem}/>
                    ))}
                </div>
            </div>
        );
}

export default App;