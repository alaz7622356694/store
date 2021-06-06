import React from 'react'
import Builder from '../controls/builder/Builder'

const products=[
    {title: 'product 1' , type:'product1'},
    {title: 'product 2' , type:'product2'},
    {title: 'product 3' , type:'product3'},
    {title: 'product 4' , type:'product4'},
]



const Controls=(props)=>{
    return(
        <div className='controls'>
<div>
    <p>
        Total Price: {props.price}
    </p>
    
</div>

{products.map(
    (item)=>{return <Builder key={item.title} title={item.title} 
    add={()=>props.productAdd(item.type)} remove={()=>props.productRemove(item.type)}/>

})}

<button className='order-btn' onClick={props.order}>
    order
</button>
        </div>
    )
}

 export default Controls