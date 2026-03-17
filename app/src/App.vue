<script setup>
import { ref } from 'vue'

const mobileNavOpen = ref(false)
const labDetailsOpen = ref(false)

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Experience', href: '#experience' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
]

const proofPoints = [
  { value: '9+', label: 'Years across software delivery, cloud, and platform work' },
  { value: 'IaC', label: 'Current emphasis on repeatable dynamic environments' },
  { value: 'GCP / AWS', label: 'Hands-on cloud surface across optimization and delivery' },
]

const signals = [
  'Infrastructure as Code',
  'Cloud Operations',
  'Microservice Decomposition',
  'Delivery Automation',
  'Performance Optimization',
]

const focusCards = [
  {
    title: 'IaC Foundations',
    description:
      'Designing repeatable provisioning flows so environments can be created with less friction and more consistency.',
    icon: 'M12 5v14m-7-7h14',
  },
  {
    title: 'Cloud Optimization',
    description:
      'Balancing performance, cost, and operational clarity across AWS and GCP workloads.',
    icon: 'M5 16.5h14M8.5 13V9.5m5 7V7m5 9v-4',
  },
  {
    title: 'Architecture Modernization',
    description:
      'Helping teams move from legacy complexity toward cleaner boundaries and healthier service design.',
    icon: 'M6 8.5h5v5h-5zM13 8.5h5v5h-5zM9.5 14h5v5h-5z',
  },
  {
    title: 'Engineering Enablement',
    description:
      'Supporting delivery pipelines, QA collaboration, and operational workflows that reduce cognitive load.',
    icon: 'M7 7h10M7 12h10M7 17h6',
  },
]

const experience = [
  {
    period: 'Jun 2024 - Present',
    role: 'Associate Tech Specialist',
    company: 'Tech Mahindra',
    bullets: [
      'Adapt existing infrastructure patterns into fresh IaC flows for new delivery needs.',
      'Initiate provisioning scripts for dynamic environments with repeatability in mind.',
      'Operate at the intersection of platform setup and practical delivery support.',
    ],
  },
  {
    period: 'May 2024 - Jun 2024',
    role: 'Cloud Operations Focus',
    company: 'Lion Parcel',
    bullets: [
      'Worked across AWS and GCP stacks.',
      'Focused on cost and performance optimization.',
      'Treated cloud decisions as operational and product tradeoffs, not just infrastructure tasks.',
    ],
  },
  {
    period: 'Jan 2023 - Apr 2024',
    role: 'Architecture and Delivery',
    company: 'Investree',
    bullets: [
      'Worked with product, QA, and development teams on microservice decomposition.',
      'Helped shape architecture for legacy and whitelabel initiatives.',
      'Connected delivery concerns with long-term maintainability.',
    ],
  },
  {
    period: 'Aug 2017 - Dec 2019',
    role: 'Software Engineering',
    company: 'REA Group',
    bullets: [
      'Built with Node.js, ES6, TypeScript, and PHP.',
      'Supported QA automation as part of broader engineering execution.',
      'Worked close to application delivery, not only implementation.',
    ],
  },
  {
    period: 'Sep 2015 - Sep 2016',
    role: 'PHP Web Developer',
    company: '1rstWAP',
    bullets: [
      'Reviewed PHP code against standards and internal quality expectations.',
      'Created deployment scripts and improved release workflow consistency.',
      'Built an early base in delivery-minded engineering practices.',
    ],
  },
]

function closeMobileNav() {
  mobileNavOpen.value = false
}
</script>

