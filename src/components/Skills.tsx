
import { Progress } from '@/components/ui/progress';
import { Code, LineChart, Search } from 'lucide-react';

const frontendSkills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'PHP/Laravel', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Database Management', level: 85 },
  { name: 'API Development', level: 90 },
];

const seoSkills = [
  { name: 'Keyword Research', level: 95 },
  { name: 'On-page SEO', level: 90 },
  { name: 'Technical SEO', level: 85 },
  { name: 'Google Analytics', level: 90 },
  { name: 'Search Console', level: 85 },
];

const SkillCategory = ({ title, skills, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-teal-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-navy-900">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="section-subtitle">My Skills</h3>
          <h2 className="section-title">What I'm Good At</h2>
          <p className="text-gray-700">
            I have expertise in a wide range of technologies and methodologies that allow me to create high-quality digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} icon={<Code size={24} />} />
          <SkillCategory title="Backend Development" skills={backendSkills} icon={<LineChart size={24} />} />
          <SkillCategory title="SEO Expertise" skills={seoSkills} icon={<Search size={24} />} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
