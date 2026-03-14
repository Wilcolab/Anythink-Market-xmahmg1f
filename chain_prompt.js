/**
 * Converts a string to kebab-case.
 * Treats spaces, underscores, and hyphens as word separators.
 * Collapses multiple separators, trims whitespace, and lowercases the result.
 * 
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-case version of the input.
 * @throws {TypeError} If input is not a string.
 */
function toKebabCase(input) {
    if (input === undefined || input === null) {
        throw new TypeError('Input must be a non-null, non-undefined string.');
    }
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim whitespace and replace all separators with a single hyphen
    const normalized = input
        .trim()
        .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, hyphens with single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

    // If the result is empty or only separators, return empty string
    if (!normalized || /^-+$/.test(normalized)) {
        return '';
    }

    return normalized.toLowerCase();
}

// Example usage and test cases:
const testCases = [
    { input: "Hello World", expected: "hello-world" },
    { input: "hello_world_example", expected: "hello-world-example" },
    { input: " multiple separators_here ", expected: "multiple-separators-here" },
    { input: "version 2 update", expected: "version-2-update" },
    { input: "___", expected: "" },
    { input: "   ", expected: "" },
    { input: "", expected: "" },
    { input: "Already-Kebab-Case", expected: "already-kebab-case" },
    { input: "MiXeD_seParators-And CAPS", expected: "mixed-separators-and-caps" },
    { input: "123_numbers_456", expected: "123-numbers-456" },
];

for (const { input, expected } of testCases) {
    try {
        const result = toKebabCase(input);
        console.log(`toKebabCase(${JSON.stringify(input)}) → ${JSON.stringify(result)} ${result === expected ? '✓' : `✗ (expected ${JSON.stringify(expected)})`}`);
    } catch (e) {
        console.log(`toKebabCase(${JSON.stringify(input)}) → Error: ${e.message}`);
    }
}

// Invalid input test cases
const invalidInputs = [null, undefined, 123, {}, [], true];
for (const input of invalidInputs) {
    try {
        toKebabCase(input);
        console.log(`toKebabCase(${JSON.stringify(input)}) → ✗ (expected error)`);
    } catch (e) {
        console.log(`toKebabCase(${JSON.stringify(input)}) → Error: ${e.message} ✓`);
    }
}