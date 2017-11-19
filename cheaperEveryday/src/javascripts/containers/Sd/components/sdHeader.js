import React from 'react'

class SdHeader extends React.Component{
  constructor(props,context){
    super(props,context)
  }
  render(){
    return(
      <div className="sdHeader">
                <span><a href="##"><i className="iconfont icon-mjiantou-copy"></i></a></span><span>晒单广场</span><span><i className="iconfont icon-qiandao"></i></span>
        </div>

    )
  }
}
export default SdHeader