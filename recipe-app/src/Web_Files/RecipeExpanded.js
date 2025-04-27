import { Header, Footer } from "./Templates";
import React, { useState, useEffect } from "react";
import "./Styles/Font.css"
import "./Styles/Recipe.css"
import { useLocation } from "react-router-dom";
import { displayElements } from "./Recipe Components/Utilities"

// Displays the expanded recipe to a blank page

// Page template of the results - gets recipes and sets header and footer
export default function ExpandedResults() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div>
            <Header />
            <RecipeBackground recipe={recipe}/>
            <Footer />
        </div>
    );
}

// Sets the background and passes data to heroSection and RecipeBody
function RecipeBackground({recipe}) {
    return (
        <div className="recipe-background">
            <div className="recipe-content">
                <HeroSection
                    cuisineName={
                        recipe.cuisines.length === 0
                            ? "None"
                            : recipe.cuisines[0]
                    }
                    recipeName={recipe.title}
                    imageURL={recipe.image}
                    imageAlt={recipe.title}
                    authorName={recipe.sourceName}
                    recipeUrl={recipe.sourceUrl}
                    totalPrepTime={recipe.preparationMinutes}
                    totalCookTime={recipe.cookingMinutes}
                    totalTime={recipe.readyInMinutes}
                    servings={recipe.servings}
                />
                {console.log(recipe)}
                <RecipeBody
                recipe={recipe} />
            </div>
        </div>
    )
}

// Displays the cuisine name, recipe, and author. Passes data to heroImage and RecipeBox. 
function HeroSection({
    cuisineName,
    recipeName,
    imageURL,
    imageAlt,
    authorName,
    recipeUrl,
    totalPrepTime,
    totalCookTime,
    totalTime,
    servings,
}) {
    const handleClick = (e, href) => {
        e.preventDefault();
        window.openExternal.link(href);
    }

    return (
        <>
            <h2 className="recipe-text font-large cuisine-name-expanded">Cuisine: {cuisineName}</h2>
            <h3 className="recipe-text font-larger">{recipeName}</h3>
            <h4 className="recipe-text font-medium source-expanded">

                {/* Insert IPC external default browser here */}
                By {authorName} at <a href={recipeUrl} onClick={(e) => handleClick(e, recipeUrl)} target="_blank" rel="noopener noreferrer">
                    {authorName}
                </a>
            </h4>
            <HeroImage imageURL={imageURL} imageAlt={imageAlt}/>
            <RecipeBox totalPrepTime={totalPrepTime} totalCookTime={totalCookTime} totalTime={totalTime} servings={servings}/>
        </>
    );
}

// Formats and displays the hero image of the recipe
function HeroImage({imageURL, imageAlt}) {
    let imageUrlCopy = imageURL;
    try {
        let dashPosition = imageUrlCopy.indexOf("-");
        let periodPosition = imageUrlCopy.indexOf(".", dashPosition);
        let beginningUrl = imageUrlCopy.slice(0, dashPosition+1);
        let endingUrl = imageUrlCopy.slice(periodPosition, imageUrlCopy.length);
        let fullUrl = beginningUrl + "636x393" + endingUrl;
        return (
            <img
                className="recipe-image"
                src={fullUrl}
                alt={imageAlt}
                width="636"
                height="393"
            ></img>
        );
    }
    catch {
        return (
            <img
                className="recipe-image"
                src={imageURL}
                alt={imageAlt}
                width="780"
                height="550"
            ></img>
        );
    }
}

// Sets the time and servings amout of the recipe
export function RecipeBox ({totalPrepTime, totalCookTime, totalTime, servings}) {

    function formatTime (time) {
        if (time === 0 || time === 1){
            return (`${time} min`);
        } else if (time > 1) {
            return (`${time} mins`);
        } else {
            return ("Unavaliable");
        }
    }

    return (
        <>
        <div className="box-top"></div>
        <div className="time-box">
            <span className="font-medium"><strong>Prep Time:</strong> {formatTime(totalPrepTime)}</span>
            <span className="font-medium"><strong>Cook Time:</strong> {formatTime(totalCookTime)}</span>
            <span className="font-medium"><strong>Total Time:</strong>{formatTime(totalTime)}</span>
            <span className="font-medium"><strong>Servings:</strong>{servings}</span>
        </div>
        </>
    )
}

