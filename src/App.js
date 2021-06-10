import React from 'react'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'
import Checkout from './containers/checkout/Checkout'
import Account from './containers/account/Account'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

class App extends React.Component{
render(){
  return(
    <div>
      <Router>
      <Layout>
        <Switch>
     <Route path="/" exact component={Shopping}/>
      <Route path="/Checkout" component={Checkout}/>
      <Route path="/account" component={Account}/>
     
      
      </Switch>
      </Layout>
      </Router>
    </div>
  )
}
}

export default App