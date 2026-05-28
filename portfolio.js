document.addEventListener('DOMContentLoaded', () => {
     const form = document.getElementById('project-form');
     const tbody = document.getElementById('projects-tbody');
 
     form.addEventListener('submit', function(e) {
         e.preventDefault(); 
         let isValid = true;
 
         // Grab inputs
         const nameInput = document.getElementById('proj-name');
         const descInput = document.getElementById('proj-desc');
         const urlInput = document.getElementById('proj-url');
         const techInput = document.getElementById('proj-tech');
         const dateInput = document.getElementById('proj-date');
 
         // Validation Helper Function
         function validateField(input, errorId, condition, errorMessage) {
             const errorSpan = document.getElementById(errorId);
             if (condition) {
                 input.setAttribute('aria-invalid', 'true');
                 errorSpan.textContent = errorMessage;
                 isValid = false;
             } else {
                 input.removeAttribute('aria-invalid');
                 errorSpan.textContent = '';
             }
         }
 
         // 1. Validate Name
         validateField(nameInput, 'name-error', nameInput.value.trim() === '', 'Project name is required.');
         
         // 2. Validate Description (min 10 characters)
         validateField(descInput, 'desc-error', descInput.value.trim().length < 10, 'Description must be at least 10 characters long.');
         
         // 3. Validate URL (Basic Regex format)
         const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
         validateField(urlInput, 'url-error', !urlPattern.test(urlInput.value.trim()), 'Please enter a valid URL (e.g., https://github.com).');
         
         // 4. Validate Technology Dropdown
         validateField(techInput, 'tech-error', techInput.value === '', 'Please select a primary technology.');
         
         // 5. Validate Date
         validateField(dateInput, 'date-error', dateInput.value === '', 'Please select a completion date.');
 
         // If all validation passes, construct the table row
         if (isValid) {
             const row = document.createElement('tr');
 
             // Construct Row Header (Project Name)
             const thName = document.createElement('th');
             thName.setAttribute('scope', 'row');
             thName.textContent = nameInput.value.trim();
             row.appendChild(thName);
 
             // Construct Description
             const tdDesc = document.createElement('td');
             tdDesc.textContent = descInput.value.trim();
             row.appendChild(tdDesc);
 
             // Construct URL Link
             const tdUrl = document.createElement('td');
             const link = document.createElement('a');
             link.href = urlInput.value.trim();
             link.textContent = 'View Project';
             link.target = '_blank';
             link.rel = 'noopener noreferrer'; // Security standard
             tdUrl.appendChild(link);
             row.appendChild(tdUrl);
 
             // Construct Technology
             const tdTech = document.createElement('td');
             tdTech.textContent = techInput.value;
             row.appendChild(tdTech);
 
             // Construct Date
             const tdDate = document.createElement('td');
             tdDate.textContent = dateInput.value;
             row.appendChild(tdDate);
 
             // Append row to the DOM
             tbody.appendChild(row);
 
             // Reset the form and set focus back to first input
             form.reset();
             nameInput.focus();
         }
     });
 
     // Clear error states instantly when user types/changes input
     const inputs = form.querySelectorAll('input, textarea, select');
     inputs.forEach(input => {
         input.addEventListener('input', () => {
             input.removeAttribute('aria-invalid');
             const errorId = input.getAttribute('aria-describedby');
             if (errorId) {
                 document.getElementById(errorId).textContent = '';
             }
         });
     });
 });