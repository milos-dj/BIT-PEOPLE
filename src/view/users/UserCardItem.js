import React from 'react';
import "./UserCardItem.css";
import PropTypes from "prop-types";

const UserCardItem = ({ name, image, email, birthDate, gender }) => {

    let bgColor;
    if (gender === "female") {
        bgColor = "card-user female-card"
    } else {
        bgColor = "card-user";
    }
    return (
        <div className={bgColor}>
            <img className="card__img" src={image} alt="people" />
            <h3 className="card__title">{name}</h3>
            <div className="card__content">
                <p>Email: {email}</p>
                <p>Date-of-birth: {birthDate}</p>
            </div>
        </div>
    )
}

UserCardItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}


export { UserCardItem };