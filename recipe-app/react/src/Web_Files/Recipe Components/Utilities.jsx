// Renders text inside of the renderOptions function
export function renderOptionText(text) {
    text = String(text);
    switch(text.length){
        case 0:
            return "";
        case 1:
            return text.toUpperCase();
        default:
            return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
    }
}

// Displays mapped elements from an array
export function displayElements(array, outerClassName, innerClassName, isUnordered=true) {
    
    if (isUnordered){
        return (
            <ul className={outerClassName}>
                {array.map((arrayElement, index) => {
                   return (<li className={innerClassName} key={index}>{renderOptionText(arrayElement)}</li>);
                })}
            </ul>
        );
    }
    else {
        return (
            <ol className={outerClassName}>
                {array.map((arrayElement, index) => {
                   return (<li className={innerClassName} key={index}>{arrayElement}</li>);
                })}
            </ol>
        );
    }
}