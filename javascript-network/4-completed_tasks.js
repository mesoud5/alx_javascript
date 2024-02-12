const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.body);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  todos.forEach(todo => {
    if (todo.completed) {
      if (!completedTasks[todo.userId]) {
        completedTasks[todo.userId] = 1;
      } else {
        completedTasks[todo.userId]++;
      }
    }
  });
  
  console.log(completedTasks);
});
