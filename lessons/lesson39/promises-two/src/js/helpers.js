/**
 * @param {number} milliseconds
 */
export const wait = milliseconds => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}