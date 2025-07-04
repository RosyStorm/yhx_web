document.getElementById('messageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            addMessage(name, message);
            document.getElementById('messageForm').reset();
        });

        function addMessage(name, message) {
            const messagesList = document.getElementById('messages');
            const li = document.createElement('li');
            li.textContent = `${name}: ${message}`;
            messagesList.appendChild(li);
        }