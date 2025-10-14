import { useState } from "react";
import { Error } from "./RecipeSearch.js";
import axios from "axios";
import "./Styles/Form.css";
import "./Styles/Font.css";
import { Link, useNavigate } from "react-router-dom";


export function GetAPIKey() {
    const [api, setApi] = useState("");
    const [appError, setAppError] = useState([]);
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();

    // Handles the text input for api
    function handleApiInput(e) {
        setApi(e.target.value.trim());
    }

    // Pings the food joke api for api validation
    const fetchJoke = async (checkbox, api, setAppError) => {
        try {
            if (checkbox === true) {
                const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${api}`;
                const response = await axios.get(url);
                sessionStorage.setItem("ApiKeyStatus", true);
                
                // Write api key to .env file using electron ipc
                window.key.saveEnv({REACT_APP_SPOONACULAR_API_KEY: api});
                setAppError([]);
                console.log(response.status);
                console.log("test");
                return response.data.text;
            } else {
                setAppError(["Please agree to the Terms of Service and Privacy Policy."]);
            }
        } catch {
            sessionStorage.setItem("ApiKeyStatus", false);
            setAppError(["Invalid Api Key. Please enter a correct Api key."]);
        }
    };

    // Performs input validation after user submission and navigates to home if valid
    async function checkValidInput(e) {
        setAppError([]);
        e.preventDefault();
        if (api === "") {
            setAppError(["The input is empty. Please enter your API Key."]);
        } else {
            let joke = await fetchJoke(checkbox, api, setAppError);
            console.log(joke);
            if (checkbox === true && process.env.REACT_APP_SPOONACULAR_API_KEY !== undefined){
                console.log("navigating to home");
                navigate("/home");
            }
        }
    }

    return (
        <>
            <Error error={appError} />
            <form className="api-form">
                <div className="api-form-container api-form-container-details text-color">
                    <div className="display-heading-line">
                        <h3 className="font-large page-title">User Details</h3>
                    </div>
                    <div className="display-lines">
                        <label
                            className="font-medium api-label text-color"
                            htmlFor="api-input"
                        >
                            Enter API Key:
                        </label>
                        <input
                            className="font-medium api-input"
                            type="text"
                            id="api-input"
                            name="api-input"
                            value={api}
                            onChange={handleApiInput}
                            placeholder="Enter API Key . . ."
                        ></input>
                    </div>
                    <div className="display-empty-lines"></div>
                    <div className="display-empty-lines"></div>
                    <div className="display-empty-lines">
                        <input
                            className="legal-checkbox"
                            value={checkbox}
                            onChange={() => setCheckbox(!checkbox)}
                            type="checkbox"
                            id="legal-acceptance"
                            name="legal-acceptance"
                        ></input>
                        <label
                            className="legal-formating font-medium"
                            id="legal-acceptance"
                            name="legal-acceptance"
                        >
                            By continuing you agree to the{" "}
                            <Link to="/terms-of-use">Terms of Service</Link> and{" "}
                            <Link to="/private-policy">Privacy Policy</Link>.
                        </label>
                    </div>
                </div>
                <button
                    className="font-medium submit-button"
                    type="submit"
                    onClick={(e) => {
                        checkValidInput(e);
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}
