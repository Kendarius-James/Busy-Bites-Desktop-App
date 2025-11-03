import { useState } from "react";
import { Error } from "./RecipeSearch.jsx";
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

    // Saves the api key to the .env file
    const saveKeytoFile = async (api) => {
            
            let retrieveKey = "";
            try {
                await window.key.saveEnv({REACT_APP_SPOONACULAR_API_KEY: api});
            }
            catch {
                console.log("Failed to save API key to .env file");
            }
            try {
                const envContents = await window.key.readEnv();
                if (envContents.success){
                    retrieveKey = JSON.parse(envContents.data.REACT_APP_SPOONACULAR_API_KEY);
                }
                else {
                    console.log("Failed to read back API key from .env file" + envContents.error);
                }
                // retrieveKey = envContents.REACT_APP_SPOONACULAR_API_KEY
            }
            catch{
                console.log("Failed to read back API key from .env file");
            }
            try {
                if (retrieveKey !== api) {
                    throw new Error("API key mismatch after saving to .env");
                }
                return true;
            }
            catch {
                console.error("Error saving API key to .env file");
                setAppError(["Error saving API key. Please try again."]);
                return false;
            }
    };

    // Pings the food joke api for api validation
    const fetchJoke = async (checkbox, api, setAppError) => {
        try {
            const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${api}`;
            const response = await axios.get(url);
                
            setAppError([]);
 
            console.log(response.status);
            return response.data.text;
        } catch {
            sessionStorage.setItem("ApiKeyStatus", false);
            setAppError(["Invalid Api Key. Please enter a correct Api key."]);
        }
    };

    // Performs input validation after user submission and navigates to home if valid
    async function checkValidInput(e) {
        setAppError([]);
        e.preventDefault();
        let status = true;

        if (api === "") {
            setAppError(["The input is empty. Please enter your API Key."]);
            status = false;
            return;
        } 

        if (api.length > 40) {
            setAppError(["The API key entered is too long. Please check your API key and try again."]);
            status = false;
            return;
        }
        
        if (!checkbox) {
            setAppError(["Please agree to the Terms of Service and Privacy Policy."]);
            status = false;
            return;
        }

        const joke = await fetchJoke(checkbox, api, setAppError);

        if (!joke) {
            setAppError(["Unable to fetch data with the provided API key. Please check your API key and try again."]);
            status = false;
            return;
        }
        const savedKeyStatus = await saveKeytoFile(api);
        if(!savedKeyStatus) {
            status = false;
        }

        console.log(joke);
        if (status) {
                sessionStorage.setItem("ApiKeyStatus", true);
                console.log("navigating to home");
                navigate("/home");
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
