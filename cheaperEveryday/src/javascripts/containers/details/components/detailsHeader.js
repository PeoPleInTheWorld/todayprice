import React from 'react'

class DetailsHeader extends React.Component{
  constructor(props,context){
    super(props,context)
  }
  render(){
    return(
      <div className="details-header">
                <span><a href="##"><i className="iconfont icon-mjiantou-copy"></i></a></span><span>商品详情</span><span><i className="iconfont icon-qiandao"></i></span>
        </div>

    )
  }
}
export default DetailsHeader