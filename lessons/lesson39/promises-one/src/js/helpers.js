/**
 * @param {number} milliseconds
 */
export const wait = milliseconds => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (milliseconds === 3000) {
        resolve();
      } else {
        reject();
      }
    }, milliseconds);
  });
}