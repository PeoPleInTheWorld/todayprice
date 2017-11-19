import React from 'react'
class TodayGoods extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="goods_title">
				<span className="goods_title_main">所有商品限时抢购</span>
				<span className="goods_allNum">
					(共有<span className="goods_num">10</span>件商品)
				</span>
			</div>
        )
    }
}

export default TodayGoods