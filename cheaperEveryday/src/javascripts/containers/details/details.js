import React from 'react'
import DetailsHeader from './components/detailsHeader'
import DetailsBody from './components/detailsBody'
import TodayGoodsList from '../WaiMai/components/TodayGoodsList'

import DetailsNav from './components/detailsNav'
class Details extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight">
                <DetailsHeader/>
                <DetailsBody/>
                <TodayGoodsList/>
                <DetailsNav/>

            </div>
        )
    }
}

export default Details