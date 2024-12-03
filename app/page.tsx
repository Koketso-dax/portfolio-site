import Image from 'next/image'
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card"
import { GradientText } from "./components/gradient-text"
import { TypingAnimation } from "./components/typing-animation"
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Koketso Diale",
    "jobTitle": "Backend Developer, DevOps Engineer, Data Scientist",
    "description": "Specialist in Backend Development, DevOps, and Data Science from Pretoria, South Africa",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "South Africa"
    },
    "url": "https://portfolio.koketsodiale.tech",
    "sameAs": [
      "https://www.linkedin.com/in/koketso-diale-0b3374138",
      "https://github.com/Koketso-dax"
    ]
  };
  return (
    <div className="space-y-24">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="hero" className="text-center py-24 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="https://avatars.githubusercontent.com/u/71882721?s=400&u=974f56f3ea685006141c8890095a176d2275eb41&v=4"
              alt="Koketso Diale Photo"
              width={174}
              height={174}
              className="rounded-full retro-border"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            <GradientText text="Creative" /> Developer & Digital <GradientText text="Artist"/>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground font-sans italic min-h-[3rem]">
            <TypingAnimation text="Crafting digital experiences with a classic touch" />
          </p>
          <Button size="lg" className="retro-border hover:translate-x-1 hover:-translate-y-1 transition-transform">
            Get in touch
          </Button>
        </div>
      </section>

      <section id="projects">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="retro-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform">
              <CardHeader>
                <CardTitle className="text-2xl">Project {project}</CardTitle>
                <CardDescription className="font-sans italic">A brief description of the project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted mb-4"></div>
                <p className="mb-4 text-muted-foreground font-sans">Technologies used: React, Next.js, TypeScript</p>
                <Button variant="outline" className="retro-border w-full">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="border-t border-b border-border py-12">
        <h2 className="text-4xl font-bold mb-12 text-center">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'CSS', 'HTML', 'Git'].map((skill) => (
            <div 
              key={skill} 
              className="retro-border p-6 text-center hover:translate-x-1 hover:-translate-y-1 transition-transform bg-background"
            >
              <span className="font-sans text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="text-4xl font-bold mb-12 text-center">Let&apos;s Connect</h2>
        <Card className="max-w-2xl mx-auto retro-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
            <CardDescription className="font-sans italic">I&apos;m always open to new opportunities and collaborations</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-3 bg-background retro-border focus:translate-x-1 focus:-translate-y-1 transition-transform" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 bg-background retro-border focus:translate-x-1 focus:-translate-y-1 transition-transform" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full p-3 bg-background retro-border focus:translate-x-1 focus:-translate-y-1 transition-transform" 
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full retro-border hover:translate-x-1 hover:-translate-y-1 transition-transform">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

