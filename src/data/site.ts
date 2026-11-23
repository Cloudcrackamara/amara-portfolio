/* Page content that is not a project. Edit copy here; components only lay it out. */

const GH = "https://github.com/Cloudcrackamara/";

export const navLinks = [
  { href: "#top", label: "home" },
  { href: "#work", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#approach", label: "approach" },
  { href: "#services", label: "services" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
] as const;

export const skillsStrip = [
  "Python", "FastAPI", "PostgreSQL", "Redis", "AWS", "Terraform",
  "Kubernetes", "ArgoCD", "GitHub Actions", "Docker", "Grafana", "Next.js",
] as const;

/** Rows in the hero terminal. `tone` picks the syntax colour for the name. */
export const workloads = [
  { name: "mmirioma", layer: "fastapi · postgis", status: "Live", tone: "violet" },
  { name: "fleetgo", layer: "fastapi · railway", status: "Deployed", tone: "amber" },
  { name: "taskapp", layer: "kops · aws", status: "Live", tone: "coral" },
  { name: "bank-3tier", layer: "eks · argocd", status: "Live", tone: "blue" },
  { name: "eks-monitor", layer: "prom · grafana", status: "Done", tone: "teal" },
  { name: "foodlens", layer: "full-stack", status: "Building", tone: "teal" },
] as const;

export const appStack = [
  { area: "Python backends & APIs", tools: "FastAPI · Flask · Pydantic · REST · JWT" },
  { area: "Databases", tools: "PostgreSQL · Redis · SQLModel · Alembic" },
  { area: "Frontend", tools: "TypeScript · React · Next.js · Tailwind" },
  { area: "Full-stack applications", tools: "Zod · TanStack Query · auth & roles" },
  { area: "Testing & quality", tools: "pytest · Vitest · Ruff · typed validation" },
] as const;

export const infraStack = [
  { area: "AWS", tools: "EC2 · EKS · ECR · RDS · S3 · IAM · Route 53" },
  { area: "Azure", tools: "AKS · VNets · NSGs · Monitor" },
  { area: "Infrastructure as Code", tools: "Terraform modules · remote state · DynamoDB locking" },
  { area: "Kubernetes & GitOps", tools: "EKS · kOps · Helm · ArgoCD" },
  { area: "CI/CD & containers", tools: "GitHub Actions · Docker · ECR" },
  { area: "Networking & security", tools: "Nginx · SSL/TLS · cert-manager · least-privilege IAM" },
  { area: "Monitoring & Linux", tools: "Prometheus · Grafana · Bash" },
] as const;

export const stages = [
  { num: "01", tag: "DISCOVER", title: "Understand the problem", desc: "Start with the people involved, the constraints and what a good outcome looks like." },
  { num: "02", tag: "DESIGN", title: "Design practical solutions", desc: "Choose the simplest approach that meets the need and can grow with it." },
  { num: "03", tag: "BUILD", title: "Build maintainable applications", desc: "Write clear, tested code that other engineers can read and extend." },
  { num: "04", tag: "SHIP & RUN", title: "Deploy and operate reliable systems", desc: "Automate delivery and watch production so problems are found early." },
] as const;

export const services = [
  { num: "01", title: "Python & FastAPI backends", desc: "Typed REST APIs in Python with FastAPI and Pydantic: auth and roles, validation, background jobs, signed webhooks, tested with pytest." },
  { num: "02", title: "Databases & data layer", desc: "PostgreSQL schema design with SQLAlchemy or SQLModel, Alembic migrations, PostGIS for location data and Redis caching and rate limits." },
  { num: "03", title: "Cloud infrastructure", desc: "Production-ready AWS environments in Terraform — VPC, EKS, RDS, ECR, IAM, Route 53. Version-controlled and repeatable." },
  { num: "04", title: "CI/CD pipelines", desc: "GitHub Actions that lint, test, build images, push to ECR and deploy to Kubernetes on every push. No manual steps." },
  { num: "05", title: "Kubernetes & GitOps", desc: "EKS or self-managed clusters with Helm, ingress, SSL and persistent storage, kept in sync by ArgoCD with self-heal and rollback." },
  { num: "06", title: "Infrastructure security", desc: "Private subnets, least-privilege IAM, security groups, TLS automation and secrets management." },
  { num: "07", title: "Technical documentation", desc: "Runbooks and architecture docs any engineer on your team can pick up and act on." },
] as const;

export const roles = [
  {
    current: true,
    dates: "Jul 2026 – now",
    where: "Lagos, NG",
    title: "Full-Stack Engineer",
    org: "AfricaPlan Foundation · Hordanso LLC",
    points: [
      "Build Python and FastAPI services with PostgreSQL, SQLModel, Alembic and Redis, shipped as Dockerised, OpenAPI-documented REST APIs.",
      "Co-built FleetGo in a two-person team: owned the Firestore real-time integration and worked on the rental state machine, payment webhooks, caching and live streaming (34 passing tests).",
      "Build React, Next.js and TypeScript frontends with TanStack Query, Zustand and Zod.",
      "Shipped Swift Arrow Couriers, a Bookstore API and Lagos Route Window.",
    ],
    tags: "python · fastapi · postgres · redis · next.js · docker",
  },
  {
    current: false,
    dates: "Jan – Sep 2026",
    where: "Remote",
    title: "Remote Systems Monitoring Technician",
    org: "Contract via Upwork",
    points: [
      "Monitored and supported a fleet of Windows photo booth PCs during live events: remote-desktop drops, offline machines, shift reports.",
      "Designed and built FoxBooth Monitor to replace manual checks with automated heartbeats, a live dashboard and instant Telegram alerts.",
    ],
    tags: "monitoring · automation · alerting",
  },
  {
    current: false,
    dates: "Mar 2025 – Apr 2026",
    where: "Remote",
    title: "Cloud & DevOps Engineer",
    org: "Digital Witch",
    points: [
      "Provisioned a production-grade AWS environment in Terraform: high-availability VPC, NAT Gateways, EKS and RDS MySQL.",
      "Containerised React and Spring Boot services, with versioned images in ECR built by GitHub Actions.",
      "Ran EKS workloads with ConfigMaps, Secrets and NGINX Ingress; fixed CORS 403s, JWT / Spring Security conflicts and ingress-to-load-balancer failures.",
    ],
    tags: "aws · terraform · eks · ecr · github actions · nginx",
  },
] as const;

export const certs = [
  { badge: "AWS", name: "AWS Certified Cloud Practitioner", meta: "certified 2026 · next: Solutions Architect" },
  { badge: "SEC", name: "DevOps & Cloud Security", meta: "certified 2025" },
] as const;

export const pythonRepos = [
  { name: "Fast_Api_Lagos_Route_Window", desc: "FastAPI service for Lagos transport routes, stops, fares and bus fleet data, with typed path and query parameters and declarative validation.", tags: "fastapi · pydantic", repo: `${GH}Fast_Api_Lagos_Route_Window` },
  { name: "swift_arrows_couriers", desc: "Parcel tracking system with indexed lookups, caching, JWT authentication, password hashing and role-based access control.", tags: "python · jwt · rbac", repo: `${GH}swift_arrows_couriers` },
  { name: "library-window-crud", desc: "CRUD backend with authentication, role-based authorisation and persistent storage, built to a written spec.", tags: "python · auth", repo: `${GH}library-window-crud` },
  { name: "Headers_cookies_fast.api_VIP_registration", desc: "FastAPI service with strict request validation, header and cookie bindings, custom status codes and Pydantic response filtering.", tags: "fastapi · pydantic", repo: `${GH}Headers_cookies_fast.api_VIP_registration` },
] as const;

export const currentlyBuilding = {
  name: "FoodLens",
  text: "a product-integrity and authentication platform built on unit-level QR identity, for Nigerian consumer goods.",
  lang: "Python",
  repo: `${GH}FoodLens`,
};
