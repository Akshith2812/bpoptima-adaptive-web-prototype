# BPOptima — Adaptive Stakeholder Web Experience

An interactive concept prototype created for the **BPOptima Forward Deployed Engineer Trainee Assignment**.

The project explores how AI-era web design can improve the experience of enterprise B2B websites by helping different stakeholders reach the information most relevant to them — without sacrificing trust or generating unverified claims.

## Live Prototype

https://akshith2812.github.io/bpoptima-adaptive-web-prototype/

---

## Problem

Enterprise technology products are evaluated by multiple stakeholders who have very different priorities.

For example:

- A **Chief Risk Officer** cares about explainability, auditability, governance, and policy control.
- A **CTO** focuses on architecture, deployment, scalability, and integration.
- An **Engineer** wants to understand technical workflows and implementation.
- An **Investor** is interested in the enterprise problem, business value, and market opportunity.

Traditional B2B websites often present the same content hierarchy to every visitor, forcing each stakeholder to search for the information relevant to them.

---

## Proposed Solution

### Stakeholder-Adaptive Website Experience

The prototype allows visitors to explicitly choose their perspective:

- Chief Risk Officer
- CTO
- Engineer
- Investor

The experience then reprioritizes relevant, predefined information for that stakeholder.

For example, selecting **Chief Risk Officer** highlights:

- Explainable Decisions
- Audit Trails
- Policy Control

Selecting **CTO** instead prioritizes:

- Enterprise Architecture
- Private Deployment
- System Integration

The goal is not to generate different facts for different visitors.

Instead, the system helps each stakeholder reach the most relevant **verified information** faster.

---

## Trust-First Personalization

Enterprise AI experiences should not sacrifice trust for personalization.

The proposed approach follows four principles:

- No product claims are dynamically generated.
- No information is permanently hidden.
- The visitor explicitly chooses their perspective.
- Only verified and approved content is reprioritized.

A production implementation could potentially combine explicit role selection with carefully governed intent signals while keeping all displayed information within an approved content library.

> Note: This prototype is a front-end simulation of the proposed experience and does not use a deployed AI personalization model.

---

## Other Ideas Explored

### 1. Interactive Decision Journey / Evidence Explorer

An interactive demonstration of the:

**Understand → Decide → Route**

workflow using fictional enterprise data.

Visitors could follow evidence through understanding, policy evaluation, decision-making, routing, and auditability.

This idea was not selected as the primary prototype because accurately simulating BPOptima's decision infrastructure would require verified knowledge of its internal architecture.

### 2. Trust & Auditability Explorer

A structured experience where enterprise visitors could explore verified information about:

- Evidence sources
- Decision logic
- Policy application
- Audit trails
- Human review
- AI versus deterministic components

This could be particularly useful for risk and compliance stakeholders.

However, implementing it accurately would require detailed information about BPOptima's actual governance and audit mechanisms.

### 3. Stakeholder-Adaptive Experience — Selected

This concept was selected because it provides the strongest balance between:

- Relevance
- Feasibility
- Enterprise trust
- User control

It can improve how different stakeholders understand BPOptima without requiring unverified assumptions about the underlying product.

---

## Why Not a Generic AI Chatbot?

A generic "Ask BPOptima anything" chatbot was intentionally not selected as the main idea.

For an enterprise audience — particularly risk and compliance stakeholders — unrestricted generated answers could introduce:

- Hallucinations
- Unverified product claims
- Inconsistent explanations

Instead, this concept uses personalization to improve access to **verified evidence** while keeping the visitor in control.

---

## Prototype Flow

1. Visitor opens the website.
2. Selects a stakeholder perspective.
3. The interface visibly adapts.
4. Relevant priorities and information cards are surfaced.
5. The common **Understand → Decide → Route** narrative remains consistent.
6. The interface explains why the experience changed and how trust is preserved.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub Pages

---

## Research Inspiration

The concept was informed by patterns from:

- BPOptima — enterprise decision infrastructure
- Demandbase — B2B website personalization
- Stripe — explorable technical documentation and developer experiences
- Cloudflare AI Gateway — AI observability, control, and auditability

These examples were used as design inspiration rather than as claims that the companies implement the exact proposed BPOptima experience.

---

## Author

**Thaduka Akshith**

B.Tech Computer Science Engineering (AI & ML)

GitHub: https://github.com/Akshith2812
