/* ============================================================
   portfolio.js
   To add a new project, just add a new object to the
   'projects' array below and save. That's it.

   Available badge types: "Personal" | "Client" | "Web App"
   ============================================================ */

const projects = [
  {
    title: "Michael Odhiambo — Personal Portfolio",
    url: "https://michaelaloo.co.ke",
    displayUrl: "michaelaloo.co.ke",
    badge: "Personal",
    description:
      "My personal portfolio website showcasing my work, skills, and services as a web developer and UI/UX designer based in Nairobi. Designed and built from scratch, fully live on a custom domain.",
  },
  {
    title: "Upper Kabete Campus Christian Union",
    url: "https://ukccu.org",
    displayUrl: "ukccu.org",
    badge: "Client",
    description:
      "Official website for the Upper Kabete Campus Christian Union at the University of Nairobi. Includes SEO configuration, Google Search Console setup, and ongoing site management.",
  },
  {
    title: "University of Nairobi Joint Coordinating Council",
    url: "https://uonjcc.netlify.app",
    displayUrl: "uonjcc.netlify.app",
    badge: "Client",
    description:
      "Website for the JCC, the umbrella body coordinating Christian union campuses across all 8 University of Nairobi campuses. Designed to unify and represent the movement online.",
  },
  {
    title: "Paul Kitonga — Portfolio Website",
    url: "https://paulkitonga.netlify.app",
    displayUrl: "paulkitonga.netlify.app",
    badge: "Client",
    description:
      "A clean and professional portfolio website built for a client to present their work and skills online. Focused on a strong first impression and clear personal branding.",
  },
  {
    title: "Vine Tracker — Discipleship Tracking App",
    url: "https://vinetracker.netlify.app",
    displayUrl: "vinetracker.netlify.app",
    badge: "Web App",
    description:
      "A web application for individuals and groups to track their spiritual growth digitally. Built with React and Supabase, featuring activity tracking, group systems, PWA support, and Google OAuth.",
  },

  /* ── ADD NEW PROJECTS BELOW THIS LINE ──────────────────────
  {
    title: "Project Name",
    url: "https://example.com",
    displayUrl: "example.com",
    badge: "Client",
    description: "Short description of the project.",
  },
  ─────────────────────────────────────────────────────────── */
];

/* ============================================================
   Badge colour map — extend if you add new badge types
   ============================================================ */
const badgeClass = {
  Personal: "bg-primary",
  Client: "bg-success",
  "Web App": "bg-secondary",
};

/* ============================================================
   Renders all projects into #portfolio-container.
   Called automatically on DOMContentLoaded.
   ============================================================ */
function renderPortfolio() {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100 border rounded shadow-sm">
        <div class="card-body d-flex flex-column">
          <span class="badge ${badgeClass[project.badge] || "bg-secondary"} text-white mb-2" style="width:fit-content;">
            ${project.badge}
          </span>
          <h5 class="card-title fw-semibold">${project.title}</h5>
          <p class="text-muted small mb-2">
            <i class="fa fa-globe me-1"></i>${project.displayUrl}
          </p>
          <p class="card-text text-muted small flex-grow-1">${project.description}</p>
        </div>
        <div class="card-footer bg-white border-top">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer"
             class="text-primary small fw-semibold text-decoration-none">
            Visit site <i class="fa fa-external-link ms-1"></i>
          </a>
        </div>
      </div>
    </div>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderPortfolio);