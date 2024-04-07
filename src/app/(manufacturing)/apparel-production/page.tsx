import PricingComp from "@/components/PricingComp";
import apparelproduction from "../../../assets/images/apparelproduction.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import apparelproduction1 from "../../../assets/images/manufacturing/apparelproduction1.jpg";
import apparelproduction2 from "../../../assets/images/manufacturing/apparelproduction2.jpg";
import apparelproduction3 from "../../../assets/images/manufacturing/apparelproduction3.jpg";
export default function ApparalProcuctionPage() {
  return (
    <div className='flex justify-center flex-wrap pages'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>
          Clothing Designer | Tech Pack Designer | Clothing Manufacturer
          Exporter Readymade Garments
        </h1>
        <div className='container mx-auto py-2 services'>
          <h1 className='main-heading middle mb-4'>
            Clothing Manufacturing Process and Packages
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
              <h2 className='heading'>
                Our Offering for Clothing Manufacturing
              </h2>
              <p className='content'>
                Whether you are an established fashion brand or start-up company
                you need to develop samples and execute your apparel production
                continuously in a cyclic term every year. At Urban Purple we
                support the brands and empower them to come up with a cost
                effective and simple way. To simplify and well-organized we have
                come up with cost effective sample development and apparel
                production solution in the form of three different packages.
                Those will support the brands build their apparel brand with
                ease.
              </p>
              <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                <li>Apparel Tech Pack</li>
                <li>Sample and Fit Corrections</li>
                <li>Designed Collection Line Sheet</li>
                <li>Production Costing</li>
                <li>Quality Assurance</li>
                <li>Guaranteed Delivery</li>
                <li>Apparel Production</li>
                <li>Logistic Support</li>
              </ul>
              <h2 className='heading'>How We Extend Our Support</h2>
              <p className='content'>
                To make things simple and organized we have came up with cost
                effective sampling and apparel production process. The flow you
                can see from the image. We expect you to have clarity on the
                above points and then our clothing designers and fit technicians
                would work closely with you. The focus is to understand your
                vision and see it through your eyes and then give a shape to it
                in most realistic and cost effective mode. There are 10 Steps
                how we can execute your complete Apparel Production.
              </p>
              <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                <li>
                  Understand and come up with a Commercially viable Style from
                  your Sketch
                </li>
                <li>
                  Technical Flat Sketch Illustration of Garment for your
                  Approval
                </li>
                <li>Technical Design and Measurement Specs Design</li>
                <li>Base Pattern Creation</li>
                <li>Mock Sample Development with Closely Available Fabric</li>
                <li>Fitting Session with Gap Analysis</li>
                <li>Review with You for Tech Pack and Pattern Adjustment</li>
                <li>
                  Final Sample Development as per Comments and Feedback from Gap
                  Analysis
                </li>
                <li>
                  Costing and Bills of Material Preparation for Production and
                  MOQ
                </li>
                <li>Sample Shipment</li>
              </ul>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>
                What it takes to produce your brand merchandise?
              </h2>
              <p className='content'>
                To execute an effective apparel production with minimal cost you
                need to go after and make certain things clear from your end.
                Below are some of the questions you should be ready with your
                answer with.
              </p>
              <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                <li>What are the styles you want to go ahead with?</li>
                <li>Do you have the sketches or similar images ready ?</li>
                <li>
                  Your ideal Standard measurement or Any Brands Measurement you
                  want to follow.
                </li>
                <li>What are your fabric preferences?</li>
                <li>Your target cost if any?</li>
                <li>What quantities do you want to produce?</li>
                <li>
                  Do you also need labels and hang tags with your brand name on
                  them?
                </li>
                <li>What is your delivery date?</li>
                <li>Any Target date for Sample delivery?</li>
              </ul>{" "}
              <Image
                src={apparelproduction}
                alt='apparelproduction'
                className='py-5'
              />
            </div>
          </div>
        </div>

        <div className='container mx-auto pt-5 pb-3 production'>
          <h1 className='main-heading mb-4'>
            Capabilities as Clothing Manufacturer
          </h1>
          <p className='content'>
            We Are One Of The Recognized Clothing Manufacturer And Garment
            Exporter And Fully Equipped Clothing Manufacturing Unit Capable Of
            Producing Apparel With 100% Quality. Our Apparel Production Unit Is
            Capable Of Producing All Kind Of Outerwear Garments In Woven,
            Knitted And Denim Category. GOVT OF INDIA Registered And 100%
            Exported Oriented Garment Manufacturing Unit. Export Oriented
            Garment Manufacturing Unit Capable Of Producing Small, Medium And
            Large Quantity Of Apparel. We Have In House Fashion Studio, Garment
            Unit Meant To Help Our Clients Get Their Apparel Designed, Prepare
            The Sample And Produce It Right At One Place.
          </p>
          <p className='content'>
            Our MOQ starts with 100pcs/style/color. You can also send us your
            styles tech pack to us and details will be provided back within
            24Hours.
          </p>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Capabilities as Garment Manufacturer</h2>
              <div className='p-4'>
                <Image
                  src={apparelproduction1}
                  alt='apparelproduction1'
                  className='card-image'
                />
                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                  <li>Men&apos;s and Ladies T-Shirts</li>
                  <li>Men&apos;s and Ladies Shirts - Casual &amp; Formal</li>
                  <li>
                    Men&apos;s Ladies - Bottom, Denims, Trousers (Casual &amp;
                    Formal)
                  </li>
                  <li>Kids Clothing - Boys Shirts, Trousers, Denims, Shorts</li>
                  <li>
                    Kids - Girls Shirts, Frocks, Pants, Skirts, Shorts &amp;
                    Denims
                  </li>
                  <li>Strong in sourcing Fabrics &amp; Trims Sourcing</li>
                </ul>
                <Link href='/contact'>
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading'>Clothing Tech Packs</h2>
              <div className='p-4'>
                <Image
                  src={apparelproduction2}
                  alt='apparelproduction2'
                  className='card-image'
                />

                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                  <li>30 - Single needle Machines (JUKI Made)</li>
                  <li>05 - Over Lock Machines ( JUKI &amp; Siruba Made)</li>
                  <li>
                    05 - Flat Lock Machine for T-Shirt Production (Juki Made)
                  </li>
                  <li>
                    02 - Boiler Iron and Finishing Table for Garment Finishing
                  </li>
                  <li>
                    Kids - Girls Shirts, Frocks, Pants, Skirts, Shorts &amp;
                    Denims
                  </li>
                  <li>02 - Layer Cutting Machine</li>
                </ul>
                <Link href='/contact'>
                  <Button>Drop A Mail</Button>
                </Link>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-b serdiv'>
              <h2 className='heading  text-center'>Minimum Order Quantity</h2>
              <div className='p-4'>
                <Image
                  src={apparelproduction3}
                  alt='apparelproduction3'
                  className='card-image'
                />

                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
                  <li>T-Shirts( Plain )- 200 PCS/Color/Style</li>
                  <li>T-Shirts( Striper ) - 500 PCS/Color/Style</li>
                  <li>Woven Shirt/Tops(Plain)- 300 PCS/Color/Style</li>
                  <li>
                    Woven Shirts Floral/Strips and Checks - 1000 PCS/Color/Style
                  </li>
                  <li>Denim Jeans - 1000 PCS/Color/Style</li>
                  <li>Ladies Dresses, Tops, Tunics 500 PCS/Color/Style</li>
                  <li>KIDs Apparel (Plain/Floral) 500 PCS/Color/Style</li>
                </ul>

                <Link href='/contact'>
                  <Button>Try Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='py-1'>
          <PricingComp />
        </div>
      </div>
    </div>
  );
}
