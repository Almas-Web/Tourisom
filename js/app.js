(function () {
  "use strict";
  var S = window.SITE, CATS = window.CATS, SERVICES = window.SERVICES, PACKAGES = window.PACKAGES, GALLERY = window.GALLERY;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function waLink(text) {
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(text);
  }
  function money(n) { return S.currency + " " + n.toLocaleString("en-US"); }
  function catLabel(id) { var c = CATS.filter(function (x) { return x.id === id; })[0]; return c ? c.label : id; }

  /* Use a real photo if it exists in /images, otherwise keep the gradient */
  function tryImage(el, src) {
    if (!src) return;
    var im = new Image();
    im.onload = function () { el.style.backgroundImage = "url('" + src + "')"; el.classList.add("has-img"); };
    im.src = src;
  }

  /* ---------- Contact details ---------- */
  $$("[data-wa]").forEach(function (a) { a.href = waLink(a.getAttribute("data-wa")); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-phone]").forEach(function (a) { a.textContent = S.phoneDisplay; a.href = "tel:+" + S.whatsapp; });
  $$("[data-email]").forEach(function (a) { a.textContent = S.email; a.href = "mailto:" + S.email; });
  $$("[data-address]").forEach(function (e) { e.textContent = S.address; });
  $$("[data-social]").forEach(function (a) { a.href = S.social[a.getAttribute("data-social")] || "#"; });
  $("#year").textContent = new Date().getFullYear();
  tryImage($(".hero-sky"), $(".hero-sky").getAttribute("data-img"));

  /* ---------- Mobile menu ---------- */
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });

  /* ---------- Service selects + date minimum ---------- */
  var opts = '<option value="">Choose a service</option>' + SERVICES.map(function (s) { return "<option>" + esc(s.title) + "</option>"; }).join("");
  $$("[data-services]").forEach(function (sel) { sel.innerHTML = opts; });
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  $$("[data-mindate]").forEach(function (i) { i.min = today.toISOString().slice(0, 10); });

  /* ---------- Services grid ---------- */
  $("#servGrid").innerHTML = SERVICES.map(function (s) {
    return '<a class="serv" href="#packages" data-cat="' + s.id + '" style="--hue:' + s.hue + '">' +
      '<span class="serv-dot" aria-hidden="true"></span><h3>' + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></a>";
  }).join("");
  $$(".serv").forEach(function (a) {
    a.addEventListener("click", function () { setCat(a.getAttribute("data-cat")); });
  });

  /* ---------- Packages: filter + render ---------- */
  var chips = $("#chips"), grid = $("#pkgGrid"), current = "all";
  chips.innerHTML = CATS.map(function (c) {
    return '<button type="button" class="chip" role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === "all") + '">' + esc(c.label) + "</button>";
  }).join("");

  function setCat(id) {
    current = id;
    $$(".chip").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-cat") === id); });
    renderPackages();
  }
  chips.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (b) setCat(b.getAttribute("data-cat"));
  });

  function renderPackages() {
    var list = PACKAGES.filter(function (p) { return current === "all" || p.cat === current; });
    grid.innerHTML = list.map(function (p) {
      var svc = SERVICES.filter(function (s) { return s.id === p.cat; })[0];
      return '<article class="pkg">' +
        '<div class="pkg-img" data-img="images/' + p.id + '.jpg" style="--hue:' + svc.hue + '">' +
        (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
        '<span class="pkg-cat">' + esc(catLabel(p.cat)) + "</span></div>" +
        '<div class="pkg-body"><h3>' + esc(p.title) + "</h3>" +
        '<p class="pkg-meta">' + esc(p.duration) + "</p>" +
        "<p>" + esc(p.desc) + "</p>" +
        '<div class="pkg-foot"><div class="price"><small>From</small><strong>' + money(p.price) + "</strong><small>" + esc(p.unit) + "</small></div>" +
        '<div class="pkg-btns"><button type="button" class="btn btn-ghost-dark small" data-details="' + p.id + '">Details</button>' +
        '<a class="btn btn-wa small" target="_blank" rel="noopener" href="' + waLink("Hello, I would like to book: " + p.title + " (from " + money(p.price) + " " + p.unit + "). Please share availability.") + '">Book</a></div></div></div></article>';
    }).join("");
    $$(".pkg-img", grid).forEach(function (el) { tryImage(el, el.getAttribute("data-img")); });
  }
  renderPackages();

  /* ---------- Details modal ---------- */
  var modal = $("#modal"), lastFocus = null;
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("[data-details]"); if (!b) return;
    var p = PACKAGES.filter(function (x) { return x.id === b.getAttribute("data-details"); })[0];
    $("#mTitle").textContent = p.title;
    $("#mMeta").textContent = money(p.price) + " " + p.unit + "  |  " + p.duration;
    $("#mDesc").textContent = p.desc;
    $("#mIncl").innerHTML = p.incl.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
    $("#mBook").href = waLink("Hello, I would like to book: " + p.title + ". Please share availability.");
    $("#mBook").target = "_blank"; $("#mBook").rel = "noopener";
    lastFocus = document.activeElement;
    modal.hidden = false; document.body.classList.add("noscroll"); $("#mClose").focus();
  });
  function closeModal() { modal.hidden = true; document.body.classList.remove("noscroll"); if (lastFocus) lastFocus.focus(); }
  $("#mClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });

  /* ---------- Gallery + lightbox ---------- */
  var gal = $("#gal"), lb = $("#lightbox"), lbBody = $("#lbBody"), lbCap = $("#lbCap");
  gal.innerHTML = GALLERY.map(function (g, i) {
    return '<button type="button" class="gal-item' + (g.tall ? " tall" : "") + '" data-i="' + i + '" style="--a:' + g.a + ";--b:" + g.b + '" aria-label="View: ' + esc(g.cap) + '"><span>' + esc(g.cap) + "</span></button>";
  }).join("");
  $$(".gal-item", gal).forEach(function (el, i) { tryImage(el, GALLERY[i].img); });
  gal.addEventListener("click", function (e) {
    var b = e.target.closest(".gal-item"); if (!b) return;
    var g = GALLERY[+b.getAttribute("data-i")];
    lbBody.style.backgroundImage = b.classList.contains("has-img") ? "url('" + g.img + "')" : "";
    lbBody.style.setProperty("--a", g.a); lbBody.style.setProperty("--b", g.b);
    lbBody.className = "lb-body" + (b.classList.contains("has-img") ? " has-img" : "");
    lbCap.textContent = g.cap;
    lastFocus = document.activeElement;
    lb.hidden = false; document.body.classList.add("noscroll"); $("#lbClose").focus();
  });
  function closeLb() { lb.hidden = true; document.body.classList.remove("noscroll"); if (lastFocus) lastFocus.focus(); }
  $("#lbClose").addEventListener("click", closeLb);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (!lb.hidden) closeLb(); if (!modal.hidden) closeModal(); }
  });

  /* ---------- Forms -> WhatsApp ---------- */
  function val(f, n) { var el = f.elements[n]; return el ? el.value.trim() : ""; }
  function openWa(text) { window.open(waLink(text), "_blank", "noopener"); }

  $("#quickForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    openWa("Hello, I would like to enquire.\nService: " + (val(f, "service") || "Not selected") +
      "\nDate: " + (val(f, "date") || "Flexible") + "\nGuests: " + val(f, "guests"));
  });

  $("#bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, err = $("#bookErr");
    if (!val(f, "name") || !val(f, "phone") || !val(f, "service") || !val(f, "date")) {
      err.textContent = "Please fill in your name, phone, service and date."; err.hidden = false; return;
    }
    err.hidden = true;
    openWa("NEW BOOKING REQUEST\nName: " + val(f, "name") + "\nPhone: " + val(f, "phone") +
      "\nService: " + val(f, "service") + "\nDate: " + val(f, "date") + "\nGuests: " + val(f, "guests") +
      "\nPick-up: " + (val(f, "pickup") || "To be confirmed") + "\nNotes: " + (val(f, "notes") || "None"));
  });

  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, err = $("#conErr");
    if (!val(f, "name") || !val(f, "message")) {
      err.textContent = "Please add your name and a message."; err.hidden = false; return;
    }
    err.hidden = true;
    openWa("Message from website\nName: " + val(f, "name") + "\nEmail: " + (val(f, "email") || "-") +
      "\nPhone: " + (val(f, "phone") || "-") + "\n\n" + val(f, "message"));
  });
})();
