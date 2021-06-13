import React from 'react'
import Input from '../../../src/components/ui elements/input/Input'
import Button from '../../components/ui elements/button/Button'
import axios from '../../Axios-orders'
class Account extends React.Component {
state={
  form:{
    name:{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'name...'
      },
      value:'',
      validation:{
        required:true
      },
      valid:false,
      used:false
    },
   
    email:{
      elementType:'input',
      elementConfig:{
        type:'text',
        placeholder:'Email...'
      },
      value:'',
      validation:{
        required:true
      },
      valid:false,
      used:false

    },
    password:{
      elementType:'input',
      elementConfig:{
        type:'password',
        placeholder:'password...'
      },
      value:'',
      validation:{
        required:true
      },
      valid:false,
      used:false

    },
  }
}

submitHandler=(event)=>{

event.preventDefault()

const formData={

}

for (let item in this.state.form){
  formData[item]=this.state.form[item].value
}


axios.post('/account.json', formData).then((response)=>{
  window.alert("your data submitted !");
})
.catch((error)=> {
  console.log(error)
})



}

checkValidation=(value,rules)=>{
  let isValid=false
  if(rules.required){
    isValid=value.trim() !==''
  }


  return isValid

}
inputChangeHandler=(event,inputElement)=>{
  const updatedForm= {...this.state.form}

  const updatedElement= {
    ...updatedForm[inputElement]
  }

  updatedElement.value=event.target.value
  updatedElement.valid=this.checkValidation(updatedElement.value,updatedElement.validation)
  updatedElement.used=true

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
<form onSubmit={this.submitHandler}>
   {elementArray.map((item)=>{
     return(
     <Input 
     key={item.id} 
     elementType={item.config.elementType}
     elementConfig={item.config.elementConfig}
     value={item.config.value} 
     change={(event)=>this.inputChangeHandler(event,item.id)}
     invalid={!item.config.valid}
     used={item.config.used}
     />)
  })}
    <Button btnType='form'>Submit</Button>
</form>
     </div>
        
      
    )
  }
}

export default Account