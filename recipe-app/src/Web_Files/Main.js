import { FormDataProvider } from "./SharedData";
import Home from "./Home";
import Results from "./RecipeResults";

export function App() {
    return (
        <FormDataProvider>
            <Home/>
            <Results/>
        </FormDataProvider>
    );
}

export default App;