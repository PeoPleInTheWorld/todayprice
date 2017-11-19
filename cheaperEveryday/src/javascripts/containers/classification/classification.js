import React from 'react'
import ClassificationHeader from './components/classificationHeader'
import ClassificationBody from './components/classificationBody'
import Nav from '../../common/Nav'
class Classification extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight">
                <ClassificationHeader/>
                <ClassificationBody/>
              	<Nav active={"Classification"}/>

            </div>
        )
    }
}

export default Classification