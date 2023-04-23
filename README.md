# Password Generator
This is a simple password generator library for JavaScript, allowing you to generate strong and secure passwords with various options.

## Installation
```bash
npm install pwd-generator
```
## Usage
To use the library, first import it in your JavaScript code:
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
| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `length` | `number` | `12` | The length of the generated password. |
| `useNumbers` | `boolean` | `true` | Whether or not to include numbers in the password. |
| `useSymbols` | `boolean|string` | `true` | Whether or not to include symbols in the password. If a string is provided, it will be used as the set of symbols. |
| `useLowercase` | `boolean` | `true` | Whether or not to include lowercase letters in the password. |
| `useUppercase` | `boolean` | `true` | Whether or not to include uppercase letters in the password. |
| `excludeSimilarChars` | `boolean` | `true` | Whether or not to exclude characters that look similar to each other, like 'i' and 'l'. |
| `excludeChars` | `string` | `""` | A string of characters to exclude from the password. |
| `requireOneCharFromEachPool` | `boolean` | `false` | Whether or not to require at least one character from each character pool (numbers, symbols, lowercase, and uppercase) in the password. |

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