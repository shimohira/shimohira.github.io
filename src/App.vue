<script setup>
import { ref } from 'vue'

const mobileNavOpen = ref(false)

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tools', href: '#tools' },
]

const proofPoints = [
  { value: '9+', label: 'years across delivery, cloud, and platform work' },
  { value: '2024', label: 'current move into dynamic IaC environments' },
  { value: 'Jakarta', label: 'base of operations and collaboration' },
]

const focusAreas = [
  'Infrastructure as Code',
  'Cloud Operations',
  'Microservice Decomposition',
  'Deployment Automation',
  'Performance Optimization',
]

const expertise = [
  {
    title: 'Infrastructure Delivery',
    description:
      'Building and adapting IaC foundations for dynamic environments, with an emphasis on consistency and repeatable provisioning.',
  },
  {
    title: 'Cloud Operations',
    description:
      'Hands-on exposure to GCP and AWS stacks, including cost awareness, performance tuning, and reliable environment setup.',
  },
  {
    title: 'Architecture Modernization',
    description:
      'Supporting product and engineering teams while breaking down legacy systems and shaping more scalable service boundaries.',
  },
  {
    title: 'Software Engineering',
    description:
      'Practical engineering background across Node.js, TypeScript, PHP, delivery scripting, and QA-facing automation support.',
  },
]

const experience = [
  {
    period: 'Jun 2024 - Present',
    title: 'Associate Tech Specialist',
    company: 'Tech Mahindra',
    detail:
      'Cloning and adapting existing configurations to create fresh IaC flows, then initiating scripts for dynamic environment provisioning.',
  },
  {
    period: 'May 2024 - Jun 2024',
    title: 'Cloud Operations Focus',
    company: 'Lion Parcel',
    detail:
      'Worked with GCP and AWS stacks while focusing on cost and performance optimization.',
  },
  {
    period: 'Jan 2023 - Apr 2024',
    title: 'Architecture and Delivery',
    company: 'Investree',
    detail:
      'Partnered with product, QA, and developer teams to decompose microservices and shape architecture for legacy and whitelabel projects.',
  },
  {
    period: 'Aug 2017 - Dec 2019',
    title: 'Software Engineering',
    company: 'REA Group',
    detail:
      'Worked with Node.js, ES6, TypeScript, and PHP while also supporting QA automation efforts.',
  },
  {
    period: 'Sep 2015 - Sep 2016',
    title: 'PHP Web Developer',
    company: '1rstWAP',
    detail:
      'Handled code review around PHP standards, created deployment scripts, and improved delivery workflows for application releases.',
  },
]

const tools = [
  {
    title: 'Visual Subnet Calculator',
    href: '/subnet-calculate/',
    description:
      'A preserved legacy calculator for breaking down CIDR ranges, host counts, and subnet divisions from the landing page.',
    meta: ['Legacy tool', 'CIDR planning', 'Hosted statically'],
  },
]

function closeMobileNav() {
  mobileNavOpen.value = false
}
</script>

