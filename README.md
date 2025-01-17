# Password Generator CLI

This is a simple command-line interface (CLI) program that generates a random password for the user.

## Features

- Generates a random password of a specified length.
- Supports password lengths from 1 to 32 characters.
- Provides a help message with usage instructions.

## Usage

To use the password generator, run the following command:

```sh
node index.js <length>
```

Replace `<length>` with the desired length of the password.

### Example

```sh
node index.js 12
```

Output:

```
----- Password Generated -----
Length: 12
Password: a1b2c3d4e5f6
```

## Options

- `-h`, `--help`: Show the help message and exit.

## Error Handling

The program includes error handling for the following cases:

- If the length is not a number.
- If the length is less than 1 or greater than 32.
- If the length is not a whole number.

## License

This project is licensed under the MIT License.

## Author

Alex Russell
