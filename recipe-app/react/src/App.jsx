import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { FormDataProvider } from "./Web_Files/SharedData";
import { Home } from "./Web_Files/Home";
import KeyHome from "./Web_Files/Home";
import Results from "./Web_Files/RecipeResults";
import ExpandedResults from "./Web_Files/RecipeExpanded";
import { Privacy, AboutUs, Terms } from "./Web_Files/FooterPages";

function App() {
    return (
        <>
        <FormDataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<KeyHome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/terms-of-use" element={<Terms />} />
                    <Route path="/private-policy" element={<Privacy />} />
                    <Route path="/results" element={<Results />} />
                    <Route
                        path="/resultsExpanded"
                        element={<ExpandedResults />}
                    />
                </Routes>
            </Router>
        </FormDataProvider>
        </>
    );
}

export default App;
