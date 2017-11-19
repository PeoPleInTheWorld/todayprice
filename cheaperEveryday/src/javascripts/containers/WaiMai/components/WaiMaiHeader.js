
import React from 'react'
import fetch from '../../../fetch'
import jsonp from 'jsonp'
class TodayHeader extends React.Component {
    constructor(props,context){
        super(props,context)
		    this.state = {
	        	isSearchShow:false
	        }
    }
	showSearch(type){
		this.setState({
			isSearchShow:type
		})
	}
	backTop(e){
		
	}
    render(){
        return (
        	<div className="fenlei_header">
	            <div id="today_header" className="today_header">
					<span className="header_logo">
						<i className="logo">
							<img src="http://m.zshpldbz.com/Source/static/wap/images/logo.gif" alt="" />
						</i>
					</span>
					<span className="header_search">
						<input type="text" placeholder="搜索商品" className="header_search_input"/>
						<a href="" className="header_search_logo">
							<img src="http://m.zshpldbz.com/Source/static/wap/images/search.png" alt="" />
						</a>
					</span>
					<span className="heder_sign">
						<a href="" className="heder_sign_logo"></a>
					</span>
				</div>
				{
	                this.state.isSearchShow?<div id="today_header" className="today_header fixed__search">
					<span className="header_logo">
						<i className="logo">
							<img src="http://m.zshpldbz.com/Source/static/wap/images/logo.gif" alt="" />
						</i>
					</span>
					<span className="header_search">
						<input type="text" placeholder="搜索商品" className="header_search_input"/>
						<a href="" className="header_search_logo">
							<img src="http://m.zshpldbz.com/Source/static/wap/images/search.png" alt="" />
						</a>
					</span>
					<span className="heder_sign">
						<a href="" className="heder_sign_logo"></a>
					</span>
				</div>:''
	            }
			</div>
        )
    }

}

export default TodayHeader




// <a className="backLogo"><img src="http://m.zshpldbz.com/Source/static/wap/images/icon/bag-icon.png"/></a>
// <a className="backTop" onClick={this.backTop.bind(this)}><img src="http://m.zshpldbz.com/Source/static/wap/images/icon/back-top.png"/></a>


