// Sets the meal name and sends it to the backend
export function SearchMealName({mealText, setMealText, handleKeyDown}) {
    return (
        <>
            <label htmlFor="meal-name" className="font-medium home-label">Meal Name:</label>
            <input type="text" className="search-home-form font-medium text-error" id="meal-name" name="meal-name" placeholder="Meal Name (Optional)" value={mealText} onChange={(e) => {setMealText(e);}} onKeyDown={(e) => {handleKeyDown(e)}}></input>
        </>
    )
}