//积分商城；；；
import React from 'react'
import IntegralMallHeader from './components/integralMallHeader'
import IntegralMallBody from './components/integralMallBody'
import Nav from '../../common/Nav'
class IntegralMall extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="fullheight">
                <IntegralMallHeader/>
                <IntegralMallBody/>               
                <Nav active={"IntegralMall"}/>
            </div>
        )
    }
}

export default IntegralMall
