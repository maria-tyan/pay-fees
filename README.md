# Pay-fees

## Project setup
```
npm install
```

### To run the application use
```
npm start __input_filename.json__
```

### To run tests
```
npm test
```


Task
====

## Situation
Users can go to a branch to cash in and/or cash out from account. There are also commission fees for both cash in and cash out. Only supported currency is EUR.

## Commission Fees

### For Cash In
Commission fee - 0.03% from total amount, but no more than 5.00 EUR.

### For Cash Out
There are different commission fees for cash out for natural and legal persons.

#### Natural Persons
Default commission fee - 0.3% from cash out amount.

1000.00 EUR per week (from monday to sunday) is free of charge.

If total cash out amount is exceeded - commission is calculated only from exceeded amount (that is, for 1000.00 EUR there is still no commission fee).

#### Legal persons
Commission fee - 0.3% from amount, but not less than 0.50 EUR for operation.

### Rounding
After calculating commission fee, it's rounded to the smallest currency item (for example, for EUR currency - cents) to upper bound (ceiled). For example, 0.023 EUR should be rounded to 3 Euro cents.

## Input data
Input data is given in JSON file. Performed operations are given in that file. In each object following data is provided:
```js
{
    "date": "2016-01-05", // operation date in format `Y-m-d`
    "user_id": 1, // user id, integer
    "user_type": "natural", // user type, one of “natural”(natural person) or “juridical”(legal person)
    "type": "cash_in", // operation type, one of “cash_in” or “cash_out”
    "operation": {
        "amount": 200, // operation amount(for example `2.12` or `3`)
        "currency": "EUR" // operation currency `EUR`
    }
}
```
All operations are ordered by their date ascendingly.

## Expected Result
As a single argument program must accept a path to the input file.

Program must output result to stdout.

Result - calculated commission fees for each operation. In each line only final calculated commission fee must be provided without currency.

