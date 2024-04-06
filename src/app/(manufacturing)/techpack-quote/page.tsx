import PricingComp from "@/components/PricingComp";
export default function TechPackQuotePage() {
  return (
    <div className='flex justify-center flex-wrap pages'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>Techpack-Quote</h1>
        <p className='content'>
          Giving Quote for creative design and preparing tech packs is quite
          difficult to standardize. Designers rarely provide price estimates for
          services unless they figure out the detailed requirement and number of
          hours they need to accomplish the job. I completely agree with this
          way of doing business yet I am an old player in the field of technical
          design and I also appreciate a price tag on items. I believe that by
          providing quick estimates for my most popular services it simply helps
          people become better consumers. In that vein, below you will see
          general estimates for services. This quote is for those who provide me
          with a long term and sustained design and tech pack development
          service and has its minimum styles requirements
        </p>
        <div className='py-1'>
          <PricingComp />
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading'>Terms & Conditions</h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
            <li>
              100% Payment in Advance for <b>Base</b> &amp;{" "}
              <b>Line-Sheet Collection</b>
            </li>
            <li>
              50% Payment in Advance &amp; Remaining 50% Once the Tech Packs and
              Line Sheets are Created and Before the Vectors are Sent to Client
              for Complete Collection Design and Tech Packs.
            </li>
            <li>
              Client Must Provide Every Possible Information Along with Sketches
              / Image Inspiration to Prepare the Base Flat Sketch
            </li>
            <li>
              We Snaps of the design in JPEG format to client for comments and
              further changes or modification within 7 days of Starting the
              project
            </li>
            <li>
              Client May ask for 2 Round Changes or Modification of the Styles
              and Give the Comments for the styles once the flat is submitted
              and befor we begin Tech Pack Development.
            </li>
            <li>
              Tech Pack Development will start once the client approves the flat
              sketches submitted for each of the styles.
            </li>
            <li>
              All the Vectors of the designs including the Measurement
              spec-sheet will be submitted after the final payment of all the
              designs is made.
            </li>
            <li>
              Any changes after the Tech Pack is Created or Finished will be
              Chargeable.
            </li>
            <li>
              Once the Design flat is done the client has to give unique name to
              the Styles for easy reference.
            </li>
            <li>
              We Accept Payment Through PayPal, Wire Transfer. Client Must ask
              for a PayPal / Wire Transfer Invoice for Apparel Design and Tech
              Pack Service they Want us to Execute.
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h1 className='main-heading mb-4'>Working Procedure</h1>
          <h2 className='sub-heading'>
            Process From Style Development till Apparel Production and Shipping
            for Your Package
          </h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
            <li>
              To Begin the Process We need Your Style Sketches and Detailing to
              Understand, Analyze and Do a Feasibility Study and This you can
              provide us by using the
              <b>
                <a href='https://s3.amazonaws.com/techpackforms/Style+Detailing+Sheet.xlsx'>
                  {" "}
                  Style Detailing Sheet
                </a>
              </b>
              .
            </li>
            <li>
              We need detail input from client along with sketches to proceed
              with tech pack design. You can use our Style Detailing Sheet to
              give detailing.
            </li>
            <li>
              We Prepare the Flat Sketch from Sketches / Inspiration images for
              approval.
            </li>
            <li>
              Once Flat Sketch is Confirmed, Our
              <a href='/'> Clothing Designer</a> starts
              <a href='/techpack'> Tech Pack Design</a>
            </li>
            <li>
              Please Provide Base Measurement for developing Detailed
              Measurement Spec Sheet.
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading3'>IMPORTANT NOTES</h2>
          <p className='content note'>
            All prices are quoted in good faith and subject to change based on
            client’s specific needs. Prior to work starting all projects will
            have written quotes and contracts. Work that exceeds printed project
            quote will be billed at the $18/per hourly rate.
          </p>
          <p className='content bold note'>
            We request you to send your sketches to us and take a consultation
            from our <a href='/'>Clothing Designer</a> before you are actually
            committing a deal. Although we have almost all capabilities that can
            prepare technical specification from your sketches but in certain
            rare situation vision that you have might not be so feasible while
            doing product development and production. So If you can send your
            sketches and ideas to our designers we can do a proper analysis and
            give our feedback to you. We do not want to have any confusion and
            for us relationship building is Important. If there is anything that
            is not possible from our end we would rather say no to you than
            disappointing you after your financial commitments. Kindly go
            through all documents given and terms that we have before committing
            a business with us. We value your business relationship and would
            love to have a long term business relation beginning from here on.
          </p>
        </div>
      </div>
    </div>
  );
}
