import { renderOptionText } from "./Utilities";

// Formats the four drop down menus
export function RecipePreferences({mealType, diet, cookWare, planningTime, recipeSetting, handleRecipeSetting}) {
    return (
        <div className="select-home-formating">
            <DropMenu options={mealType} recipeSetting={recipeSetting[0]} index={0} handleRecipeSetting={handleRecipeSetting} name="Meal-Type" label_name="Meal Type:"/>
            <DropMenu options={diet} recipeSetting={recipeSetting[1]} index={1} handleRecipeSetting={handleRecipeSetting} name="Diet Restrictions" label_name="Diet Restrictions"/>
            <DropMenu options={cookWare} recipeSetting={recipeSetting[2]} index={2} handleRecipeSetting={handleRecipeSetting} name="Cook-Ware" label_name="Cook Ware:"/>
            <DropMenu options={planningTime} recipeSetting={recipeSetting[3]} index={3} handleRecipeSetting={handleRecipeSetting} name="Planning-Time" label_name="Planning Time:"/>
        </div>
    )
}

// Displays select html and sends option to the backend
export function DropMenu({options, name, label_name, index, recipeSetting, handleRecipeSetting }){
    return (
        <>
        <div className="select-container">
            <label htmlFor={name} className="font-medium select-label">{label_name}</label>
            <select required name={name} id={name} value={recipeSetting} onChange={(e) => {handleRecipeSetting(e, index)}} className="font-medium select-box" >
                <option value="">Select An Option</option>
                {renderOptions(options)}
            </select>
        </div>
        </>
    )
}

// Renders each option inside the DropMenu array
function renderOptions(options){
    if (!Array.isArray(options)){
        return null;
    }
    return options.map((optionElement, index) => (
        <option key={index+1} value={optionElement}>{renderOptionText(optionElement)}</option>
    ))
}
