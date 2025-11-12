interface ContactLocationProps {
  location: string;
  locationDesc: string;
  locationIcon: string;
}

export default function ContactLocation({
  location,
  locationDesc,
  locationIcon,
}: ContactLocationProps) {
  return (
    <div className='bg-base space-y-3 rounded-2xl w-30 flex flex-col justify-center items-center text-center p-2'>
      <div>
        <img
          src={locationIcon}
          alt={locationIcon}
          className='w-5 h-5 rounded-full'
        />
      </div>

      <div>
        <h3 className='font-semibold'>{location}</h3>
        <p className='text-xs text-accent/70'>{locationDesc}</p>
      </div>
    </div>
  );
}
