import React from 'react'
import axios from 'axios'

class WaiMaiBanner extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="swiper-container waimai-banner">
			    <div className="swiper-wrapper">
			        <div className="swiper-slide">
			        	<img src="./public/images/t2.jpg"/>
			        </div>
			        <div className="swiper-slide">
			        	<img src="./public/images/t3.jpg"/>
			    	</div>
			    </div>	
			    <div className="swiper-pagination"></div>
			</div>
        )
    }
    
    componentDidMount(){
    	console.log(111)
    	new Swiper('.swiper-container', {
    		loop:true,
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay:2000
	    });
    }
}

export default WaiMaiBanner