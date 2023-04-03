# Password Generator
A JavaScript library for generating random passwords.

## Installation
```bash
npm install pwd-generator
```
## Usage
```typescript
import { PasswordGenerator, PasswordGeneratorOptions } from 'pwd-generator';

const options: PasswordGeneratorOptions = {
  length: 16,
  useNumbers: true,
  useSymbols: '!@#$',
  useLowercase: true,
  useUppercase: true,
  excludeSimilarChars: true,
  excludeChars: 'oO0',
  requireOneCharFromEachPool: true,
};

const generator = new PasswordGenerator(options);
const password = generator.generate(); // eK$J5rM8wGnE2Lh7
```
### API
`PasswordGenerator`
The main class for generating passwords.

new PasswordGenerator(options?: Partial<PasswordGeneratorOptions>)
Creates a new PasswordGenerator instance with the given options. Any options not specified will use the default values.

#### Options
`length (number):` The length of the generated password. Defaults to `12`.

`useNumbers (boolean):` Whether or not to include numbers in the password. Defaults to `true`.

`useSymbols (boolean|string):` Whether or not to include symbols in the password. If a string is provided, it will be used as the set of symbols. Defaults to true.

`useLowercase (boolean):` Whether or not to include lowercase letters in the password. Defaults to `true`.

`useUppercase (boolean):` Whether or not to include uppercase letters in the password. Defaults to `true`.

`excludeSimilarChars (boolean):` Whether or not to exclude characters that look similar to each other, like 'i' and 'l'. Defaults to `true`.

`excludeChars (string):` A string of characters to exclude from the password. Defaults to an `empty string`.

`requireOneCharFromEachPool (boolean):` Whether or not to require at least one character from each character pool (numbers, symbols, lowercase, and uppercase) in the password. Defaults to `false`.

`generate(): string`

Generates a new password based on the current options and returns it as a string.

`PasswordGeneratorOptions`

An interface representing the options for a PasswordGenerator instance.

```typescript
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
```
## License
MIT