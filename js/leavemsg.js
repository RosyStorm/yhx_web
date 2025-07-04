document.getElementById('messageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const message = this.querySelector('textarea').value;
            addMessage(name, message);
            this.reset(); // 清空表单
        });

        // 加载保存的留言
        function loadMessages() {
            const messages = JSON.parse(localStorage.getItem('message-list')) || [];
            const messagesList = document.getElementById('messages');
            messagesList.innerHTML = '';
            
            messages.forEach(msg => {
                const li = document.createElement('li');
                li.className = 'message';
                li.textContent = `${msg.name}: ${msg.message}`;
                messagesList.appendChild(li);
            });
        }

        // 添加新留言
        function addMessage(name, message) {
            const messages = JSON.parse(localStorage.getItem('message-list')) || [];
            messages.push({ name, message });
            localStorage.setItem('message-list', JSON.stringify(messages));
            
            // 更新显示
            const messagesList = document.getElementById('messages');
            const li = document.createElement('li');
            li.className = 'message';
            li.textContent = `${name}: ${message}`;
            messagesList.appendChild(li);
        }

        // 页面加载时显示留言
        window.addEventListener('DOMContentLoaded', loadMessages);