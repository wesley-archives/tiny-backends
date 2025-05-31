export const testTemplateLibrary = {
    jest: [
        {
            src: 'test/jest/test.js',
            dest: 'test/test.js',
        },
    ],
    jasmine: [
        {
            src: 'test/jasmine/jasmine.json',
            dest: 'spec/support/jasmine.json',
        },
        {
            src: 'test/jasmine/test.js',
            dest: 'test/test.js',
        }
    ],
    mocha: [
        {
            src: 'test/mocha/test.js',
            dest: 'test/test.js',
        },
    ],
};
