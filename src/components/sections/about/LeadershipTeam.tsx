import { teamMembers } from '../../../data/team';
import LeadersImageCard from './LeadersImageCard';

export const LeadershipTeam = () => {
  return (
    <section className='bg-base'>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 '>
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className='text-accent font-extrabold text-3xl sm:text-4xl'>
            Leadership Team
          </h2>
          <p className='mt-2 text-accent/80'>
            Empowering you with simple tools to send, save, and spend smarter
            all in one place.
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {teamMembers.map((m) => (
              <LeadersImageCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
