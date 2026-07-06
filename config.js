/* =====================================================================
   ⭐  EDIT EVERYTHING ABOUT YOUR SITE HERE  ⭐
   This is the ONLY file you need to change. Edit the text between the
   quotes, save, and refresh the page. Nothing else needs touching.
   ===================================================================== */

window.SITE = {

  /* ---------- 1. BUSINESS DETAILS ---------- */
  name: "Saffron & Sage Catering",
  phone: "+971500000000",            // your phone number (for the Call button)
  whatsapp: "971500000000",          // WhatsApp: country code + number, DIGITS ONLY (no + or spaces)
  serviceArea: "Abu Dhabi, Dubai & across the UAE",
  instagram: "https://instagram.com/yourhandle",   // or "" to hide
  availability: "Catering 7 days a week · Book ahead",

  /* ---------- 2. HEADLINE ---------- */
  tagline: "Fresh, home-style food brought to your celebration — from intimate gatherings to grand occasions.",

  /* ---------- 3. OUR STORY (one line per paragraph) ---------- */
  story: [
    "What started as Sunday lunches for loved ones grew into a catering kitchen built on recipes passed down through generations. We shop fresh, cook everything to order, and deliver and set up so your guests feel cared for.",
    "No shortcuts, no fuss — just honest, generous food that makes your event unforgettable.",
  ],
  stats: [
    { num: "10+",  label: "Years catering" },
    { num: "500+", label: "Events served" },
    { num: "100%", label: "Cooked fresh for you" },
  ],

  /* ---------- 4. EVENTS WE CATER (the clickable picture cards) ----------
     Add a photo for each in the images/ folder, or leave the image as ""
     to show a coloured card with just the emoji. */
  events: [
    { label: "Wedding",  emoji: "💍", image: "images/event-wedding.jpg",  blurb: "Elegant menus for your big day." },
    { label: "Majlis",   emoji: "🫖", image: "images/event-majlis.jpg",   blurb: "Warm hospitality for family & guests." },
    { label: "Festival", emoji: "🎉", image: "images/event-festival.jpg", blurb: "Crowd-pleasing food for celebrations." },
    { label: "Church",   emoji: "⛪", image: "images/event-church.jpg",   blurb: "Warm catering for community gatherings." },
    { label: "Other",    emoji: "✨", image: "images/event-other.jpg",    blurb: "Birthdays, corporate & everything else." },
  ],

  /* ---------- 5. THE 3 SIMPLE STEPS (shown when a card is clicked) ---------- */
  steps: [
    { title: "Pick your preference",       text: "Tell us your event, guest count and the food you love." },
    { title: "Approve your quote",         text: "We send a tailored menu and price — you confirm what works." },
    { title: "Let us prepare your order",  text: "We cook fresh, deliver and set everything up on the day." },
  ],

  /* ---------- 6. THE MENU ---------- */
  menuNote: "Sample prices per person, in AED. Packages scale with your headcount — allergies and preferences happily accommodated.",
  menu: [
    {
      category: "Starters",
      items: [
        { name: "Garden Mezze Platter", price: "28", desc: "Hummus, muhammara, olives & warm bread." },
        { name: "Crispy Halloumi",      price: "24", desc: "Pan-fried, honey & toasted sesame." },
        { name: "Seasonal Soup",        price: "18", desc: "Ask us about the day's fresh batch." },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Slow-Cooked Lamb",        price: "62", desc: "Fragrant rice, roasted nuts, yoghurt." },
        { name: "Saffron Chicken",         price: "48", desc: "Grilled to order with seasonal greens." },
        { name: "Garden Vegetable Tagine", price: "42", desc: "Slow-braised in warming spices.", tag: "Vegan" },
      ],
    },
    {
      category: "Sweets & Drinks",
      items: [
        { name: "Pistachio Baklava", price: "22", desc: "Layered, buttery, honey-soaked." },
        { name: "House Lemon-Mint",  price: "16", desc: "Freshly pressed, lightly sweet." },
        { name: "Cardamom Coffee",   price: "14", desc: "Rich, aromatic, the perfect finish." },
      ],
    },
  ],

  /* ---------- 7. GALLERY (put these photos in images/) ---------- */
  gallery: [
    "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpg",
    "images/gallery-5.jpg",
    "images/gallery-6.jpg",
  ],

  /* ---------- 8. GUEST-COUNT OPTIONS (quote form) ---------- */
  guestOptions: ["Up to 20", "20–50", "50–100", "100–200", "200+"],
};
