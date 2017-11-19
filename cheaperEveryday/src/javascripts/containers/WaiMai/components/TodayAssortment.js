import React from 'react'
class TodayAssortment extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="today_assortment">
				<ul className="today_assortment_list">
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/jujia.png?ts=2016091912387" alt="" />
						</span>
						<span>居家</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/nvzhuang.png?ts=2016091912387" alt="" />
						</span>
						<span>女装</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/neiyi.png?ts=2016091912387" alt="" />
						</span>
						<span>内衣</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/xiebao.png?ts=2016091912387" alt="" />
						</span>
						<span>鞋子</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/muying.png?ts=2016091912387" alt="" />
						</span>
						<span>母婴</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/nanzhuang.png?ts=2016091912387" alt="" />
						</span>
						<span>男装</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/meizhuang.png?ts=2016091912387" alt="" />
						</span>
						<span>美妆</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/meishi.png?ts=2016091912387" alt="" />
						</span>
						<span>美食</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/shuma.png?ts=2016091912387" alt="" />
						</span>
						<span>数码</span>
					</li>
					<li className="today_assortment_item">
						<span>
							<img src="http://m.zshpldbz.com/Source/static/wap/images/category/qita.png?ts=2016091912387" alt="" />
						</span>
						<span>其他</span>
					</li>
				</ul>
			</div>
        )
    }
}

export default TodayAssortment