function findLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Input Output Description
const testData = [
  { input: 'abcabcbb', output: 3, description: 'Basic happy path' },
  { input: 'bbbb', output: 1, description: 'All characters are the same' },
  { input: 'pwwkew', output: 3, description: 'Substring with repeating character' },
  { input: '', output: 0, description: 'Empty string' },
  { input: ' ', output: 1, description: 'String with only one character' },
  { input: 'abcdefg', output: 7, description: 'All unique characters' },
];

for (const data of testData) {
  const { input, output, description } = data;
  const result = findLongestSubstring(input);
  console.log(`${description}: ${result === output ? 'PASS' : 'FAIL'}`);
}
