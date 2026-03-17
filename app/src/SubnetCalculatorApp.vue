<script setup>
import { computed, onMounted, ref } from 'vue'

const networkAddress = ref('192.168.0.0')
const maskBits = ref(24)
const divideToBits = ref(26)

const errorMessage = ref('')
const warningMessage = ref('')
const result = ref(null)
const copied = ref(false)

function parseIpv4(input) {
  const parts = input.trim().split('.')
  if (parts.length !== 4) {
    return null
  }

  const numbers = []
  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      return null
    }

    const value = Number(part)
    if (value < 0 || value > 255) {
      return null
    }

    numbers.push(value)
  }

  return (
    ((numbers[0] << 24) | (numbers[1] << 16) | (numbers[2] << 8) | numbers[3]) >>>
    0
  )
}

function intToIpv4(value) {
  return [
    (value >>> 24) & 255,
    (value >>> 16) & 255,
    (value >>> 8) & 255,
    value & 255,
  ].join('.')
}

function maskFromBits(bits) {
  if (bits === 0) {
    return 0
  }

  return (0xffffffff << (32 - bits)) >>> 0
}

function addressCount(bits) {
  return 2 ** (32 - bits)
}

function usableHostCount(bits) {
  if (bits === 32) {
    return 1
  }

  if (bits === 31) {
    return 2
  }

  return addressCount(bits) - 2
}

function formatRange(start, end) {
  return `${intToIpv4(start)} - ${intToIpv4(end)}`
}

function createSubnetInfo(subnetAddress, bits) {
  const totalAddresses = addressCount(bits)
  const broadcast = (subnetAddress + totalAddresses - 1) >>> 0
  const usableStart = bits >= 31 ? subnetAddress : (subnetAddress + 1) >>> 0
  const usableEnd = bits >= 31 ? broadcast : (broadcast - 1) >>> 0

  return {
    cidr: `${intToIpv4(subnetAddress)}/${bits}`,
    netmask: intToIpv4(maskFromBits(bits)),
    addressRange: formatRange(subnetAddress, broadcast),
    usableRange: formatRange(usableStart, usableEnd),
    hosts: usableHostCount(bits).toLocaleString(),
  }
}

