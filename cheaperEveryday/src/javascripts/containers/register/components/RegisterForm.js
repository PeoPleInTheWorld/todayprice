import React from 'react'
import axios from 'axios'     
class RegisterForm extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state = {  
             telError:null,  
             passwordError:null,
          userID : '17839192950',
          password :'1234567' 
              
        }  
    }
     telCheck(event){  
        this.tel=event.target.value  
        console.log(this.tel)  
        var reg=/^1[34578]\d{9}$/;  
        if(reg.test(this.tel)==false){  
            this.setState({  
               telError:"请输入正确的手机号"  
            })  
        }else{  
            this.setState({  
                telError:""  
            })  
        } 
         
  
    } 
    passwordCheck(event){  
        this.password=event.target.value  
        var reg=/^\w{6,20}$/;  
        if(reg.test(this.password)==false){  
            this.setState({  
                passwordError:"密码为6-20位数字或字母或下划线!"  
            })  
        }else{  
            this.setState({  
                passwordError:""  
            })  
            } 
  
    } 
    
    handleClick(e){
            e.preventDefault();
         // let _data = {
         //  userId : this.state.userId,
         //  password : this.state.password,          //注册时传入的参数
         //  }
          let that=this;
          axios({
            url:' https://datainfo.duapp.com/shopdata/userinfo.php',
            status:"register",
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            dataType:'jsonp',
            data:{
                userID : this.refs.telephone.value,
                password :this.refs.password.value
            }

             // body: JSON.stringify(data)        //传入参数
          })
          .then(function(res) {
            // console.log(res)
            let _data=JSON.parse(res.config.data)
            console.log('请求成功',_data,_data["userID"],_data["password"])
                
               
                //let arr=[];
                localStorage.setItem('userID',_data["userID"]);
                 localStorage.setItem('password',_data["password"])
                 // arr.push({'userID',_data["userID"],'password',_data["password"]})
                if( _data["userID"]!==''&&_data["password"]!==''){ 
                  alert('恭喜你注册成功,马上为您跳转')
                  window.location.href="http://localhost:9000/#/login"
                }else{
                  alert("用户名和密码不能为空")
                  return false;
                }
                
            
          })
          .catch(function(error) {
            console.log('请求失败', error)
          })

    } 
    render(){
        return (
            <div id="form">
                <form className="register_form">
                <span  className="input_tips">{this.state.passwordError}</span>
                        <span className="input_tips">{this.state.telError}</span>
                    <p><i className="iconfont icon-gerenzhongxin"></i>
                        <input ref="telephone" type="text" placeholder="请输入注册手机" 
                        onBlur={this.telCheck.bind(this)}/>
                    </p>
                    <p><i className="iconfont icon-zhaohuimima"></i><input type="text" placeholder="请输入图形验证码"/></p>
                    <p><i  className="iconfont icon-zhaohuimima"></i><input type="text" placeholder="填写手机验证码"/></p>
                    <p><i  className="iconfont icon-zhaohuimima"></i><input ref="password" type="password" placeholder="密码" onBlur={this.passwordCheck.bind(this)}/></p>
                </form>
                <div className="register_agree">
                    <p className="register_agree_wrap"><i>对勾</i>已同意今日特价网<a href="##">注册协议</a></p>
                </div>
                <div className="register_btn_wrap">
                   <p className="register_btn" ><a href="#javascript(void(0));"onClick={this.handleClick.bind(this)}>注册</a></p>
                </div>
            </div>
        )
    }
}

export default RegisterForm