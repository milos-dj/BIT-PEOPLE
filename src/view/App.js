import React, { Fragment } from 'react';
import './App.css';
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { UserList } from "./users/UserList";
import User from "../entities/User.js";
import { fetchData } from "../service/service";
import 'materialize-css/dist/css/materialize.min.css';
import { Loading } from "./loading/Loading";
import { About } from "./partials/About";
import { NotFound } from "./partials/NotFound"



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			icon: "view_list",
			inputValue: "",
			userSearch: [],
			loading: true,
			home: true
		}
	}

	componentDidMount() {
		fetchData()
			.then((result) => {
				const userEntities = result.map((user) => {
					const { name, email, dob, picture, gender } = user;
					const { first, last } = name;
					const { date } = dob;
					const formatedDate = new Date(date).toLocaleDateString('de-DE');
					return new User(first, last, email, formatedDate, picture, gender);

				})

				let gridIcon = "view_list";
				let gridContent;

				if (localStorage.getItem("grid") != null) {
					gridIcon = localStorage.getItem("grid");
				}
				if (gridIcon === "view_list") {
					gridContent = false;
				} else {
					gridContent = true;
				}
				this.setState({
					gridLayout: gridContent,
					users: userEntities,
					icon: gridIcon,
					loading: false

				})
			})
	}

	onClickChange = (event) => {
		const gridLayout = !this.state.gridLayout;
		let navIcon;
		if (this.state.icon === "view_list") {
			navIcon = "view_module";
		} else {
			navIcon = "view_list";
		}
		localStorage.setItem("grid", navIcon);
		this.setState({
			gridLayout,
			icon: navIcon
		})
	}

	onClickRefresh = () => {
		this.setState({
			users: [],
			loading: true
		})
		fetchData()
			.then((result) => {
				const userEntities = result.map((user) => {
					const { name, email, dob, picture, gender } = user;
					const { first, last } = name;
					const { date } = dob;
					const formatedDate = new Date(date).toLocaleDateString('de-DE');
					return new User(first, last, email, formatedDate, picture, gender);
				})

				this.setState({
					users: userEntities,
					loading: false

				})
			})
	}

	addInput = (event) => {
		this.setState({
			inputValue: event.target.value
		})
		this.searchUsers(event.target.value);

	}

	searchUsers = (searchText) => {
		const searchUser = this.state.users.filter((user) => user.fullName.includes(searchText.toLowerCase()));
		this.setState({
			userSearch: searchUser
		})

	}

	aboutPage = () => {
		this.setState({
			home: false
		})
	}
	homePage = () => {
		this.setState({
			home: true
		})
	}
	MainHome = () => {
		let listOfUsers;
		this.state.inputValue.length === 0 ? listOfUsers = this.state.users : listOfUsers = this.state.userSearch;

		let notFound;
		(this.state.inputValue.length > 0 && this.state.userSearch.length === 0) ? notFound = <NotFound /> : notFound = "";

		return (
			<Fragment>
				<Loading loading={this.state.loading} />

				<div className="row">
					<UserList listOfUsers={listOfUsers} gridLayout={this.state.gridLayout} />
					{notFound}
				</div>
			</Fragment>
		)
	}

	render() {
		let Main;
		(this.state.home) ? Main = this.MainHome : Main = About
		return (
			<React.Fragment>
				<header>
					<Header title="React Users"
						icon={this.state.icon}
						change={this.onClickChange}
						refresh={this.onClickRefresh}
						handleChange={this.addInput}
						checkValue={this.state.value}
						about={this.aboutPage}
						home={this.homePage}
						isHome={this.state.home} />
				</header>

				<main>
					<Main />
				</main>

				<Footer />
			</React.Fragment>
		)
	}

}

export default App;
