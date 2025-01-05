import Image from 'next/image'

const officers = [
  { name: 'Kunaal Purohit', role: 'Co-President', image: '/Images/kunaal.jpg' },
  { name: 'Ashwika Bansal', role: 'Co-President', image: '/Images/ashwika.jpg' },
  { name: 'Ankit Kale', role: 'VP Of Competitive Events', image: '/Images/ankit.jpg', objectPosition: 'center 25%' },
  { name: 'Srihita Nuthalapati', role: 'VP Of Community Service', image: '/Images/srihita.jpg' },
  { name: 'Niharika Chandra', role: 'VP of Membership', image: '/Images/niharika.jpg' },
  { name: 'Nishi Kamani', role: 'Social Media', image: '/Images/nishi.jpg' },
  { name: 'Pranavi Kaki', role: 'Social Media', image: '/Images/pranavi.jpeg' },
  { name: 'Vivaan Shah', role: 'Secretary', image: '/Images/vivaan.jpg' },
  { name: 'Aayush Chebolu', role: 'Exec. of Competitive Events', image: '/Images/aayush.jpeg' },
  { name: 'Sanuli Abeydeera', role: 'Exec. of Competitive Events', image: '/Images/sanuli.jpg' },
  { name: 'Tanisha Kinikar', role: 'Exec. of Competitive Events', image: '/Images/Tanisha.jpg' },
  { name: 'Megha Kumar', role: 'Exec. of Membership', image: '/Images/megha.jpg' },
  { name: 'Jagath Sathi', role: 'Exec. of Community Service', image: '/Images/jagath.jpg' },
  { name: 'Nishita Katare', role: 'Exec. of Community Service', image: '/Images/nishita.png' },
  { name: 'Arnav Deshpande', role: 'Exec. of Community Service', image: '/Images/arnav.png' },
  { name: 'Ritika Kulkarni', role: 'Exec. of Community Service', image: '/Images/ritika.jpg' },
  { name: 'Shaurya Suresh', role: 'Underclassmen Rep', image: '/Images/shaurya.jpg', objectPosition: 'center 25%' },
  { name: 'Syed Aayan', role: 'Underclassmen Rep', image: '/Images/syed.jpg', objectPosition: 'center 0%' },

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
                className="rounded-full mb-4 object-cover aspect-square"
                style={{
                  objectPosition: officer.objectPosition || 'center', // Default to 'center' if no specific position is provided
                }}
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

