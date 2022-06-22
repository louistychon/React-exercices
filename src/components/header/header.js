import React from 'react'; 
import "./navigation.css"

class Header extends React.Component {
    render(){
        return <header><Nav/></header>
    }
}

class Nav extends React.Component {
    link1 = () => {
        console.log("accueil")
    }
    link2 = () => {
        console.log("galerie")
    }
    link3 = () => {
        console.log("contact")
    }
    render(){
    return (
    <nav>
        <div className="navigationbuttons">
        <button onClick={this.link1}>Link 1</button>
        <button onMouseEnter={this.link2}>Link 2</button>
        <button onDoubleClick={this.link3}>Link 3</button>
        </div>
        <Searchbar />
    </nav>
    )
}
}
class Searchbar extends React.Component {
    render(){
        return (
        <div className='searchbar'>
            <p>Search:</p>
            <input type="text"></input>
            <button>Go</button>
        </div>
        )
    }
}

export {Header, Nav}