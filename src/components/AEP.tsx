import Image from "next/image"

export default function AmericanEnterprise() {
  return (
    <section id="AEP" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">American Enterprise</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="col-span-2">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              American enterprise is a project where students must educate their community on financial literacy,
              entrepreneurship, and the economy. We have had various initiatives to do so, the first being a social
              media campaign. This campaign had two different series, Small Business Saturdays and Mastery Mondays. On
              small business Saturdays, the AEP committee would highlight a different small business each week ranging
              from jewelry to bookshops. Mastery Mondays would focus on a different topic each month, Financial
              Literacy, Marketing, and Business Ethics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="/Images/Social Media/image4.png"
                alt="AEP Initiative 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/Images/Social Media/image6.png"
                alt="AEP Initiative 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="grid grid-cols-2 gap-4 md:order-2">
            <div className="relative aspect-square">
              <Image
                src="/Images/Middle School/image1.png"
                alt="AEP In-person Impact 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/Images/Middle School/image5.png"
                alt="AEP In-person Impact 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="col-span-2 md:order-1">
            <p className="text-gray-700 text-lg leading-relaxed">
              Aside from their social media, American Enterprise has worked to make an impact in person. Their three
              committees, social media, middle school, and senior center each tackled various areas to educate people on
              American enterprise. The middle school team planned an informative lesson on financial literacy as well as
              a shark tank project for the students to present to showcase their entrepreneurial skills. The senior
              center team worked to present a scam awareness presentation to the senior center as much of the elderly
              are susceptible to online scams.
            </p>
          </div>
        </div>

        <div className="mb-12">
  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    AEP has also conducted various webinars and interviews, one being with Rachna Malkana, an attorney admitted
    to the state of New Jersey and has served on the executive board for SABA-NJ since 2016 and was previously
    president. She started her own law practice in 2003 practicing real estate law. She shared her journey,
    discussed business ethics, contracts, and leadership. The members of the AEP project were also able to
    interview Tirusha Dave, the founder of Ellies Academy. They were able to tour her facility and ask her
    questions on her journey and why she chose to become a business owner. This initiative was a partnership
    with the nonprofit Dear Asian Youth, and Tirusha shared her experiences as an Asian Woman and entrepreneur.
    The third person AEP was able to speak to was Peter Traficante, an auditor at Deloitte, one of the top
    accounting firms in the nation. Mr. Traficante gave students various activities and taught a lesson
    specifically on American Enterprise, as well as had a Q&A session with the FBLA members afterwards on his
    career and advice that he had.
  </p>

  {/* Grid Layout */}
  <div className="grid grid-cols-2 gap-4">
    {/* First row: Two smaller square images */}
    <div className="relative aspect-square">
      <Image
        src="/Images/Interviews/image10.png"
        alt="Rachna Malkana"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>

    <div className="relative aspect-square">
      <Image
        src="/Images/Interviews/image2.jpg"
        alt="Peter Traficante"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Second row: One large rectangle image spanning both columns */}
    <div className="relative col-span-2 aspect-[3/2]"> {/* Adjust aspect ratio as needed */}
      <Image
        src="/Images/Interviews/image9.png"
        alt="Tirusha Dave"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>


        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            During school lunches the American Enterprise team conducted workshops through trivia games and
            informational handouts. During a Jeopardy! style game, the students were tested on their knowledge of
            budgeting, the economy, and other common American Enterprise topics, competing against their peers for who
            could answer the most questions correctly.
          </p>
          <div className="grid grid-cols-2 gap-4">
         
            <div className="relative aspect-video">
              <Image
                src="/Images/Lunch/image7.png"
                alt="School Lunch Workshop 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/Images/image8.png"
                alt="School Lunch Workshop 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

