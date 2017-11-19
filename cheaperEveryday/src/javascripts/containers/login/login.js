import React from 'react'
import LoginHeader from './components/loginHeader'
import LoginForm from './components/loginForm'
import Nav from '../../common/Nav'
class Login extends React.Component {
    constructor(props,context){
        super(props,context)
    }
     

    render(){
        return (
            <div className="fullheight">
                <div className="loginHeader">
                    <LoginHeader/>
                </div>                 
           
                <div id="form">
                    <LoginForm/>
                </div>
                <Nav active={'SelfCenter'}/>
            </div> 
        )
    }
}

export default Login



//  //中间表单  
// class Content extends React.Component{  
  
//     constructor(props){  
//         super(props);  
//         this.state = {  
//         telError:null,  
//         passwordError:null,  
//         imageShow:true  
//         }  
  
//     }  
//     //手机号判断  
//     telCheck(event){  
//         this.tel=event.target.value  
//         console.log(this.tel)  
//         var reg=/^1[34578]\d{9}$/;  
//         if(reg.test(this.tel)==false){  
//             this.setState({  
//                telError:"请输入正确的手机号"  
//             })  
//         }else{  
//             this.setState({  
//                 telError:""  
//             })  
//         }  
  
//     }  
//     //密码判断  
//     passwordCheck(event){  
//         this.password=event.target.value  
//         var reg=/^\w{6,20}$/;  
//         if(reg.test(this.password)==false){  
//             this.setState({  
//                 passwordError:"密码为6-20位数字或字母或下划线!"  
//             })  
//         }else{  
//             this.setState({  
//                 passwordError:""  
//             })  
//             }  
  
//     }  
//     //是否记住密码  
//     isRemember(){  
//         this.setState({  
//             imageShow:!this.state.imageShow  
//         })  
//     }  

 
// class All extends React.Component{  
//   render () {  
//       return (  
//           <div>  
//               <Header></Header>  
//               <Content></Content>  
//               <Footer></Footer>  
//           </div>  
//       )  
//   }  
// }  
  
//  ReactDOM.render(  
//      <All/>,document.getElementById("container")  
//  )  