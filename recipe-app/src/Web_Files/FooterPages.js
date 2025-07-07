import "./Styles/Home.css";
import { Header, Footer } from "./Templates";
import { Link, useNavigate } from "react-router-dom";

// Template for recipe background 
// Displays document-like background and positions forground content
function PageLayout({content}) {
    return (
        <div className="recipe-background">
            <div className="recipe-content">
                    {content}
            </div>
        </div>
    );
}

////////////////////////
// Footer page links //
//////////////////////

// Questions page component
export function Questions() {

    function QuestionsContent() {
        return (
            <>
                <h1>About Us</h1>
                <p>
                    
                </p>
            </>
        );
    }

    return (
        <div>
            <Header />
                <PageLayout content={<QuestionsContent/>}/>
            <Footer />
        </div>
    );
}

// About us page component
export function AboutUs() {
    const navigate = useNavigate();

    const onHandleClick = () => {
        let apiStatus = false;
        apiStatus = sessionStorage.getItem("ApiKeyStatus");
        apiStatus.toLowerCase() === "true" ? navigate("/home") : navigate("/"); 
    }

    function AboutContent() {
        return (
<div className="font-medium">
                <h2>About Busy Bites</h2>
                <p>
                    Welcome to Busy Bites - where fast-paced lives meet
                    flavorful dishes. Our mission is simple: to deliver quick
                    and easy-to-make recipes that fit seamlessly into your
                    schedule.
                </p>
                <p>
                    With Busy Bites, you have access to over 4,000 quality
                    recipes designed for any occasion. Whether it's a
                    last-minute family gathering, a casual dinner, or mastering
                    your next signature dish. No matter your time constraints,
                    we're here to help you create meals that are simply
                    delicious.
                </p>
                <p>
                    Don't let a busy day stop you from enjoying great food. Make
                    your next favorite dish a reality - search, cook, and savor
                    with Busy Bites!
                </p>

                <button className="font-small about-button" onClick={onHandleClick}>Start Cooking Now!</button>

                <h2>The Inspiration Behind Busy Bites</h2>
                <p>
                    Meet James—a recent college graduate passionate about software
                    development and user experience design. Like many in his
                    shoes, James spends countless hours honing his craft, job
                    hunting, and juggling the demands of a fast-paced life.
                </p>

                <p>
                    One evening, after a long day at his computer, James faced a
                    dilemma: an empty stomach and limited options for a quick,
                    satisfying meal. Frustrated, he realized this was a problem
                    many busy individuals share.
                </p>

                <p>
                    Determined to find a solution, James combined his technical
                    expertise with his love for problem-solving. The result?
                    <i>Busy Bites</i>—a recipe platform designed to help
                    time-strapped individuals create delicious dishes with
                    ingredients they already have on hand.
                </p>

                <p>
                    Today, James hopes <i>Busy Bites</i> inspires others like him
                    to embrace cooking, even on their busiest days. With this
                    app, preparing healthy, fulfilling meals is no longer a
                    chore—it's an opportunity to thrive.
                </p>

                <h2>Why Choose Busy Bites?</h2>
                <ul>
                    <li><span className="about-bold">Search Over 4,000 Recipes: </span>Find dishes by name with ease.</li>
                    <li><span className="about-bold">Filter by Meal Type: </span>Narrow down options based on breakfast, lunch, dinner, or more.</li>
                    <li><span className="about-see-more">*</span><span className="about-bold">Exclude Allergy Ingredients: </span>Remove recipes containing allergens for safer cooking.</li>
                    <li><span className="about-bold">Refine by Cookware: </span>Discover recipes that match the tools in your kitchen. </li>
                    <li><span className="about-bold">Set Time Limits: </span>Search for recipes based on the time you have available. </li>
                    <li><span className="about-bold">Ingredient-Based Search: </span>Find meals you can make with what's already in your pantry. </li>
                    <li><span className="about-bold">User Feedback at a Glance:</span> Read summaries of what other users think of each dish. </li>
                    <li><span className="about-bold">Step-by-Step Instructions: </span>Follow detailed guides and time estimates for every recipe. </li>
                    <br></br>
                </ul>
                <span className="font-medium about-see-more">*</span>
                <p className="font-small see-more-text">For your health and safety, we recommend reviewing recipes for allergen information before cooking!</p>
                
            </div>
        );
    }

    return (
        <div>
            <Header />
                <PageLayout content={<AboutContent/>}/>
            <Footer />
        </div>
    );
}

