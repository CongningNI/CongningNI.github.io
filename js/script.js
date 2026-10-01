(function () {
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  // September 4, 2026: WISE AI-for-Good acceptance.
  publications.unshift({
    year: 2026,
    title: "From Clinical Free Text to Auditable Concepts: An Agentic Framework for Interpretable Prediction",
    venue: "WISE 2026 AI-for-Good Workshop, accepted",
    type: "conference",
    status: "accepted",
    links: []
  });

  const formatAuthors = (authors) => {
    const escaped = escapeHtml(authors || "");
    return escaped.replace(/Congning Ni/g, "<strong>Congning Ni</strong>");
  };

  // Keep the homepage research section focused on the current research program.
  const researchSection = document.getElementById("research");
  if (researchSection) {
    const heading = researchSection.querySelector(".section-heading");
    if (heading) {
      const title = heading.querySelector("h2");
      const description = heading.querySelector("p:not(.kicker)");
      if (title) title.textContent = "Current research directions";
      if (description) {
        description.textContent = "My current research program centers on three connected directions in trustworthy, clinically grounded AI for care.";
      }
    }

    const directions = [
      {
        number: "01",
        title: "Longitudinal dementia care-state modeling and early warning",
        description: "Developing auditable representations of evolving dementia care states from fragmented longitudinal EHR narratives, with calibrated models for reliable early warning of consequential care transitions.",
        bullets: [
          "Care-state taxonomy and longitudinal episode representation",
          "Transition-specific risk modeling and selective prediction",
          "Prospective silent validation and clinical utility"
        ]
      },
      {
        number: "02",
        title: "Auditable concept learning for longitudinal clinical prediction",
        description: "Building agentic workflows that transform free clinical text into human-readable, evidence-linked longitudinal concepts for interpretable prediction across clinical tasks.",
        bullets: [
          "Concept induction and evidence traceability",
          "Longitudinal concept trajectories from clinical notes",
          "Interpretable risk modeling across EHR outcomes"
        ]
      },
      {
        number: "03",
        title: "Trustworthy LLM evaluation for health communication",
        description: "Developing role-aware and safety-aware frameworks to evaluate how large language models respond to patient and caregiver needs across sensitive health contexts.",
        bullets: [
          "Hallucination, omission, and factual grounding",
          "Stakeholder alignment and response fidelity",
          "Patient- and caregiver-facing AI evaluation"
        ]
      }
    ];

    const cards = researchSection.querySelectorAll(".research-card");
    directions.forEach((direction, index) => {
      const card = cards[index];
      if (!card) return;
      card.innerHTML = `
        <p class="card-number">${escapeHtml(direction.number)}</p>
        <h3>${escapeHtml(direction.title)}</h3>
        <p>${escapeHtml(direction.description)}</p>
        <ul>${direction.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      `;
    });

    const oldOngoing = researchSection.querySelector(".ongoing-wrap");
    if (oldOngoing) oldOngoing.remove();
  }

  const submissionContainer = document.getElementById("active-submissions");
  if (submissionContainer) {
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
  }

  const publicationContainer = document.getElementById("publication-list");
  if (publicationContainer) {
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
  }

  const publicationsIntro = document.querySelector("#publications .split-heading > div > p:not(.kicker)");
  if (publicationsIntro) {
    publicationsIntro.textContent = "Recent published and accepted work is shown first; expand or filter to browse the full publication record.";
  }

  const INITIAL_PUBLICATION_COUNT = 6;
  let publicationsExpanded = false;
  let activePublicationFilter = "all";

  const publicationToggleWrap = document.createElement("div");
  publicationToggleWrap.className = "publication-expand-wrap";
  const publicationToggle = document.createElement("button");
  publicationToggle.id = "publication-toggle";
  publicationToggle.className = "publication-toggle";
  publicationToggle.type = "button";
  publicationToggle.setAttribute("aria-expanded", "false");
  publicationToggle.textContent = "Show all publications";
  publicationToggleWrap.appendChild(publicationToggle);
  if (publicationContainer) publicationContainer.insertAdjacentElement("afterend", publicationToggleWrap);

  const applyPublicationView = () => {
    const items = Array.from(document.querySelectorAll(".publication-item"));
    let matchedIndex = 0;
    items.forEach((item) => {
      const matches = activePublicationFilter === "all" || item.dataset.type === activePublicationFilter || item.dataset.status === activePublicationFilter;
      let show = matches;
      if (matches && activePublicationFilter === "all" && !publicationsExpanded) {
        show = matchedIndex < INITIAL_PUBLICATION_COUNT;
        matchedIndex += 1;
      }
      item.classList.toggle("hidden", !show);
    });

    const showToggle = activePublicationFilter === "all" && items.length > INITIAL_PUBLICATION_COUNT;
    publicationToggleWrap.hidden = !showToggle;
    publicationToggle.textContent = publicationsExpanded ? "Show fewer publications" : "Show all publications";
    publicationToggle.setAttribute("aria-expanded", String(publicationsExpanded));
  };

  publicationToggle.addEventListener("click", () => {
    publicationsExpanded = !publicationsExpanded;
    applyPublicationView();
  });

  const filters = document.querySelectorAll(".filter");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      activePublicationFilter = button.dataset.filter;
      applyPublicationView();
    });
  });
  applyPublicationView();

  const newsContainer = document.getElementById("activity-list");
  if (newsContainer) {
    news.forEach((item) => {
      const article = document.createElement("article");
      article.className = "news-entry";
      const links = (item.links || []).map((link) =>
        `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`
      ).join("");
      article.innerHTML = `
        <div class="news-date">${escapeHtml(item.date)}</div>
        <span class="news-dot" aria-hidden="true"></span>
        <div class="news-content">
          <p class="news-type">${escapeHtml(item.type)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="news-description">${escapeHtml(item.description)}</p>
          ${links ? `<div class="activity-links">${links}</div>` : ""}
        </div>
      `;
      newsContainer.appendChild(article);
    });

    const INITIAL_NEWS_COUNT = 4;
    const entries = Array.from(newsContainer.querySelectorAll(".news-entry"));
    if (entries.length > INITIAL_NEWS_COUNT) {
      let expanded = false;
      const wrap = document.createElement("div");
      wrap.className = "publication-expand-wrap news-toggle-wrap";
      const toggle = document.createElement("button");
      toggle.id = "news-toggle";
      toggle.className = "publication-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-controls", "activity-list");
      wrap.appendChild(toggle);
      newsContainer.insertAdjacentElement("afterend", wrap);

      const applyNewsView = () => {
        entries.forEach((entry, index) => {
          entry.hidden = !expanded && index >= INITIAL_NEWS_COUNT;
        });
        toggle.textContent = expanded ? "Show fewer news" : "Show all news";
        toggle.setAttribute("aria-expanded", String(expanded));
      };
      toggle.addEventListener("click", () => {
        expanded = !expanded;
        applyNewsView();
      });
      applyNewsView();
    }
  }

  const phdHeading = Array.from(document.querySelectorAll(".timeline-item h3"))
    .find((heading) => heading.textContent.trim() === "Ph.D. in Computer Science");
  if (phdHeading) {
    const phdDetails = phdHeading.parentElement;
    const dissertation = document.createElement("p");
    dissertation.innerHTML = `Dissertation: <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=ovVin3oAAAAJ&sortby=pubdate&citation_for_view=ovVin3oAAAAJ:kNdYIx-mwKoC" target="_blank" rel="noopener"><em>Murmuring of Alzheimer Caring: Analyzing Social Dynamics in Online Alzheimer’s Disease and Related Dementias Communities</em></a>`;
    phdDetails.appendChild(dissertation);
  }

  const injectedStyle = document.createElement("style");
  injectedStyle.textContent = `
    .publication-expand-wrap { display: flex; justify-content: center; margin-top: 1.25rem; }
    .publication-toggle { border: 1px solid var(--line); background: rgba(255,255,255,.86); color: var(--accent-dark); border-radius: 999px; padding: .62rem 1rem; cursor: pointer; font-size: .84rem; font-weight: 780; }
    .publication-toggle:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }
  `;
  document.head.appendChild(injectedStyle);

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }));
  }
})();