"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator(options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.options = {
            length: (_a = options.length) !== null && _a !== void 0 ? _a : 12,
            useNumbers: (_b = options.useNumbers) !== null && _b !== void 0 ? _b : true,
            useSymbols: (_c = options.useSymbols) !== null && _c !== void 0 ? _c : true,
            useLowercase: (_d = options.useLowercase) !== null && _d !== void 0 ? _d : true,
            useUppercase: (_e = options.useUppercase) !== null && _e !== void 0 ? _e : true,
            excludeSimilarChars: (_f = options.excludeSimilarChars) !== null && _f !== void 0 ? _f : true,
            excludeChars: (_g = options.excludeChars) !== null && _g !== void 0 ? _g : '',
            requireOneCharFromEachPool: (_h = options.requireOneCharFromEachPool) !== null && _h !== void 0 ? _h : false,
        };
    }
    PasswordGenerator.prototype.generate = function () {
        var chars = this.buildCharacterPool();
        var password = '';
        if (this.options.requireOneCharFromEachPool) {
            password += this.getRandomCharFromPool(chars.numbers);
            password += this.getRandomCharFromPool(chars.symbols);
            password += this.getRandomCharFromPool(chars.lowercase);
            password += this.getRandomCharFromPool(chars.uppercase);
        }
        for (var i = password.length; i < this.options.length; i++) {
            var char = chars.all[Math.floor(Math.random() * chars.all.length)];
            password += char;
        }
        return password;
    };
    PasswordGenerator.prototype.buildCharacterPool = function () {
        var _this = this;
        var allChars = '';
        var numbers = '0123456789';
        var symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        var lowercase = 'abcdefghijklmnopqrstuvwxyz';
        var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (!this.options.useNumbers) {
            numbers = '';
        }
        if (!this.options.useSymbols) {
            symbols = '';
        }
        if (!this.options.useLowercase) {
            lowercase = '';
        }
        if (!this.options.useUppercase) {
            uppercase = '';
        }
        allChars = numbers + symbols + lowercase + uppercase;
        if (!allChars) {
            throw new Error('At least one character pool must be enabled');
        }
        if (this.options.excludeChars) {
            allChars = allChars
                .split('')
                .filter(function (char) { return !_this.options.excludeChars.includes(char); })
                .join('');
        }
        if (this.options.excludeSimilarChars) {
            allChars = allChars.replace(/[ilLI|`]/g, '');
        }
        return {
            all: allChars.split(''),
            numbers: numbers.split(''),
            symbols: symbols.split(''),
            lowercase: lowercase.split(''),
            uppercase: uppercase.split(''),
        };
    };
    PasswordGenerator.prototype.getRandomCharFromPool = function (pool) {
        return pool[Math.floor(Math.random() * pool.length)];
    };
    return PasswordGenerator;
}());
exports.default = PasswordGenerator;
