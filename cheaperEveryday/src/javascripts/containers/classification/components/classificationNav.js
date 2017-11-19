import React from 'react'
import {Link} from 'react-router'
class ClassificationNav extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
         let {active}=this.props
        return (
            <div className="classification-nav">
                 <div className="buy-left">
					<a href="##">首页</a>
	                <a>客服</a>
	                <a>收藏</a>
	            </div>
	            <div className="buy-right">
					<a>浏览器购买</a>
					<a>淘口令购买</a>           
	            </div>
            </div>
           
        )
    }
}

export default ClassificationNav