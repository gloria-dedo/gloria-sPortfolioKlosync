// Shared icon sprite, sidebar and top bar for the vendor dashboard screens.
// Each page sets <body data-page="..."> and puts its content in <main class="main">.
const ICONS = {
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12Z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  wallet: '<rect x="2.5" y="5.5" width="19" height="14" rx="3"/><path d="M16 12.5h2M2.5 9.5h19"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  help: '<circle cx="12" cy="12" r="9.5"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M12 2.5 14.6 4.4l3.2-.1 1 3 2.6 1.9-1 3 1 3-2.6 1.9-1 3-3.2-.1L12 21.5l-2.6-1.9-3.2.1-1-3L2.6 15l1-3-1-3 2.6-1.9 1-3 3.2.1Z"/><path d="m8.5 12 2.3 2.3 4.7-4.6"/>',
  up: '<path d="M7 17 17 7M8 7h9v9"/>',
  down: '<path d="M7 7l10 10M17 8v9H8"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  dots: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
  filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
  checkbox: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>',
  checked: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="currentColor"/><path d="m8 12 3 3 5-6" stroke="#fff"/>',
};
const icon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

function shell() {
  const page = document.body.dataset.page;
  const item = (id, ic, label, count) =>
    `<a href="#" class="${page === id ? "on" : ""}">${icon(ic)}${label}${count ? `<span class="count">${count}</span>` : ""}</a>`;
  const side = `
    <aside class="side">
      <div class="logo"><span class="logo-mark">${icon("leaf")}</span>EchoFarms</div>
      <div class="nav-label">Vendor</div>
      <nav class="nav">
        ${item("dashboard", "grid", "Dashboard")}
        ${item("ads", "megaphone", "Manage ads", 64)}
        ${item("messages", "chat", "Messages", 3)}
        ${item("analytics", "chart", "Analytics")}
        ${item("payouts", "wallet", "Payouts")}
      </nav>
      <div class="nav-label">Account</div>
      <nav class="nav">${item("settings", "settings", "Settings")}${item("help", "help", "Help center")}</nav>
      <div class="promo"><strong>Go Enterprise</strong><p>Feature your ads at the top of search and reach 3× more buyers.</p><a href="#">Upgrade plan</a></div>
      <div class="me"><img src="img/avatar.webp" alt=""><div><strong>Gloria Dedo</strong><small>${icon("check")}Verified vendor</small></div><span class="out">${icon("logout")}</span></div>
    </aside>`;
  const top = `
    <div class="top">
      <div class="search">${icon("search")}<span>Search ads, buyers or orders</span><kbd>⌘K</kbd></div>
      <div class="spacer"></div>
      <span class="icon-btn">${icon("chat")}</span>
      <span class="icon-btn">${icon("bell")}<i class="dot"></i></span>
      <a class="btn btn-dark">${icon("plus")}Post new ad</a>
    </div>`;
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("afterbegin", top);
  const app = document.createElement("div");
  app.className = "app";
  app.innerHTML = side;
  main.replaceWith(app);
  app.appendChild(main);
  document.querySelectorAll("[data-icon]").forEach((el) => el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)));
}
shell();
