// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email: user345@domain.co', () => {
  expect(isEmail('user345@domain.co')).toBe(true);
});
test('invalid email: user@domain', () => {
  expect(isEmail('user@domain')).toBe(false);
});
test('invalid email: userdomain.com', () => {
  expect(isEmail('userdomain.com')).toBe(false);
});

// isStrongPassword
test('valid password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('valid password: A1_b2_c3', () => {
  expect(isStrongPassword('A1_b2_c3')).toBe(true);
});
test('invalid password: 1234abcd', () => {
  expect(isStrongPassword('1234abcd')).toBe(false);
});
test('invalid password: A!', () => {
  expect(isStrongPassword('A!')).toBe(false);
});

// isDate
test('valid date: 12/25/2025', () => {
  expect(isDate('12/25/2025')).toBe(true);
});
test('valid date: 1/1/2026', () => {
  expect(isDate('1/1/2026')).toBe(true);
});
test('invalid date: 2025/12/25', () => {
  expect(isDate('2025/12/25')).toBe(false);
});
test('invalid date: 13-01-2020', () => {
  expect(isDate('13-01-2020')).toBe(false);
});

// isHexColor
test('valid hex color: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid hex color: aabbcc', () => {
  expect(isHexColor('aabbcc')).toBe(true);
});
test('invalid hex color: #GGG', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
test('invalid hex color: 12345', () => {
  expect(isHexColor('12345')).toBe(false);
});
