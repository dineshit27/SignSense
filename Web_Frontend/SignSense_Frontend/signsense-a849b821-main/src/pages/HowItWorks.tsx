import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Brain, Database, Volume2, FileText, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Input Device",
      description: "High-resolution camera captures sign language gestures in real-time with precision tracking.",
      details: ["Kinetic camera sensors", "Real-time video processing", "Gesture boundary detection"]
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Capture Gesture",
      description: "Advanced computer vision algorithms identify and isolate hand movements and positions.",
      details: ["Hand landmark detection", "Motion tracking", "Gesture segmentation"]
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary" />,
      title: "Gesture Processing",
      description: "Machine learning models analyze captured gestures using Dynamic Time Warping algorithms.",
      details: ["Neural network analysis", "Pattern recognition", "Temporal alignment"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Feature Extraction",
      description: "Key features and patterns are extracted from processed gesture data for classification.",
      details: ["Feature vectors", "Gesture characteristics", "Pattern matching"]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Database",
      description: "Comprehensive sign language database with medical terminology and common phrases.",
      details: ["Medical vocabulary", "ASL dictionary", "Healthcare contexts"]
    },
    {
      icon: <div className="flex space-x-1">
        <Volume2 className="h-4 w-4 text-secondary" />
        <FileText className="h-4 w-4 text-primary" />
      </div>,
      title: "Audio & Text Output",
      description: "Translated content is delivered as both spoken audio and written text for accessibility.",
      details: ["Text-to-speech synthesis", "Real-time transcription", "Multi-format output"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text">SignSense</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered system uses advanced computer vision and machine learning 
              to provide real-time sign language interpretation
            </p>
          </div>

          {/* Process Flow */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Step Card */}
                  <Card className={`card-elevated flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          {step.icon}
                          <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-xl"></div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Step {index + 1}</div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-3'}`}>
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}

                  {/* Visual Element */}
                  <div className={`w-full lg:w-80 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-3'}`}>
                    <div className="aspect-square bg-gradient-card rounded-2xl p-6 flex items-center justify-center card-elevated">
                      <div className="text-6xl opacity-50">
                        {index === 0 && "📹"}
                        {index === 1 && "🤏"}
                        {index === 2 && "🧠"}
                        {index === 3 && "⚡"}
                        {index === 4 && "💾"}
                        {index === 5 && "🔊"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Technology Highlights */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powered by <span className="gradient-text">Advanced Technology</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-elevated text-center">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Computer Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    State-of-the-art CV algorithms for precise hand tracking and gesture recognition
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Neural networks trained on extensive sign language datasets for accurate interpretation
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated text-center">
                <CardHeader>
                  <Database className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Dynamic Time Warping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced algorithms that handle variations in signing speed and style
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;