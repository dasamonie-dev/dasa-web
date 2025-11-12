import mapImage from '../../../assets/contact/map.svg';
import ContactLocation from './ContactLocation';
import USAIcon from '../../../assets/contact/Country.svg';

export default function ContactMap() {
  return (
    <div className='w-full flex flex-col justify-center relative'>
      <div>
        <img src={mapImage} alt='' />
      </div>
      <div className='absolute top-20 left-[30%]'>
        <ContactLocation
          location='NEW MEXICO USA.'
          locationDesc='4600 SUNSET CANYON'
          locationIcon={USAIcon}
        />
      </div>
    </div>
  );
}
