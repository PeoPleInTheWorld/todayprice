import React from 'react'
import RegisterForm from './components/RegisterForm'
import RegisterHeader from './components/RegisterHeader'
import Nav from '../../common/Nav'
class Register extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight">
                <div className="loginHeader">
                    <RegisterHeader/>
                </div>                 
           
                <div id="form">
                    <RegisterForm/>
                </div>
                <Nav active={'SelfCenter'}/>
            </div>
            
        )
    }
   
}


export default  Register