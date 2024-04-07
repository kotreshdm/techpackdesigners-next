import { Button } from "flowbite-react";
import Link from "next/link";

import Image from "next/image";
import linesheet from "../assets/images/carousel/linesheet.png";
import techpack from "../assets/images/carousel/techpack.png";
import apparelproduction3 from "../assets/images/carousel/apparelproduction3.png";

export default function HomePageCards() {
  return (
    <div className='flex justify-center flex-wrap pages techpack home-page'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <div className='container mx-auto py-2 services'>
          <h1 className='main-heading mb-4'>
            Clothing Designer | Apparel Tech Pack Designer | Garment Fit
            Technician | Clothing Manufacturer & Exporter
          </h1>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Apparel Design</h2>
              <div className='p-4'>
                <Image src={linesheet} alt='linesheet' className='card-image' />
                <h5 className='small-heading'>Concept</h5>
                <p className='content'>
                  Your creative concept need technical and operation support to
                  come to reality. We are a group of fashion{" "}
                  <a
                    href='https://www.paromitadas.com/tech-pack-designer'
                    target='_blank'>
                    tech pack designer
                  </a>
                  , pattern maker and clothing manufacturer. With more than 12
                  years of industry experience we have expertise in handling any
                  apparel style. Urban Purple is an integrated unit with design
                  studio, CAD pattern development unit and a group of clothing
                  manufacturers. We offer complete end to end service that an
                  apparel brand need for its back end process. With 12 years of
                  experience, working with varied brands, we are well
                  experienced to handle any kind of apparel design and
                  production.
                </p>
                <p className='content'>
                  We offer design consultation starting from concept to season
                  planning. Our designers are industry experts, and have
                  experience in working with world leaders in fashion. Some of
                  our clients worked with world leaders like Macy, Ted baker,
                  Ecko Unltd, Ann Taylors, Dockers. The technical designers are
                  are NIFT, and FIT educated.
                </p>
                <Link href='/contact'>
                  <Button>Reach Us</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Clothing Tech Packs</h2>
              <div className='p-4'>
                <Image src={techpack} alt='techpack' className='card-image' />

                <h5 className='small-heading'>Technicality</h5>
                <p className='content'>
                  <a href='/techpack' target='_blank'>
                    Tech Pack Design Service
                  </a>{" "}
                  support you in developing apparel tech packs for knitted
                  t-shirts, woven shirts, dresses, tops, inner wear, lingerie,
                  jackets and denims. We create and develop factory ready tech
                  packs ensuring optimized production levels. Our hand-picked
                  teams of Technical Clothing Designers specialize in each of
                  the segments and support our myriad patrons with apparel
                  design and tech pack development.
                </p>
                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                  <li>
                    Deliver factory ready tech packs &amp; Measurement Spec
                    Sheets for Clothing
                  </li>
                  <li>Help Reduce up to 30% Clothing Manufacturing Cost</li>
                  <li>
                    Co-ordination and progress updates to Clothing Designers and
                    Clients regularly
                  </li>
                  <li>
                    Optimized and process oriented approach to deliver Quality
                    within budgeted costs and timelines
                  </li>
                  <li>
                    Instills control and absolute authority to the client
                    against deviations from approved tech packs
                  </li>
                </ul>
                <Link href='/contact'>
                  <Button>Know More</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading  text-center'>Clothing Manufacturer</h2>
              <div className='p-4'>
                <Image
                  src={apparelproduction3}
                  alt='apparel production'
                  className='card-image'
                />
                <h5 className='small-heading'>Execution</h5>
                <p className='content'>
                  We are an export oriented clothing manufacturer, head
                  quartered in the silicon valley of India. The company was
                  created with a vision of enabling promising clothing designers
                  and start-ups achieve their full potential. We have strung
                  together robust design teams coupled with a full production
                  facility at our Bangalore unit. We are growing fast, and we
                  solemnly promise to keep bettering our own levels of client
                  gratification on our path to success.
                </p>
                <p className='content'>
                  We have supported people across the world with design and
                  manufacturing, making their initial sketches a reality. We
                  specialize in exports and our facilities have been established
                  with a firm bias on International regulations and
                  requirements. We are{" "}
                  <b>
                    {" "}
                    <a
                      href='https://www.paromitadas.com/tech-pack-designer'
                      target='_blank'>
                      MSME
                    </a>{" "}
                    certified clothing manufacturer, affiliated by the
                    Government of India.
                  </b>
                </p>
                <p className='content bold'>
                  Transforming dreams to reality since 2008.
                </p>
                <Link href='/production'>
                  <Button>Production Capability</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto py-2'>
          <h1 className='main-heading mb-4 mt-5'>
            Clothing Designer and Manufacturer Workflow
          </h1>
          <div className='grid grid-cols-5 gap-0 five-items '>
            <div className='item item1'>
              <h1>Idea</h1>
              <p>
                Every clothing brand has an idea and a concept behind it. We
                recognize that and get the ball rolling
              </p>
            </div>

            <div className='item item2'>
              <h1>Design</h1>
              <p>
                We give shape to your concept with an initial set of flat
                sketches. The collection starts taking form in this stage
              </p>
            </div>

            <div className='item item3'>
              <h1>Development</h1>
              <p>
                Once the flat sketches are approved, we add technical detailing
                making it production ready
              </p>
            </div>

            <div className='item item4'>
              <h1>Test</h1>
              <p>
                Samples can be created to ensure the look, feel and fit confirms
                to the technical designs
              </p>
            </div>

            <div className='item item5'>
              <h1>Result</h1>
              <p>
                Bulk manufacturing is completed once samples are confirmed for
                fit, sizes and style detailing
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto py-2 gray-section'>
          <h1 className='main-heading mb-4'>
            Complete Clothing Design & Clothing Manufacturing Solution
          </h1>
          <h5 className='sub-heading mb-4'>
            We become What We Think About Most of the Time, and That's the
            Strangest Secret.
          </h5>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
            <li>Start a Clothing Line and Looking for Support?</li>
            <li>
              Searching for Professional Apparel Tech Pack Designers to Build
              Line Sheet?
            </li>
            <li>
              Are You Looking for Right Garment Manufacturing Unit to Produce
              Your Garments?
            </li>
            <li>Does Manufacturers Larger M O Q do not Match Your Budget?</li>
            <li>Are you Worried about Your Budget and Small Quantity?</li>
          </ul>
          <h5 className='sub-heading mb-4'>
            We at Urban Purple Provide Complete Apparel Design and Garment
            Manufacturing Service Starting from Scratch
          </h5>
          <h5 className='sub-heading mb-4'>
            An Export Oriented Garment Manufacturer Provide End to End Solution
            to Small and Medium Clothing Brand Just Right for your Apparel
            Design, Tech Packs and Garment Manufacturing Needs
          </h5>
          <p className='content'>
            <b>Clothing Designer and Garment Manufacturer </b> associated with
            number of apparel brands as technical Clothing Designer, garment fit
            technician. We are Solution provider to apparel brands in clothing
            design, tech pack design, pattern design, grading and Garment
            Manufacturing for more than 11 years. We are one of the Leading
            Fashion consultants and Clothing Designer’s taking up turnkey
            projects on Apparel design, Tech Pack Design and Garment
            Manufacturing. We are Registered with Govt. of India and fully
            functional 100% export oriented garments manufacturing unit and
            fashion studio Operating in Bangalore INDIA. We are capable of
            supporting Clothing in each aspect of Apparel Production Life Cycle
            starting from clothing design to production life cycle.
          </p>
          <p className='content'>
            The best reason to start an organization is to make meaning. To
            create a product or service to make the world a better place.
          </p>
          <Link href='/price'>
            <Button> Apparel Production Packages</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