//Terms page component
export function Terms() {

    function TermsContent() {

        const termsRevisionDate = "December 10, 2024";
        return (
            <div className="font-medium">
                <h1>Terms of Service </h1>
                <ol>
                    <p>Last Updated: {termsRevisionDate}</p>
                    <li className="section-heading">Acceptance of Terms</li>
                    <p>By using the Busy Bites application ("Busy Bites" or "the application"), you agree to these Terms of Service. If you do not agree to these terms, you may not use the application. </p>
                    <p>Busy Bites uses the Spoonacular API to retrieve and display recipe data. By using Busy Bites, you also agree to comply with the Spoonacular API Terms of Service and Privacy Policy. Busy Bites is not affiliated or endorsed by Spoonacular.</p>
                    <p>These Terms of Service apply to all users of the application. </p>
                    
                    <li className="section-heading">Purpose of the Application</li>
                    <p>Busy Bites is a personal project developed for educational purposes and portfolio presentation. The application is not intended for commercial use or as a substitute for professional dietary, nutritional, or medical advice. </p>
                    <p>Busy Bites is designed for <b>personal use</b>, which includes exploring the app’s functionality to search for recipes or to evaluate the technical skills demonstrated by its creator. </p>
                    <p>By using the Busy Bites application, users acknowledge and agree to: </p>
                    <ol>
                        <li className="section-sub-heading">    Use the app at their own discretion. </li>
                        <li className="section-sub-heading">    Assume responsibility for understanding the risks outlined in the following sections: </li>
                        <ol type="a">
                            <li>4. External Hyperlinks Disclaimer </li>
                            <li>5. Allergen Information Disclaimer</li>
                            <li>7. Limitation of Liability </li>
                            <li>10. Modifications and Updates </li>
                        </ol>
                    </ol>

                    <li className="section-heading">External API Disclaimer</li>
                    <p>The Busy Bites application relies on third-party APIs, such as the Spoonacular API, to retrieve and display recipe information and ensure proper functionality. While these external sources are essential to the application, Busy Bites does not control or guarantee the accuracy, completeness, or availability of the data provided by these services. </p>
                    <p>Users acknowledge that any reliance on data from external APIs is at their own discretion, and Busy Bites assumes no responsibility for errors, omissions, or interruptions in the data provided by these third-party services.</p>
                
                    <li className="section-heading">    External Hyperlinks Disclaimer </li>
                    <p>Busy Bites may include hyperlinks to external websites or sources to credit the original authors of recipes or the providers of API services. By clicking on these hyperlinks, users acknowledge that they are leaving the Busy Bites application and agree to exercise caution while visiting external sites. Busy Bites is not responsible for the content, risks, or liabilities associated with these external websites. </p>
                
                    <li className="section-heading">    Allergen Information Disclaimer </li>
                    <p>Busy Bites includes features to assist users in filtering recipes based on potential allergens. However, users are solely responsible for independently verifying allergen information before preparing or consuming any recipes. Busy Bites does not guarantee the accuracy of allergen data and assumes no liability for any adverse reactions resulting from its use.</p>

                    <li className="section-heading">Data Privacy</li>
                    <p>Busy Bites does not store or process user data beyond the duration of the current session. Any inputs or preferences provided by users are temporarily utilized to enhance functionality and are discarded once the application is closed. For more information about data privacy, please check out our <Link to="/private-policy">Privacy Policy</Link>.</p>
                
                    <li className="section-heading">Limitation of Liability</li>
                    <p>Busy Bites is provided on an "as-is" basis, without any express or implied warranties. The developer assumes no responsibility for any errors, interruptions, inaccuracies, or damages resulting from the use of this application.</p>
                
                    <li className="section-heading">User Conduct</li>
                    <p>Users agree to use Busy Bites solely for its intended purpose. Any misuse of the application—including but not limited to attempts to harm, disrupt, or abuse its functionality—is strictly prohibited. Violations may result in restricted access or other appropriate actions.</p>
                
                    <li className="section-heading">    API Quotas and Availability </li>
                    <p>Busy Bites relies on the Spoonacular API for its functionality, which may be subject to usage quotas and availability. The app is not responsible for interruptions or limitations caused by API downtimes or quota restrictions.</p>
                    <p>Users are not required to purchase any Spoonacular API plans to access Busy Bites as of December 2, 2024. However, users must create a Spoonacular API account and obtain an API key to use the application. If users choose to purchase a Spoonacular API plan, they are responsible for following Spoonacular's purchase procedures and adhering to their <a href="https://spoonacular.com/food-api/terms">terms and conditions</a>. </p>
                
                    <li className="section-heading">Modifications and Updates</li>
                    <p>Busy Bites is a personal project and may be updated, modified, or discontinued at any time without prior notice. Users are encouraged to check for updates periodically to stay informed about changes.</p>
                
                    <li className="section-heading">Contact Information</li>
                    <p>For questions, concerns, or feedback about Busy Bites, please contact us at KendariusJames@protonmail.com.</p>
                </ol>
            </div>
        );
    }

    return (
        <div>
            <Header />
                <PageLayout content={<TermsContent/>}/>
            <Footer />
        </div>
    );
}

