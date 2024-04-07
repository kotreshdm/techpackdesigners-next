import PricingComp from "@/components/PricingComp";
export default function PricePage() {
  return (
    <div className='flex justify-center flex-wrap pages'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>
          Apparel Production Package Pricing
        </h1>
        <p className='content'>
          Want to start your clothing line? It’s easy like never before. Fashion
          studio urban purple has come up with a complete solution with its most
          attractive packages. Check out for the best package that suits your
          budget to start your clothing line. We have tailor made the packages
          as per the demand of most customers with their limited budget. When
          you are availing our below packages all you need to give us is your
          style details in sketch or raw form. Our team will completely take
          processing your sketches to final product.
        </p>
        <div className='py-1'>
          <PricingComp />
        </div>
        <p className='content bold'>
          We Take-up Order for Cotton Knitted / Woven Garments Only On this
          Package and Printed Fabrics are Not Part of the Package.
        </p>

        <div className='pb-4'>
          <h2 className='sub-heading'>Terms & Conditions</h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
            <li>
              The Delivery Time line is 30 - 45 days from the date of Purchase
              Order.
            </li>
            <li>
              Pre-Production Samples for the Sizes Specified By the Buyer
              including the Packaging Material should be submitted to the buyer
              within 25 days prior to Advance Payment Date.
            </li>
            <li>
              Advance Payment 100% As per the Package Rate. Mode of the Payment
              has to be Through Wire Transfer.
            </li>
            <li>
              We Take up all shipping responsibility till the clearance of the
              source Port / Air port. We have the responsibility for the custom
              clearance from the source. However, Clearance from the Destination
              is not in our hand nor our responsibility.
            </li>
            <li>
              Buyer May Conduct Employee independent inspection agent or company
              to ensure acceptable quality of goods.
            </li>
            <li>
              Buyer will be given a brief summary / status by urban purple of
              each style/product of garment Once- Weekly, until the complication
              of the products.
            </li>
            <li>
              Sizing will be produced with the break down ration of S – 1 , M –
              2, L- 3, XL -2. If the Client wants a different ration for the
              sizing they can specify the same on Purchase Order.
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading'>Working Procedure</h2>
          <ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-300'>
            <li>
              To Begin the Process We need Your Style Sketches and Detailing to
              Understand, Analyze and Do a Feasibility Study and This you can
              provide us by using the{" "}
              <b>
                <a href='https://s3.amazonaws.com/techpackforms/Style+Detailing+Sheet.xlsx'>
                  Style Detailing Sheet
                </a>
              </b>
              .
            </li>
            <li>
              The Delivery Time line is 30 - 45 days from the date of Purchase
              Order.
            </li>
            <li>
              Our <a href='/'>Clothing Designer</a> will Prepare the Flats /{" "}
              <a href='/techpack'>Tech Pack Design</a> from your Sketches along
              with Measurement Specs for your approval.
            </li>
            <li>
              Once the Tech Pack is Confirmed and We get the Go ahead with Style
              and Measurements we will prepare the fit sample and This Will be
              shipped to you.
            </li>
            <li>
              We Would need your Approval on the{" "}
              <b>Fit Sample for Sizes and Gradation</b>. We may also send you
              the Swatches of the Fabrics / Prints / Embroideries etc through
              Currier for your approval.
            </li>
            <li>
              We Require a Purchase Order from the Client to Ship Goods From
              India to Your Country.
            </li>
            <li>
              Purchase Order Must Contain Exact Quantity of the Goods That is
              Required to Send to The Client. The Payment Amount Must be as per
              the Invoice that We have sent you.
            </li>
            <li>
              Purchase Order is an official document that is required by us when
              sending the goods to your country. This Document is important for
              Custom Clearance and also shipping of the Goods.
            </li>
            <li>
              Please{" "}
              <b>
                <a href='https://s3.amazonaws.com/techpackforms/Purchase+Order+Format.docx'>
                  Download the Purchase Order Format
                </a>
              </b>{" "}
              format from Here and duly fill the Informations required and
              marked on Red Color
            </li>
            <li>
              Purchase Order Must be signed and celled on the Letter Head of the
              Clients Brand. The Wire Transfer Ref Number is Mendotery on
              Purchase Order.
            </li>
          </ul>
        </div>
        <div className='pb-4'>
          <h2 className='sub-heading3'>Note You Must Read Before Committing</h2>
          <p className='content note bold'>
            We request you to send Your sketches to us and take a consultation
            before you are actually committing a deal. Although we have almost
            all capabilities that can produce your products but in certain rare
            situation vision that you have might not be so feasible while doing
            product development and production. So If you can send your sketches
            and ideas to our designers we can do a proper feasibility analysis
            and give our comments to you. We do not want to have any confusion
            and for us relationship building is Important. If there is anything
            that is not possible from our end we would rather say no to you than
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
