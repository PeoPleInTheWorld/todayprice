import React from 'react'
class LoginForm extends React.Component{
    constructor(props,context){
        super(props,context)
         
    }
    checkUser(){
        console.log(this.refs.login_user.value)
        console.log(localStorage.userID)
        for(var userID in localStorage){
            if(this.refs.login_user.value!==localStorage.userID&&this.refs.login_user.value!==''){
                alert('用户不存在，请注册')
            }
        }
    }
    checkLogin(e){
        e.preventDefault();
        if(this.refs.checkPsw.value==localStorage.password&&this.refs.checkPsw.value!==''){
            alert("登录成功")
            window.location.href="http://localhost:9000/#/waimai?_k=y4u9p6"
        }
        console.log(this.refs.checkPsw.value);
        console.log(localStorage.password);
    }
     
    render(){
        return(
             <div className="loginForm form">
                    <form>

                        <p className="login_input_name"><i className="iconfont icon-gerenzhongxin"></i>
                        <input ref="login_user" type="text" placeholder="手机号/邮箱/用户名" onBlur={this.checkUser.bind(this)} />
                        </p>
                        <p className="login_input_pass"><i className="iconfont icon-zhaohuimima"></i><input ref="checkPsw" type="text" placeholder="请输入密码"/>
                         <span></span>
                        </p>
                        <p className="login_link"><a href="#/register">注册</a><a href="##" onClick={this.checkLogin.bind(this)}>登录</a></p>
                    </form>
                    <h4><a href="##">忘记密码</a>
                       
                    </h4>
                    <h4 className="otherAccount"><a href="##">其它账号登录</a></h4>
                    <p className="other_way_login"><a href="http://m.zshpldbz.com/login/connect/type/sina">新浪微博首页登录</a>
                    <a href="http://m.zshpldbz.com/login/connect/type/qq">QQ账号登录</a></p>
             </div>

        )
    }
}

export default LoginForm