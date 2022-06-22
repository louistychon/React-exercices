import React from 'react';
import "./body.css"
import {Article} from '../article/article.js'

function nombreArticle(Articles){
    if(Articles >= 2){
        return (<div className="container">
        <Article titre="Les tartines" />
        <Article titre="Coding school"/>
    </div>)  
    }
    else{
        return (<h1>Il n'y a pas d'articles</h1>)
    }
}
class Body extends React.Component{
    render(){
        return(
            <section id="body">
               {nombreArticle(2)}
            </section>
        )
    }
}

export {Body};