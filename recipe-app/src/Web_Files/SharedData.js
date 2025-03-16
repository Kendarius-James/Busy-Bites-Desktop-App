import { createContext, useState } from "react";

export const FormDataContext = createContext();
export const RecipeIdContext = createContext();

// Sends form data across multiple pages
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    return (
        <FormDataContext.Provider value={{formData, setFormData}}>
            {children}
        </FormDataContext.Provider>
    )
}

// Not currently used
export const RecipeIdProvider = ({children}) => {
    const [recipeId, setRecipeId] = useState(null);
    return (
        <RecipeIdContext.Provider value={{recipeId, setRecipeId}}>
            {children}
        </RecipeIdContext.Provider>
    )
}