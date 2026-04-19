# QuickPOS — Landing Page

> A modern, responsive, single-page landing website for the **QuickPOS** Point of Sale system, built with PHP.

![QuickPOS Preview](assets/hero-mockup.png)

---

## 📋 Project Overview

QuickPOS is a cloud-based POS system that provides inventory management, sales analytics, and seamless integrations for businesses of all sizes. This landing page showcases the product's features, pricing tiers, and includes a working contact form.

## 🚀 Features

| Section | Description |
|---------|-------------|
| **Navigation & Header** | Fixed navbar with logo, nav links (Features, Pricing, Contact), and Sign Up CTA |
| **Hero Section** | Headline, sub-headline, primary CTA, and POS dashboard mockup |
| **Features Section** | 4 feature cards — Inventory, Analytics, Integration, Cloud Sync |
| **Pricing Section** | 3-tier pricing table — Basic ($19), Pro ($49), Enterprise ($99) |
| **Contact Form** | Name, Email, Message fields → POSTs to PHP handler → redirects to thank-you page |
| **Footer** | Company links, social media icons, copyright |

## 🛠️ Tech Stack

- **PHP** — Contact form processing & server-side validation
- **HTML5** — Semantic structure
- **CSS3** — Custom properties, glassmorphism, gradients, responsive grid
- **JavaScript** — Scroll animations, form validation, interactive effects
- **Phosphor Icons** — Lightweight icon library

## 📦 Project Structure

```
Code files/
├── index.html             # Main landing page
├── process_contact.php    # Contact form handler (validates & redirects)
├── thank-you.html         # Post-submission confirmation page
├── style.css              # Global styles & design tokens
├── script.js              # Client-side interactions & animations
├── assets/
│   ├── hero-mockup.png    # Hero section product mockup
│   └── feature-icons.png  # Feature section icons
└── README.md              # This file
```

## ⚙️ Setup Instructions

### Prerequisites
- PHP 7.4+ installed
- A local web server (e.g., XAMPP, WAMP, MAMP, or PHP's built-in server)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/quickpos-landing.git
   cd quickpos-landing
   ```

2. **Start a local PHP server:**
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:8000
   ```

### Using XAMPP / WAMP
1. Copy the project folder into your `htdocs` (XAMPP) or `www` (WAMP) directory.
2. Start Apache from the XAMPP/WAMP control panel.
3. Visit `http://localhost/Code files/` in your browser.

## 🧪 Testing

### Contact Form
1. Navigate to the **Contact Us** section.
2. Leave fields empty and click **Send Message** — client-side validation will highlight errors.
3. Fill in all fields correctly and submit — the PHP handler validates server-side, then redirects to `thank-you.html`.

## 📄 License

This project is part of an academic assignment for **Software Project Management (SPM)** — Spring 2026.

---

Made with ❤️ by the QuickPOS Team
