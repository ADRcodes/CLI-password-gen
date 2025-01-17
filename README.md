# Password Generator CLI

This is a simple command-line interface (CLI) program that generates a random password based on the user's specifications.

## Usage

To run the password generator, use the following command:

```sh
node index.js [options]
```

### Options

- `-h`, `--help`: Show the help message and exit.
- `--length <number>`: Specify the length of the password to generate (default is 8).
- `--uppercase`: Include uppercase letters in the password.
- `--numbers`: Include numbers in the password.
- `--symbols`: Include symbols in the password.

### Examples

Generate a password of length 6 with uppercase letters and numbers:

```sh
node index.js --length 6 --uppercase --numbers
```

Output:

```
----- Password Generated -----
Length:    6
Password:  F3gH7t
```

## License

This project is licensed under the MIT License.