import React from 'react'

class Selfheader extends React.Component{
		constructor(prop,contexts){
				super(prop,contexts)

		}
		render(){
			return(
					<div className="Selfheader">
							<span className="Selfheader_arrow"><a href="##"><i className="iconfont icon-mjiantou-copy"></i></a></span>
							<span className="selfheader_center">个人中心</span>
							<span id="self_user"></span>
					</div>


				)
		}
}
export default Selfheader