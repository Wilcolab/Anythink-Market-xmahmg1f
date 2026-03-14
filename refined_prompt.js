/**
 * Converts a given string to camelCase format.
 *
 * The function trims whitespace, splits the input by spaces, underscores, or hyphens,
 * lowercases the first word, and capitalizes the first letter of each subsequent word,
 * then joins them together without separators.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string. Returns an empty string if input is empty or only contains separators.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase('foo_bar-baz'); // 'fooBarBaz'
 * toCamelCase('  multiple   separators__here '); // 'multipleSeparatorsHere'
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function trims whitespace, splits the input by spaces, underscores, or hyphens,
 * lowercases all words, and joins them together with dots as separators.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is empty or only contains separators.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toDotCase('hello world'); // 'hello.world'
 * toDotCase('foo_bar-baz'); // 'foo.bar.baz'
 * toDotCase('  multiple   separators__here '); // 'multiple.separators.here'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Trim whitespace and replace all separators with a single space
    const trimmed = input.trim();
    if (!trimmed) return '';

    // Split by any sequence of space, underscore, or hyphen
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    const [first, ...rest] = words;
    const camelCased = [
        first.toLowerCase(),
        ...rest.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
    ].join('');

    return camelCased;
}

module.exports = toCamelCase;

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    const trimmed = input.trim();
    if (!trimmed) return '';

    // Split by any sequence of space, underscore, or hyphen
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) return '';

    return words.map(word => word.toLowerCase()).join('.');
}

module.exports.toDotCase = toDotCase;

