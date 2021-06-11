import React from 'react'
import Input from '../../../src/components/ui elements/input/Input'
import Button from '../../components/ui elements/button/Button'
class Account extends React.Component {
state={
  form:{
    name:{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'name...'
      },
      value:''
    },
   
    email:{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'Email...'
      },
      value:''
    },
    password:{
      elementType:'input',
      elementConfig:{
        type:'password',
        placeholder:'password...'
      },
      value:''
    },
  }
}


inputChangeHandler=(event,inputElement)=>{
  const updatedForm= {...this.state.form}

  const updatedElement= {
    ...updatedForm[inputElement]
  }

  updatedElement.value=event.target.value

  updatedForm[inputElement]=updatedElement

  this.setState({form:updatedForm})
}

  render() {
    const elementArray=[]
    for(let item in this.state.form){
      elementArray.push({
        id:item,
        config: this.state.form[item]
      })
    }
    return (
     <div className='account'>
<h2>Account</h2>
<form>
   {elementArray.map((item)=>{
     return(
     <Input 
     key={item.id} 
     elementType={item.config.elementType}
     elementConfig={item.config.elementConfig}
     value={item.config.value} 
     change={(event)=>this.inputChangeHandler(event,item.id)}
     />)
  })}
    <Button btnType='form'>Submit</Button>
</form>
     </div>
        
      
    )
  }
}

export default Account