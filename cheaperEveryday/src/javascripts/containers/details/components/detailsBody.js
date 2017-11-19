
import React from 'react'
class DetailsBody extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    componentWillMount(){
        console.log(this)
    }
    render(){
         let {active}=this.props
        return (
            
            <div className="item-good">
                <div className="img_show">
                    <img src="http://img.alicdn.com/bao/uploaded/i2/TB12KJANpXXXXa5aFXXXXXXXXXX_!!0-item_pic.jpg"/>
                    
                </div>
                <div className="normal-list">
                    <h1>黑色金丝绒运动裤女17冬新加厚加绒宽松大码显瘦哈伦休闲小脚卫裤</h1>
                    <div className="list-price other buy">
                        <span className="price-new ml"><em className="qhd">券后</em><i>￥</i>58.00</span>
                        <i className="del f14 ml2">￥68.00</i>
                    </div>


                            
                    <div className="tj-reason">
                        <strong style={{color:'#F8285C'}}> <i className="icon-thumbs-up"></i> 推荐理由</strong>
                        <br/>
                        <div className="reason">黑色金丝绒运动裤女17冬新加厚加绒宽松大码显瘦哈伦休闲小脚卫裤</div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default DetailsBody



