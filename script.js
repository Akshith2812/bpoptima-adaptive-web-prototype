const roles = {

  risk: {
    name: "Chief Risk Officer",
    title: "Decisions you can explain, govern and audit.",
    description:
      "See how BPOptima turns unstructured evidence into policy-driven decisions while preserving accountability.",
    priority: "Trust & Governance",

    cards: [
      {
        title: "Explainable Decisions",
        text: "Trace decisions back to the evidence and policy logic that produced them."
      },
      {
        title: "Audit Trail",
        text: "Maintain a clear record of how evidence moved from understanding to decision."
      },
      {
        title: "Policy Control",
        text: "Keep deterministic enterprise rules at the center of automated decisions."
      }
    ],

    why:
      "A Chief Risk Officer is likely to evaluate BPOptima through governance, explainability and control. The experience therefore surfaces trust evidence before technical implementation details."
  },


  cto: {
    name: "CTO",
    title: "Enterprise AI that fits your architecture.",
    description:
      "Explore how decision infrastructure can integrate with existing systems while keeping enterprise control.",
    priority: "Architecture & Deployment",

    cards: [
      {
        title: "Enterprise Architecture",
        text: "Understand how BPOptima connects evidence, models, policy logic and downstream workflows."
      },
      {
        title: "Private Deployment",
        text: "Evaluate deployment options designed for sensitive enterprise environments."
      },
      {
        title: "Integration",
        text: "See how decision workflows can connect with existing enterprise systems and APIs."
      }
    ],

    why:
      "A CTO needs confidence that the technology can integrate, scale and operate within enterprise constraints. Technical architecture is therefore prioritized over high-level marketing."
  },


  engineer: {
    name: "Engineer",
    title: "See how the decision system works.",
    description:
      "Move past marketing language and explore the technical building blocks behind enterprise decision workflows.",
    priority: "Technical Understanding",

    cards: [
      {
        title: "Model Layer",
        text: "Explore how specialized models can interpret different forms of enterprise evidence."
      },
      {
        title: "Decision Pipeline",
        text: "Follow information from ingestion through structured understanding and policy evaluation."
      },
      {
        title: "Developer Integration",
        text: "Understand where APIs and system integrations connect the workflow."
      }
    ],

    why:
      "Engineers typically want implementation detail and system behavior. The experience therefore brings architecture and technical workflows forward."
  },


  investor: {
    name: "Investor",
    title: "The infrastructure layer behind enterprise decisions.",
    description:
      "Understand the business problem BPOptima addresses and why decision infrastructure matters for regulated enterprises.",
    priority: "Market & Business Value",

    cards: [
      {
        title: "Enterprise Problem",
        text: "Critical decisions still depend on fragmented evidence and manual human judgment."
      },
      {
        title: "Platform Opportunity",
        text: "BPOptima positions itself as infrastructure connecting evidence, policy and enterprise workflows."
      },
      {
        title: "Business Impact",
        text: "Explore the potential value of faster, consistent and auditable enterprise decision processes."
      }
    ],

    why:
      "An investor first needs to understand the size and importance of the problem. The experience therefore prioritizes market context and business value before implementation details."
  }

};


function personalize(role, button) {

  document.querySelectorAll("button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  const loading = document.getElementById("loading");
  const experience = document.getElementById("experience");

  experience.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {

    const data = roles[role];

    document.getElementById("role-name").textContent = data.name;
    document.getElementById("role-title").textContent = data.title;
    document.getElementById("role-description").textContent =
      data.description;

    document.getElementById("priority").textContent =
      data.priority;

    document.getElementById("why-text").textContent =
      data.why;


    const cards = document.getElementById("cards");

    cards.innerHTML = data.cards.map((card, index) => `

      <div class="card">

        <span class="card-number">
          0${index + 1}
        </span>

        <h3>${card.title}</h3>

        <p>${card.text}</p>

      </div>

    `).join("");


    loading.classList.add("hidden");

    experience.classList.remove("hidden");

    experience.scrollIntoView({
      behavior: "smooth"
    });

  }, 700);

}