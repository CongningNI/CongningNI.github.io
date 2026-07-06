(function () {
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const formatAuthors = (authors) => {
    const escaped = escapeHtml(authors || "");
    return escaped.replace(/Congning Ni/g, "<strong>Congning Ni</strong>");
  };

  const submissionContainer = document.getElementById("active-submissions");
  activeSubmissions.forEach((item) => {
    const article = document.createElement("article");
    article.className = "submission-card";
    const title = item.url
      ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>`
      : escapeHtml(item.title);
    article.innerHTML = `
      <div class="submission-top">
        <span class="status-badge">${escapeHtml(item.status)}</span>
      </div>
      <h4>${title}</h4>
      <p class="submission-authors">${formatAuthors(item.authors)}</p>
      <p class="submission-meta">${escapeHtml(item.venue)} · ${escapeHtml(item.date)}</p>
      ${item.blind ? '<p class="blind-note">Public-facing title; manuscript and identifying submission details are withheld during double-blind review.</p>' : ''}
    `;
    submissionContainer.appendChild(article);
  });

  const publicationContainer = document.getElementById("publication-list");
  publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication-item";
    article.dataset.type = item.type;
    article.dataset.status = item.status;

    const primaryLink = item.links && item.links.length ? item.links[0].url : null;
    const title = primaryLink
      ? `<a href="${escapeHtml(primaryLink)}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>`
      : escapeHtml(item.title);

    const links = (item.links || []).map((link) =>
      `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
    ).join("");

    article.innerHTML = `
      <div class="pub-year">${escapeHtml(item.year)}</div>
      <div>
        <h3 class="pub-title">${title}</h3>
        <p class="pub-venue">${escapeHtml(item.venue)}</p>
      </div>
      <div class="pub-links">${links}</div>
    `;
    publicationContainer.appendChild(article);
  });

  const filters = document.querySelectorAll(".filter");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".publication-item").forEach((item) => {
        const show = filter === "all" || item.dataset.type === filter || item.dataset.status === filter;
        item.classList.toggle("hidden", !show);
      });
    });
  });

  const activityContainer = document.getElementById("activity-list");
  activities.forEach((item) => {
    const article = document.createElement("article");
    article.className = "activity-card";
    const links = (item.links || []).map((link) =>
      `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
    ).join("");
    article.innerHTML = `
      <div class="activity-date">${escapeHtml(item.date)}</div>
      <div>
        <p class="activity-type">${escapeHtml(item.type)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        ${links ? `<div class="activity-links">${links}</div>` : ""}
      </div>
    `;
    activityContainer.appendChild(article);
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
})();
