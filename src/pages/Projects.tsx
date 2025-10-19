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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.15) 0%, transparent 50%)`
        }} />
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Featured Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Innovative solutions crafted with passion, precision, and cutting-edge technology
            </p>
            <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              <div className="h-1 w-1 bg-accent rounded-full animate-pulse" />
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-16 relative z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filter:</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="lg"
                    onClick={() => setSelectedCategory(category)}
                    className={`capitalize font-semibold transition-all duration-300 ${
                      selectedCategory === category 
                        ? "shadow-lg shadow-primary/50 scale-105" 
                        : "hover:scale-105 hover:border-primary/50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24 relative z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-2xl" />
                  <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/30 via-transparent to-transparent blur-2xl" />
                </div>

                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  
                  {/* Category badges on image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <Badge key={cat} className="capitalize backdrop-blur-md bg-background/80 border-primary/50 shadow-lg" variant="outline">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="relative p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text group-hover:from-primary group-hover:to-accent">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-medium px-3 py-1 hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all" 
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
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
