import { useState } from 'react'
import './App.css'
import {ItemsType} from "./types.ts";
import plateImg from "./assets/plate.png";
import drinkImg from "./assets/drink.jpg"
import ItemButton from "./Buttons.tsx";

function App() {

  const [items, setItems] = useState<ItemsType[]>([
          {name: 'Hamburger', image: plateImg, price: 80, count: 0},
          {name: 'Cheeseburger', image: plateImg, price: 100, count: 0},
          {name: 'Fries', image: plateImg, price: 50, count: 0},
          {name: 'Coffee', image: drinkImg, price: 120, count: 0},
          {name: 'Tea', image: drinkImg, price: 50, count: 0},
          {name: 'Cola', image: drinkImg, price: 70, count: 0},
      ]
  );


  return (
    <div className="container">
        <div className="orders">

        </div>
        <div className="items">
            {items.map((item, i, addItem) => (
                <ItemButton item={item} key={i} addItem={()=> addItem} />
            ))}
        </div>
    </div>
  )
}

export default App