// Privacy page component
export function Privacy() {

    function PrivacyContent() {
        const privacyRevisedDate = "December 10, 2024";

        return (
            <div className="font-medium">
                <h1>Privacy Policy</h1>
                <ol>
                    <p>Last Updated: {privacyRevisedDate}</p>
                    <li className="section-heading">Introduction</li>
                    <p>At Busy Bites ("we "or "our"), your privacy is a top priority to us. This Private Policy outlines how we collect, use, store, and protect your personal information when you use our application. By using Busy Bites, you agree to the practices outlined in this policy. We encourage you to read it carefully to understand your rights and our responsibilities. Busy Bites use the Spoonacular API to retrive recipe data. By using Busy Bites, you agree to their private policy when using this application. Busy Bites is not affiliated or endorsed by Spoonacular. </p>
                
                    <li className="section-heading">Information Collected</li>
                    <p>We collect the following types of information to ensure the application operates efficiently and effectively: </p>
                    <ol>
                        <li><b>Spoonacular API Key: </b> Provided by users to enable API functionality within the Busy Bites application. </li>
                        <li><b>Session Storage Data: </b> Temporary data stored during your session to display and manage recipe results between page refreshes. </li>
                    </ol>
                    <p>Busy Bites does not collect or store personally identifiable information (PII). </p>
                    
                    <li className="section-heading">How Information Is Used</li>
                    <p>We use your information for the following purposes:</p>
                    <ol>
                        <li><b>Spoonacular API Key: </b>To search recipes and retrieve results using the Spoonacular API. </li>
                        <li><b>Session Storage: </b>To temporary store recipe results and ensure smooth navigation within the application. </li>
                    </ol>

                    <li className="section-heading">Cookies and Tracking</li>
                    <p>As of December 10, 2024, Busy Bites do not use cookies or any tracking technologies to collect user data. </p>
                    
                    <li className="section-heading">Third-Party Sharing</li>
                    <p>Busy Bites shares limited information with third-party service providers to enable core functionality: </p>
                    <ol>
                        <li><b>Spoonacular API: </b>    Usage data (e.g., quotas and number of requests) is shared directly with the Spoonacular API to process recipe requests. </li>
                    </ol>
                    <p>Busy Bites does not share user data for marketing or advertising purposes. </p>

                    <li className="section-heading">Data Retention</li>
                    <p>Busy Bites retains information only for the duration of your current session to display recipes within the application. Once the session ends, all information is deleted. Any information processed or retained by the Spoonacular API is subject to their <a href="https://spoonacular.com/food-api/privacy">Privacy Policy</a>.</p>

                    <li className="section-heading">Security</li>
                    <p>Busy Bites does not store data beyond the active session, and all previously entered information is deleted upon session termination. While Busy Bites does not process sensitive personal data, we recommend users follow standard online security practices. </p>
                    
                    <li className="section-heading">User Rights</li>
                    <p>Busy Bites does not store personal data beyond the current session and does not process or retain any long-term user information. </p>

                    <li className="section-heading">Children's Privacy</li>
                    <p>Busy Bites is not intended for use by individuals under the age of 13. If a user is suspected to be under the age of 13, please stop using this application immediately and contact a parent or guardian. Busy Bites does not knowingly collect or store data from children, and any information entered during a session is not retained. </p>
                    <p>If you have created a Spoonacular account and are under 13, please refer to Spoonacular's <a href="https://spoonacular.com/food-api/privacy">Privacy Policy</a> for further instructions regarding account management. </p>
                    <p>For jurisdictions with differing age thresholds under child privacy laws, the applicable local age limit will apply. </p>

                    <li className="section-heading">Changes to the Privacy Policy</li>
                    <p>Busy Bites may update this Privacy Policy often. We will notify you of any significant changes by posting a revised policy on this page with an updated effective date. Please review this policy regularly to stay informed about our privacy practices.</p>
                    
                    <li className="section-heading">Contact Information</li>
                    <p>If you have any questions, concerns, or feedback about this Privacy Policy or how Busy Bites handles your information, please contact us at KendariusJames@protonmail.com. We value your privacy and will respond promptly to any inquiries. </p>
                </ol>
                <p></p>
            </div>
        );
    }

    return (
        <div>
            <Header />
                <PageLayout content={<PrivacyContent/>}/>
            <Footer />
        </div>
    );
}

