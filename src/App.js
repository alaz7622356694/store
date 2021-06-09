import React from 'react'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

class App extends React.Component{
render(){
  return(
    <div>
      <Router>
      <Layout>
        <Switch>
      <Route path='/checkout' render={()=><h2> checkput page </h2>}/>
      <Route path='/' exact component={Shopping}/>
      </Switch>
      </Layout>
      </Router>
    </div>
  )
}
}

export default App