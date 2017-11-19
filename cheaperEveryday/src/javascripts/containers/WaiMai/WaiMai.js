import React from 'react'
import WaiMaiHeader from './components/WaiMaiHeader' //头部引入
import WaiMaiBanner from './components/WaiMaiBanner' //轮播引入
import TodayAssortment from './components/TodayAssortment' //商品分类引入
import TodayPromotion from './components/TodayPromotion' //促销引入
import TodayGoods from './components/TodayGoods' //促销引入
import TodayGoodsList from './components/TodayGoodsList' //促销引入
import Nav from '../../common/Nav'  //底部引入


class WaiMai extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullheight waimai" ref="waimai-content">
               	<WaiMaiHeader ref="waimai-header"/>
                <WaiMaiBanner/>
                <TodayAssortment/>
                <TodayPromotion/>
                <TodayGoods/>
                <TodayGoodsList/>
                <Nav/>
                <div className="backTop_box">
                    <a className="backLogo"><img src="http://m.zshpldbz.com/Source/static/wap/images/icon/bag-icon.png"/></a>
                    <a className="backTop" ><img src="http://m.zshpldbz.com/Source/static/wap/images/icon/back-top.png"/></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let that = this
        this.refs['waimai-content'].addEventListener("scroll",(e)=>{
            if(e.target.scrollTop>40){
                that.refs['waimai-header'].showSearch(true)
                // $(".backTop_box").addClass('backTop_box_block')
            }else{
                that.refs['waimai-header'].showSearch(false)
            }
        })
    }



}

export default WaiMai