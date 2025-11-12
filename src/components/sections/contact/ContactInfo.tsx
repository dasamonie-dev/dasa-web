import { Badge } from '../../ui/Badge';
import ContactMethods from './ContactMethods';

export const ContactInfo = () => {
  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-6 md:mb-8 text-center md:text-left'>
        <Badge>Contact Us</Badge>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-accent m-4'>
          Get in touch
          <br />
          with the team.
        </h1>
        <p className='text-sm  text-accent/70 max-w-md hidden md:block'>
          Simple, professional access to support and communication.
        </p>
      </div>

      {/* Contact Methods */}
      <div className='hidden md:block'>
        <ContactMethods />
      </div>
    </div>
  );
};
