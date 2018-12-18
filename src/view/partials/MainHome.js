import React, { Fragment } from 'react';
import { Loading } from "../loading/loading";
import { UserList } from "../users/UserList";
const MainHome = (props) => {
    let listOfUsers;
    props.value.length === 0 ? listOfUsers = this.state.users : listOfUsers = this.state.userSearch
    return (
        <Fragment>
            <Loading loading={this.state.loading} />

            <div className="row">
                <UserList listOfUsers={listOfUsers} gridLayout={this.state.gridLayout} />
            </div>
        </Fragment>
    )
}

export { MainHome }