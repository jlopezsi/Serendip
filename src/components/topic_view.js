import {Component} from "react";
import React from "react";


class TopicView extends Component{
    constructor(props){
        super(props);

        this.state={term:''};

    }
    render (){
        return (

            <div style={{backgroundColor: '#F8F8F8',borderRadius: '15px'}}>
                <h3 align="center">Topic View</h3>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

        );
    }




}
export default TopicView;