<template>
  <div class="page-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <div class="grain"></div>

    <header class="site-header">
      <a class="brand" href="#home" @click="closeMobileNav">
        <span class="brand-mark">AK</span>
        <span class="brand-copy">
          <strong>Abdul Khoir</strong>
          <small>Associate Tech Specialist</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="mobileNavOpen"
        aria-label="Toggle navigation"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" :class="{ open: mobileNavOpen }">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          @click="closeMobileNav"
        >
          {{ item.label }}
        </a>
        <a
          class="nav-cta"
          href="https://www.linkedin.com/in/abdul-khoir-218804111/"
          target="_blank"
          rel="noreferrer"
          @click="closeMobileNav"
        >
          LinkedIn
        </a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="hero-copy reveal">
          <p class="eyebrow">Jakarta-based cloud and delivery professional</p>
          <h1>
            Building dependable infrastructure, modern delivery flows, and
            practical tools for engineering teams.
          </h1>
          <p class="lead">
            Abdul Khoir brings together infrastructure as code, cloud
            operations, software engineering, and architecture modernization to
            help teams ship with more confidence and less friction.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#tools">Explore Tools</a>
            <a
              class="button button-secondary"
              href="https://www.linkedin.com/in/abdul-khoir-218804111/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>

          <div class="proof-grid">
            <article
              v-for="point in proofPoints"
              :key="point.label"
              class="proof-card"
            >
              <strong>{{ point.value }}</strong>
              <span>{{ point.label }}</span>
            </article>
          </div>
        </div>

        <aside class="hero-panel reveal">
          <div class="profile-card">
            <p class="panel-label">Current profile</p>
            <div class="profile-heading">
              <div class="profile-monogram">AK</div>
              <div>
                <h2>Abdul Khoir</h2>
                <p>Associate Tech Specialist at Tech Mahindra</p>
              </div>
            </div>

            <dl class="profile-meta">
              <div>
                <dt>Location</dt>
                <dd>Jakarta, Indonesia</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Universitas Budi Luhur</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>IaC, cloud operations, architecture delivery</dd>
              </div>
            </dl>

            <div class="chip-row">
              <span v-for="focus in focusAreas" :key="focus" class="chip">
                {{ focus }}
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section class="section reveal" id="about">
        <div class="section-heading">
          <p class="eyebrow">Profile</p>
          <h2>A grounded engineering profile with infrastructure depth.</h2>
        </div>
        <div class="about-layout">
          <div class="about-copy">
            <p>
              This landing page is shaped around Abdul Khoir’s public LinkedIn
              profile and translates that professional story into a cleaner,
              more focused web presence.
            </p>
            <p>
              The emphasis is on practical engineering value: provisioning
              environments, improving delivery workflows, helping teams move
              from legacy systems toward healthier architecture, and keeping
              tooling accessible from one front door.
            </p>
          </div>

          <div class="about-callout">
            <p class="panel-label">What stands out</p>
            <ul>
              <li>Infrastructure as code work for dynamic environments</li>
              <li>Cloud optimization across GCP and AWS stacks</li>
              <li>Microservice decomposition and architecture support</li>
              <li>Delivery automation with a software engineering mindset</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section reveal" id="expertise">
        <div class="section-heading">
          <p class="eyebrow">Expertise</p>
          <h2>Capabilities shaped by both platform work and product delivery.</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in expertise" :key="item.title" class="info-card">
            <p class="panel-label">Focus area</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="section reveal" id="experience">
        <div class="section-heading">
          <p class="eyebrow">Experience</p>
          <h2>Selected milestones from public profile history.</h2>
        </div>
        <div class="timeline">
          <article
            v-for="item in experience"
            :key="`${item.company}-${item.period}`"
            class="timeline-item"
          >
            <p class="timeline-period">{{ item.period }}</p>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="timeline-company">{{ item.company }}</p>
              <p>{{ item.detail }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section reveal" id="tools">
        <div class="section-heading">
          <p class="eyebrow">Tools</p>
          <h2>Existing utilities are now reachable from the landing page.</h2>
        </div>

        <div class="tool-grid">
          <article v-for="tool in tools" :key="tool.title" class="tool-card">
            <div class="tool-visual">
              <div class="tool-badge">Subnet</div>
              <div class="tool-preview">
                <span>192.168.0.0/24</span>
                <span>Host ranges</span>
                <span>CIDR splits</span>
              </div>
            </div>

            <div class="tool-copy">
              <p class="panel-label">Legacy utility</p>
              <h3>{{ tool.title }}</h3>
              <p>{{ tool.description }}</p>

              <div class="tool-meta">
                <span v-for="item in tool.meta" :key="item">{{ item }}</span>
              </div>

              <a class="button button-primary" :href="tool.href">
                Open Calculator
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="section reveal" id="contact">
        <div class="cta-panel">
          <div>
            <p class="eyebrow">Next step</p>
            <h2>Use the tool, review the profile, or extend the site further.</h2>
          </div>
          <div class="cta-actions">
            <a class="button button-primary" href="#tools">Go to Tools</a>
            <a
              class="button button-secondary"
              href="https://www.linkedin.com/in/abdul-khoir-218804111/"
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
