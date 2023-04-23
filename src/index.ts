interface PasswordGeneratorOptions {
  length: number;
  useNumbers: boolean;
  useSymbols: boolean | string;
  useLowercase: boolean;
  useUppercase: boolean;
  excludeSimilarChars: boolean;
  excludeChars: string;
  requireOneCharFromEachPool: boolean;
}

class PasswordGenerator {
  private readonly options: PasswordGeneratorOptions;

  constructor(options: Partial<PasswordGeneratorOptions> = {}) {
    this.options = {
      length: options.length ?? 12,
      useNumbers: options.useNumbers ?? true,
      useSymbols: options.useSymbols ?? true,
      useLowercase: options.useLowercase ?? true,
      useUppercase: options.useUppercase ?? true,
      excludeSimilarChars: options.excludeSimilarChars ?? true,
      excludeChars: options.excludeChars ?? '',
      requireOneCharFromEachPool: options.requireOneCharFromEachPool ?? false,
    };
  }

  generate(): string {
    const chars = this.buildCharacterPool();
    let password = '';
    if (this.options.requireOneCharFromEachPool) {
      password += this.getRandomCharFromPool(chars.numbers);
      password += this.getRandomCharFromPool(chars.symbols);
      password += this.getRandomCharFromPool(chars.lowercase);
      password += this.getRandomCharFromPool(chars.uppercase);
    }

    for (let i = password.length; i < this.options.length; i++) {
      const char = chars.all[Math.floor(Math.random() * chars.all.length)];
      password += char;
    }
    return password;
  }

  private buildCharacterPool(): {
    all: string[];
    numbers: string[];
    symbols: string[];
    lowercase: string[];
    uppercase: string[];
  } {
    let allChars = '';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
        .filter((char) => !this.options.excludeChars.includes(char))
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
  }

  private getRandomCharFromPool(pool: string[]): string {
    return pool[Math.floor(Math.random() * pool.length)];
  }
}

export default PasswordGenerator;
