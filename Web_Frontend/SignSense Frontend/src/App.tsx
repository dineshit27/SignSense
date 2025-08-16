import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import LiveTranslation from "./pages/LiveTranslation";
import HowItWorks from "./pages/HowItWorks";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import GoalImpact from "./pages/GoalImpact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="signsense-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/translate" element={<LiveTranslation />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/goal-impact" element={<GoalImpact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