function updateQueryParams() {
  const params = new URLSearchParams()
  params.set('network', networkAddress.value)
  params.set('mask', String(maskBits.value))
  params.set('divideTo', String(divideToBits.value))
  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`)
}

function calculate() {
  errorMessage.value = ''
  warningMessage.value = ''
  copied.value = false

  const mask = Number(maskBits.value)
  const divideTo = Number(divideToBits.value)

  if (!Number.isInteger(mask) || mask < 0 || mask > 32) {
    errorMessage.value = 'Mask bit must be an integer between 0 and 32.'
    result.value = null
    return
  }

  if (!Number.isInteger(divideTo) || divideTo < mask || divideTo > 32) {
    errorMessage.value = 'Divide-to mask must be between current mask and 32.'
    result.value = null
    return
  }

  const parsedNetwork = parseIpv4(networkAddress.value)
  if (parsedNetwork === null) {
    errorMessage.value = 'Network address is invalid. Use a valid IPv4 address.'
    result.value = null
    return
  }

  const normalizedNetwork = parsedNetwork & maskFromBits(mask)
  if (normalizedNetwork !== parsedNetwork) {
    networkAddress.value = intToIpv4(normalizedNetwork)
    warningMessage.value =
      'Network address was adjusted to the nearest valid boundary for the selected mask.'
  }

  const subnetCount = 2 ** (divideTo - mask)
  if (subnetCount > 4096) {
    errorMessage.value =
      'Result would generate too many rows. Use a smaller subnet division (max 4096 rows).'
    result.value = null
    return
  }

  const subnetSize = addressCount(divideTo)
  const subnets = []

  for (let index = 0; index < subnetCount; index += 1) {
    const subnetAddress = (normalizedNetwork + index * subnetSize) >>> 0
    subnets.push({
      index: index + 1,
      ...createSubnetInfo(subnetAddress, divideTo),
    })
  }

  result.value = {
    baseNetwork: createSubnetInfo(normalizedNetwork, mask),
    subnetCount: subnetCount.toLocaleString(),
    divideToMask: divideTo,
    totalHostsPerSubnet: usableHostCount(divideTo).toLocaleString(),
    subnets,
  }

  updateQueryParams()
}

function resetForm() {
  networkAddress.value = '192.168.0.0'
  maskBits.value = 24
  divideToBits.value = 26
  calculate()
}

const shareUrl = computed(() => window.location.href)

const segmentTones = [
  'bg-slate-950',
  'bg-teal-500',
  'bg-sky-500',
  'bg-amber-400',
  'bg-teal-700',
]

const visualSegments = computed(() => {
  if (!result.value) {
    return []
  }

  const limit = Math.min(result.value.subnets.length, 24)
  return result.value.subnets.slice(0, limit).map((subnet, index) => ({
    ...subnet,
    tone: segmentTones[index % segmentTones.length],
    width: `${100 / limit}%`,
  }))
})

const hiddenSegmentCount = computed(() => {
  if (!result.value) {
    return 0
  }

  return Math.max(result.value.subnets.length - 24, 0)
})

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 1800)
  } catch (_error) {
    errorMessage.value = 'Unable to copy link. You can copy the URL manually from the address bar.'
  }
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const qNetwork = params.get('network')
  const qMask = params.get('mask')
  const qDivide = params.get('divideTo')

  if (qNetwork) {
    networkAddress.value = qNetwork
  }

  if (qMask !== null) {
    maskBits.value = Number(qMask)
  }

  if (qDivide !== null) {
    divideToBits.value = Number(qDivide)
  }

  calculate()
})
</script>

<template>
  <div class="page-wrap">
    <div class="ambient-sphere -left-24 top-10 size-72 bg-teal-400/18"></div>
    <div class="ambient-sphere right-[-6rem] top-40 size-80 bg-sky-400/12 [animation-delay:1.4s]"></div>
    <div class="noise-overlay"></div>

    <header class="sticky top-0 z-50">
      <div class="layout-container py-4">
        <div class="nav-shell">
          <a href="/" class="brand-lockup">
            <span class="brand-mark">AK</span>
            <span class="flex flex-col">
              <span class="text-sm font-semibold text-slate-950">Visual Subnet Calculator</span>
              <span class="text-xs text-slate-500">Lab tool</span>
            </span>
          </a>

          <div class="flex flex-wrap gap-2">
            <a href="/" class="btn-secondary">Back Home</a>
            <button type="button" class="btn-secondary" @click="copyShareLink">
              {{ copied ? 'Copied' : 'Share' }}
            </button>
            <button type="button" class="btn-primary" @click="resetForm">Reset</button>
          </div>
        </div>
      </div>
    </header>

    <main class="layout-container pb-20">
      <section class="grid gap-8 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:py-14">
        <aside class="space-y-4 animate-rise">
          <article class="surface-card p-6 sm:p-7">
            <p class="section-kicker">Lab Tool</p>
            <h1 class="display-title mt-4 text-4xl leading-tight text-slate-950 sm:text-5xl">
              Visual subnet planning without the old legacy feel.
            </h1>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              Calculate CIDR divisions, host ranges, and subnet boundaries from a cleaner control
              plane. The URL remains shareable, so the state travels with the link.
            </p>
          </article>

          <form class="surface-card p-6" @submit.prevent="calculate">
            <div>
              <label class="form-label" for="network-address">Network Address</label>
              <input
                id="network-address"
                v-model.trim="networkAddress"
                type="text"
                class="field-input"
                placeholder="192.168.0.0"
              />
            </div>

            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label class="form-label" for="mask-bits">Mask Bits</label>
                <input
                  id="mask-bits"
                  v-model.number="maskBits"
                  type="number"
                  min="0"
                  max="32"
                  class="field-input"
                />
              </div>
              <div>
                <label class="form-label" for="divide-mask">Divide To</label>
                <input
                  id="divide-mask"
                  v-model.number="divideToBits"
                  type="number"
                  min="0"
                  max="32"
                  class="field-input"
                />
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-3">
              <button type="submit" class="btn-primary">Calculate</button>
              <button type="button" class="btn-secondary" @click="resetForm">Reset</button>
            </div>

            <p
              v-if="errorMessage"
              class="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {{ errorMessage }}
            </p>

            <p
              v-if="warningMessage"
              class="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700"
            >
              {{ warningMessage }}
            </p>
          </form>
        </aside>

        <section class="space-y-4 animate-rise [animation-delay:160ms]" v-if="result">
          <article class="surface-card p-6">
            <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p class="section-kicker">Summary</p>
                <h2 class="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {{ result.baseNetwork.cidr }} divided to /{{ result.divideToMask }}
                </h2>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="signal-chip">{{ result.subnetCount }} subnets</span>
                <span class="signal-chip">{{ result.totalHostsPerSubnet }} usable hosts each</span>
              </div>
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div class="metric-card p-4">
                <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Base CIDR</p>
                <p class="mt-2 font-semibold text-slate-950">{{ result.baseNetwork.cidr }}</p>
              </div>
              <div class="metric-card p-4">
                <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Netmask</p>
                <p class="mt-2 font-semibold text-slate-950">{{ result.baseNetwork.netmask }}</p>
              </div>
              <div class="metric-card p-4">
                <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Address range</p>
                <p class="mt-2 text-sm font-medium text-slate-700">{{ result.baseNetwork.addressRange }}</p>
              </div>
              <div class="metric-card p-4">
                <p class="text-xs uppercase tracking-[0.16em] text-slate-500">Usable range</p>
                <p class="mt-2 text-sm font-medium text-slate-700">{{ result.baseNetwork.usableRange }}</p>
              </div>
            </div>

            <div class="mt-6 rounded-[1.35rem] border border-slate-900/8 bg-slate-950/[0.03] p-4">
              <div class="flex items-center justify-between gap-4">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Address map
                </p>
                <p class="text-xs text-slate-500">
                  {{ visualSegments.length }} visible blocks
                  <span v-if="hiddenSegmentCount > 0">+ {{ hiddenSegmentCount }} more</span>
                </p>
              </div>
              <div class="mt-4 flex overflow-hidden rounded-full border border-slate-900/10 bg-white">
                <span
                  v-for="segment in visualSegments"
                  :key="segment.cidr"
                  :class="segment.tone"
                  :style="{ width: segment.width }"
                  class="block h-4"
                  :title="segment.cidr"
                ></span>
              </div>
              <p class="mt-4 text-sm leading-7 text-slate-600">
                Each segment represents one derived subnet from the selected divide-to mask. Share
                the page URL to preserve the current configuration.
              </p>
            </div>
          </article>

          <article class="table-shell">
            <table class="min-w-full divide-y divide-slate-900/8 text-left text-sm text-slate-700">
              <thead class="bg-slate-950/[0.04] text-xs uppercase tracking-[0.14em] text-slate-500">
                <tr>
                  <th class="px-4 py-3 font-semibold">#</th>
                  <th class="px-4 py-3 font-semibold">Subnet</th>
                  <th class="px-4 py-3 font-semibold">Netmask</th>
                  <th class="px-4 py-3 font-semibold">Address Range</th>
                  <th class="px-4 py-3 font-semibold">Usable Range</th>
                  <th class="px-4 py-3 font-semibold">Hosts</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-900/8">
                <tr v-for="subnet in result.subnets" :key="subnet.cidr" class="hover:bg-slate-950/[0.025]">
                  <td class="px-4 py-3 text-slate-500">{{ subnet.index }}</td>
                  <td class="px-4 py-3 font-semibold text-slate-950">{{ subnet.cidr }}</td>
                  <td class="px-4 py-3">{{ subnet.netmask }}</td>
                  <td class="px-4 py-3">{{ subnet.addressRange }}</td>
                  <td class="px-4 py-3">{{ subnet.usableRange }}</td>
                  <td class="px-4 py-3">{{ subnet.hosts }}</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </section>
    </main>
  </div>
</template>
