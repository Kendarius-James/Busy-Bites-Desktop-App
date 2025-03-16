import "./Styles/Home.css";
import logo from "../images/busy_bites_logo.png";
import { Link } from "react-router-dom";


// Header Template Component
export function Header() {
    let apiStatus = false;
    if (sessionStorage.getItem("ApiKeyStatus") === null) {
        apiStatus = sessionStorage.setItem("ApiKeyStatus", false);
    }
    apiStatus = sessionStorage.getItem("ApiKeyStatus");

    return (
        <header className="header header-background">
            {console.log(`Current API Status: ${apiStatus}`)}
            <img
                className="logo"
                src={logo}
                width="80px"
                height="80px"
                alt="Logo of a plate with knife and fork arranged like a clock"
            />
            <h1 className="gluten-font font-hero-title logo-text">{apiStatus.toLowerCase() === "true" ? <Link to="/home">Busy Bites</Link> : <Link to="/">Busy Bites</Link> }</h1>
        </header>
    );
}

// Footer Template Component
export function Footer() {
    return (
        <footer className="footer-background">
            <div className="font-small footer-container">
                <div className="footer-category">
                    <h3>This Service Is Made With</h3>
                    <ul>
                        {/* Insert IPC default browser here */}
                        <li><a href="https://spoonacular.com/food-api">Spoonacular Food API</a></li>
                    </ul>
                </div>
                
                <div className="footer-category">
                    <h3>Application Information</h3>
                    <ul>
                        <li> <Link to="/about-us">About Us</Link> </li>
                        <li> <Link to="/terms-of-use">Terms of Service</Link> </li>
                        <li> <Link to="/private-policy">Privacy Policy</Link> </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

// Image background template for forms
export function BodyBackground({ FormWindow }) {
    return (
        <>
        <Header/>
        <div className="background-image background-image-mobile">
            <div className="position-form">
                <FormWindow/>
            </div>
            <p className="font-medium credit-text">Photo by <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brooke Cagle</a> on <a href="https://unsplash.com/photos/brown-bread-on-white-textile-0RUlEosIP8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </div>
        <Footer/>
        </>
    );
}



