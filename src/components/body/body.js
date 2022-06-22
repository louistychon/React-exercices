import React from 'react';
import "./body.css"
import {Article} from '../article/article.js'

class Body extends React.Component{
    render(){
        return(
            <section id="body">
                <div className="container">
                   <Article/>
                   <Article/>
                </div>
            </section>
        )
    }
}

export default Body;