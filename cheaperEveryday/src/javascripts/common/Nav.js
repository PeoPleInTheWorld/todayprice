
import React from 'react'
import {Link} from 'react-router'
class Nav extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
         let {active}=this.props
        return (
            <div className="ele-nav">
                <Link to="/waimai" className={active=='waimai'?'active':''}>
                    <i className="iconfont icon-shouye"></i>
                    首页
                </Link>
                <Link to="/fenlei" className={active=='fenlei'?'active':''}>
                    <i className="iconfont icon-fenlei"></i>
                    分类
                </Link>
                <Link to="/Classification" className={active=='Classification'?'active':''}>
                    <i className="iconfont icon-wodeshaidan-copy"></i>
                    购物车
                </Link>
                <Link to="/IntegralMall" className={active=='IntegralMall'?'active':''}>
                    <i className="iconfont icon-jifenwodejifen"></i>
                    积分商城
                </Link>
                <Link to="/SelfCenter" className={active=='SelfCenter'?'active':''}>
                    <i className="iconfont icon-gerenzhongxin"></i>
                    个人中心
                </Link>
            </div>
        )
    }
}
Nav.defaultProps={
    active:'waimai'
}
export default Nav