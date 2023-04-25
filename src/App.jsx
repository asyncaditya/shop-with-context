import { createContext } from "react";
import './App.css'

import Header from "./components/Header";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import axios from "axios";


export const myContext = createContext([]);

function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                let myArr = res.data.products;
                myArr.forEach(item => {
                    item['count'] = 0
                })
                setProducts(myArr)
            })
    }, [])

    return (
        <div>
            <myContext.Provider value={products}>
                <Header />
            </myContext.Provider>
            <Products items={products} setProducts={setProducts} />
        </div>
    )
}

export default App;