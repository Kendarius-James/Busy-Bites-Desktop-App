import { Header, Footer } from "./Templates";
import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./SharedData";
import "./Styles/Font.css";
import "./Styles/Results.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Retrives form data and displays results from api

// Results component - Retrives form data and displays results from api
export default function Results() {
    const { formData } = useContext(FormDataContext);
    const [recipes, setRecipes] = useState([]);
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //Retrives stored recipes from sessionStorage
    function getPrevRecipes() {
        const prevRecipes = sessionStorage.getItem("prevRecipeData");
        if (prevRecipes) {
            const prevRecipesObject = JSON.parse(prevRecipes);
            setRecipes(prevRecipesObject);
        }
    }

    return (
        <div>
            <Header />
            {Object.keys(formData).length > 0 ? (
                <ApiDisplayCards
                    formData={formData}
                    recipes={recipes}
                    setRecipes={setRecipes}
                    error={error}
                    setError={setError}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    getPrevRecipes={getPrevRecipes}
                    setIsValid={setIsValid}
                    isValid={isValid}
                />
            ) : (
                <OuterDisplayCards
                    formData={formData}
                    recipes={recipes}
                    setRecipes={setRecipes}
                    getPrevRecipes={getPrevRecipes}
                    isValid={isValid}
                />
            )}
            <Footer />
        </div>
    );
}

