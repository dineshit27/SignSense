import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, Zap, ArrowRight } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Translation",
      description: "Instant sign language interpretation with advanced AI processing for seamless communication."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Healthcare Focused",
      description: "Specially designed for medical environments to improve patient-provider communication."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Reliable & Accurate",
      description: "Machine learning algorithms ensure high accuracy in gesture recognition and translation."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Inclusive Design",
      description: "Breaking down barriers between deaf/mute users and non-signers in critical situations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionizing <span className="gradient-text">Healthcare Communication</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SignSense bridges the communication gap in healthcare settings, ensuring every patient 
              receives the care they deserve through advanced AI-powered sign language interpretation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated border-0 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 relative">
                    {feature.icon}
                    <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-xl"></div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Try our live translation feature and see how SignSense can transform 
              communication in healthcare environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/translate">
                <Button variant="secondary" size="xl" className="group">
                  Try Live Translation
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;