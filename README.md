
# PasswordGenerator

The PasswordGenerator class is a utility for generating random passwords based on specified options.

## Installation
You can install the PasswordGenerator package using npm:

```bash
  npm install random-pwd-gen
```

## Usage
Import the PasswordGenerator class and create an instance with the desired options:

```javascript
import PasswordGenerator from 'password-generator';

const options = {
  length: 10, // Length of the password (default: 12)
  useNumbers: true, // Include numbers in the password (default: false)
  useSymbols: true, // Include symbols in the password (default: false)
  useLowercase: true, // Include lowercase letters in the password (default: false)
  useUppercase: true, // Include uppercase letters in the password (default: false)
  excludeSimilarChars: true, // Exclude similar characters like 'l', 'I', '1', etc. (default: false)
  excludeChars: 'abc', // Exclude specific characters from the password (default: "")
  requireOneCharFromEachPool: false, // Require at least one character from each enabled character pool (default: false)
};

const generator = new PasswordGenerator(options);

const password = generator.generate();
console.log(password); // Example output: "A7#gR5x9P2"
```
## Options
The PasswordGeneratorOptions interface defines the available options for configuring the password generation:

```typescript
interface PasswordGeneratorOptions {
  length?: number; // Length of the password (default: 12)
  useNumbers?: boolean; // Include numbers in the password (default: false)
  useSymbols?: boolean | string; // Include symbols in the password (default: false)
  useLowercase?: boolean; // Include lowercase letters in the password (default: false)
  useUppercase?: boolean; // Include uppercase letters in the password (default: false)
  excludeSimilarChars?: boolean; // Exclude similar characters like 'l', 'I', '1', etc. (default: false)
  excludeChars?: string; // Exclude specific characters from the password (default: "")
  requireOneCharFromEachPool?: boolean; // Require at least one character from each enabled character pool (default: false)
}
```
- `length`: The desired length of the password.
- `useNumbers`: Set to true to include numbers in the password.
- `useSymbols`: Set to true to include symbols in the password. You can also provide a custom string of symbols.
- `useLowercase`: Set to true to include lowercase letters in the password.
- `useUppercase`: Set to true to include uppercase letters in the password.
- `excludeSimilarChars`: Set to true to exclude similar characters like 'l', 'I', '1', etc.
- `excludeChars`: A string containing specific characters to exclude from the password.
- `requireOneCharFromEachPool`: Set to true to ensure at least one character is included from each enabled character pool.

## Methods
#### generate(): string
Generates a random password based on the specified options.

Returns:
- A string representing the generated password.

## License
This project is licensed under the MIT License.

