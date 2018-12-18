import React from "react";
import "./UserListItems.css";
import PropTypes from "prop-types";


const UserListItem = ({ name, image, email, birthDate, gender }) => {
    let bgColor;
    if (gender === "female") {
        bgColor = "collection-item avatar female-list "
    } else {
        bgColor = "collection-item avatar";
    }
    return (
        <ul className="collection ul-list">
            <li className={bgColor}>
                <img src={image} alt="" className="circle list-img" />
                <span className="title list-content">{name}</span>
                <p><i className="material-icons list-content" style={{ "fontSize": "15px" }}>email</i>Email: {email} <br />
                    <i className="material-icons list-content" style={{ "fontSize": "15px" }}>cake</i>Date-of-birth: {birthDate}
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
        </ul>
    )
};

UserListItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}

export { UserListItem };