import React from 'react'; 
import "./navigation.css"

class Header extends React.Component {
    render(){
        return <header><Nav/></header>
    }
}

class Nav extends React.Component {
    render(){
    return (
    <nav>
        <div className="navigationbuttons">
        <button>Link 1</button>
        <button>Link 2</button>
        <button>Link 3</button>
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