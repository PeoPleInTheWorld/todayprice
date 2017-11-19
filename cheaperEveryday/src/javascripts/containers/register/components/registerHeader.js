import React from 'react'
import Login from '../../login/login'
class RegisterHeader extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="LoginHeader">
               <a href="#/login">
                 <i className="iconfont  icon-mjiantou-copy"></i>
              </a>
                <span>用户注册</span>
               <a href="##">
                   <i className="iconfont  icon-shouye"></i>
              </a>
                
            </div>
        )
    }
}

export default RegisterHeader