<template>
  <div class="page-shell">
    <header class="sticky top-0 z-50">
      <div class="container-shell py-4">
        <div class="nav-shell">
          <a class="brand-lockup" href="#home" @click="closeMobileNav">
            <span class="brand-mark">AK</span>
            <span class="flex flex-col">
              <span class="text-sm font-semibold text-slate-950">Abdul Khoir</span>
              <span class="text-xs text-slate-500">Associate Tech Specialist</span>
            </span>
          </a>

          <button
            type="button"
            class="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/75 text-slate-700 lg:hidden"
            :aria-expanded="mobileNavOpen"
            aria-label="Toggle navigation"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div class="hidden items-center gap-2 lg:flex">
            <nav class="flex items-center gap-1">
              <a
                v-for="item in navigation"
                :key="item.href"
                :href="item.href"
                class="nav-link"
                @click="closeMobileNav"
              >
                {{ item.label }}
              </a>
            </nav>
            <a
              href="https://www.linkedin.com/in/abdul-khoir-218804111/"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary"
            >
              LinkedIn
            </a>
            <a href="#lab" class="btn-primary">Open Lab</a>
          </div>
        </div>

        <div v-if="mobileNavOpen" class="mobile-nav mt-3 lg:hidden">
          <a
            v-for="item in navigation"
            :key="`mobile-${item.href}`"
            :href="item.href"
            class="nav-link mobile-nav-link"
            @click="closeMobileNav"
          >
            {{ item.label }}
          </a>
          <div class="flex gap-3 px-4 pb-4 pt-2">
            <a
              href="https://www.linkedin.com/in/abdul-khoir-218804111/"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary flex-1"
              @click="closeMobileNav"
            >
              LinkedIn
            </a>
            <a href="#lab" class="btn-primary flex-1" @click="closeMobileNav">Open Lab</a>
          </div>
        </div>
      </div>
    </header>

    <main class="container-shell space-y-24 pb-20 pt-6 md:space-y-28 md:pt-10">
      <section
        id="home"
        class="grid gap-10 border-b border-slate-900/10 pb-16 md:pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"
      >
        <div class="space-y-8 animate-rise">
          <p class="section-kicker">
            Infrastructure as Code
            <span class="text-slate-300">•</span>
            Cloud Ops
            <span class="text-slate-300">•</span>
            Delivery Systems
          </p>

          <div class="space-y-5">
            <h1 class="display-title max-w-5xl text-5xl leading-[0.94] text-slate-950 sm:text-6xl lg:text-7xl">
              I build repeatable infrastructure and reliable delivery workflows.
            </h1>
            <p class="max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              Jakarta-based Associate Tech Specialist at Tech Mahindra, working across dynamic
              environments, platform delivery, cloud optimization, and architecture modernization.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a href="#lab" class="btn-primary">Open Lab</a>
            <a
              href="https://www.linkedin.com/in/abdul-khoir-218804111/"
              target="_blank"
              rel="noreferrer"
              class="btn-secondary"
            >
              View LinkedIn
            </a>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <article v-for="item in proofPoints" :key="item.label" class="metric-card">
              <p class="text-2xl font-semibold text-slate-950 sm:text-[1.7rem]">{{ item.value }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ item.label }}</p>
            </article>
          </div>
        </div>

        <aside class="space-y-4 animate-rise [animation-delay:160ms]">
          <article class="surface-card p-6 sm:p-7">
            <div class="flex items-start justify-between gap-6">
              <div>
                <p class="section-kicker">Operational Profile</p>
                <h2 class="mt-4 text-2xl font-semibold text-slate-950">Now building in delivery-facing infrastructure.</h2>
              </div>
              <span class="status-dot"></span>
            </div>

            <div class="mt-6 space-y-3">
              <div class="status-row">
                <span>Current role</span>
                <strong>Tech Mahindra</strong>
              </div>
              <div class="status-row">
                <span>Location</span>
                <strong>Jakarta, Indonesia</strong>
              </div>
              <div class="status-row">
                <span>Education</span>
                <strong>Universitas Budi Luhur</strong>
              </div>
            </div>

            <div class="subtle-divider"></div>

            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Signal set
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="signal in signals" :key="signal" class="signal-chip">
                  {{ signal }}
                </span>
              </div>
            </div>
          </article>

          <article class="surface-card p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Snapshot
            </p>
            <div class="mt-4 space-y-4">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-slate-950">Dynamic environment setup</p>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    IaC patterns focused on repeatability instead of one-off fixes.
                  </p>
                </div>
                <span class="inline-flex rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
                  Active
                </span>
              </div>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-slate-950">Cloud cost and performance</p>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    AWS and GCP decisions grounded in operational reality.
                  </p>
                </div>
                <span class="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                  Cross-cloud
                </span>
              </div>
            </div>
          </article>
        </aside>
      </section>

      <section id="about" class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-5">
          <p class="section-kicker">About</p>
          <h2 class="section-heading max-w-3xl">
            Technical credibility works best when the interface is clear and the message is direct.
          </h2>
          <p class="max-w-2xl text-base leading-8 text-slate-600">
            This site reframes Abdul Khoir’s profile as a sharper engineering presence: less
            template polish, more operational signal. The emphasis is on work that helps teams move
            faster without losing discipline around infrastructure and delivery quality.
          </p>
        </div>

        <article class="surface-card p-6 sm:p-7">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Operating principles
          </p>
          <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <li class="list-accent">Build systems that are understandable before they are clever.</li>
            <li class="list-accent">Treat cloud spend, performance, and delivery time as one conversation.</li>
            <li class="list-accent">Use tooling to reduce team friction, not to create more ceremony.</li>
            <li class="list-accent">Prefer repeatable infrastructure over emergency heroics.</li>
          </ul>
        </article>
      </section>

      <section id="focus" class="space-y-8">
        <div class="max-w-3xl space-y-4">
          <p class="section-kicker">Focus</p>
          <h2 class="section-heading">
            Capability areas shaped by platform work, application delivery, and modernization.
          </h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in focusCards"
            :key="item.title"
            class="surface-card h-full p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-300/80 hover:shadow-[0_18px_46px_rgba(20,184,166,0.08)]"
          >
            <span class="focus-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  :d="item.icon"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h3 class="mt-5 text-lg font-semibold text-slate-950">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section id="experience" class="space-y-8">
        <div class="max-w-3xl space-y-4">
          <p class="section-kicker">Experience</p>
          <h2 class="section-heading">
            Selected milestones from platform, architecture, and product-facing engineering work.
          </h2>
        </div>

        <div class="space-y-4">
          <article
            v-for="item in experience"
            :key="`${item.company}-${item.period}`"
            class="timeline-card"
          >
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                {{ item.period }}
              </p>
              <div class="mt-3 space-y-1">
                <h3 class="text-xl font-semibold text-slate-950">{{ item.role }}</h3>
                <p class="text-sm font-medium text-sky-700">{{ item.company }}</p>
              </div>
            </div>
            <ul class="space-y-3 text-sm leading-7 text-slate-600">
              <li v-for="bullet in item.bullets" :key="bullet" class="list-accent">
                {{ bullet }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="lab" class="space-y-8">
        <div class="max-w-3xl space-y-4">
          <p class="section-kicker">Lab</p>
          <h2 class="section-heading">
            The subnet calculator now sits inside the same visual system instead of feeling bolted
            on.
          </h2>
        </div>

        <article class="surface-card overflow-hidden p-6 sm:p-7">
          <div class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div class="lab-preview">
              <div class="hero-map">
                <span class="h-5 w-[42%] rounded-full bg-slate-950"></span>
                <span class="h-5 w-[24%] rounded-full bg-teal-500"></span>
                <span class="h-5 w-[16%] rounded-full bg-sky-500"></span>
                <span class="h-5 w-[12%] rounded-full bg-amber-400"></span>
              </div>
              <div class="space-y-3">
                <span class="inline-flex w-fit rounded-full border border-slate-900/10 bg-white px-3 py-1.5 font-mono text-xs text-slate-700">
                  192.168.0.0/24
                </span>
                <div class="grid gap-3 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-900/10 bg-white/80 p-4">
                    <p class="text-xs uppercase tracking-[0.18em] text-slate-500">Tree view</p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      Split and merge nodes without the legacy table-first feel.
                    </p>
                  </div>
                  <div class="rounded-2xl border border-slate-900/10 bg-white/80 p-4">
                    <p class="text-xs uppercase tracking-[0.18em] text-slate-500">Results</p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      Host ranges, usable IPs, and copy actions in one cleaner workspace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <p class="section-kicker">Featured Tool</p>
              <h3 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Visual Subnet Calculator
              </h3>
              <p class="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Rebuilt in Vue with a cleaner control plane, a visual split tree, derived results,
                and shareable subnet state. It now behaves like a deliberate lab product, not a
                legacy utility page.
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span class="signal-chip">CIDR Planning</span>
                <span class="signal-chip">Network Boundaries</span>
                <span class="signal-chip">Split / Merge Visuals</span>
              </div>

              <div class="mt-6 flex flex-wrap gap-3">
                <a href="/subnet-calculate/" class="btn-primary">Open Subnet Calculator</a>
                <button type="button" class="btn-secondary" @click="labDetailsOpen = !labDetailsOpen">
                  {{ labDetailsOpen ? 'Hide Details' : 'What It Does' }}
                </button>
              </div>

              <div v-if="labDetailsOpen" class="lab-accordion">
                <p>
                  The calculator accepts CIDR input, normalizes invalid boundaries inline, derives
                  host ranges, and lets you inspect subnet structure visually instead of forcing you
                  through a raw legacy table workflow.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="contact" class="pb-6">
        <article class="surface-card p-6 sm:p-8">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl">
              <p class="section-kicker">Contact</p>
              <h2 class="section-heading mt-3">
                Open the lab, read the profile, or continue the conversation on LinkedIn.
              </h2>
              <p class="mt-4 text-base leading-8 text-slate-600">
                This site is built as a compact front door: profile context on one side, practical
                tools on the other.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/abdul-khoir-218804111/"
                target="_blank"
                rel="noreferrer"
                class="btn-primary"
              >
                Connect on LinkedIn
              </a>
              <a href="#lab" class="btn-secondary">Go to Lab</a>
            </div>
          </div>

          <div class="subtle-divider"></div>

          <div class="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Crafted with Vue, Vite, and a blueprint-inspired design system.</p>
            <p class="font-medium text-slate-700">Abdul Khoir · Jakarta, Indonesia</p>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
