const init = () => {
  console.log("A");
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
      console.log("B");
      console.log(data);
    })
  console.log("C");
}


// Sample usage - do not modify
init();


