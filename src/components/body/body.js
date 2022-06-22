import React from 'react';
import "./body.css"
import {Article} from '../article/article.js'

let nombreArticles = prompt("entrez un nombre d'articles")
function nombreArticle(Articles){
if(nombreArticles >= 2){
    return (<div className="container">
    <Article/>
    <Article/>
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
               {nombreArticle(1)}
            </section>
        )
    }
}

export {Body};