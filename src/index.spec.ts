import { PasswordGenerator } from '.index';

describe('PasswordGenerator', () => {
  describe('generate()', () => {
    it('should generate a password of the specified length', () => {
      const generator = new PasswordGenerator({ length: 10 });
      const password = generator.generate();
      expect(password.length).toBe(10);
    });

    it('should include numbers in the password', () => {
      const generator = new PasswordGenerator({ useNumbers: true });
      const password = generator.generate();
      expect(/[0-9]/.test(password)).toBe(true);
    });

    it('should include symbols in the password', () => {
      const generator = new PasswordGenerator({ useSymbols: true });
      const password = generator.generate();
      expect(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\;\:\'\"\,\.\/\<\>\?\`\~]/.test(password)).toBe(true);
    });

    it('should include lowercase letters in the password', () => {
      const generator = new PasswordGenerator({ useLowercase: true });
      const password = generator.generate();
      expect(/[a-z]/.test(password)).toBe(true);
    });

    it('should include uppercase letters in the password', () => {
      const generator = new PasswordGenerator({ useUppercase: true });
      const password = generator.generate();
      expect(/[A-Z]/.test(password)).toBe(true);
    });

    it('should exclude similar characters', () => {
      const generator = new PasswordGenerator({ excludeSimilarChars: true });
      const password = generator.generate();
      expect(/([iIlL1oO0])/g.test(password)).toBe(false);
    });

    it('should exclude specified characters', () => {
      const generator = new PasswordGenerator({ excludeChars: 'abc123' });
      const password = generator.generate();
      expect(/[abc123]/.test(password)).toBe(false);
    });

    it('should include at least one character from each pool', () => {
      const generator = new PasswordGenerator({ requireOneCharFromEachPool: true });
      const password = generator.generate();
      expect(/[0-9]/.test(password)).toBe(true);
      expect(/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\;\:\'\"\,\.\/\<\>\?\`\~]/.test(password)).toBe(true);
      expect(/[a-z]/.test(password)).toBe(true);
      expect(/[A-Z]/.test(password)).toBe(true);
    });

    it('should throw an error if no character pools are enabled', () => {
      const generator = new PasswordGenerator({
        useNumbers: false,
        useSymbols: false,
        useLowercase: false,
        useUppercase: false,
      });
      expect(() => generator.generate()).toThrowError('At least one character pool must be enabled');
    });
  });
});
