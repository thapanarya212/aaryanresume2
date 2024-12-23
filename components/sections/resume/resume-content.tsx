'use client';

import { ResumeFooter } from './resume-footer';

export function ResumeContent() {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">John Doe</h2>
        <p className="text-muted-foreground">Full Stack Developer</p>
        <p className="text-sm mt-2">
          Passionate developer with expertise in modern web technologies.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Experience</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Senior Developer - Tech Corp</h4>
            <p className="text-sm text-muted-foreground">2020 - Present</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Led development of multiple full-stack applications</li>
              <li>Reduced application load time by 40%</li>
              <li>Implemented CI/CD pipeline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Frontend Developer - Web Solutions</h4>
            <p className="text-sm text-muted-foreground">2018 - 2020</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>Rebuilt company website increasing conversions by 25%</li>
              <li>Implemented responsive design system</li>
              <li>Optimized SEO performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Frontend</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Backend</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Education</h3>
        <div>
          <h4 className="font-medium">BSc in Computer Science</h4>
          <p className="text-sm text-muted-foreground">
            University of Technology, 2014-2018
          </p>
        </div>
      </section>

      <ResumeFooter />
    </div>
  );
}