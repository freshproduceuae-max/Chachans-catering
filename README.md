# 🍽️ Family Catering Website

A fast, beautiful one-page website for a catering business. No build step, no
frameworks to install — just open it in a browser. It works on phones, tablets
and computers, and automatically supports light **and** dark mode.

## What it does

- **Hero** with the business name, tagline and three actions: Get a quote · See Menu · WhatsApp
- **Our Story** section to build trust
- **Occasions** strip (weddings, corporate, birthdays, private parties…)
- **Catering menu** with categories, sample dishes and per-person prices
- **Gallery** for food & event photos
- **Quote-request form** (event type, date, guest count) that opens **WhatsApp with the request already typed out** — no server needed
- **Call**, **Instagram** and a floating **WhatsApp** button
- **Service area** shown clearly (no storefront needed)

---

## ✅ Make it yours in 3 steps

### 1. Your details (2 minutes)
Open **`config.js`** and change the values between the quotes:

```js
name:        "Saffron & Sage Catering",   // your business name
phone:       "+971500000000",             // your phone number
whatsapp:    "971500000000",              // WhatsApp: country code + number, digits only
serviceArea: "Abu Dhabi, Dubai & across the UAE",
instagram:   "https://instagram.com/yourhandle",
availability:"Catering 7 days a week · Book ahead",
```

> 💡 The **WhatsApp number** must be the full international number with **no `+`,
> spaces or dashes**. UAE example: `971501234567`.

### 2. Your words & menu
In **`index.html`**, replace the sample text: the tagline, the *Our Story*
paragraphs, and the menu items/prices. Everything is clearly laid out — just
type over the examples.

Also update the `<title>` and `<meta name="description">` near the top of
`index.html` — that's what shows up on Google.

### 3. Your photos
Put your images in the **`images/`** folder, then replace the dashed
placeholder boxes. Each placeholder shows the filename it expects
(e.g. `images/gallery-1.jpg`). Good photos make the biggest difference — bright,
close-up shots of the food work best.

To use a real hero background photo, open `styles.css`, find `.hero__bg` and
follow the comment there.

---

## 🚀 Put it online (free options)

This is a plain static site, so almost any host works:

| Host | How |
|------|-----|
| **Vercel** | Already configured (`vercel.json`). Import the repo and set this folder as the root, or run `vercel` in this folder. |
| **Netlify** | Drag-and-drop this whole folder onto app.netlify.com. Done. |
| **GitHub Pages** | Push to GitHub → Settings → Pages → deploy from this folder. |
| **Cloudflare Pages** | Connect the repo, framework preset: *None*, output dir: this folder. |

Later you can buy a custom domain (e.g. `saffronandsage.ae`) and point it at
whichever host you chose.

---

## Preview locally

Just double-click `index.html`, or run a tiny server for the best experience:

```bash
cd restaurant-website
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Want more later?

Easy upgrades when you're ready: online payments, a real booking calendar,
online ordering/delivery, a blog, or multiple languages (Arabic + English).
Just ask.
