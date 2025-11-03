import { useState } from "react";
import { FormDataContext } from "./FormDataContext.jsx";

// Sends form data across multiple pages
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    return (
        <FormDataContext.Provider value={{formData, setFormData}}>
            {children}
        </FormDataContext.Provider>
    )
}