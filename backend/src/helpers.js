import crypto from "crypto";

export function birthDateToFormatDate(birthDate) {
  if (!birthDate) {
    return undefined
  }
  const arr = birthDate.split('.');
  return new Date(arr[2], --arr[1], arr[0]);
}

export function hashPassword(password) {
  if (!password) {
    return undefined
  }

  return crypto
    .createHash('md5')
    .update(password)
    .digest('hex');
}