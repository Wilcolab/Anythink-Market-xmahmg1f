function toCamelCase(text) {
    return text
        .replace(/[_-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase('hello world-example_text')); // "helloWorldExampleText"