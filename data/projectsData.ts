// Your projects. Replace these samples with your own work: a 16:9 image in
// public/static/images/projects/, a link to the live site or repo, and the
// tech you used. Featured projects also appear on the home page.
interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tech?: string[]
  featured?: boolean
}

const projectsData: Project[] = [
  {
    title: 'ShopEase: MERN e-commerce store',
    description:
      'Product catalogue, cart, Razorpay test checkout and an admin dashboard for orders and stock. JWT auth with refresh tokens.',
    imgSrc: '/static/images/projects/shopease.png',
    href: '/blog/building-my-first-mern-app',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    featured: true,
  },
  {
    title: 'TaskFlow: team task manager',
    description:
      'Kanban boards with drag and drop, due-date reminders and real-time updates between teammates using Socket.IO.',
    imgSrc: '/static/images/projects/taskflow.png',
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'Tailwind CSS'],
    featured: true,
  },
  {
    title: 'WeatherNow: city weather dashboard',
    description:
      'Search any city for current weather and a 5-day forecast, with charts and saved favourites. My first API project.',
    imgSrc: '/static/images/projects/weathernow.png',
    tech: ['JavaScript', 'REST API', 'Chart.js'],
    featured: true,
  },
  {
    title: 'StudyBot: notes Q&A assistant',
    description:
      'Upload class notes and ask questions about them. Answers quote the matching notes, built with embeddings and an LLM API.',
    imgSrc: '/static/images/projects/studybot.png',
    tech: ['Python', 'FastAPI', 'Embeddings', 'React'],
  },
]

export default projectsData
