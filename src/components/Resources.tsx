import { Users, Trophy, Handshake, Briefcase } from 'lucide-react'

const resources = [
  {
    icon: Users,
    title: 'MEMBERSHIP TRACKER',
    link: 'https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQh4kBcxn2Cc_306K5N_7lgLIuMguUob0kn-F95Ov_yOeVjCa4Hec9rIMVvGHHmWtN7WOog1Spp3FGa/pubhtml?gid=1416200315&single=true',
  },
  {
    icon: Trophy,
    title: 'COMPETITIVE EVENTS',
    link: 'https://www.fbla.org/high-school/competitive-events/',
  },
  {
    icon: Handshake,
    title: 'COMMUNITY SERVICE',
    link: 'https://www.njfbla.org/communityservice',
  },
  {
    icon: Briefcase,
    title: 'BUSINESS ACHIEVEMENT AWARDS',
    link: 'https://www.fbla.org/business-achievement-awards/',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">RESOURCES</h2>
        <p className="text-center text-xl mb-12">Click on the icons to find the resources you need!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center hover:text-blue-300 transition-colors"
            >
              <resource.icon size={48} className="mb-4" />
              <h3 className="text-lg font-semibold">{resource.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

