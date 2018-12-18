import React from 'react';
import "./UserList.css";
import { UserCardItem } from "./UserCardItem";
import { UserListItem } from "./UserListItems";

const UserList = ({ listOfUsers, gridLayout }) => {
    let userList;
    if (gridLayout) {

        userList = listOfUsers.map((user, index) => {
            const { pictures, birthDate, gender } = user;


            return <UserCardItem
                key={index}
                name={user.getFullName()}
                email={user.getHiddenEmail()}
                image={pictures.large}
                birthDate={birthDate}
                gender={gender}
            />
        })
    } else {

        userList = listOfUsers.map((user, index) => {

            const { pictures, birthDate, gender } = user;

            return <UserListItem
                key={index}
                name={user.getFullName()}
                email={user.getHiddenEmail()}
                image={pictures.thumbnail}
                birthDate={birthDate}
                gender={gender}
            />
        })
    }

    return (
        <main className="clearFix">
            {userList}
        </main>
    )
}

export { UserList }