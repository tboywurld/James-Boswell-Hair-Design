/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Scissors, 
  Sparkles, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Clock, 
  Star, 
  CheckCircle,
  Calendar,
  MessageCircle
} from 'lucide-react';

export const IMAGES = {
  HERO: "/input_file_0.png",
  TEAM_GROUP: "/src/assets/images/regenerated_image_1778438972844.webp",
  PORTFOLIO: [
    "/src/assets/images/regenerated_image_1778439171506.webp",
    "/src/assets/images/regenerated_image_1778439172433.webp",
    "/src/assets/images/regenerated_image_1778439173131.webp",
    "/src/assets/images/regenerated_image_1778439174277.webp",
    "/src/assets/images/regenerated_image_1778439175386.webp",
    "/src/assets/images/regenerated_image_1778439174899.webp",
  ],
  BEFORE_AFTER: [
    { label: "Balayage Transformation", img: "/input_file_3.png" }, // Pink/Transform
    { label: "Precision Cut", img: "/input_file_2.png" }
  ]
};

export const SERVICES = [
  {
    title: "Balayage & Colour",
    description: "Expert coloring techniques for natural, sun-kissed results or bold transformations.",
    icon: Sparkles
  },
  {
    title: "Precision Haircuts",
    description: "Bespoke cuts tailored to your face shape and lifestyle by award-winning stylists.",
    icon: Scissors
  },
  {
    title: "Bridal Hair Styling",
    description: "Exquisite up-dos and styling for your special day, available in-salon or on location.",
    icon: Star
  },
  {
    title: "Blow Dry & Styling",
    description: "Premium styling for events or weekly maintenance using luxury products.",
    icon: Sparkles
  },
  {
    title: "Men’s Grooming",
    description: "Modern and classic techniques for the refined gentleman.",
    icon: Scissors
  },
  {
    title: "Hair Treatments",
    description: "Deep conditioning and luxury hair health rituals to restore shine and strength.",
    icon: CheckCircle
  }
];

export const TESTIMONIALS = [
  {
    name: "Sophie R.",
    text: "I had a wonderful experience — the haircut was exactly what I wanted and the atmosphere was super welcoming.",
    rating: 5
  },
  {
    name: "Hannah M.",
    text: "Gareth completely transformed my hair. The whole team was friendly, professional, and highly skilled.",
    rating: 5
  },
  {
    name: "James T.",
    text: "Absolutely love this salon. Stylish, talented, and always an amazing experience.",
    rating: 5
  }
];

export const TEAM = [
  {
    name: "James Boswell",
    role: "Founder & Creative Director",
    bio: "With years of experience in top salons and a passion for education, James leads the team with a vision for perfection."
  }
];

export const STATS = [
  { label: "Reviews", value: "170+" },
  { label: "Rating", value: "5-Star" },
  { label: "Award", value: "Winning" }
];
