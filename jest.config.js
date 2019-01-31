module.exports = {
    // This is configuration created by "npx ts-jest config:init".
    preset: 'ts-jest',
    testEnvironment: 'node',

    
    // This is custom configuration.
    // Without these, jest will attempt to scan the whole repository.
    roots: ["<rootDir>/src", "<rootDir>/test"],
    testMatch: ["<rootDir>/test/**/*.ts"]
};
