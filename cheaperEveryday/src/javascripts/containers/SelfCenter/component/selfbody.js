
import React from 'react'

class Selfuser extends React.Component{
		constructor(prop,contexts){
				super(prop,contexts)

		}
		render(){
			return(
				<div>
				<div className="userbox">
					<div className="self_user_box">
						 <div className="picbox" >
						  	<i className="iconfont icon-gerenzhongxin"></i>
						 </div>
						 <p><a href="#/login">登录/注册</a></p>
					</div>

						
				</div>
				<div className="user_nav_top">
						<a href="##">
								<i className="iconfont icon-wodelipin"></i>
								<span>我的礼品</span>
						</a>
						<a href="#/Classification">
								<i className="iconfont icon-wodeshaidan-copy"></i>
								<span>我的晒单</span>
						</a>
						<a href="##">
								<i className="iconfont icon-wodexiaoxi"></i>
								<span>我的消息</span>
						</a>
						<a href="#IntegralMall">
								<i className="iconfont icon-jifenwodejifen"></i>
								<span>我的积分</span>
						</a>
						<a href="#/fenlei">
								<i className="iconfont icon-wodeshoucang"></i>
								<span>我的收藏</span>
						</a>
						<a href="#/IntegralMall">
								<i className="iconfont icon-wodezuji"></i>
								<span>我的足迹</span>
						</a>
				</div>
				<div>
					<ul className="self_user_item">
						<li>
							<a href="#/IntegralMall"><i className="iconfont icon-jifenwodejifen"></i><span>积分商城</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-wodezuji"></i><span>收货地址</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-zan"></i><span>邀请记录</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-yanjing"></i><span>文章咨询</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-weather1"></i><span>穿衣搭配</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-jifenwodejifen"></i><span>积分商城</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-jifenwodejifen"></i><span>积分商城</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-jifenwodejifen"></i><span>积分商城</span></a>
							<a href="##"><i>→</i></a>
						</li>
						<li>
							<a href="##"><i className="iconfont icon-jifenwodejifen"></i><span>积分商城</span></a>
							<a href="##"><i>→</i></a>
						</li>
					</ul>
				</div>
				</div>
				)
		}
}
export default Selfuser












