
# Rave n Raga - Event Showcase Website

Welcome to the **Rave n Raga** website project — a digital space created to represent an underground music and event brand based in Kelowna, BC.

> ⚠️ This project is currently in development and not yet deployed publicly. This guide is for internal use only and is intended for use by the client or collaborators to run the project locally on their own machine.

---

## 🎯 Purpose

This website allows users to:
- Learn about the Rave n Raga brand and mission
- View upcoming events with full details
- Browse an image gallery
- Join the community via Instagram or WhatsApp
- See event venue location with Google Maps
- Scroll smoothly through a beautifully animated one-page experience

---

## 🖥️ Requirements

Before starting, make sure you have the following installed:

- [Node.js (v18+)](https://nodejs.org/)
- [Git](https://git-scm.com/) *(optional, but recommended for cloning)*

---

## 📦 How to Install and Run Locally

1. **Clone the Repository**

   If Git is installed, open your terminal and run:

   ```bash
   git clone https://github.com/YOUR_USERNAME/rave-n-raga-website.git
   cd rave-n-raga-website
   ```

   Or simply download the ZIP from GitHub and extract it.

2. **Install Dependencies**

   In the project folder, run:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the project locally with:

   ```bash
   npm run dev
   ```

   This will launch the site at: `http://localhost:3000`

---

## 📁 Project Structure (for context)

```
rave-n-raga-website/
├── public/              # Static assets (optional images, logos)
├── src/
│   └── app/
│       └── page.js      # Main homepage with all the UI sections
├── styles/              # Global CSS / Tailwind setup
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

---

## 🛠️ Notes for the Client

- This website is built using **Next.js (App Router)** and **Tailwind CSS** for styling.
- All data is currently **static** (no database or CMS integration yet).
- You can edit text and event details directly inside the file:  
  `src/app/page.js`
- Gallery images are mocked using placeholder photos (from [https://picsum.photos](https://picsum.photos)).

---

## 🚧 Future Enhancements (Planned)

- Event RSVP integration
- Admin panel or CMS to update content without code
- Email subscription form
- Deployment on a public domain

---

## 📬 Contact

For any setup help or questions, reach out to the developer team directly.

Enjoy the vibe! 🎵
