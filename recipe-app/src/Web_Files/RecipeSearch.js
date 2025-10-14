import "./Styles/Form.css";
import { SearchMealName } from "./Recipe Components/MealName";
import { RecipePreferences } from "./Recipe Components/RecipePreferences";
import { Ingredients } from "./Recipe Components/Ingredients";
import { renderOptionText } from "./Recipe Components/Utilities";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "./SharedData";

const mealType = [
    "any",
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "lunch",
    "dinner",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink"
];

const dietRestrictions = [
    "none",
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat"
];

const appliances = [
    "Any",
    "Stove",
    "Oven",
    "Grill",
    "Slow Cooker",
    "Toaster",
    "Blender",
    "Rice Cooker",
    "Food Processor",
    "Stand Mixer",
    "Air Fryer",
    "Deep Fryer",
];

const planningTime = [
    "Any",
    "10 min", 
    "20 min", 
    "30 min", 
    "60 min", 
    "120 min", 
    "240 min"
];

// Sets the form settings and display and send form results to Recipe Results
export function SearchRecipe() {
    const { setFormData } = useContext(FormDataContext);
    const [mealName, setMealName] = useState("");
    const [settings, setSettings] = useState(["", "", "", ""]);
    const [ingredient, setIngredient] = useState("");
    const [display, setDisplay] = useState([]);
    const [error, setError] = useState([]);

    const navigate = useNavigate();

    // Sets the value for mealName variable
    const handleMealName = (e) => {
        setMealName(renderOptionText(e.target.value));
    };

    // Sets the value for the settings drop down
    const handleMealSettings = (e, index) => {
        let copy = [...settings];
        copy[index] = e.target.value;
        setSettings(copy);
    };

    // Sets ingredient name to the ingredient varialbe
    const handleIngredient = (e) => {
        setIngredient(renderOptionText(e.target.value));
    };

    // Add a new ingredient in the ingredient array,
    const handleAddDisplay = (e) => {
        if (ingredient === undefined || ingredient === "") {
            setError(["Please enter an ingredient."]);
            return;
        } else if (isDuplicate(ingredient)) {
            setError(["Ingredient already listed."]);
            return;
        } else if (display.length >= 20) {
            setError(["The max number of ingredients has been reached."]);
            return;
        } else if (ingredient.length > 25){
            setError(["The ingredient must be under 25 charaters"]);
            return;
        }
        else {
            let copy = [...display];
            copy.unshift(ingredient);
            setDisplay(copy);
            setIngredient("");
            setError([]);
            return;
        }
    };

    // Removes ingredient from ingredient array and set copy to new state
    const handleRemoveDisplay = (e, ingredientName) => {
        let copy = [...display];
        let index = copy.indexOf(ingredientName);
        if (index === -1) {
            return;
        } else {
            copy.splice(index, 1);
        }
        setDisplay(copy);
    };

    // Disables default submit
    const disableSubmit = (e) => {
        e.preventDefault();
    };

    // Detects if text input is valid or not
    const isValid = (input) => {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(input);
    };

    // Check to see if the ingredient is a duplicate
    const isDuplicate = (ingredient) => {
        if (display.indexOf(ingredient) === -1) {
            return false;
        }
        return true;
    };

    // Handle enter for the ingredient text input
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleAddDisplay();
        }
    };

    // Prevents default enter for text inputs
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    // Sets the error message for the UI if more than one of the conditions is false.
    const submitInfo = (e) => {
        let errorMessage = [];
        let isValidData = true;
        // Check valid meal name
        if (mealName === "" || isValid(mealName)) {
        } else {
            errorMessage.push("Meal mame cannot contain numbers or symbols.");
            isValidData = false;
        }
        if (settings[0] === "") {
            errorMessage.push("Meal type cannot be empty.");
            isValidData = false;
        }
        if (settings[1] === "") {
            errorMessage.push("Diet Restriction cannot be empty.");
            isValidData = false;
        }
        if (settings[2] === "") {
            errorMessage.push("Cookware cannot be empty.");
            isValidData = false;
        }
        if (settings[3] === "") {
            errorMessage.push("Preparation time cannot be empty.");
            isValidData = false;
        }
        let validIngredient = true;
        display.forEach((ingredient) => {
            if (isValid(ingredient) === false) {
                validIngredient = false;
            }
        });
        if (validIngredient === false) {
            errorMessage.push("Ingredients can only contain letters.");
            isValidData = false;
        }

        if (isValidData === false){
            setError(errorMessage);
            return;
        }
        else {
            // Move data to query
            setFormData({
                mealName: mealName,
                mealType: settings[0],
                diet: settings[1],
                cookWare: settings[2],
                planningTime: settings[3],
                ingredients: [...display]
            });
            handleRedirect();
        }
    };

    const handleRedirect = () => {
        navigate('/results');
    }

    return (
        <>
            <form onSubmit={disableSubmit}>
                <div>
                    <Error error={error} />
                    <SearchMealName
                        mealText={mealName}
                        setMealText={handleMealName}
                        handleKeyDown={handleKeyDown}
                    />
                    <RecipePreferences
                        mealType={mealType}
                        diet={dietRestrictions}
                        cookWare={appliances}
                        planningTime={planningTime}
                        recipeSetting={settings}
                        handleRecipeSetting={handleMealSettings}
                    />
                    <Ingredients
                        display={display}
                        ingredient={ingredient}
                        handleIngredient={handleIngredient}
                        handleAddDisplay={handleAddDisplay}
                        handleRemoveDisplay={handleRemoveDisplay}
                        handleKeyDown={handleKeyDown}
                        handleEnter={handleEnter}
                    />
                    <button
                        className="font-small submit-button"
                        onClick={(e) => submitInfo(e)}
                    >
                        Search Recipes
                    </button>
                </div>
            </form>
        </>
    );
}

// Displays error messages for each error present
export function Error({ error }) {
    if (error.length === 0) {
        return;
    } else {
        return error.map((error, index) => (
            <p key={index + 1} className="font-medium error-message">
                {error}
            </p>
        ));

    }
}
