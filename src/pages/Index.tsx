import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Code2, Briefcase, Award, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import profilePicture from "@/assets/profile-picture.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/25 via-accent/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary shadow-2xl shadow-primary/50 ring-4 ring-primary/20">
                <AvatarImage src={profilePicture} alt="MD Atiqur Rahman" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </div>
            
            <Badge className="mb-4" variant="outline">Full Stack Developer</Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight px-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                MD Atiqur Rahman
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Crafting exceptional digital experiences through clean code and innovative solutions
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap pt-8">
              <Button size="lg" asChild className="group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@mdatiqur.me">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full p-1 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse shadow-lg shadow-primary/50" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise & Tools
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {["PHP", "Laravel", "Vue.js", "React", "MySQL", "PostgreSQL", "Docker", "AWS", "Node.js", "TypeScript", "Tailwind CSS", "Git"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm md:text-base lg:text-lg px-4 md:px-6 py-2 md:py-3 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-default">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <Button variant="outline" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with Laravel and Vue.js",
                tech: ["Laravel", "Vue.js", "MySQL"],
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
              },
              {
                title: "Real-Time Analytics Dashboard",
                description: "Modern analytics platform with React and AWS",
                tech: ["React", "AWS", "PostgreSQL"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              },
              {
                title: "Task Management System",
                description: "Collaborative task management with Docker deployment",
                tech: ["PHP", "Docker", "MySQL"],
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = '/projects'}>
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <Code2 className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Building scalable web applications with modern frameworks and best practices
              </p>
            </Card>

            <Card className="p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group">
              <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive interfaces that users love to interact with
              </p>
            </Card>

            <Card className="p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3">Problem Solving</h3>
              <p className="text-muted-foreground">
                Tackling complex challenges with elegant solutions and clean architecture
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                role: "Senior Full Stack Developer",
                company: "Tech Company",
                period: "2022 - Present",
                description: "Leading development of enterprise applications and mentoring junior developers"
              },
              {
                role: "Full Stack Developer",
                company: "Digital Agency",
                period: "2020 - 2022",
                description: "Built and maintained multiple client projects using React, Node.js, and cloud services"
              },
              {
                role: "Frontend Developer",
                company: "Startup Inc",
                period: "2018 - 2020",
                description: "Developed responsive web applications and implemented modern UI/UX designs"
              }
            ].map((exp, index) => (
              <Card key={index} className="p-4 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container max-w-4xl mx-auto text-center space-y-4 md:space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Have a project in mind? Let's create something amazing together
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@mdatiqur.me">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
