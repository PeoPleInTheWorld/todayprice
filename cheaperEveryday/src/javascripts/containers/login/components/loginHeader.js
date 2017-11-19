import React from 'react'
import SelfCenter from '../../SelfCenter/selfcenter'
class LoginHeader extends React.Component{
  constructor(props,context){
    super(props,context)
  }
  goBack (){  
    window.history.go(-1);  
   }  
  render(){
    return(
      <div className="loginHeader loginheader">
                <span><a href="#" onClick={()=>this.goBack()}><i className="iconfont icon-mjiantou-copy"></i>
                </a></span>
                <span>用户登录</span>
                <span><i className="iconfont icon-qiandao"></i></span>
        </div>

    )
  }
}
export default LoginHeader