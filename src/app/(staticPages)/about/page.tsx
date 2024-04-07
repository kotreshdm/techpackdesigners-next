import Image from "next/image";
import logo from "../../../assets/images/logo.png";
export default function AboutPage() {
  return (
    <div className='flex justify-center flex-wrap pages'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading'>About Us</h1>
        <h2 className='sub-heading'>Who We Are:</h2>
        <p className='content'>
          As a fashion studio and clothing manufacturing unit, our mission is to
          provide outstanding clothing designs that are fashionable and nurture
          an inventory of unique fashion products. We, at Fashion Studio Urban
          Purple (FSUP), firmly believe in providing the guiding light for
          apparel brands and private clothing labels to create products with
          fundamentally better techniques. This approach has been our
          cornerstone of success and has enabled us to bring over 200 private
          labels to life.
        </p>
        <p className='content'>
          We are a one-stop destination for designers, offering services from
          Concept to Consumer. Our designs are unique and inspirational;
          delivering a collection line that can propel any brand en route to
          success.
        </p>
        <p className='content'>
          Our services extend into providing management services for new and
          existing businesses as well. FSUP has been created with a resolute
          objective of helping the fashion industry source, plan, and
          manufacture better. We constantly strive to advance standards in
          apparel design and manufacturing by way of improved efficiency and
          reduced costs. FSUP is one of the most prominent companies in this
          space, providing a sophisticated and collaborative platform for
          apparel brands to succeed.
        </p>

        <div>
          <h2 className='sub-heading'>Our Mission:</h2>
          <p className='content'>
            Our Mission is to empower small and start-up clothing brands to
            achieve success. Urban Purple, with its Parent Company,
            Scriptographics, and other dedicated affiliate companies form a
            strong conglomerate of companies committed to the construction and
            growth of small and start-up apparel businesses without any
            geographical boundaries. Our services and instructive guidelines are
            effective, easy to apprehend, and entirely geared to help clothing
            brand owners become more competitive in the fashion and online
            retail markets with minimal investment.
          </p>
          <p className='content'>
            What we enjoy the most, though, is supporting small and start-up
            brands with unique concepts and product lines that create cognizance
            about the collective small business voice. ScriptoGraphics and Urban
            Purple encourage patrons and prospective customers along with our
            overseas partners to ask questions and share experiences. We are
            certain that every small business owner is proficient in his/her own
            way and would love to hear every single opinion and view on making
            things better. We are relentlessly evolving and improving as a
            company and our vision to empower small and start-up apparel
            businesses to succeed continues to be our driving force.
          </p>
        </div>
        <div className='container mx-auto py-2 team'>
          <h1 className='sub-heading'>Our Team</h1>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
              <h2 className='team-name'>Paromita Das</h2>
              <h6 className='team-title'>
                Fashion Designer, Technical Designer, Managing Director – Urban
                Purple
              </h6>
              <p className='content'>
                Paromita began her career as a fashion designer in various
                industries and co-operative societies have experience working in
                both high industry officials and people from grass root levels.
                She has wide experience working with various segments of apparel
                design, development and production for both small scale and
                large scale production environment. Also have experience working
                with Organic handmade apparel segment with various co-operative
                societies. With More than 14 years of experience in various
                apparel industry environments as a Creative and Technical
                Designer she heads the Design Department of Urban Purple. She is
                the backbone for many apparel brand launching and development of
                Fashion brands over more than 8 years.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='team-name'>Sashikant Khuntia</h2>
              <h6 className='team-title'>
                Head Marketing and Public Relation – Urban Purple MD –
                <a href='https://www.scriptographics.com/' target='_blank'>
                  Scripto Graphics
                </a>
              </h6>
              <p className='content'>
                Sashikant is focused on Marketing and Public Relation specific
                to Apparel Industry with More than years of Experience in
                Industry association. As a Founder member of Urban Purple and
                ScriptoGraphics, Active in both the IT and apparel industry
                practices, Sashikant has 16 years of experience in marketing
                Sales, Information technology and Public relation sectors. Prior
                to his Apparel Production and Information Technology Career,
                Sashikant spent seven years in Management Consulting, Human
                Resource and Project Management with URS Career Executive Search
                & Services serving Major Information Technology clients
                Including Dell Perot Systems, XChanging, Fujitsu, Hexaware
                Technology and many More.
              </p>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='sub-heading'>Our Partner Company:</h2>
          <a href='https://www.scriptographics.com/' target='_blank'>
            <Image src={logo} alt='ScriptoGraphics' />
          </a>
          <p className='content'>
            Scripto Graphics a newly formed technology company with a strong
            base of product lines related to apparel design and production.
            Founded and operated by Sashikant Khuntia Business operation analyst
            in Garment Technology and Shivaprasad B.R with strong base on system
            annalist and programming experience ScriptoGraphics is coming up
            with a lot of automation related to Apparel Design, tech pack and
            Garment Manufacturing Software. Also development partners and
            founder of Tech Pack Templates - a downloadable website for Apparel
            Graphics and Tech Packs having making sustained and growing sales
            trend for downloadable and digital products for apparel designers
            and Clothing Manufacturers.
          </p>
        </div>
      </div>
    </div>
  );
}
