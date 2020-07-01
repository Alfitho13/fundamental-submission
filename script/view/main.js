import "../../component/cock-list.js";
import "./../../component/search-bar";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const cockListElement = document.querySelector("cock-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        cockListElement.cocks = results;
    };

    const fallbackResult = message => {
        cockListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;