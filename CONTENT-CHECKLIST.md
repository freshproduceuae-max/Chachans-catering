# Content Checklist — What to Add Next

This checklist tells you exactly what to fill in to make the website **yours**. Open `config.js` and find each section below.

---

## ✅ Step 1: Your Contact Details
**Edit these in `config.js`:**

- [ ] `name` — Your actual business name (replaces "Saffron & Sage Catering")
- [ ] `phone` — Your phone number with +971 country code
  - Example: `"+971501234567"`
- [ ] `whatsapp` — Same number, digits only (no + or spaces)
  - Example: `"971501234567"`
- [ ] `serviceArea` — The areas you deliver to
  - Example: `"Dubai, Abu Dhabi & Sharjah"`
- [ ] `instagram` — Your Instagram profile link, or leave as `""`
  - Example: `"https://instagram.com/yourhandle"`
- [ ] `availability` — When you cater (days/hours)
  - Example: `"Catering Wed–Sun · 2 weeks advance booking"`

---

## ✅ Step 2: Your Tagline (Main Headline)
**Edit in `config.js` → `tagline`**

- [ ] Replace the sample with YOUR business's promise in 1–2 sentences
  - Example: `"Authentic Indian catering, fresh daily, delivered to your door"`

---

## ✅ Step 3: Your Story (Who You Are)
**Edit in `config.js` → `story` array**

- [ ] Replace paragraph 1 with YOUR story (how you started, why you do this)
- [ ] Replace paragraph 2 with YOUR promise (what makes you different)
- Example format:
  ```
  "Started in 2015 by our family in Dubai, we cook everything fresh daily
   from our home kitchen using recipes from our grandmother."
  
  "Every order is made to your taste — halal, vegan, nut-free, you name it.
   No frozen food, no shortcuts."
  ```

---

## ✅ Step 4: Your Stats (Build Trust)
**Edit in `config.js` → `stats` array**

- [ ] Change the three numbers/labels to match YOUR business
  - Current: `"10+ Years catering"`, `"500+ Events served"`, `"100% Cooked fresh"`
  - Examples: `"8 Years experience"`, `"1000+ Happy families"`, `"Fresh daily"`

---

## ✅ Step 5: Your Events (Optional Custom)
**Edit in `config.js` → `events` array**

The 5 event types (Wedding, Majlis, Festival, Church, Other) are fixed, but you can:
- [ ] Change the descriptions (the `blurb` text) to match your style
- [ ] Update emoji if you want (e.g., 🎂 for Church, 🎊 for Festival)
- Example: `blurb: "Elegant biryani, kebabs & traditional desserts"`

---

## ✅ Step 6: Your Menu (Most Important!)
**Edit in `config.js` → `menu` array**

This is where you list YOUR dishes and prices. For each item:

- [ ] Change the **category names** if needed (e.g., "Mains" → "Rice & Curries")
- [ ] Change each **dish name** to YOUR actual dishes
- [ ] Change the **price** (in AED per person)
- [ ] Change the **description** (what's in the dish)
- [ ] Add a `tag` for dietary info: `tag: "Vegan"`, `tag: "Gluten-free"`, etc. (optional)

**Format:**
```javascript
{
  category: "Your Category Name",
  items: [
    { name: "Dish Name", price: "45", desc: "What's in it, flavors, sides." },
    { name: "Another Dish", price: "38", desc: "Description here.", tag: "Vegan" },
  ],
}
```

**Example for Indian catering:**
```javascript
{
  category: "Rice & Mains",
  items: [
    { name: "Chicken Biryani", price: "55", desc: "Fragrant basmati, tender chicken, raita." },
    { name: "Paneer Tikka Masala", price: "48", desc: "Creamy tomato sauce, fresh coriander.", tag: "Vegetarian" },
  ],
}
```

---

## ✅ Step 7: Your Photos (Gallery)
**Add photos to the `images/` folder:**

- [ ] Take 6+ photos of your best dishes/events
- [ ] Save them as: `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, etc.
- [ ] Put them in the `images/` folder (same folder as the other files)
- [ ] **That's it** — the website automatically displays them

**Also add these photos:**
- [ ] `event-wedding.jpg` — a beautiful wedding event photo
- [ ] `event-majlis.jpg` — a majlis/gathering photo
- [ ] `event-festival.jpg` — a festive event photo
- [ ] `event-church.jpg` — a community gathering photo
- [ ] `event-other.jpg` — a birthday or corporate event photo
- [ ] `story.jpg` — a warm photo of your family/kitchen (shown in "Our Story" section)

**No photo? No problem.**
- Leave `image: ""` in the event (leave it empty)
- The emoji and color will show instead
- Add the photo later anytime

---

## ✅ Step 8: Test & Deploy
Once all content is added:

1. **Save `config.js`**
2. **Refresh the website** in your browser
3. **Check everything looks good** (names, prices, photos, stories)
4. **Tell your web person** to deploy to Vercel

---

## ❓ Need Help?

- **Can't find a section?** Open `config.js` and search for the comment (looks like `// 👈 EDIT THIS`)
- **Photos not showing?** Make sure they're in the `images/` folder and filenames match exactly
- **Prices look wrong?** Make sure they're in quotes: `price: "45"` not `price: 45`

---

## 📱 Ready to Go Live?

When everything is filled in:
1. Email the updated `config.js` to your web person (or push it to GitHub)
2. They'll deploy to Vercel
3. Your catering site goes live! 🎉
