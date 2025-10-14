import "./Styles/Form.css";
import "./Styles/Font.css";
import { SearchRecipe } from "./RecipeSearch.js";
import { GetAPIKey } from "./ApiKey.js";
import { BodyBackground } from "./Templates.js";
// Home.js stores all forms pages

// API Component template
export default function KeyHome() {
    function APIKey() {
        return (
            <div className="outer-container">
                <h2 className="font-hero-title welcome-title title">
                    Welcome to Busy Bites
                </h2>
                <GetAPIKey/>
            </div>
        );
    }

    return (
        <div>
            <BodyBackground FormWindow={APIKey} />
        </div>
    );
}

// Home Component Template
export function Home() {
    function SearchRecipes() {
        return (
            <div className="form-width">
                <h2 className="font-hero-title welcome-title">
                    Welcome to Busy Bites
                </h2>
                <SearchRecipe />
            </div>
        );
    }

    return (
        <div>
            <BodyBackground FormWindow={SearchRecipes} />
        </div>
    );
}
