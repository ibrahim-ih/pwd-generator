"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('PasswordGenerator', function () {
    describe('generate()', function () {
        it('should generate a password of the specified length', function () {
            var generator = new index_1.default({ length: 10 });
            var password = generator.generate();
            expect(password.length).toBe(10);
        });
        it('should include numbers in the password', function () {
            var generator = new index_1.default({ useNumbers: true });
            var password = generator.generate();
            expect(/[0-9]/.test(password)).toBe(true);
        });
        it('should include symbols in the password', function () {
            var generator = new index_1.default({ useSymbols: true });
            var password = generator.generate();
            expect(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\;\:\'\"\,\.\/\<\>\?\`\~]/.test(password)).toBe(true);
        });
        it('should include lowercase letters in the password', function () {
            var generator = new index_1.default({ useLowercase: true });
            var password = generator.generate();
            expect(/[a-z]/.test(password)).toBe(true);
        });
        it('should include uppercase letters in the password', function () {
            var generator = new index_1.default({ useUppercase: true });
            var password = generator.generate();
            expect(/[A-Z]/.test(password)).toBe(true);
        });
        it('should exclude similar characters', function () {
            var generator = new index_1.default({ excludeSimilarChars: true });
            for (var i = 0; i < 10; i++) {
                var password = generator.generate();
                expect(password).not.toMatch(/[ilLI|`]/);
            }
        });
        it('should exclude specified characters', function () {
            var generator = new index_1.default({ excludeChars: 'abc123' });
            var password = generator.generate();
            expect(/[abc123]/.test(password)).toBe(false);
        });
        it('should include at least one character from each pool', function () {
            var generator = new index_1.default({ requireOneCharFromEachPool: true });
            var password = generator.generate();
            expect(/[0-9]/.test(password)).toBe(true);
            expect(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\;\:\'\"\,\.\/\<\>\?\`\~]/.test(password)).toBe(true);
            expect(/[a-z]/.test(password)).toBe(true);
            expect(/[A-Z]/.test(password)).toBe(true);
        });
        it('should throw an error if no character pools are enabled', function () {
            var generator = new index_1.default({
                useNumbers: false,
                useSymbols: false,
                useLowercase: false,
                useUppercase: false,
            });
            expect(function () { return generator.generate(); }).toThrowError('At least one character pool must be enabled');
        });
    });
});
