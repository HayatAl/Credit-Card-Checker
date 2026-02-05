# Credit-Card-Checker
# 💳 Credit Card Checker (Luhn Algorithm)

This project is a JavaScript tool that validates credit card numbers using the **Luhn Algorithm**. It can process multiple card numbers at once, identify which are invalid, and name the companies that issued the faulty cards.

## 🧐 What is the Luhn Algorithm?
The Luhn algorithm is a checksum formula used to validate a variety of identification numbers, such as credit card numbers. It works by:
1. Counting from right to left.
2. Doubling every second digit.
3. If the doubled number is greater than 9, subtract 9 from it.
4. Summing all the digits.
5. If the total sum modulo 10 is 0, the number is valid.



---

## ✨ Features
- **Validation:** Checks if a single credit card number is valid or not.
- **Batch Processing:** Scans a large list of card numbers and filters out the invalid ones.
- **Company Identification:** Identifies which credit card companies issued the invalid numbers based on the first digit:
  - `3`: Amex (American Express)
  - `4`: Visa
  - `5`: Mastercard
  - `6`: Discover

---

## 🛠️ Functions Explained

### 1. `validateCred(arr)`
The core function that implements the Luhn logic. It returns whether a card is valid or invalid.

### 2. `findInvalidCard(batch)`
Takes a nested array of card numbers and returns a new list containing only the numbers that failed the validation.

### 3. `idInvalidCardCompanies(invalidBatch)`
Takes the list of invalid cards and returns a unique list of companies that issued them, avoiding duplicates.

---

## 🚀 How to Run
1. Copy the code into any JavaScript environment (like Node.js or the browser console).
2. Call `findInvalidCard(batch)` to get the invalid cards.
3. Call `idInvalidCardCompanies(x)` to see which companies they belong to.

```javascript
const invalidCards = findInvalidCard(batch);
console.log(idInvalidCardCompanies(invalidCards)); 
// Output: ['Amex', 'Visa', 'Mastercard', 'Discover']
