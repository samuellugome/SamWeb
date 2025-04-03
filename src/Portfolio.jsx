import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
  "Device Configuration & Troubleshooting": "Setup and support for
