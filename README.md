# HW2 - Internship Tracker Updates

## What was implemented
* **CSS Specificity:** Completed `specificity.html` and `.txt`.
* **CSS Placement:** Added an external stylesheet (`styles.css`), internal styles to the head of `index.html`, and inline styles to the footer of `index.html`.
* **Business Card:** Added `card.html` utilizing ID, class, and element selectors.
* **Responsive Layout:** Created `overview.html` using CSS Grid for the layout shell, Flexbox for the inner cards, and a media query for mobile scaling.
* **JavaScript Interactivity:** Implemented a DOM-manipulating chatbot (`chatbot.js`) that reads from an array of objects.
* **Figma UI:** Designed an auth screen, exported `figma-auth.css`, and included a screenshot.

## HW3 - Interactive Portfolio and Accessibility Upgrades

## What was implemented
* **Portfolio Page:** Built `portfolio.html` featuring a customized, responsive submission form.
* **Accessible Form Layout:** Integrated 5 specific inputs (Text, Textarea, URL, Select, Date). Structured with semantic `<fieldset>`, `<legend>`, and tied errors natively via `aria-describedby` & `aria-invalid` bindings.
* **Client-Side Validation:** Written strictly in vanilla JavaScript (`portfolio.js`). Prevents form submission on logic errors, surfaces high-contrast error messages dynamically, and supports clearing via the reset button.
* **Dynamic Table Rendering:** Upon successful validation, the JS leverages efficient DOM manipulation (`document.createElement()`) to populate data into an `overflow-x: auto` responsive table structure.
* **Performance & Accessibility Optimization:** Achieved a highly optimal Lighthouse score framework:
    * **Accessibility:** Added `.skip-link` for keyboard navigation, high-contrast states on errors (`#d32f2f`), structured `<th scope="...">` tags for screen readers, and `aria-live="polite"` to announce errors.
    * **Performance:** Applied `loading="lazy"` to hero images. Kept DOM updates localized within standard event listeners. 
    
## Generative AI Transparency Declaration
In accordance with the UVT Generative AI policy, I used Google's Gemini LLM to assist with formatting the boilerplate CSS Grid layout and structuring the JavaScript logic for the chatbot's array filtering. The generated code was reviewed, adapted to fit my exact data (Vlad Galatanu's CV), and validated manually to ensure total compliance with the homework requirements.
