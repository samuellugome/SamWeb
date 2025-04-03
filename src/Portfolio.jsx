import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import {
  Sparkles, Code2, Server, Settings2, MonitorSmartphone, Mail,
  TerminalSquare, Wifi, Cloud, ShieldCheck, ShoppingCart, Users,
  Tag, HelpCircle, Megaphone, BrainCircuit, Laptop2, HardDriveDownload
} from "lucide-react";
import { motion } from "framer-motion";

const serviceIcons = {
  "Power System Studies": Server,
  "Automation Systems using PLCs": Settings2,
  "Control System Design & Testing": Code2,
  "Systems Modeling and Simulation": MonitorSmartphone,
  "POS System Setup & Configuration": ShoppingCart,
  "Contactless Payment Integration": TerminalSquare,
  "Wi-Fi & Network Setup": Wifi,
  "Device Configuration & Troubleshooting": HelpCircle,
  "Cloud Setup & User Access": Cloud,
  "Cybersecurity Basics": ShieldCheck,
  "Tech Sales & Consultation": Users,
  "Service Packaging & Pricing": Tag,
  "Customer Service & Training": HelpCircle,
  "Basic Branding & Marketing": Megaphone,
  "AI Integration": BrainCircuit,
  "Office Software Transition": Laptop2,
  "Operating System Installations": HardDriveDownload
};

const serviceDescriptions = {
  "Power System Studies": "Analysis and evaluation of electrical systems for optimal safety and performance.",
  "Automation Systems using PLCs": "Design and deployment of automated industrial systems using programmable logic controllers.",
  "Control System Design & Testing": "Custom development and testing of control algorithms and hardware.",
  "Systems Modeling and Simulation": "Using simulation tools to model, predict, and enhance system behavior.",
  "POS System Setup & Configuration": "Full setup of point-of-sale platforms including menu, hardware, and user roles.",
  "Contactless Payment Integration": "Implementation of mobile and card-based contactless payment solutions.",
  "Wi-Fi & Network Setup": "Configuration of high-performance, secure wireless networks.",
  "Device Configuration & Troubleshooting": "Setup and support for tablets, printers, NAS, and other hardware.",
  "Cloud Setup & User Access": "Deploying and managing cloud platforms like Google Workspace and Dropbox.",
  "Cybersecurity Basics": "Setting up firewalls, endpoint security, and secure authentication.",
  "Tech Sales & Consultation": "Client-facing solutions for tech needs and infrastructure scaling.",
  "Service Packaging & Pricing": "Strategic bundling and pricing of services based on client needs.",
  "Customer Service & Training": "Onboarding clients and providing easy-to-follow tech training.",
  "Basic Branding & Marketing": "Fundamentals of presenting and promoting a tech business effectively.",
  "AI Integration": "Leveraging AI tools to streamline operations, insights, or customer service.",
  "Office Software Transition": "Helping small businesses adopt or migrate to productivity platforms.",
  "Operating System Installations": "Installing and configuring Windows, Linux, and other OS environments."
};

function Portfolio() {
  const [page, setPage] = useState("home");

  const navButton = (label, target) => (
    <Button variant="ghost" onClick={() => setPage(target)} className="text-blue-700 hover:text-blue-900">
      {label}
    </Button>
  );

  const renderHome = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="max-w-5xl mx-auto text-center p-10 bg-[#fefae0] rounded-2xl shadow-xl">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">Samuel Lugo</h1>
        <p className="text-lg text-gray-800 max-w-xl mx-auto mb-8">
          Electrical engineer specializing in both power system studies and small-business IT services. From complex automation to POS and Wi-Fi setups, I design practical, scalable tech solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 justify-items-center">
          {Object.entries(serviceIcons).slice(0, 8).map(([label, Icon], index) => (
            <a key={index} href="#services" className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <Icon className="w-10 h-10 text-blue-600 mb-2" />
              <span className="text-sm text-gray-700 text-center font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#dbeafe] text-gray-900 p-4">
      <nav className="flex justify-center space-x-6 py-4 border-b border-blue-300 mb-6 shadow-sm bg-[#bfdbfe] rounded-xl">
        {navButton("Home", "home")}
        {navButton("About", "about")}
        {navButton("Services", "services")}
        {navButton("Contact", "contact")}
      </nav>
      {page === "home" && renderHome()}
    </div>
  );
}

export default Portfolio;
