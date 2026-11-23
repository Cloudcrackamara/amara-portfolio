import type { Project, ProjectFilter } from "@/types/project";

const GH = "https://github.com/Cloudcrackamara/";

/*
 * Featured projects, in the order they appear on the page.
 * Only add verified details. To add a screenshot, save it under public/images/projects/
 * and add an `image` entry with its real width and height.
 */
export const projects: readonly Project[] = [
  {
    slug: "mmirioma",
    name: "MmiriOma",
    tagline: "Water at your gate in Enugu: ordered by phone, poured into your drums or tank.",
    badge: "team product · live pilot",
    meta: "Field research lead & engineer · Python & FastAPI · MmiriOma team · Enugu, NG · 2026",
    kind: "Water delivery · pilot",
    status: "Live",
    description:
      "A water ordering and delivery platform for Enugu. Customers pick keke or tanker delivery on their phone, see the full price before they confirm, and a rider brings the water and pours it into their drums or tank. I led the field research behind it and build with the team on a FastAPI and React monorepo.",
    built: [
      "Structured the API as a modular monolith on FastAPI with async SQLAlchemy, PostgreSQL and PostGIS for locations.",
      "A delivery can only be completed with the customer’s one-time code, and the order keeps the price shown at confirmation.",
      "Shipped installable customer and driver web apps, plus driver onboarding with ID and vehicle checks.",
      "Every pull request runs CI: Ruff, Alembic migration checks, pytest with integration tests, and the frontend lint, type-check, tests and build.",
      "Deployed on Railway, with config validated at startup so unsafe production settings refuse to boot.",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "PostGIS", "Alembic", "React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions", "Railway"],
    filters: ["backend", "app", "cicd"],
    url: "mmiriomadelivery.com",
    image: { src: "/images/projects/mmirioma.jpg", alt: "MmiriOma home page: Water at your gate", width: 800, height: 455 },
    repo: "https://github.com/mmiri-oma/mmirioma-original",
    repoLabel: "mmiri-oma/mmirioma",
  },
  {
    slug: "fleetgo",
    name: "FleetGo",
    tagline: "Car-rental fleet API: rentals, payments and a live fleet feed, built by two.",
    badge: "team of 2 · capstone",
    meta: "Backend Engineer · Python & FastAPI · AfricaPlan Foundation · Lagos, NG · 2026",
    kind: "Fleet API",
    status: "Deployed",
    description:
      "A containerised FastAPI backend for a car-rental business: vehicles, customers, rentals, payments and workshop visits, with JWT auth and separate roles for customers, staff and managers. Built in a two-person team, where I owned the Firestore real-time integration. Deployed on Railway.",
    built: [
      "Modelled the rental lifecycle as a state machine (Reserved → Active → Returned / Cancelled) with an append-only history.",
      "Used transactions with SELECT … FOR UPDATE row locking, tested against a concurrent double-pickup race.",
      "Verified payment webhooks with HMAC-SHA256 and made them idempotent with a database unique constraint.",
      "Added Redis caching with invalidation on write and a fixed-window rate limiter (429 + Retry-After).",
      "Streamed a live fleet feed over Server-Sent Events, covered by a 34-test pytest suite.",
    ],
    stack: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "Alembic", "Redis", "Firestore", "Docker Compose", "pytest", "Railway"],
    filters: ["backend", "app"],
    repo: `${GH}FleetGo_car_project`,
    repoLabel: "FleetGo_car_project",
  },
  {
    slug: "taskapp",
    name: "Cloud-Native TaskApp",
    tagline: "Self-managed Kubernetes on AWS: three zones, 48 resources, one terraform apply.",
    badge: "personal capstone",
    meta: "Cloud & DevOps Engineer · Kubernetes on AWS · personal project · live",
    kind: "Self-managed Kubernetes",
    status: "Live",
    description:
      "A Flask, React and PostgreSQL task app running on a Kubernetes cluster I provisioned and operate myself with kOps, across three AWS availability zones. Everything is in Terraform and Git, and ArgoCD keeps the cluster matching the repo.",
    built: [
      "Chose kOps over EKS on purpose: three control-plane and three worker nodes across three AZs, keeping etcd quorum if a zone fails.",
      "Provisioned 48 AWS resources from a single terraform apply (VPC, subnets, NAT, IAM, ECR, Route 53, S3 state with DynamoDB locking) with zero console clicks.",
      "Ran GitOps with ArgoCD self-heal, so manual cluster changes are detected and reverted.",
      "Deployed PostgreSQL as a StatefulSet on EBS with a Retain policy, and proved zero data loss by deleting the pod mid-session.",
      "Debugged six simultaneous CrashLoopBackOff failures on first deploy, each with a different root cause, bottom-up through the logs.",
    ],
    stack: ["AWS", "kOps", "Kubernetes", "Terraform", "ArgoCD", "Calico", "Docker", "Python", "Flask", "React", "PostgreSQL"],
    filters: ["backend", "k8s", "iac", "app"],
    url: "taskapp.taskbymara.online",
    image: { src: "/images/projects/taskapp.jpg", alt: "TaskApp (TeamFlow) landing page", width: 1010, height: 465 },
    repo: `${GH}TaskApp-Project`,
    repoLabel: "TaskApp-Project",
  },
  {
    slug: "banking",
    name: "3-Tier Banking Application",
    tagline: "A banking app shipped to AWS EKS by a team of 14, GitOps from push to production.",
    badge: "team of 14",
    meta: "Cloud & DevOps Engineer · EKS & GitOps · team project · custom domain",
    kind: "Cloud-native deployment",
    status: "Live",
    description:
      "A full cloud-native deployment of a three-tier banking application on AWS EKS. The whole environment is modular Terraform applied by GitHub Actions, and every push flows through CI into a manifest repo that ArgoCD keeps in sync with the cluster.",
    built: [
      "Provisioned the VPC, EKS, RDS MySQL, NAT Gateways, security groups and ECR with modular Terraform, applied automatically through GitHub Actions.",
      "Built separate frontend and backend pipelines: each push builds, tags and pushes to ECR, then updates the Kubernetes manifest repo.",
      "Ran GitOps with ArgoCD, so a rollback is a single reverted commit.",
      "Fixed production issues: CORS preflight 403s, Terraform state drift from unmanaged resources, and stale pipeline steps.",
      "Served frontend and backend on separate HTTPS subdomains with Nginx Ingress, cert-manager and Route 53, with SSL auto-renewal.",
    ],
    stack: ["AWS EKS", "Terraform", "GitHub Actions", "ArgoCD", "Docker", "ECR", "RDS MySQL", "Route 53", "Nginx Ingress", "cert-manager"],
    filters: ["k8s", "iac", "cicd"],
    url: "bank.penta-ops.online",
    image: { src: "/images/projects/banking.jpg", alt: "Online Banking System home page", width: 1010, height: 478 },
    repo: `${GH}3-Tier--Terraform-App-Deployment`,
    repoLabel: "3-Tier--Terraform…",
  },
  {
    slug: "totc",
    name: "TOTC — Online Learning Platform",
    tagline: "The front door of an online-learning platform: the landing page and sign-in screens.",
    badge: "team project",
    meta: "Frontend Engineer · Next.js & TypeScript · team project · Vercel",
    kind: "E-learning UI",
    status: "Live",
    description:
      "The front end for an online learning platform where teachers run classes, share materials and grade work in one place. In a team build, I owned the home page and the login and sign-up screens.",
    built: [
      "Built the landing page: hero, product sections, and course and blog previews.",
      "Built the login screen with a Login / Register toggle and a password visibility control.",
      "Next.js with TypeScript and Tailwind, deployed on Vercel.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    filters: ["app"],
    url: "demo-ui-amber.vercel.app",
    image: { src: "/images/projects/totc.jpg", alt: "TOTC home page with the login page shown on top", width: 1600, height: 900 },
    repo: `${GH}demo-ui`,
    repoLabel: "demo-ui",
  },
  {
    slug: "eks-monitoring",
    name: "EKS Cluster Monitoring",
    tagline: "Breaking a pod on purpose, and catching it on a live dashboard.",
    badge: "personal project",
    meta: "Cloud & DevOps Engineer · observability · AWS EKS",
    kind: "Observability",
    status: "Done",
    description:
      "Real-time observability for an AWS EKS cluster: Prometheus scrapes cluster state through kube-state-metrics, and Grafana turns it into live dashboards that show when workloads start failing.",
    built: [
      "Deployed a deliberately crash-looping busybox pod to prove failures show up on the dashboard, not just in kubectl.",
      "Charted container restarts per pod with PromQL on kube_pod_container_status_restarts_total.",
      "Built Grafana panels over a rolling 30-minute window, reading straight from the Prometheus data source.",
    ],
    stack: ["AWS EKS", "Kubernetes", "Prometheus", "Grafana", "kube-state-metrics", "PromQL"],
    filters: ["k8s"],
    url: "grafana · prometheus · kube-state-metrics",
    image: {
      src: "/images/projects/eks-monitoring.jpg",
      alt: "Grafana panel charting restarts of a crash-looping pod with a PromQL query",
      width: 1010,
      height: 456,
    },
    repo: "https://github.com/Cloudcrackamara",
    repoLabel: "Cloudcrackamara",
  },
  {
    slug: "aws-3-tier-terraform",
    name: "AWS 3-Tier Terraform",
    tagline: "Three AWS tiers as separate Terraform modules: change one layer without touching the rest.",
    badge: "personal project",
    meta: "Cloud & DevOps Engineer · infrastructure as code · AWS",
    kind: "Infrastructure as Code",
    status: "Repo",
    description:
      "A structured three-tier AWS architecture built entirely with Terraform modules. The presentation, application and database tiers are cleanly separated, so any engineer can extend or modify one layer without touching unrelated infrastructure.",
    built: [
      "Put Auto Scaling Groups with Launch Templates behind an Application Load Balancer with health checks.",
      "Kept RDS in private database subnets, away from the public tier.",
      "Laid out the modules for team work: each layer can be extended on its own.",
    ],
    stack: ["Terraform", "HCL", "AWS VPC", "EC2", "Auto Scaling", "ALB", "RDS"],
    filters: ["iac"],
    repo: `${GH}AWS-3-Tier-Terraform-Deployment`,
    repoLabel: "AWS-3-Tier-Terraform…",
  },
  {
    slug: "user-management-dashboard",
    name: "User Management Dashboard",
    tagline: "A responsive admin dashboard: stats, charts and a searchable users table.",
    badge: "technical assessment",
    meta: "Frontend Engineer · Next.js & TypeScript · live on Vercel",
    kind: "Admin dashboard",
    status: "Live",
    description:
      "A responsive admin dashboard for browsing users, built as a technical assessment. It has a mock login, an overview with summary cards and charts, and a users table with search, filters, sorting and pagination, all in strict TypeScript.",
    built: [
      "Protected routes: the dashboard redirects to login when signed out, with no flash of the wrong page.",
      "API data parsed with Zod at the boundary, so a bad response becomes a clear error instead of a crash.",
      "One shared TanStack Query cache feeds the cards, charts, table and a live API-status indicator.",
      "Debounced search plus combinable status and city filters, sorting and pagination.",
      "Loading, empty and error states with retry; keyboard-accessible; light and dark mode; logic unit-tested with Vitest.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "TanStack Query", "Zod", "Vitest"],
    filters: ["app"],
    url: "user-management-dashboard-gamma-flax.vercel.app",
    image: {
      src: "/images/projects/user-dashboard.jpg",
      alt: "User dashboard overview with stat cards and charts",
      width: 1351,
      height: 760,
    },
    repo: `${GH}user-management-dashboard`,
    repoLabel: "user-management-dashboard",
  },
];

export const projectFilters: ReadonlyArray<{ id: ProjectFilter | "all"; label: string }> = [
  { id: "all", label: "ALL" },
  { id: "backend", label: "BACKEND" },
  { id: "k8s", label: "KUBERNETES" },
  { id: "iac", label: "TERRAFORM" },
  { id: "cicd", label: "CI/CD" },
  { id: "app", label: "APPS" },
];

/** Repo names already shown as featured cards, so "Latest from GitHub" skips them. */
export const featuredRepoNames: readonly string[] = projects
  .map((p) => p.repo.split("/").pop() ?? "")
  .filter(Boolean);
