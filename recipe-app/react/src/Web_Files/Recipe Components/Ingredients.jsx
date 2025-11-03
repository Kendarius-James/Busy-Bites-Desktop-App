import { renderOptionText } from "./Utilities";

// Returns SeachIngredients and DisplayIngredients components
export function Ingredients({display, ingredient, handleIngredient, handleAddDisplay, handleRemoveDisplay, handleEnter, handleKeyDown}){
    return(
        <>
        <SearchIngredients ingredient={ingredient} handleIngredient={handleIngredient} handleAddDisplay={handleAddDisplay} handleEnter={handleEnter} handleKeyDown={handleKeyDown}/>
        <DisplayIngredients currentIngredients={display} handleRemoveDisplay={handleRemoveDisplay} ingredientCount={display.length}/>
        </>
    )
}

// Retrives ingredient text and send it to backend
export function SearchIngredients({ingredient, handleIngredient, handleAddDisplay, handleEnter, handleKeyDown}) {
    return(
        <>
            <label className="font-medium home-label" htmlFor="ingredients">Ingredients:</label>
            <input type="text" className="search-home-form font-medium" id="ingredients" name="ingredients" placeholder="Search Ingredients" value={ingredient} onChange={(e) => handleIngredient(e)} onKeyDown={(e) => {handleEnter(e); handleKeyDown(e);}}></input>
            <button type="button" className="font-small ingredient-button" onClick={(e) => handleAddDisplay(e)}>Add Ingredient</button>
        </>
    )
}

// Display currentIngredients to the front end 
export function DisplayIngredients({currentIngredients, ingredientCount, handleRemoveDisplay}) {
    if (ingredientCount === 0){
        return;
    }
    else {
        return (
        <>
        <h2 className="font-medium home-label">Your Ingredients:</h2>
        <div className="display-border">
            <CreateButton currentIngredients={currentIngredients} handleRemoveDisplay={handleRemoveDisplay}/>
        </div>
        </>
        )
    }
}

// Create a Button for each ingredient to remove 
function CreateButton({currentIngredients, handleRemoveDisplay}) {
    return (currentIngredients.map((ingredient, index) => (
        <button type="button" className="font-small ingredient-button" key={index} id={"ingredient-button-" + index} onClick={(e) => {handleRemoveDisplay(e, ingredient)}}>{renderOptionText(ingredient)}</button>
    )))
}