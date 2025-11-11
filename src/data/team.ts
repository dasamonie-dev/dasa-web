import ceoImg from '../assets/aboutPage/CEO.svg';
import cooImg from '../assets/aboutPage/COO.svg';
import ctoImg from '../assets/aboutPage/CTO.svg';
import chairmanImg from '../assets/aboutPage/chairman.svg';
import cofounderImg from '../assets/aboutPage/co-founder.svg';

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr Ayoola Meshach O.',
    role: 'CEO and Founder Dasamonie',
    photo: ceoImg,
  },
  { name: 'Alex Ayorinde', role: 'Chief Operating Officer', photo: cooImg },
  { name: 'Terry Edet', role: 'Co-founder Dasamonie', photo: cofounderImg },
  { name: 'Eric Famogun', role: 'Chairman Dasamonie', photo: chairmanImg },
  {
    name: 'Eng. Fikayo Olanipekun',
    role: 'Chief Technical Officer',
    photo: ctoImg,
  },
];
