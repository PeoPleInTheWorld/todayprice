
import React from 'react'
import jsonp from 'jsonp'
class TodayGoodsList extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            banners:[]
        }
    }

    getBanner(){
        let that = this
        jsonp('http://10.9.171.105/goods.php',{
           // param:'callback'
            //prefix:"callback"
        },(err,data)=>{
            // console.log(err);
            // console.log(data,111)
            that.setState({
                banners:data
            })
        })
    }
    showBanner(){
        return this.state.banners.map((item,i)=>{
            // console.log(item,i)
           return ( 
                <div className="goods_list" key={i}>
					<div className="goods_inner">
						<a href="#/Details"><img src={item.url} alt="商品列表信息" /></a>
						<p className="des">
							<span className="name">{item.name}</span>
							<span>|</span>
							<span className="descibe">{item.des}</span>
						</p>
						<p className="price">
							<span className="new_price">￥{item.new_price}</span>
							<span className="old_price">￥{item.old_price}</span>
							<span className="people_num">{item.num}人在抢</span>
						</p>
					</div>
				</div>
           	)
        })
    }

    componentWillMount(){
        this.getBanner()
    }
    render(){
        return (
            <div className="goodsList">
                {this.showBanner()}
            </div>
        )
    }
}
export default TodayGoodsList
