import React from 'react'
import Input from '../../../src/components/ui elements/input/Input'
import Button from '../../components/ui elements/button/Button'
class Account extends React.Component {
  render() {
    return (
     <div className='account'>
<h2>Account</h2>
<form>
    <Input type="text" placeholder="Name..."/>
    <Input type="text" placeholder="Email"/>
    <Input type="password" placeholder="password"/>
    <Button btnType='form'>Submit</Button>
</form>
     </div>
        
      
    )
  }
}

export default Account