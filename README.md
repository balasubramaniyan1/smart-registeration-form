# smart-registeration-form

# Real-Time Validated Registration Form

A clean, responsive, and accessible **Single-Page Registration Form** built with vanilla HTML, CSS, and JavaScript. The form features instant client-side input validation, a dynamic character counter, and fluid switching to an acknowledgement screen upon successful submission without reloading the page.

## 🚀 Features

- **Real-Time Input Validation**: Evaluates data integrity instantly as the user types using JavaScript `input` event listeners.
- **Dynamic Submit Button**: Remains safely disabled until all layout requirements are fully satisfied.
- **Live Text Counter**: Tracks text constraint in the Bio field visually (e.g., `80 / 200 characters`).
- **Seamless Screen Transitions**: Hides the form layout and displays a dynamic success acknowledgement screen without needing a backend reload.
- **State Reset Capability**: Provides a "Go Back" utility button that resets input fields, error boundaries, and counter criteria to start fresh.

---

## 📋 Validation Rules

| Field Name | Validation Criteria | Error/Behavior |
| :--- | :--- | :--- |
| **Name** | Must not be empty | Displays "Name field cannot be empty." |
| **Email** | Must match proper syntax standard (`user@domain.com`) | Displays "Please enter a valid email address." |
| **Password**| Minimum of **6 characters** long | Displays "Password must be at least 6 characters long." |
| **Bio** | Hard ceiling limit of **200 characters** | Visual updates to `X / 200 characters` container |

---

## 🛠️ Technology Stack

- **HTML5**: Form structures, input restrictions (`novalidate` active to allow customizable JS validation patterns).
- **CSS3**: Layout design centered using flexbox, interface element indicators (`:disabled`, `:focus`), and component styling.
- **JavaScript (ES6)**: State tracking dictionary, active DOM injection, RegEx matching, and visibility manipulation via utility class toggles (`.hidden`).

---

## 📦 How to Use

Since this project runs entirely inside a single container file, running it is quick and effortless:

1. **Download/Copy Content**: Copy the code bundle into a text editor of choice.
2. **Save File**: Save your document as an HTML configuration extension (e.g., `index.html`).
3. **Launch Project**: Double-click your saved file to launch it instantly inside any web browser (Chrome, Safari, Edge, Firefox).

---

## 📂 File Architecture Overview

```text
├── index.html       # Combined structure, layout rules, and browser scripts
└── README.md        # Documentation and runtime validation rules
```
