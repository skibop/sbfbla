import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">ABOUT US</h2>
        <p className="text-center text-xl mb-4 text-yellow-600"><em>South Brunswick's FBLA Chapter</em></p>
        <p className="text-center mb-12 max-w-4xl mx-auto text-gray-700">
          SB FBLA is South Brunswick's high school division of Future Business Leaders of America.
          FBLA helps high school students prepare for careers in business through competitions, leadership development, and educational programs.
          We inspire and prepare students to become community-minded business leaders in a global society through relevant career preparation and leadership experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=280&width=500"
              alt="Competitive Events Committee at SLC in Atlantic City"
              width={500}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">COMPETE</h3>
            <p className="text-gray-700">
              Showcase your business prowess in 1 of 76 events and gain competitive exposure on the state and national levels.
              At the state level, you will be given the opportunity to attend an overnight conference at Atlantic City, New Jersey, and achieve awards and recognition for your achievements.
              At a national level, you will be able to attend overnight conferences in some of the country's grandest cities, such as Atlanta, Chicago, or Anaheim.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col justify-center bg-yellow-100 p-6 rounded-lg md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-800">LEAD & LEARN</h3>
            <p className="text-gray-700">
              You will be able to participate in multiple leadership activities and partake in
              presentation and speaking events, work with committees of various fields, and work towards achievement awards.
              You will be given all the resources and opportunities you need to learn about the business field and interests you want to pursue, whether it be from
              the committees and presentations we provide or the outside business professionals we invite to our meetings.
            </p>
          </div>
          <div className="flex items-center justify-center md:order-2">
            <Image
              src="/placeholder.svg?height=280&width=500"
              alt="Our Co-President Kunaal running for Central Region VP in Atlantic City!"
              width={500}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=280&width=500"
              alt="Fundraising event"
              width={500}
              height={280}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">FUNDRAISE</h3>
            <p className="text-gray-700">
              Spread awareness of prevalent issues by garnering public support and funds.
              You will be able to participate in the Pretzal Rod Fundraiser and our Chipotle & Panera Fundraisers. You will also be able to give back to our community by donating items for our Community Service Project & State Initiatives.
              You will learn vital business skills first-hand that can be applied to any field of interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

