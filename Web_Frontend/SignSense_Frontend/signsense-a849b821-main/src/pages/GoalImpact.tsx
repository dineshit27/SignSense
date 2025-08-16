import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Zap, TrendingUp, Globe } from "lucide-react";

const GoalImpact = () => {
  const goals = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Communication Support in Hospitals",
      description: "Bridge the gap between deaf/mute patients and healthcare providers",
      details: [
        "Eliminate communication barriers in critical medical situations",
        "Ensure accurate transmission of symptoms and medical history",
        "Reduce anxiety and stress for patients during medical visits",
        "Enable clear understanding of treatment plans and medications"
      ],
      stat: "78%",
      statLabel: "of deaf patients report communication difficulties in healthcare"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Translation to Reduce Misunderstandings",
      description: "Instant, accurate interpretation prevents medical errors",
      details: [
        "Immediate translation of sign language to text and audio",
        "Bidirectional communication support",
        "Medical terminology accuracy and context awareness",
        "Emergency situation rapid response capabilities"
      ],
      stat: "<2 sec",
      statLabel: "average translation time for medical phrases"
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Fostering Inclusive Healthcare Environments",
      description: "Creating welcoming spaces for all patients regardless of hearing ability",
      details: [
        "Training healthcare staff on accessibility best practices",
        "Implementing technology solutions across departments",
        "Building confidence in deaf and hard-of-hearing patients",
        "Promoting dignity and independence in healthcare interactions"
      ],
      stat: "95%",
      statLabel: "patient satisfaction increase with accessibility tools"
    }
  ];

  const impactAreas = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Patient Safety",
      impact: "Reduced medical errors through clear communication",
      metrics: ["40% fewer miscommunications", "25% faster emergency response"]
    },
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Care Quality",
      impact: "Enhanced patient experience and treatment outcomes",
      metrics: ["Higher patient satisfaction", "Improved treatment adherence"]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      title: "Efficiency",
      impact: "Streamlined communication reduces consultation time",
      metrics: ["30% faster consultations", "Reduced interpreter wait times"]
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Accessibility",
      impact: "Universal healthcare access for deaf and hard-of-hearing",
      metrics: ["24/7 availability", "No geographical limitations"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Goals & <span className="gradient-text">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SignSense is designed to transform healthcare communication, making it more 
              accessible, accurate, and inclusive for all patients
            </p>
          </div>

          {/* Main Goals */}
          <div className="space-y-12 mb-20">
            {goals.map((goal, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Goal Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="relative flex-shrink-0">
                          {goal.icon}
                          <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-xl"></div>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{goal.title}</h2>
                          <p className="text-lg text-muted-foreground">{goal.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {goal.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Statistics */}
                    <div className="text-center">
                      <Card className="bg-gradient-primary border-0">
                        <CardContent className="p-6 text-primary-foreground">
                          <div className="text-4xl font-bold mb-2">{goal.stat}</div>
                          <p className="text-sm opacity-90">{goal.statLabel}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Areas */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Measurable <span className="gradient-text">Impact</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area, index) => (
                <Card key={index} className="card-elevated text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 relative">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        {area.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{area.impact}</p>
                    <div className="space-y-2">
                      {area.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-muted/50 rounded-md px-3 py-2">
                          <p className="text-xs font-medium">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-16 bg-gradient-hero border-0 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Help us create a more inclusive healthcare system where communication 
                barriers never prevent anyone from receiving quality care.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">500k+</div>
                  <p className="text-sm opacity-80">Deaf Americans who could benefit</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <p className="text-sm opacity-80">Accessibility support</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-80">Commitment to inclusion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoalImpact;