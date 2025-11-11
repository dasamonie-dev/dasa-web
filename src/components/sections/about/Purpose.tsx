import logoIconDark from '../../../assets/logoicondark.svg';

export const Purpose = () => {
  return (
    <section className='relative  bg-[radial-gradient(circle_at_top,#4b6b52,#031E3C)] flex items-center justify-center text-base'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
        <div className='max-w-4xl'>
          {/* Circular logo badge */}
          <div className='w-28 h-28 rounded-full bg-[#A1CF70] flex items-center justify-center shadow-md'>
            <img src={logoIconDark} alt='dasamonie logo' />
          </div>

          <h2 className='mt-10 text-base font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl'>
            Our purpose is to democratizing access to banking, VTU and Global
            payments for 60M+ Unbanked Nigerians.
          </h2>

          <div className='mt-8 space-y-6 text-base/80 text-lg'>
            <p>
              We believe that financial inclusion is not just about access to
              money, but about empowering individuals to participate fully in
              the economy. By breaking down the barriers of traditional banking,
              we are creating tools that are simple, transparent, and tailored
              to the needs of everyday people from traders in rural markets to
              young professionals in growing cities.
            </p>
            <p>
              Through innovation, secure technology, and partnerships with local
              and global providers, we are building a financial ecosystem where
              every Nigerian can send, receive, and manage money with
              confidence. Our vision is a future where financial services are
              not a privilege for the few, but a right for all fueling growth,
              resilience, and opportunity across the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
