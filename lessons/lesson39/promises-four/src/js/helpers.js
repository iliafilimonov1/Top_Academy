export const waitForCompleteClick = () => {
  return new Promise(resolve => {
    document.querySelector("#complete-btn").addEventListener("click", () => {
      resolve();
    });
  });
}