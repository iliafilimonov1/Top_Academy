const checkForNewNotifications = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data); // visualize it then realize it's an array of objects
      data.forEach(user => {
        console.log(user.email);
      });
    });
}


// Sample usage - do not modify
const result = checkForNewNotifications();
