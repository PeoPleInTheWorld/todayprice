
import React from 'react'
class TodayHeader extends React.Component {
    constructor(props,context){
        super(props,context)

    }

    render(){
        return (
  			<div className="today_promotion">
				<dl className="today_promotion_list">
					<dt className="promotion_img">
						<img src="http://m.zshpldbz.com/Source/static/wap/images/category/9.9.png?ts=2016091912387" alt="" />
					</dt>
					<dd className="promotion_text">
						<p className="promotion_title">9.9包邮</p>
						<p className="promotion_description">Free shipping</p>
					</dd>
				</dl>
				<dl className="today_promotion_list">
					<dt className="promotion_img">
						<img src="http://m.zshpldbz.com/Source/static/wap/images/category/19.9.png?ts=2016091912387" alt="" />
					</dt>
					<dd className="promotion_text">
						<p className="promotion_title">19.9包邮</p>
						<p className="promotion_description">Free shipping</p>
					</dd>
				</dl>
				<dl className="today_promotion_list">
					<dt className="promotion_img">
						<img src="http://m.zshpldbz.com/Source/static/wap/images/other/icon_tit8.png" alt="" />
					</dt>
					<dd className="promotion_text">
						<p className="promotion_title">
							<span className="t1">优惠券</span>
							<span className="t2">直播</span>
						</p>
						<p className="promotion_description">超值半价抢</p>
					</dd>
				</dl>
				<dl className="today_promotion_list">
					<dt className="promotion_img">
						<img src="http://m.zshpldbz.com/Source/static/wap/images/other/icon_tit9.png" alt="" />
					</dt>
					<dd className="promotion_text">
						<p className="promotion_title">
							<span className="t4">搭配</span>
							<span className="t3">热门</span>
						</p>
						<p className="promotion_description">免费搭配师</p>
					</dd>
				</dl>
			</div>
        )
    }

}

export default TodayHeader