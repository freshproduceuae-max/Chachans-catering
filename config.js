/* =====================================================================
   ⭐  YOUR CATERING SITE SETTINGS  ⭐

   This is the ONLY file to edit. Change the text in the quotes,
   save the file (Ctrl+S or Cmd+S), then refresh the website.
   Everything else is automatic.

   ❓ Questions? Look for comments like 👈 THIS and follow them.
   ===================================================================== */

window.SITE = {

  // ═══════════════════════════════════════════════════════════════════
  // 📱  YOUR CONTACT DETAILS (how customers reach you)
  // ═══════════════════════════════════════════════════════════════════

  name: "Saffron & Sage Catering",          // 👈 YOUR BUSINESS NAME (appears everywhere on site)

  phone: "+971500000000",                   // 👈 YOUR PHONE NUMBER (for the "Call us" button)
  whatsapp: "971500000000",                 // 👈 YOUR WHATSAPP NUMBER: digits only, no +, no spaces
                                            // Example: if your number is +971 50 123 4567, write: 971501234567

  serviceArea: "Abu Dhabi, Dubai & across the UAE",  // 👈 WHERE YOU DELIVER (edit to match your area)

  instagram: "https://instagram.com/yourhandle",     // 👈 YOUR INSTAGRAM (or leave as "" to hide the link)

  availability: "Catering 7 days a week · Book ahead",  // 👈 WHEN YOU'RE AVAILABLE


  // ═══════════════════════════════════════════════════════════════════
  // 📝  YOUR TAGLINE (the main headline visitors see)
  // ═══════════════════════════════════════════════════════════════════

  tagline: "Fresh, home-style food brought to your celebration — from intimate gatherings to grand occasions.",  // 👈 YOUR TAGLINE


  // ═══════════════════════════════════════════════════════════════════
  // 📖  YOUR STORY (tell customers who you are)
  // ═══════════════════════════════════════════════════════════════════

  story: [
    // Each line below is one paragraph. Add as many as you like.
    "What started as Sunday lunches for loved ones grew into a catering kitchen built on recipes passed down through generations. We shop fresh, cook everything to order, and deliver and set up so your guests feel cared for.",
    "No shortcuts, no fuss — just honest, generous food that makes your event unforgettable.",
  ],

  // Three facts that build trust (e.g., years in business, events catered, etc.)
  stats: [
    { num: "10+",  label: "Years catering" },          // 👈 EDIT: Change number and label
    { num: "500+", label: "Events served" },           // 👈 EDIT: Change number and label
    { num: "100%", label: "Cooked fresh for you" },    // 👈 EDIT: Change number and label
  ],


  // ═══════════════════════════════════════════════════════════════════
  // 🎉  EVENTS YOU CATER (the big clickable cards)
  // ═══════════════════════════════════════════════════════════════════
  //
  // For each event:
  //  - "label" = name shown on card
  //  - "emoji" = fun icon (💍 💒 🎉 etc.)
  //  - "image" = photo filename (put photos in images/ folder)
  //  - "blurb" = short description (one line)
  //
  // PHOTOS: If you don't have a photo yet, leave image as "" and just the emoji will show.
  //

  events: [
    { label: "Wedding",  emoji: "💍", image: "images/event-wedding.jpg",  blurb: "Elegant menus for your big day." },
    { label: "Majlis",   emoji: "🫖", image: "images/event-majlis.jpg",   blurb: "Warm hospitality for family & guests." },
    { label: "Festival", emoji: "🎉", image: "images/event-festival.jpg", blurb: "Crowd-pleasing food for celebrations." },
    { label: "Church",   emoji: "⛪", image: "images/event-church.jpg",   blurb: "Warm catering for community gatherings." },
    { label: "Other",    emoji: "✨", image: "images/event-other.jpg",    blurb: "Birthdays, corporate & everything else." },
  ],


  // ═══════════════════════════════════════════════════════════════════
  // 🪜  THE 3-STEP PROCESS (shown when customer clicks an event)
  // ═══════════════════════════════════════════════════════════════════

  steps: [
    { title: "Pick your preference",       text: "Tell us your event, guest count and the food you love." },
    { title: "Approve your quote",         text: "We send a tailored menu and price — you confirm what works." },
    { title: "Let us prepare your order",  text: "We cook fresh, deliver and set everything up on the day." },
  ],


  // ═══════════════════════════════════════════════════════════════════
  // 🍽️  YOUR MENU (dishes and prices)
  // ═══════════════════════════════════════════════════════════════════

  // First, the note at the top of the menu section:
  menuNote: "Sample prices per person, in AED. Packages scale with your headcount — allergies and preferences happily accommodated.",

  // Now the dishes (organized by category):
  menu: [
    {
      category: "Starters",  // 👈 CATEGORY NAME
      items: [
        // Each item has: name, price (in AED), description, and optional "tag" for dietary labels
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


  // ═══════════════════════════════════════════════════════════════════
  // 📸  YOUR GALLERY (beautiful photos of your food & events)
  // ═══════════════════════════════════════════════════════════════════
  //
  // Add 6+ photos to the images/ folder, name them gallery-1.jpg, gallery-2.jpg, etc.
  // List them here in order.
  //

  gallery: [
    "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpg",
    "images/gallery-5.jpg",
    "images/gallery-6.jpg",
  ],


  // ═══════════════════════════════════════════════════════════════════
  // 👥  GUEST-COUNT OPTIONS (for quote form)
  // ═══════════════════════════════════════════════════════════════════

  guestOptions: ["Up to 20", "20–50", "50–100", "100–200", "200+"],
};