// Ping the api and retrives recipe data
function CardContainer({
    formData,
    setRecipes,
    setIsValid,
    setError,
    setErrorMessage,
}) {
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                if (Object.keys(formData).length > 0) {
                    let url = `https://api.spoonacular.com/recipes/complexSearch`;
                    const apiKey = `?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
                    const query = formData.mealName
                        ? `query=${formData.mealName}`
                        : "";
                    const setIntolerance =
                        formData.diet === "None"
                            ? ""
                            : `intolerances=${formData.diet}`;
                    const equipment =
                        formData.cookWare === "Any"
                            ? ""
                            : `equipment=${formData.cookWare}`;
                    const includeIngredients = `includeIngredients=${formData.ingredients.join(
                        ", "
                    )}`;
                    const type =
                        formData.mealType === "Any"
                            ? ""
                            : `type=${formData.mealType}`;
                    const maxReadyTime =
                        formData.planningTime === "Any"
                            ? ""
                            : `maxReadyTime=${parseInt(formData.planningTime)}`;
                    const quantity = `number=${8}`;
                    const recipeInfo = `addRecipeInformation=${true}`;
                    const recipeInstructions = `addRecipeInstructions=${true}`;

                    const options = [
                        query,
                        setIntolerance,
                        equipment,
                        includeIngredients,
                        type,
                        maxReadyTime,
                        quantity,
                        recipeInfo,
                        recipeInstructions,
                    ];
                    url = url + apiKey;
                    options.forEach((option) => {
                        if (option !== "") {
                            url = url + "&" + option;
                        }
                    });
                    const response = await axios.get(url);
                    console.log(response);
                    response.data.totalResults === 0 ? setIsValid(false) : setIsValid(true);
                    console.log(response.data.results);
                    setRecipes(response.data.results);
                    sessionStorage.setItem(
                        "prevRecipeData",
                        JSON.stringify(response.data.results)
                    );
                }
            } catch (error) {
                setError(error.status);
                try {
                    console.log(error.response.data.message);
                    setErrorMessage(error.response.data.message);
                } catch {
                    setErrorMessage("An unknown error has occured.");
                }
            }
        };

        fetchRecipeData();
        // Blank to prevent refresh if form data is changed
    }, []);

    return (
        <>
        </>
    );
}

// Call card container and displays error if present, otherwise call OuterDisplayCards
function ApiDisplayCards ({formData, recipes, setRecipes, setIsValid, isValid, error, errorMessage, setError, setErrorMessage, getPrevRecipes}){
    return (
        <>
            <CardContainer
                formData={formData}
                setRecipes={setRecipes}
                isValid={isValid}
                setIsValid={setIsValid}
                setError={setError}
                setErrorMessage={setErrorMessage}
            />
            {error === "" ? (
                <OuterDisplayCards
                    key="1"
                    formData={formData}
                    recipes={recipes}
                    getPrevRecipes={getPrevRecipes}
                    isValid={isValid}

                />
            ) : (
                <ErrorOptions error={error} errorMessage={errorMessage} />
            )}
        </>
    );
}

// Formats page to adjust cards to display 
function OuterDisplayCards ({formData, recipes, getPrevRecipes, isValid}){
    return (
        <div>
            <h2 className="font-large results-label">Results:</h2>
            <div className="results-body results-body-mobile">
                {console.log(recipes)}
                {Object.keys(formData).length > 0 ? (
                    <DisplayCards key="1" recipes={recipes} isValid={isValid} />
                ) : (
                    <>
                        <PreviousRecipes getPrevRecipes={getPrevRecipes} />
                        <DisplayCards key="1" recipes={recipes} isValid={isValid}/>
                    </>
                )}
            </div>
        </div>
    );
}

// Calls get recipe function each page refresh
function PreviousRecipes ({getPrevRecipes}){
    useEffect(() => {
        getPrevRecipes();
        // Removing dependency array will cause infinite loop due to refresh
    }, [])
}

// Displays the error message to the front-end
function ErrorOptions ({error, errorMessage}){
    return (
        <div>
            <h2 className="font-large results-label">Results:</h2>
            <div className="results-body-no-results results-body-mobile-no-results">
                {error ? (
                    <h2 className="font-medium error-message">
                        {error}: {errorMessage}
                    </h2>
                ) : (
                    <h2 className="font-medium error-message">{errorMessage}</h2>
                )}
            </div>
        </div>
    );
}

// Maps through each card result and displays loading status 
function DisplayCards ({recipes, isValid}) {
    if (recipes.length > 0){
        return (
            recipes.map((recipe) => {
                return (
                    <RecipeCard
                        className="card"
                        key={recipe.id}
                        dishRecipe={recipe}
                        recipeName={recipe.title}
                        imageURL={recipe.image}
                        imageAlt={recipe.title}
                        cuisineName={
                            recipe.cuisines.length > 0
                                ? recipe.cuisines[0]
                                : "None"
                        }
                        totalPrepTime={
                            recipe.preparationMinutes
                                ? recipe.preparationMinutes + " mins"
                                : "Unavailable"
                        }
                        totalCookTime={
                            recipe.readyInMinutes
                                ? recipe.readyInMinutes + " mins"
                                : "Unavaliable"
                        }
                    />
                );
        })
        )
    }
    else {
        return (
            <>
            {console.log(`isValid: ${isValid}`)}
                {isValid ? (
                    <h3 className="font-medium no-results results-body-no-results results-body-mobile-no-results">
                        . . . Loading Recipes
                    </h3>
                ) : (
                    <h3 className="font-medium no-results results-body-no-results results-body-mobile-no-results">
                        No Recipes Found
                    </h3>
                )}
            </>
        );
    }
    
}

// Redirects to recipeExpanded page and call card contents
function RecipeCard({
    imageURL,
    imageAlt,
    cuisineName,
    recipeName,
    totalPrepTime,
    totalCookTime,
    dishRecipe
}) {
    const navigate = useNavigate();
    const handleCardClick = (e) => {
        // get recipe data and redirect to other page
        navigate("/resultsExpanded", { state: dishRecipe });
    };

    return (
        <button
            className="card remove-button-display"
            onClick={(e) => {
                handleCardClick(e);
            }}
        >
            <CardContents
                className="card"
                imageURL={imageURL}
                imageAlt={imageAlt}
                cuisineName={cuisineName}
                recipeName={recipeName}
                totalPrepTime={totalPrepTime}
                totalCookTime={totalCookTime}
            />
        </button>
    );
}

// Displays card information for the recipe
function CardContents({
    imageURL,
    imageAlt,
    cuisineName,
    recipeName,
    totalPrepTime,
    totalCookTime,
}) {

    return (
        <>
            <img
                className="card-image"
                src={imageURL}
                alt={imageAlt}
                width="296"
                height="200"
            ></img>
            <div className="card-body">
                <h3 className="font-small cuisine-title">Cuisine: {cuisineName}</h3>
                <h4 className="font-recipe-title recipe-title">{recipeName}</h4>
                <span className="font-tiny prep-time">Prep: {totalPrepTime}</span>
                <span className="font-tiny cook-time">Cook In: {totalCookTime}</span>
            </div>
        </>
    );
}