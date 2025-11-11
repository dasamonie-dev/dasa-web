import type { TeamMember } from '../../../data/team';

const LeadersImageCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className='w-full relative bg-menu rounded-2xl transition-shadow max-w-80 '>
      <div className='overflow-hidden rounded-xl'>
        <img
          src={member.photo}
          alt={member.name}
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='p-3'>
        <p className='text-accent font-semibold'>{member.name}</p>
        <p className='text-accent/70 text-sm'>{member.role}</p>
      </div>
      {/* precise clip-path notch */}
      <span
        className='absolute right-0 bottom-0 w-8 h-8 bg-base [clip-path:polygon(100%_0,0_100%,100%_100%)]'
        aria-hidden='true'
      ></span>
    </div>
  );
};

export default LeadersImageCard;
