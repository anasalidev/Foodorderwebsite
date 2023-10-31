import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menus from './Menus'
import "./index.css"
import MenuItem from './MenuItem'
import Navbar from './Navbar'


const allCatItem = [...new Set(Menus.map((CurElem) => { return CurElem.category; })), 'All Time']
console.log(allCatItem)


function Gallery() {

    const [items, setItems] = useState(Menus);
    const [catItem] = useState(allCatItem)

    const filterItem = (category) => {

        if (category === "All Time") {
            setItems(Menus);
            return;
        }


        const updates = Menus.filter((currItem) => {
            return currItem.category === category;
        })
        setItems(updates)
        
    }
   
    return (
        <>
            <h1 className="mt-2 text-center main-heading text-capitalize  " >order your favourite dish</h1>
            <hr />
            <Navbar filterItem={filterItem} catItem={catItem} />

            <MenuItem items={items} />

        </>
    )
}

export default Gallery;
