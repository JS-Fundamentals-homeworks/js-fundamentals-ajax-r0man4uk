// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js


document.querySelector('#getUserButton').addEventListener('click', searchUserByName);

async function searchUserByName() {
    const userName = document.querySelector('#userNameInput').value.trim();
  
    if (userName === '') {
      alert('Enter the full name from list');
      return;
    }
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET"
      });
  
      if (!response.ok) {
        throw new Error(`Error loading from url: ${response.status}`);
      }
  
      const data = await response.json(); 
      console.log(data); 
  
      const user = data.find(u => u.name.toLowerCase() === userName.toLowerCase());
  
      if (user) {
        document.querySelector('#userCity').textContent = `City: ${user.address.city}`;
      } else {
        document.querySelector('#userCity').textContent = 'User not found, Enter the full name from list';
      }
  
    } catch (error) {
      console.error('Error fetching user data:', error);
      document.querySelector('#userCity').textContent = 'Error fetching user data';
    }
  }