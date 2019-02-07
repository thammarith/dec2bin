/**
 * Returns the binary value of the given decimal number. Pads the binary value if the second argument is provided.
 * 
 * @since 1.0.0
 * 
 * @example
 * // returns 101
 * paddedDec2Bin(5);
 * // returns 101 (length is ignored)
 * paddedDec2Bin(5, 2);
 * // returns 0101
 * paddedDec2Bin(5, 4);
 * 
 * @param {string} decimal - The decimal value to be converted into binary.
 * @param {string} [length] - The desired length of the output string. Ignored if the output length is shorter.
 * 
 * @returns {number} Returns the calculated binary value of the given decimal number.
 */
function paddedDec2Bin(decimal, length) {
  return length ? decimal.toString(2).padStart(length, '0') : decimal.toString(2);
}

export { paddedDec2Bin };
