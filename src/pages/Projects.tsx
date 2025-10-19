import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

// Mock data - will be replaced with backend data
const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    categories: ["web", "mobile"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API for creating marketing copy and blog posts.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    technologies: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
    categories: ["ai", "web"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    categories: ["mobile"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and business intelligence insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "D3.js", "WebSocket", "Python"],
    categories: ["web", "ai"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and decentralized exchange integration.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    technologies: ["Web3.js", "Ethereum", "React", "Solidity"],
    categories: ["blockchain", "web"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform with sentiment analysis and engagement tracking.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    categories: ["ai", "web"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const categories = ["all", "web", "mobile", "ai", "blockchain"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? mockProjects 
    : mockProjects.filter(p => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A collection of web applications, mobile apps, and innovative solutions I've built
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-12">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((cat) => (
                        <Badge key={cat} className="capitalize" variant="default">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
