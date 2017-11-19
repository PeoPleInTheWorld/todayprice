

require("./styles/app.scss")
//////////////////////////////////
 
const React = require('react')
const ReactDOM = require('react-dom')
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import 'antd-mobile/dist/antd-mobile.css';
import App from './javascripts/App';
import WaiMai from './javascripts/containers/WaiMai/WaiMai';
import SelfCenter from './javascripts/containers/SelfCenter/selfcenter';
import Register from './javascripts/containers/register/Register';
import Login from './javascripts/containers/login/login';
import Classification  from './javascripts/containers/classification/classification';
import Fenlei from './javascripts/containers/fenlei/fenlei';
import IntegralMall from './javascripts/containers/integralMall/integralMall';
import Details from './javascripts/containers/details/details';
import {Provider} from 'react-redux';
// import store from './javascripts/redux/store'
// const App = require("./javascripts/App")
ReactDOM.render(
  	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={WaiMai}/>
			<Route path="/waimai" component={WaiMai}></Route>
			<Route path="/fenlei" component={Fenlei}></Route>
			<Route path="/SelfCenter" component={SelfCenter}></Route>
	        <Route path="/login" component={Login}></Route>
            <Route path="/Details" component={Details}></Route>
			<Route path="/register" component={Register}></Route>
			<Route path="/Classification" component={Classification}></Route>
			<Route path="/IntegralMall" component={IntegralMall}></Route>
		</Route>
	</Router>
   </Provider>
	
,document.getElementById("app"))


