
import React from 'react'


import Nav from '../../common/Nav'
import Selfheader from './component/selfheader';
import Selfuser from './component/selfbody'

class SelfCenter extends React.Component {
    constructor(props,context){
        super(props,context)
        
        
    }
    


    render(){
        return (
            <div className="fullheight waimai">
                <Selfheader/>
                <Selfuser/>
                <Nav active={'SelfCenter'}/>
            </div>
        )
    }
    
   
}

export default SelfCenter