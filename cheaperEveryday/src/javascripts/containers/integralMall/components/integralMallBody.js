import React from 'react'

class IntegralMallBody extends React.Component{
  constructor(props,context){
    super(props,context)
  }
  render(){
    return(
      	<div id="jifen" data-tab="0">
            <ul className="nav nav-tabs text-center" role="tablist">
            <li style={{width: '50%'}} className="active"><a style={{borderLeft: 'none'}} href="http://m.zshpldbz.com/jifen/?tabtype=gift">积分兑换</a></li>
                <li style={{width: '50%'}}><a style={{borderRight: 'none'}} href="http://m.zshpldbz.com/jifen/?tabtype=lottery">积分抽奖</a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active">
                    <ul className="media-list" data-lock="0" data-nextpage="2" data-scroll="0" id="jifen-list">            <li className="media">
            <div className="media-left">
                <a href="http://m.zshpldbz.com/jifen/deal/1">
                    <img className="media-object" src="http://m.zshpldbz.com/Source/upload/jifen/20171003/km.jpg" style={{width: '100px', height: '100px'}}/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading jifen-title">移动100元充值卡</h4>
                <p className="jifen-price">
                    <span>1000000积分</span>
                    <s>价格￥100.00元</s>
                </p>
                <div className="jifen-progress">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:'0%'}}></div>
                    </div>
                    <div className="remain">剩余897</div>
                </div>
                <a className="btn btn-default duibtn" href="http://m.zshpldbz.com/jifen/deal/1">立即兑换</a>
            </div>
        </li>
            <li className="media">
            <div className="media-left">
                <a href="http://m.zshpldbz.com/jifen/deal/3">
                    <img className="media-object" src="http://m.zshpldbz.com/Source/upload/jifen/20171003/d.jpg" style={{width: '100px', height: '100px'}}/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading jifen-title">电信100元充值卡</h4>
                <p className="jifen-price">
                    <span>1000000积分</span>
                    <s>价格￥100.00元</s>
                </p>
                <div className="jifen-progress">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:'0%'}}></div>
                    </div>
                    <div className="remain">剩余697</div>
                </div>
                <a className="btn btn-default duibtn" href="http://m.zshpldbz.com/jifen/deal/3">立即兑换</a>
            </div>
        </li>
            <li className="media">
            <div className="media-left">
                <a href="http://m.zshpldbz.com/jifen/deal/2">
                    <img className="media-object" src="http://m.zshpldbz.com/Source/upload/jifen/20171003/lt.jpg" style={{width:'100px',height: '100px'}}/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading jifen-title">联通100元充值卡</h4>
                <p className="jifen-price">
                    <span>1000000积分</span>
                    <s>价格￥100.00元</s>
                </p>
                <div className="jifen-progress">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:'0%'}}></div>
                    </div>
                    <div className="remain">剩余988</div>
                </div>
                <a className="btn btn-default duibtn" href="http://m.zshpldbz.com/jifen/deal/2">立即兑换</a>
            </div>
        </li>
    </ul>
                   <div className="jifen-loading" style={{display: 'none'}}>
                        <p className="loading"><img src="/Source/static/wap/images/jifen/loading.png"/><br/>上拉加载更多...</p>
                    </div>
                    <div className="jifen-empty" style={{display: 'none'}}>
                        <p className="empty"><img src="/Source/static/wap/images/jifen/jifen_empty.png"/><br/>暂时没有数据，请稍后刷新</p>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
export default IntegralMallBody
