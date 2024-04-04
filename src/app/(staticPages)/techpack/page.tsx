import { Button } from "flowbite-react";
import Link from "next/link";
import techpack from "../../../assets/images/techpack/techpack.png";
import techpackdesigner from "../../../assets/images/techpack/techpackdesigner.png";
import techpackdesigner2 from "../../../assets/images/techpack/techpackdesigner2.png";
export default function ServicesPage() {
  return (
    <div className='flex justify-center flex-wrap pages techpack'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>
          Apparel Design Studio | Tech Pack Designer | Manufacturer & Exporter
          of ReadyMade Garments
        </h1>
        <p className='content'>
          It is imperative that one sets things in place before putting out
          investments on a large scale production plan. Apparel Tech Packs set
          standards, processes and guidelines that clothing manufacturers can
          chart and track in order to physically sample the production pieces as
          designed by the clothing designer. Tech Packs augment the essential
          technicalities to fashion design sketches making it production ready.
        </p>
        <p className='content'>
          Fashion Studio Urban Purple provides you with right product detailing
          and specifications in the form of apparel tech packs that you can use
          to produce your garments. Our technical designers progressively
          examine the styles and conduct exhaustive analysis prior to designing
          the tech pack. We then deliver precise and production friendly apparel
          tech packs, making life easier for you and the eventual manufacturing
          house. We understand that your vision needs certain technicalities; we
          equip you with the required technical design assistance enabling your
          vision become a reality.
        </p>

        <div className='container mx-auto py-2 services'>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Apparel Design</h2>
              <div className='p-4'>
                <img src={techpack.src} alt='techpack' className='card-image' />
                <h5 className='small-heading'>Tech Pack Design Requirement</h5>
                <p className='content'>
                  As an apparel brand or a creative designer, your thoughts and
                  vision need to be translated lucidly and accurately to help
                  create the best fit solution for your requirement. We at
                  Fashion Studio Urban Purple encourage a two way communication
                  between the client and our designers, be it through sketches
                  or references from the web, ensuring ideal technical designs
                  and specification sheets.
                </p>
                <p className='content'>
                  Our tech pack designers at Fashion Studio Urban Purple have
                  the experience of managing a multitude of clients and are
                  fully equipped to understand, analyze and convert your
                  creative vision to factory ready tech packs. Most importantly,
                  we re-iterate the importance of transferring the initial
                  design/ idea coherently to our design team, allowing us to
                  take it from there and process it faster.
                </p>
                <p className='content'>
                  In short, we take your idea in its raw form and convert it to
                  factory ready tech packs.
                </p>
                <Link href='/contact'>
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Clothing Tech Packs</h2>
              <div className='p-4'>
                <img
                  src={techpackdesigner.src}
                  alt='techpackdesigner'
                  className='card-image'
                />
                <h5 className='small-heading'>Why You Need a Tech Pack</h5>
                <p className='content'>
                  Tech packs significantly reduce the time and effort required
                  to produce your garments. Apparel tech packs perceptively
                  expedite the manufacturing process by providing information
                  that adapts to your style requirement. A well-made tech pack
                  saves time and money by way of systematic construction
                  detailing.
                </p>
                <p className='content'>
                  It comes as no surprise that most professional and reputed
                  garment manufacturing units insist on having well-constructed
                  apparel tech packs to maximize productivity.
                </p>
                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
                  Tech Pack’s construction detailing:
                  <li>
                    Integrates all information that a manufacturer needs to
                  </li>
                  <li>
                    produce your garment Ensures manufacturer and apparel brand
                  </li>
                  <li>are on the same page Leads to more accuracy and fewer</li>
                  <li> rejections Saves Time and Money Protects against</li>
                  <li>
                    misinterpretation on style detailing Expressively improves
                  </li>
                  <li>
                    efficiency and productivity Works as a de-facto contract
                  </li>
                  <li> between manufacturer and the client</li>
                </ul>
                <Link href='/contact'>
                  <Button>Get a Quote</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading  text-center'>Tech Pack Design Process</h2>
              <div className='p-4'>
                <img
                  src={techpackdesigner2.src}
                  alt='techpackdesigner2'
                  className='card-image'
                />
                <h5 className='small-heading'>Getting Started</h5>

                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
                  TWe need the entailed information from you to get started.
                  Please send us your requirement with responses to the below
                  stated queries:
                  <li>Number of styles you want to start with</li>
                  <li>Brand name, logo if any</li>
                  <li>Proposed start date and deadline of the project</li>
                  <li>
                    Approximate budget earmarked for the collection/ design
                  </li>
                  <li>
                    Base size guide (Hint: Easily available on similar/
                    competitors size guides)
                  </li>
                  <li>
                    Contact details - email, Skype or contact number; in case we
                    need to speak to you for further clarifications
                  </li>
                  <li>
                    Please send back the completed form to
                    <a href='mailto:designer@paromitadas.com'>
                      designer@paromitadas.com
                    </a>
                  </li>
                </ul>

                <p className='content'>
                  Be more informed on our practices. Please refer our
                  <a
                    href='https://clothingtechpack.blogspot.com/'
                    target='_blank'>
                    blog Tech Pack Designfor
                  </a>
                  a comprehensive understanding on how we help start-ups and
                  designers succeed.
                </p>
                <Link href='/contact'>
                  <Button>Get In Toutch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto py-2 services'>
          <h2 className='sub-heading pb-4'>Samples Tech Pack Designs</h2>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-b'>
              <img src={techpack.src} alt='techpack' className='card-image' />
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b '>
              <img
                src={techpackdesigner.src}
                alt='techpackdesigner'
                className='card-image'
              />
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b '>
              <img
                src={techpackdesigner2.src}
                alt='techpackdesigner2'
                className='card-image'
              />
            </div>
          </div>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading text-center'>
            What Constitutes an Clothing Tech Pack
          </h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li>
              Rendered Illustration - Flat Sketch ( Front View - Back View )
            </li>
            <li>
              Color Combo - Various Color Options of the Garments ( As per
              Client Need)
            </li>
            <li>Stitching & Construction Detailing ( Both Front and Back ) </li>
            <li>
              Graphic / Print Detailing Including Pantone Color ( Style
              Dependent)
            </li>
            <li>Embroidery / Appliqué / Other Embellishment Detailing</li>
            <li>
              Washing Detailing ( Wash Care and Other Washing - Ironing and Care
              Instructions)
            </li>
            <li>Trims & Packaging Detailing( As per Client Requirement)</li>
            <li>Branding Details</li>
            <li>Graphical Measurement Details with Spec-Sheet Pointers</li>
            <li>
              Measurement Spec Sheet and Size Gradation ( Size Gradation as per
              Client Requirement)
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading text-center'>Tech Pack Design Process</h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li>
              You may send Sketches / Inspiration picture of your styles to
              create technical apparel design (Tech Pack and Spec Sheet).
            </li>
            <li>
              We would first Go ahead with Styling and Submit the Flat Sketch To
              You ( Client ) for approval and their comments and inputs.
            </li>
            <li>
              We provide all Technical Apparel Design files through Adobe Reader
              (PDF) files and Spec Sheet in Excel Sheet.
            </li>
            <li>
              Once We receive the Comments and Inputs we would proceed with
              Modification and Give the Final Flats for Approval. We would also
              require the Colorways for the Styles.
            </li>
            <li>
              Once the Flat Sketch are Approved and colorways for the styles are
              finalized we would proceed with the Technical Design of the
              Garments.
            </li>
            <li>
              We would require the Logo, Trims Design and Branding Detailing
              from Your end ( Vectors ) if you have created. If not and you want
              us to do the branding for you we would do it.
            </li>
            <li>
              Once the Flat Sketches are Approved and We proceed with the Tech
              Pack Detailing We would not Accept Any Changes in between as we
              have to change the whole detailing all over again.
            </li>
            <li>
              For Apparel Tech Packs Related Queries Use our Contact Form to
              Reach us.
            </li>
            <li>
              For the Production of Your Clothing Line you may get in touch with
              us with your tech packs and Spec sheets.
            </li>
            <li>
              We need the Tech Packs of Your Styles to Give you a Quote for
              Apparel Production. Tech Packs are Important and without the Tech
              Packs the Production Quote would be incomplete.
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading'>
            For Apparel Tech Pack and Related Queries Please use our Contact
            form to Reach Us.
          </h2>
          <p className='content'>
            For any production related enquiry, we urge you to get in touch with
            us with your tech packs and spec sheets We will require the tech
            packs of your styles in order to provide you with a quote for
            apparel production. Tech Packs are vital and without it the
            production quote would be incomplete.
          </p>
        </div>
      </div>
    </div>
  );
}
