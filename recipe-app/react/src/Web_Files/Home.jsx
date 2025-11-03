import "./Styles/Form.css";
import "./Styles/Font.css";
import { SearchRecipe } from "./RecipeSearch.jsx";
import { GetAPIKey } from "./ApiKey.jsx";
import { Header, Footer } from "./Templates.jsx";
// Home.js stores all forms pages

// API Component template
export default function KeyHome() {
        return (
            <>
                <Header />
                <div className="background-image background-image-mobile">
                    <div className="position-form">
                        <div className="outer-container">
                            <h2 className="font-hero-title welcome-title title">
                                Welcome to Busy Bites
                            </h2>
                            <GetAPIKey />
                        </div>
                    </div>
                    <p className="font-medium credit-text">
                        Photo by
                        <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                            Brooke Cagle
                        </a>
                        on
                        <a href="https://unsplash.com/photos/brown-bread-on-white-textile-0RUlEosIP8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                            Unsplash
                        </a>
                    </p>
                </div>
                <Footer />
            </>
        );
}

// Home Component Template
export function Home() {
        return (
        <>
        <Header/>
        <div className="background-image background-image-mobile">
            <div className="position-form">
                <div className="form-width">
                    <h2 className="font-hero-title welcome-title">
                        Welcome to Busy Bites
                    </h2>
                    <SearchRecipe />
                </div>
            </div>
            <p className="font-medium credit-text">Photo by <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Cagle</a> on <a href="https://unsplash.com/photos/brown-bread-on-white-textile-0RUlEosIP8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </div>
        <Footer/>
        </>
        );
}
