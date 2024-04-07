import { Button } from "flowbite-react";
export default function ServicesPage() {
  return (
    <div className='flex justify-center flex-wrap pages'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>
          Fashion Design and Development Services
        </h1>
        <p className='content'>
          Bringing a successful fashion brand to market is no simple task.
          Developing a sketch into a finished product can be long, expensive and
          frustrating. You need experienced technical fashion consultant to
          consult and assist you. We can help you bring your ideas to a
          successful fashion brand. We guide you in developing a sketch in to a
          finish product. It takes combination of interdependent factors to
          bring success to your brand. So, you need right professional to work
          on your ideas. We can help you to turn your concept into a your dream
          product!
        </p>
        <p className='content'>
          At Fashion Studio Urban Purple, We have fashion technical designers,
          Pattern Makers and a complete sampling unit. Here we insure that a
          team specialist in your product category develop your product. We
          specialize in womenswear, menswear, kidswear, activewear and lingerie.
          We have specialist tech pack designers and pattern makers for the
          above category working with us. Below is our complete range of fashion
          development services.
        </p>
        <p className='content'>
          We not only give advise and leave you on your way but also support you
          in every step. Our core value is to guide you on the business from
          beginning to the end of a complete life cycle. We offer service from
          Concept to customer. We are one step solution for your business need
          starting from concept to customer. An one step shop for all your
          product needs so that you can focus on selling and building your
          business. By outsourcing design, tech pack and production service to
          Urban Purple, you can reduce your operating cost by an average of 30%
          net and you can expand your product offering.
        </p>
        <div className='container mx-auto py-2 services'>
          <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
              <h2 className='heading'>Concept Development</h2>
              <p className='content'>
                When you have a raw idea and you need help developing it and
                need help in designing your fashion line. When you are
                struggling with the fits and construction detailing of your
                silhouette. Our professional team can help you to turn your
                concept into a viable product!. We help you give shape to your
                concept to a product that your customer love to have. So
                Congratulations! You are in the right place!
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Apparel Design</h2>
              <p className='content'>
                Collection line sheet designed by our clothing designers are
                unique and distinct and goes with brand inspiration and
                complement the brand identity. Your idea and concepts form the
                baseline upon which technical designer prepares fashion flats.
                Technical designer prepare fashion flat sketches of your
                collection based on brand concept. This includes the front, back
                and side view of each of your style and in color if needed. We
                prefer to be in constant touch with you to ensure your vision is
                achieved. The focus of fashion flat design is to achieve the
                desired out come of our client.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Tech Pack Design Service</h2>
              <p className='content'>
                We develop detailed production ready technical drawing with
                detailed garment specification. The tech pack includes detailing
                about fabric, trims, color and measurement spec sheet. Tech pack
                forms the base for any garment style for its further processing.
                Garment manufacturers need this tech pack to create patterns and
                source raw material. With tech pack you can approach to a
                manufacturer for further commutation. This is useful and ensure
                high quality samples and efficient production.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Sample Development</h2>
              <p className='content'>
                Reproducing identical clone of a garment style is much easier
                when you have a sample. So having a sample that is 100% same as
                we expect to have is very important. Sample development is an
                expensive and tedious process. It is equally an important phase
                in garment manufacturing. So no brand or manufacturer would like
                to skip this. You feel confident when you have an 100% correct
                sample in your hand. When know that you can reproduce the same
                piece again and again. Till that point of time you need ride a
                rough road. To make your journey smoother we at Urban Purple
                offer sample development service.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Clothing Manufacturing</h2>
              <p className='content'>
                We offer clothing manufacturing and shipping service with our in
                house manufacturing unit. We are an export oriented clothing
                manufacturer serving apparel brands from USA, Europe. Brands can
                relay on us completely for their back-end manufacturing and
                logistic operation. This gives enough time for them to focus on
                their marketing activities. We offer end to end clothing
                manufacturing service and ensure perfect timeline. We work on
                lower minimum order quantity that suits the start-up apparel
                brands.
              </p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Apparel Branding</h2>
              <p className='content'>
                The success of your apparel brand depend on how you project and
                position your brand in the market. Apparel branding is an
                important aspect that affects consumer acceptance. Studies says
                selling a concept is much easier than selling a normal product.
                So presenting a concept based on your raw idea that consumer can
                accept is important. We give wings to your raw idea and make it
                presentable for your consumer so that they find a meaning out of
                it. We help in building your idea to a meaningful concept
                keeping consumer&apos;s mood in mind.
              </p>
            </div>
          </div>
        </div>

        <div className='flex py-4'>
          <p className='text-lg mb-4'>
            Interested in working with us? Or got a question? <br />
            Maybe just want to say hello?
          </p>
          <Button className='ml-auto text-lg mb-4'>Contact us Now</Button>
        </div>
      </div>
    </div>
  );
}
