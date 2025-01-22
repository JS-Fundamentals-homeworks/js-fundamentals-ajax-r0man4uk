// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
async function loadUsers() {

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
   
            const users = await response.json();
            
            const usersListElement = document.querySelector('.usersList');
            usersListElement.textContent = '';
            
            users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            usersListElement.appendChild(listItem);
            });

        } catch (error) {
            console.error("Error fetching", error);
            document.querySelector('.usersList').textContent = "Error loading users.";
        }
};

window.onload = loadUsers;