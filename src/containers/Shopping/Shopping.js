import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Controls from '../../components/controls/Controls'
import Modal from '../../components/ui elements/modal/Modal'
import Order from '../../components/order/Order'
import axios from '../../Axios-orders'
import Loader from '../../../src/components/ui elements/loader/Loader'

const prices={
    product1:59,
    product2:12,
    product3:56,
    product4:9,
}

class Shopping extends React.Component{
    state={
        products:null,
        totalPrice:0,
        purchased:false,
        loading:false
    }

    componentDidMount(){
        axios.get('/products.json').then((response)=>{

            this.setState({products:response.data})

        })
    }

    addProductHandler=(type)=>{
      
      const previousCount=this.state.products[type]
      const updatedCount=previousCount+1
      const updatedProducts={
          ...this.state.products,
      }
      updatedProducts[type]=updatedCount
      const priceAdd=prices[type]
      const prevPrice=this.state.totalPrice
      const newPrice=prevPrice+priceAdd
      this.setState({totalPrice:newPrice , products:updatedProducts})
    }

    removeProductHandler=(type)=>{
        
        const previousCount=this.state.products[type]
        const updatedCount=previousCount-1
        if(this.state.totalPrice>0 && updatedCount>=0){
        const updatedProducts={
            ...this.state.products,
        }
        updatedProducts[type]=updatedCount
        const priceSub=prices[type]
        
        const prevPrice=this.state.totalPrice
        const newPrice=prevPrice-priceSub
    
        if(newPrice>=0){
        this.setState({totalPrice:newPrice , products:updatedProducts})
        }

    }
     
    }
purchasedHandler=()=>{
    this.setState({purchased:true})
}

modalCloseHandler=()=>{
    this.setState({purchased:false})
}

purchaseContinueHandler=()=>{
this.props.history.push('/Checkout')
this.setState({loading:true})
    const order={
        products: this.state.products,
        totalPrice: this.state.totalPrice,
        customer:{
            name: 'Ali' ,
            email: 'alireza.azari2235@outlook.com' 

        }

    }
    axios.post('/orders.json', order).then((response)=>{
        this.setState({loading:false , purchased:false})
    })
    .catch((error)=>{
        this.setState({loading:false , purchased:false})
    })
}

    render(){
      let order=null

            if(this.state.loading){
                order=<Loader/>
            }

            let controls=<Loader/>

            if(this.state.products){
                controls=(<Controls 
                 productAdd={this.addProductHandler}
                  productRemove={this.removeProductHandler}
                   price={this.state.totalPrice} 
                   order={this.purchasedHandler}/>
                )
            

            order=(
            <Order products={this.state.products}
             continue={this.purchaseContinueHandler} 
             cancel={this.modalCloseHandler}
              price={this.state.totalPrice} />
            )}
        return(
            
            <Wrapper>
              <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                 {order}
              </Modal>
              {controls}
                
              
            </Wrapper>

           
            
        )
    }
}

export default Shopping