// Retrives the recipe steps and ingredients and send data to other components
function RecipeBody({recipe}) {
    const [ingredients, setIngredients] = useState([]);
    // const [images, setImages] = useState([]);
    const [recipeSteps, setRecipeSteps] = useState([]);

    useEffect(() => {
        try {
            console.log(recipe.analyzedInstructions[0].steps);
            const steps = recipe.analyzedInstructions[0].steps;
            setRecipeSteps([...steps]);
            let currentIngredients = [];
            let currentImages = [];

            steps.forEach((step) => {
                step.ingredients.forEach((ingredient) => {
                    if (!currentIngredients.includes(ingredient.name.toLowerCase()) && ingredient.id !== 0){
                        currentIngredients.push(ingredient.name.toLowerCase());
                        currentImages.push(ingredient.image);
                    }


                })
            })
            setIngredients([...currentIngredients]);
        }
        catch{
            console.log("Recipe is not present");
        }
    }, [recipe])

    
    return (
        <>
        <h3 className="font-large">Diets:</h3>
            <DisplayDiets diets={recipe.diets}/>

        <h3 className="font-large">Ingredients:</h3>
            <div>
                <FormatIngredients ingredients={ingredients}/>
            </div>
        <h3 className="font-large">Summary:</h3>
            <p className="font-medium">
                <CleanSummary summary={recipe.summary}/>
            </p>
        <h3 className="font-large">Recipe Steps:</h3>
        {console.log(recipeSteps)}
        <RecipeSteps steps={recipeSteps} />
    </>
)

}

//Displays status of recipe data category 
function NoResults({name}){
    return (
        <>
        <p className="font-medium">
            {name}
        </p>
        </>
    );
}

//Displays recipes diets
function DisplayDiets({diets}) {
    if (diets.length === 0){
        return(<NoResults name="No diets are avaliable to display."/>);
    }
    else {
        return(displayElements(diets, "diet-container", "font-medium diet"));
    }
}

//Displays ingredients in a formated list
function FormatIngredients({ingredients}) {
    if (ingredients.length <= 0) {
        return(<NoResults name="No ingredients are avaliable to display."/>);
    }
    else {
        return(displayElements(ingredients, "ingredient-container", "font-medium ingredient"));
    }
}

// Removes tags from summary
function CleanSummary({summary}){
    let copySummary = summary;
    try {
        if (copySummary === "") {
            return(<NoResults name="A recipe summary is currently not avaliable."/>);
        }
        else {
            copySummary = copySummary.replaceAll("<b>", "");
            copySummary = copySummary.replaceAll("</b>", "");
            let position = copySummary.indexOf("score");
            if (position !== -1){
                position = copySummary.indexOf(".", position + 1);
                return (position !== -1 ? copySummary.slice(0, position+1): copySummary);
            }
            return (copySummary);
        }
    }
    catch {
        return(<NoResults name="An error has occured while trying to retrieve recipe summary."/>);
    }
}

//Displays the recipe steps and approximate time to complete 
function RecipeSteps({steps}){
    let lengths = [];
    let recipeSteps = [];
    let recipeLengthStep = [];

    if (steps.length <= 0){
        return (<NoResults name="This recipe doesn't have any steps to follow."/>);
    }

    steps.forEach((step) => {
        // get each step length
        try {
            lengths.push(`(Estimated Time: ${step.length.number} minutes) `);
        }
        catch {
            lengths.push("");
        }

        recipeSteps.push(step.step);
    })

    for (let i = 0; i < recipeSteps.length; i++) {
        recipeLengthStep.push(lengths[i] + recipeSteps[i]);
    }

    
    return (
        <ol>
            {recipeSteps.map((arrayElement, index) => {
                if (lengths[index] === ""){
                    return (
                        <li className="font-medium recipe-step" key={index}>
                            {arrayElement}
                        </li>
                    );
                }
                else {
                    return (
                        <>
                            <li className="font-medium recipe-step" key={index}>
                            <b className="font-medium step-time">{lengths[index]}</b>
                                {arrayElement}
                            </li>
                        </>
                    );
                }
            })}
        </ol>
    );

}