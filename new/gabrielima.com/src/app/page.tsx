import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const skills = [
  {
    area: 'Front-End',
    skills: [
      'Javascript',
      'Typescript',
      'React',
      'NextJS',
      'JQuery',
      'SASS',
      'Bootstrap',
      'TailwindCSS',
    ],
  },
  {
    area: 'Back-End',
    skills: ['NodeJS', 'PHP', 'Java (Spring Boot)', 'Ruby on Rails'],
  },
  {
    area: 'Mobile',
    skills: ['Ionic'],
  },
  {
    area: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    area: 'Misc',
    skills: ['Git', 'Adobe Photoshop'],
  },
];

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Gabriel <span className="text-sky-600">Lima</span>
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Computer scientist. Full-stack developer. All things web.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex justify-center">
          <div className="rounded-md shadow">
            <Link
              href="#contact"
              className={cn(
                'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md',
                'text-white bg-sky-600 hover:bg-sky-700 md:text-lg'
              )}>
              Contact
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              href="/Resume - Gabriel de Lima Rabelo.pdf"
              className={cn(
                'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md',
                'text-sky-700 bg-sky-100 hover:bg-sky-200 md:text-lg'
              )}
              target="_blank"
              rel="noreferrer">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <section id="about" className="bg-slate-50">
        <div>
          <h3>About</h3>

          <div className="flex lg:items-center flex-col lg:flex-row">
            <div className="max-w-[200px] lg:max-w-full lg:w-full">
              <Image
                className="rounded-md"
                src="/gabrielima.jpg"
                width={274}
                height={294}
                alt="Gabriel Lima"
              />
            </div>
            <div className="lg:pl-5 text-md md:text-lg">
              Computer science graduate with 9+ years of experience in full
              stack web development and computer programming with problem
              solving skills. Former researcher at the PixelLab - Computer
              Vision Laboratory - and former member of the Advanced Programming
              Techniques Team of the Federal University of Goias. Finalist at
              the Brazilian ACM Programming Contest of 2013. Exchange program at
              Temple University, Philadelphia - PA. Experience as a web
              developer at a startup in the silicon valley.
            </div>
          </div>
        </div>
      </section>

      <section id="Skills">
        <h3>Skills</h3>

        {skills.map(({ area, skills }: any, index: number) => (
          <div
            key={index}
            className="flex items-center my-6 flex-col lg:flex-row">
            <h5 className="flex lg:basis-[100px] shrink-0 justify-end mb-4 lg:mb-0 lg:pr-3">
              {area}
            </h5>

            <div className="flex grow justify-center lg:justify-start lg:align-center flex-wrap">
              {skills.map((skill: any, index: number) => (
                <div
                  key={index}
                  className="inline-block border border-1 border-gray-800 text-gray-800 text-sm my-1 mr-2 px-2.5 py-0.5 rounded hover:bg-gray-800 hover:text-white cursor-pointer">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
