# paddedDec2Bin

This is a light-weight, no-dependency JavaScript library for converting a decimal number into binary with optional padding zeros.

## Installation

```bash
npm install padded-decimal-to-binary
```

## Usage

### Import

```javascript
import { paddedDec2Bin } from 'padded-decimal-to-binary';
```

### Function call

``` javascript
const fiveInBinary = paddedDec2Bin(5);

console.log(fiveInBinary); // 101
```

### Params

- `decimal` (number) - *required* The decimal value to be converted.
- `length` (number) - *optional* The length of the output. Ignored if the output length is actually longer than the parameter.

## Examples

```javascript
paddedDec2Bin(5) // 101
paddedDec2Bin(5, 2) // 101 (output length is already longer than 2)
paddedDec2Bin(5, 4) // 0101 (padded)
```

## Test

I don't know how to write test. Learning.
