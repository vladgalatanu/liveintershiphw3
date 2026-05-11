const qnaBank = [
     { keys: ["skill", "skills", "tech", "python"], answer: "Vlad's top skills are Python, SQL, Cyber Security (Kali Linux), and Cisco Networking." },
     { keys: ["education", "degree", "university", "uvt"], answer: "He is pursuing a Bachelor's in Computer Science at West University of Timișoara." },
     { keys: ["experience", "work", "job", "volunteer", "mentor"], answer: "He volunteers as a Programming Instructor & Mentor at Code Club Romania." },
     { keys: ["hello", "hi"], answer: "Hello! Try asking about Vlad's skills or education." }
 ];
 
 const chatForm = document.getElementById('chat-form');
 const chatInput = document.getElementById('chat-input');
 const messagesArea = document.getElementById('messages-area');
 
 chatForm.addEventListener('submit', function(e) {
     e.preventDefault();
     
     const text = chatInput.value.trim().toLowerCase();
     if (!text) return;
 
     addMessage(chatInput.value, 'user');
     chatInput.value = '';
 
     let response = "I don't know that. Try typing 'skills', 'education', or 'experience'.";
     for (let item of qnaBank) {
         if (item.keys.some(k => text.includes(k))) {
             response = item.answer;
             break;
         }
     }
 
     setTimeout(() => addMessage(response, 'bot'), 300);
 });
 
 function addMessage(text, sender) {
     const div = document.createElement('div');
     div.classList.add('msg', sender);
     div.textContent = text;
     messagesArea.appendChild(div);
     messagesArea.scrollTop = messagesArea.scrollHeight;
 }