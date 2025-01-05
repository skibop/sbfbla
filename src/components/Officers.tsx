import Image from 'next/image'

const officers = [
  { name: 'Kunaal Purohit', role: 'Co-President', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Ashwika Bansal', role: 'Co-President', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Ankit Kale', role: 'VP Of Competitive Events', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Srihita Nuthalapati', role: 'VP Of Community Service', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Niharika Chandra', role: 'VP of Membership', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Nishi Kamani', role: 'Social Media', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Pranavi Kaki', role: 'Social Media', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Vivaan Shah', role: 'Secretary', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Aayush Chebolu', role: 'Exec. of Competitive Events', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Sanuli Abeydeera', role: 'Exec. of Competitive Events', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Megha Kumar', role: 'Exec. of Membership', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Jagath Sathi', role: 'Exec. of Community Service', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Tanisha Kinikar', role: 'Exec. of Competitive Events', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Nishita Katare', role: 'Exec. of Community Service', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Arnav Deshpande', role: 'Exec. of Community Service', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Ritika Kulkarni', role: 'Exec. of Community Service', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Shaurya Suresh', role: 'Underclassmen Rep', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Syed Aayan', role: 'Underclassmen Rep', image: '/placeholder.svg?height=300&width=300' },

]

export default function Officers() {
  return (
    <section id="officers" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">OUR OFFICER TEAM</h2>
        <p className="text-center text-xl mb-12">Here are the current officers for the 2024-2025 school year!</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {officers.map((officer) => (
            <div key={officer.name} className="flex flex-col items-center">
              <Image
                src={officer.image}
                alt={officer.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{officer.name}</h3>
              <p className="text-gray-600">{officer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

