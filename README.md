# SIN Validator

The [SIN Validator](https://sin-validator-jlaow.ondigitalocean.app/) was built with Nextjs and includes a react component that uses a server action that calls other functions internally to validate a SIN number. The `validateSin` function doesn't need to be a server function necessarily and could be called from the client directly if we need to (used here just for experimentation).

See validator here: [https://sin-validator-jlaow.ondigitalocean.app/](https://sin-validator-jlaow.ondigitalocean.app/)

## Getting Started

First, clone this project

```bash
git clone https://github.com/federico-hv/sin-validator && cd sin-validator
```

Then, install the dependencies:

```bash
yarn install
```

Finally, run the development server:

```bash
yarn dev
```

Once the server is running go to `http://localhost:3000/sin-validator`and try to validate a number. The react component will validate your input using a `validateSin` server function that makes use of several checks to make sure the SIN is valid.

The validation is done following these rules:

1. Check that the characters in the string are exactly 9
2. Doubling every second digit on the input
3. Checking if the total sum of all the numbers of the string are a multiple of 10

The `validateSin` does some other checks internally like:

`digitCount` -> Check if the character number is 9 and additionally if the input is just numbers

`doubleEverySecondDigit` -> Returns a new string of numbers with every second digit doubled

`checkSumValidation` -> Checks if the sum of numbers in the string is multiple of 10

## Testing

Some tests have been included to check the SinValidator component and the validateSin function

To run the tests:

```bash
yarn test
```

To run the tests in watch mode:

```bash
yarn test:watch
```

## Production

To build for production:

```bash
yarn build
```

To serve in production:

```bash
yarn start
```
