import React from 'react';
import "./Header.css";



const Search = (props) => {
    return (
        <div className="row container2">
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix" style={{ "color": "black" }}>search</i>
                    <input id="icon_prefix" type="text" className="validate" placeholder="Search users" onChange={props.handleChange}
                        value={props.checkValue} />

                </div>
            </div>
        </div>
    )
}



const Header = (props) => {
    let search;

    if (props.isHome) {
        search = <Search checkValue={props.checkValue} handleChange={props.handleChange} />;
    } else {
        search = <React.Fragment />;
    }
    return (
        <header>
            <nav>
                <div className="nav-wrapper container2">
                    <a href="#!" className="brand-logo center" onClick={props.home}>{props.title}</a>
                    <ul className="right hide-on-med-and-down ">
                        <li><a href="#!" onClick={props.about}>About</a></li>
                        <li><a href="#!"><i className="material-icons" onClick={props.change}>{props.icon}</i></a></li>
                        <li><a href="#!"><i className="material-icons" onClick={props.refresh}>refresh</i></a></li>
                    </ul>
                </div>
                {search}
            </nav>
        </header>
    )
}

export { Header }