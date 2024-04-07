import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className='flex justify-center flex-wrap pages contact-page'>
      <div className='w-full md:w-11/12 lg:w-11/12 p-2'>
        <h1 className='main-heading mb-4'>Contact Us</h1>
        <div className='container mx-auto py-2 services'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
              <h2 className='heading'>Get A Quote</h2>
              <ContactForm />
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <h2 className='heading'>Address</h2>
              <p className='content'>
                Urban Purple <br /> #35/2,1st floor, 9th Main Road,
                <br /> AECS Layout - A Block,
                <br /> Yellama Layout, Singasandra,
                <br /> Bengaluru, Karnataka 560068, India
              </p>
              <h2 className='heading'>Phones</h2>
              <p className='content'>Marketing Head: +91 9035001810</p>
              <h2 className='heading'>Email Addresses</h2>
              <p className='content'>
                Director :
                <a href='mailto: designer@paromitadas.com'>
                  designer@paromitadas.com
                </a>
              </p>
              <p className='content'>
                Marketing Head :
                <a href='mailto:sashipie@gmail.com'>sashipie@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
