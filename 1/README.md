Project: Profile Cards Display 

Project Description:
This project is a web interface that displays profile cards for individuals. Each card contains a person's name, job title, profile picture, and social media links. 🚀

Technologies Used:
- HTML: For structuring the page.
- CSS: For styling, adding colors, and effects like `hover` and `animations`.
- Font Awesome: To easily add social media icons.

---

- Code Breakdown:
    -HTML Structure:
        - `<head>`: Includes page settings like character encoding (`UTF-8`), `viewport` configuration for responsiveness, and Font Awesome for icons.
        - `<body>`: Contains:
        - `.container`: The main wrapper holding all content.
        - `.main-card`: Holds two sets of cards, each containing three profile cards.
        - `.card`: Each card includes an image, user details, and social media links.
        - `<input type="radio">`: Enables navigation between card pages using buttons at the bottom.

---

-CSS Styling:
    - Font & Spacing Setup:
        - Using `box-sizing: border-box;` to ensure padding and borders are included in element sizes.
        - Setting `font-family: 'Poppins', sans-serif;` for a clean, modern look.

    - Card Design:
        - Profile images are circular (`border-radius: 50%`).
        - Blue background `6771ff` with white text for contrast.
        - Hover effect: `.card:hover { transform: translateY(-15px); }`.

    - Navigation Buttons:
        - Changing button appearance when selected: `one:checked ~ .button label.one { width: 35px; }`.

---

-How to Run the Project?
1. Download the files: Ensure you have:
- `index.html`
- `style.css`
- `img/3.jpg` (User profile image)
2. Open `index.html` in your browser and enjoy the animated profile cards! 

---

- Notes:
- You can easily edit images and names inside `index.html`.
- Adding more cards is simple—just copy the `<div class="card">` inside `<div class="cards">`.