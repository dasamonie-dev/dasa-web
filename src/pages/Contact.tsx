export const Contact = () => {
  return (
    <div className='w-full min-h-screen bg-base font-nunito'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-20'>
        <h1 className='text-4xl md:text-5xl font-bold text-accent mb-6'>
          Contact Us
        </h1>
        <p className='text-lg text-accent/80 max-w-2xl mb-8'>
          Get in touch with our team. We're here to help you with any questions or concerns.
        </p>
        <div className='space-y-4'>
          <div>
            <h2 className='text-xl font-semibold text-accent mb-2'>Email</h2>
            <p className='text-accent/80'>support@dasamonie.com</p>
          </div>
          <div>
            <h2 className='text-xl font-semibold text-accent mb-2'>Phone</h2>
            <p className='text-accent/80'>+234 XXX XXX XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};
