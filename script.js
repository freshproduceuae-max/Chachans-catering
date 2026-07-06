/* Site behaviour. You normally don't need to edit this file —
   change your details and content in config.js instead. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- Simple text fills ---------- */
  function setText(sel, val) { if (val != null) $$(sel).forEach(function (e) { e.textContent = val; }); }
  setText("[data-biz-name]", S.name);
  setText("[data-tagline]", S.tagline);
  setText("[data-availability]", S.availability);
  setText("[data-area]", S.serviceArea);
  setText("[data-menu-note]", S.menuNote);

  /* ---------- Contact links ---------- */
  var waLink = S.whatsapp ? "https://wa.me/" + S.whatsapp : "#";
  $$("[data-wa]").forEach(function (e) { e.href = waLink; e.target = "_blank"; e.rel = "noopener"; });
  $$("[data-tel]").forEach(function (e) { if (S.phone) { e.href = "tel:" + S.phone.replace(/\s/g, ""); e.textContent = S.phone; } });
  $$("[data-ig]").forEach(function (e) { if (S.instagram) { e.href = S.instagram; e.target = "_blank"; e.rel = "noopener"; } else { e.style.display = "none"; } });

  /* ---------- Story + stats ---------- */
  var storyBox = $("[data-story]");
  if (storyBox && S.story) { storyBox.innerHTML = ""; S.story.forEach(function (p) { storyBox.appendChild(el("p", null, esc(p))); }); }
  var statsBox = $("[data-stats]");
  if (statsBox && S.stats) {
    statsBox.innerHTML = "";
    S.stats.forEach(function (s) {
      var d = el("div"); d.appendChild(el("span", "stat__num", esc(s.num))); d.appendChild(el("span", "stat__label", esc(s.label))); statsBox.appendChild(d);
    });
  }

  /* ---------- Event cards ---------- */
  var grid = $("#eventsGrid");
  if (grid && S.events) {
    S.events.forEach(function (ev, i) {
      var card = el("button", "event-card reveal");
      card.type = "button";
      card.setAttribute("data-event", ev.label);
      card.setAttribute("data-emoji", ev.emoji || "✨");
      var media = el("div", "event-card__media");
      media.style.backgroundImage = (ev.image ? "url('" + ev.image + "'), " : "") + "var(--card-grad)";
      media.appendChild(el("span", "event-card__emoji", esc(ev.emoji || "✨")));
      var body = el("div", "event-card__body");
      body.appendChild(el("span", "event-card__label", esc(ev.label)));
      if (ev.blurb) body.appendChild(el("span", "event-card__blurb", esc(ev.blurb)));
      body.appendChild(el("span", "event-card__cta", "See how it works →"));
      card.appendChild(media); card.appendChild(body);
      card.addEventListener("click", function () { openModal(ev); });
      grid.appendChild(card);
    });
  }

  /* ---------- Menu ---------- */
  var menuGrid = $("#menuGrid");
  if (menuGrid && S.menu) {
    S.menu.forEach(function (col) {
      var c = el("div", "menu__col reveal");
      c.appendChild(el("h3", "menu__cat", esc(col.category)));
      (col.items || []).forEach(function (it) {
        var item = el("div", "menu__item");
        var tag = it.tag ? ' <em class="tag">' + esc(it.tag) + "</em>" : "";
        item.innerHTML =
          '<div class="menu__row"><span class="menu__name">' + esc(it.name) + tag +
          '</span><span class="menu__dots"></span><span class="menu__price">' + esc(it.price) + "</span></div>" +
          (it.desc ? '<p class="menu__desc">' + esc(it.desc) + "</p>" : "");
        c.appendChild(item);
      });
      menuGrid.appendChild(c);
    });
  }

  /* ---------- Gallery ---------- */
  var galleryGrid = $("#galleryGrid");
  if (galleryGrid && S.gallery) {
    S.gallery.forEach(function (src, i) {
      var cell = el("div", "gallery__item reveal" + (i === 1 || i === 4 ? " gallery__item--wide" : ""));
      cell.style.backgroundImage = "url('" + src + "'), var(--card-grad)";
      cell.appendChild(el("span", "gallery__item-label", esc(src)));
      galleryGrid.appendChild(cell);
    });
  }

  /* ---------- Quote form selects ---------- */
  var eventSel = $("#f-event");
  if (eventSel && S.events) { eventSel.innerHTML = ""; S.events.forEach(function (ev) { eventSel.appendChild(new Option(ev.label, ev.label)); }); }
  var guestSel = $("#f-guests");
  if (guestSel && S.guestOptions) { guestSel.innerHTML = ""; S.guestOptions.forEach(function (g, i) { var o = new Option(g, g); if (i === 1) o.selected = true; guestSel.appendChild(o); }); }

  /* ---------- Steps popup ---------- */
  var modal = $("#stepsModal");
  var stepsList = $("#stepsList");
  if (stepsList && S.steps) {
    stepsList.innerHTML = "";
    S.steps.forEach(function (st, i) {
      var li = el("li", "step");
      li.innerHTML =
        '<span class="step__num">' + (i + 1) + "</span>" +
        '<span class="step__body"><span class="step__title">' + esc(st.title) + "</span>" +
        (st.text ? '<span class="step__text">' + esc(st.text) + "</span>" : "") + "</span>";
      stepsList.appendChild(li);
    });
  }
  function openModal(ev) {
    if (!modal) return;
    var t = $("[data-modal-event]"); if (t) t.textContent = ev.label;
    var em = $("[data-modal-emoji]"); if (em) em.textContent = ev.emoji || "✨";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    // Pre-select this event in the quote form
    if (eventSel) { for (var i = 0; i < eventSel.options.length; i++) { if (eventSel.options[i].value === ev.label) { eventSel.selectedIndex = i; break; } } }
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  if (modal) {
    $$("[data-close]", modal).forEach(function (e) { e.addEventListener("click", closeModal); });
    $("#modalCta").addEventListener("click", function () { closeModal(); setTimeout(function () { var n = $("#f-name"); if (n) n.focus(); }, 400); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  }

  /* ---------- Year ---------- */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  var toggle = $("#navToggle"), links = $("#navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("a", links).forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("is-open"); toggle.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }); });
  }

  /* ---------- Navbar shrink ---------- */
  var nav = $("#nav");
  function onScroll() { if (window.scrollY > 24) nav.classList.add("is-scrolled"); else nav.classList.remove("is-scrolled"); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    var els = $$(".reveal:not(.is-visible)");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      els.forEach(function (e) { io.observe(e); });
    } else { els.forEach(function (e) { e.classList.add("is-visible"); }); }
  }
  observeReveals();

  /* ---------- Quote form -> WhatsApp ---------- */
  var form = $("#bookForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var d = new FormData(form);
      var lines = [
        "Hi " + (S.name || "") + ", I'd like a catering quote 🍽️",
        "",
        "Name: " + (d.get("name") || ""),
        "Phone: " + (d.get("phone") || ""),
        "Event: " + (d.get("event") || ""),
        "Date: " + (d.get("date") || ""),
        "Guests: " + (d.get("guests") || ""),
      ];
      var notes = (d.get("notes") || "").toString().trim();
      if (notes) lines.push("Details: " + notes);
      var text = encodeURIComponent(lines.join("\n"));
      if (S.whatsapp) window.open("https://wa.me/" + S.whatsapp + "?text=" + text, "_blank", "noopener");
      else window.location.href = "mailto:?subject=" + encodeURIComponent("Catering quote request") + "&body=" + text;
    });
  }
})();
