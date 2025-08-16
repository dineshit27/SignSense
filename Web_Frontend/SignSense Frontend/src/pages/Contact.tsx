import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: "mr.tharun.it@gmail.com",
      href: "mailto:mr.tharun.it@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      label: "Phone",
      value: "+91 6381635513",
      href: "tel:+916381635513"
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      label: "Location",
      value: "Healthcare Technology Solutions",
      href: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team to learn more about SignSense or discuss 
              implementation in your healthcare facility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <span>Get in Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    We're here to help improve communication accessibility in healthcare. 
                    Reach out to discuss how SignSense can benefit your organization.
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Emergency healthcare implementation support available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="shadow-soft focus:shadow-medium transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="shadow-soft focus:shadow-medium transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interest in SignSense, implementation needs, or any questions you have..."
                      rows={6}
                      required
                      className="shadow-soft focus:shadow-medium transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full group">
                    <Send className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Healthcare Professionals:</strong> We offer specialized consultation 
                    for medical facilities looking to implement accessibility solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Development Section */}
          <Card className="mt-16 card-elevated border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Future <span className="gradient-text">Development</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="font-semibold mb-2">Language Expansion</h3>
                  <p className="text-sm text-muted-foreground">
                    Adding support for international sign languages including BSL, JSL, and regional variants
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold mb-2">Cross-Platform Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Mobile apps, tablet interfaces, and integration with existing hospital systems
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-semibold mb-2">AI Model Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous learning from healthcare interactions to improve accuracy and context awareness
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;