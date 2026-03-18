export interface Project {
  id: string
  year: number
  yearEnd?: number
  title: string
  company: string
  role: string
  type: 'fulltime' | 'freelance'
  description: string
  impact?: string
  techStack: string[]
  images: string[]
  liveUrls?: { label: string; url: string }[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'smiled-kpi',
    year: 2023,
    yearEnd: 2026,
    title: 'SMILED KPI — Portal Sistem Informasi',
    company: 'KPI (Komisi Penyiaran Indonesia)',
    role: 'Frontend Developer',
    type: 'freelance',
    description: 'Online Information Portal System untuk Komisi Penyiaran Indonesia Nasional, dilengkapi interactive charts, admin dashboard, dan dynamic data forms.',
    techStack: ['Vue.js', 'Nuxt.js', 'Vuex', 'ECharts', 'ChartJs'],
    images: ['/projects/smiled-kpi/1.png', '/projects/smiled-kpi/2.png', '/projects/smiled-kpi/3.png', '/projects/smiled-kpi/4.png', '/projects/smiled-kpi/5.png', '/projects/smiled-kpi/6.png', '/projects/smiled-kpi/7.png', '/projects/smiled-kpi/8.png'],
    liveUrls: [{ label: 'smiled.kpi.go.id', url: 'https://smiled.kpi.go.id' }],
    featured: true,
  },
  {
    id: 'telkom',
    year: 2020,
    yearEnd: 2025,
    title: 'IoT Data Platform',
    company: 'Telkom Indonesia',
    role: 'Software Engineer',
    type: 'fulltime',
    description: 'Real-time IoT data visualization dashboard untuk monitoring dan tracking ribuan perangkat tersebar di seluruh Indonesia.',
    impact: 'Tracking 1000+ IoT devices, improved user engagement across digital product portfolio.',
    techStack: ['Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Redux', 'Leaflet', 'Chart.js', 'ECharts', 'Vuex'],
    images: [
      '/projects/telkom/01-dashboard.png',
      '/projects/telkom/02-map.png',
      '/projects/telkom/03-devices.png',
    ],
    liveUrls: [
      { label: 'antares.id', url: 'https://antares.id' },
      { label: 'indicar.id', url: 'https://indicar.id' },
      { label: 'iot.kesehatan-digital.id', url: 'https://iot.kesehatan-digital.id' },
    ],
    featured: false,
  },
  {
    id: 'cloami',
    year: 2025,
    title: 'Cloami Dashboard',
    company: 'Cloami',
    role: 'Full Stack Developer',
    type: 'freelance',
    description: 'Management dashboard untuk clothing brand factory outlet — inventory, order, dan laporan penjualan.',
    techStack: ['React.js', 'Nest.js', 'PostgreSQL', 'Tailwind', 'Node.js'],
    images: [
      '/projects/cloami/01-overview.png',
      '/projects/cloami/02-products.png',
    ],
    liveUrls: [{ label: 'dashboard.cloami.com', url: 'https://dashboard.cloami.com' }],
    featured: false,
  },
  {
    id: 'mehealth',
    year: 2025,
    title: 'MeHealth Clinic App',
    company: 'MeHealth Clinic (Pertamina)',
    role: 'Frontend Developer',
    type: 'freelance',
    description: 'Aplikasi klinik web dengan fitur manajemen pasien, jadwal dokter, rekam medis, dan visualisasi data real-time.',
    techStack: ['Next.js', 'Antd'],
    images: ['/projects/mehealth/01-clinic.png', '/projects/mehealth/02-schedule.png'],
    liveUrls: [{ label: 'mehealths.co.id', url: 'https://mehealths.co.id' }],
    featured: false,
  },
  {
    id: 'peacegen',
    year: 2023,
    title: 'Peacegen.id — Education Platform',
    company: 'Peacegen.id',
    role: 'Frontend Developer',
    type: 'freelance',
    description: 'Platform pendidikan online dan manajemen siswa dengan interactive dashboards dan dynamic content pages.',
    techStack: ['Vue.js', 'Nuxt.js', 'Vuex'],
    images: ['/projects/peacegen/01-dashboard.png'],
    liveUrls: [{ label: 'pa21.peacegen.id', url: 'https://pa21.peacegen.id' }],
    featured: false,
  },
  {
    id: 'ritase',
    year: 2019,
    yearEnd: 2020,
    title: 'Ritase.com — Logistics Platform',
    company: 'Ritase.com',
    role: 'Frontend Developer',
    type: 'fulltime',
    description: 'Platform logistik dengan interactive dashboards, real-time visualisasi arus logistik, order, dan shipment, serta User Access Control berbasis role.',
    techStack: ['AngularJS', 'Google Maps API'],
    images: ['/projects/ritase/01-dashboard.png', '/projects/ritase/02-map.png'],
    liveUrls: [{ label: 'ritase.com', url: 'https://ritase.com' }],
    featured: false,
  },
  {
    id: 'ezcar',
    year: 2018,
    title: 'EZCar.id — Car Marketplace',
    company: 'EZCar.id',
    role: 'Full Stack Developer',
    type: 'freelance',
    description: 'Web dan mobile app dengan real-time data visualization, order flow tracking, manajemen user dan perusahaan, serta User Access Control.',
    techStack: ['React.js', 'React Native (Expo)', 'Redux', 'Antd Design', 'Node.js', 'MongoDB', 'Google Maps API'],
    images: ['/projects/ezcar/01-app.png', '/projects/ezcar/02-mobile.png'],
    liveUrls: [{ label: 'ezcar.id', url: 'https://ezcar.id' }],
    featured: false,
  },
]

export const skills = {
  frontend: [
    { name: 'Vue.js / Nuxt.js', level: 95 },
    { name: 'React.js / Next.js', level: 90 },
    { name: 'AngularJS', level: 70 },
    { name: 'Tailwind / Bootstrap / Antd', level: 88 },
  ],
  backend: [
    { name: 'Node.js / Hapi.js', level: 80 },
    { name: 'Nest.js', level: 78 },
    { name: 'Laravel', level: 75 },
    { name: 'PostgreSQL / MySQL', level: 78 },
    { name: 'MongoDB', level: 72 },
  ],
  tools: [
    { name: 'Git / Docker', level: 82 },
    { name: 'Figma', level: 65 },
    { name: 'Kafka / Redis / MQTT', level: 70 },
    { name: 'Jest / Sonarqube', level: 80 },
  ],
}
