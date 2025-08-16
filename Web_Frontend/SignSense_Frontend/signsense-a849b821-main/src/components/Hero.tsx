import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full hero-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full hero-animation" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/10 rounded-full hero-animation" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">SignSense</span>
                  <br />
                  <span className="text-foreground">Breaking Communication</span>
                  <br />
                  <span className="text-foreground">Barriers with AI</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  Real-time sign language interpretation powered by advanced AI. 
                  Promoting accessibility and communication in healthcare environments.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/translate">
                  <Button variant="hero" className="group">
                    Start Translation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Link to="/how-it-works">
                  <Button variant="outline" size="xl" className="group">
                    <Play className="h-5 w-5 mr-2" />
                    Learn How It Works
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Real-time</div>
                  <div className="text-sm text-muted-foreground">Translation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">AI-Powered</div>
                  <div className="text-sm text-muted-foreground">Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Healthcare</div>
                  <div className="text-sm text-muted-foreground">Focused</div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-card card-elevated rounded-3xl p-8 hero-animation">
                <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Hand signing illustration */}
                  <div className="text-6xl text-primary-foreground">🤟</div>
                  
                  {/* Pulse rings */}
                  <div className="absolute inset-0 bg-primary-glow/20 rounded-2xl pulse-ring"></div>
                  <div className="absolute inset-0 bg-primary-glow/10 rounded-2xl pulse-ring" style={{ animationDelay: "1s" }}></div>
                  
                  {/* AI Processing indicators */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>

                {/* Output indicators */}
                <div className="mt-6 space-y-3">
                  <div className="bg-background/80 rounded-lg p-3 flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Converting to text...</span>
                  </div>
                  <div className="bg-background/80 rounded-lg p-3 flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <span className="text-sm text-muted-foreground">Generating audio...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;