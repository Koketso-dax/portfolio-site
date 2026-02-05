import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card"
import { GradientText } from "./components/gradient-text"
import { TypingAnimation } from "./components/typing-animation"



export default function Home() {

  const projects = [
    {
      id: 1,
      title: "Spy Game",
      description: "A web based game wherein players must root out a spy in their midst. The game is played in rounds, with each player taking turns to vote on who they believe the spy is.",
      image: "https://github.com/Koketso-dax/spygame/raw/main/screenshot.png",
      link: "https://spygame-fawn.vercel.app",
      technologies: ["React", "Next.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Prosper Loan Data Analysis",
      description: "A comprehensive analysis of loan data to identify trends and insights, utilizing Python and Pandas. This project includes data cleaning, visualization, and statistical analysis to understand borrower behavior and loan performance.",
      image: "https://github.com/Koketso-dax/prosper-data/raw/main/screenshot.png",
      link: "https://koketso-dax.github.io/prosper-data/",
      technologies: ["Python", "Pandas", "Matplotlib"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills and projects, built with Next.js and Tailwind CSS. This site features a modern design, responsive layout, and interactive elements to highlight my work and experience.",
      image: "https://github.com/Koketso-dax/portfolio-site/raw/main/screenshot.png",
      link: "https://portfolio-site-git-main-koketsodaxs-projects.vercel.app/",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"]
    }
  ];
  return (
    <div className="space-y-24">
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
          {projects.map((project) => (
            <Card key={project.id} className="retro-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="font-sans italic">{project.description}</CardDescription>
                <Image
                width={30}
                height={30}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground font-sans">{project.technologies.join(", ")}</p>
                <Link href={project.link} passHref>
                  <Button variant="outline" className="retro-border w-full">View Project</Button>
                </Link>
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
            <form
            className="space-y-6"
            action={`mailto:lanchaster.k@gmail.com`}
            method="POST"
            encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-background retro-border focus:translate-x-1 focus:-translate-y-1 transition-transform"
                required/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-background retro-border focus:translate-x-1 focus:-translate-y-1 transition-transform"
                required/>
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

