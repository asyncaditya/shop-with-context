function Products(props) {

    const increment=(index)=>{
        let temp=[...props.items];
        temp[index].count = temp[index].count +1;
        props.setProducts(temp);
    }

    const decrement=(index)=>{
        let temp=[...props.items];
        temp[index].count = temp[index].count -1;
        props.setProducts(temp);
    }


    return (
        <div>
            {
                props.items.map((item, index) => {
                    return (
                        <div>
                            {item.title}
                            <button onClick={()=>increment(index)}>+</button>
                            <button onClick={()=>decrement(index)}>-</button>
                            {item.count}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;