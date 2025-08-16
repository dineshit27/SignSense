import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Camera, Database, Cpu, Zap, Code, Globe, Shield } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Computer Vision",
      icon: <Camera className="h-8 w-8 text-primary" />,
      color: "primary",
      technologies: [
        { name: "OpenCV", description: "Real-time computer vision processing" },
        { name: "MediaPipe", description: "Hand landmark detection framework" },
        { name: "TensorFlow", description: "Deep learning for gesture recognition" },
        { name: "YOLO", description: "Object detection and tracking" }
      ]
    },
    {
      category: "Machine Learning",
      icon: <Brain className="h-8 w-8 text-accent" />,
      color: "accent",
      technologies: [
        { name: "PyTorch", description: "Neural network development and training" },
        { name: "Scikit-learn", description: "Machine learning algorithms" },
        { name: "Keras", description: "High-level neural networks API" },
        { name: "NumPy", description: "Numerical computing library" }
      ]
    },
    {
      category: "Algorithms",
      icon: <Cpu className="h-8 w-8 text-secondary" />,
      color: "secondary",
      technologies: [
        { name: "Dynamic Time Warping", description: "Temporal sequence alignment" },
        { name: "Hidden Markov Models", description: "Statistical modeling for sequences" },
        { name: "Convolutional Neural Networks", description: "Deep learning for image processing" },
        { name: "LSTM Networks", description: "Sequential data processing" }
      ]
    },
    {
      category: "Hardware & Sensors",
      icon: <Zap className="h-8 w-8 text-primary" />,
      color: "primary",
      technologies: [
        { name: "Kinect Sensors", description: "Depth and motion sensing" },
        { name: "RGB-D Cameras", description: "Color and depth data capture" },
        { name: "GPU Processing", description: "CUDA-accelerated computing" },
        { name: "Edge Computing", description: "Real-time processing optimization" }
      ]
    },
    {
      category: "Database & Storage",
      icon: <Database className="h-8 w-8 text-accent" />,
      color: "accent",
      technologies: [
        { name: "MongoDB", description: "Document-based gesture database" },
        { name: "Redis", description: "High-speed data caching" },
        { name: "PostgreSQL", description: "Relational data management" },
        { name: "Amazon S3", description: "Scalable file storage" }
      ]
    },
    {
      category: "Development & Deployment",
      icon: <Code className="h-8 w-8 text-secondary" />,
      color: "secondary",
      technologies: [
        { name: "Python", description: "Core AI/ML development language" },
        { name: "TypeScript", description: "Frontend development" },
        { name: "Docker", description: "Containerized deployment" },
        { name: "Kubernetes", description: "Container orchestration" }
      ]
    },
    {
      category: "API & Integration",
      icon: <Globe className="h-8 w-8 text-primary" />,
      color: "primary",
      technologies: [
        { name: "REST APIs", description: "Standard web service communication" },
        { name: "WebRTC", description: "Real-time video communication" },
        { name: "WebSocket", description: "Bi-directional real-time data" },
        { name: "GraphQL", description: "Efficient data querying" }
      ]
    },
    {
      category: "Security & Privacy",
      icon: <Shield className="h-8 w-8 text-accent" />,
      color: "accent",
      technologies: [
        { name: "End-to-End Encryption", description: "Data protection in transit" },
        { name: "HIPAA Compliance", description: "Healthcare data security standards" },
        { name: "OAuth 2.0", description: "Secure authentication protocol" },
        { name: "Local Processing", description: "Privacy-first approach" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 bg-primary/5';
      case 'accent':
        return 'border-accent/20 bg-accent/5';
      case 'secondary':
        return 'border-secondary/20 bg-secondary/5';
      default:
        return 'border-border';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SignSense is built on cutting-edge technologies that enable real-time, 
              accurate sign language interpretation for healthcare environments
            </p>
          </div>

          {/* Architecture Overview */}
          <Card className="card-elevated mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">System Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Input Layer</p>
                </div>
                <ArrowComponent />
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium">AI Processing</p>
                </div>
                <ArrowComponent />
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="text-sm font-medium">Output Layer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {technologies.map((category, index) => (
              <Card key={index} className={`card-elevated ${getColorClasses(category.color)}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      {category.icon}
                      <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-xl"></div>
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {tech.name}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical <span className="gradient-text">Capabilities</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Real-time Processing", value: "<100ms", description: "Ultra-low latency translation" },
                { title: "Accuracy Rate", value: "95%+", description: "Highly accurate gesture recognition" },
                { title: "Gesture Database", value: "5000+", description: "Medical & general sign vocabulary" },
                { title: "Supported Languages", value: "ASL+", description: "American Sign Language focus" }
              ].map((stat, index) => (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold mb-1">{stat.title}</div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArrowComponent = () => (
  <div className="hidden md:flex justify-center">
    <div className="w-8 h-8 text-muted-foreground">→</div>
  </div>
);

export default TechStack;