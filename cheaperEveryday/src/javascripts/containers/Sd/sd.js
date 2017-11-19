import React from 'react'
import SdHeader from './components/sdHeader'
import Nav from '../../common/Nav'
class Sd extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight">
            
                    <SdHeader/>
                                 
           
                <Nav active={'Sd'}/>
            </div>
           
            
            
                
           
            
        )
    }
}

export default Sd