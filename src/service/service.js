import { BASE_API } from "./../shared/constants";

const fetchData = () => {
    return fetch(BASE_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response.results;
        })
}



export { fetchData };