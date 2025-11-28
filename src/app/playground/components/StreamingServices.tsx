'use client';

import { motion } from 'framer-motion';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { Tv, Radio, Music2 } from 'lucide-react';

const services = [
  {
    title: "Live TV",
    description: "Watch your favorite TV channels live",
    icon: <Tv className="w-12 h-12" />,
    link: "/playground/tv",
    status: "Available"
  },
  {
    title: "Radio",
    description: "Listen to worldwide radio stations",
    icon: <Radio className="w-12 h-12" />,
    link: "/playground/radio",
    status: "Available"
  },
  {
    title: "Music",
    description: "Stream the latest music and shows",
    icon: <Music2 className="w-12 h-12" />,
    link: "/playground/music",
    status: "Available"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function StreamingServices() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={cardVariants}
        >
          <Card className="group hover:shadow-lg transition-all">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-[#442781]/10 to-[#61459C]/10 dark:from-[#442781]/20 dark:to-[#61459C]/20 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 dark:bg-gray-900/70 text-[#442781] dark:text-[#a992db] shadow-sm">
                {service.icon}
              </div>
            </div>
            <h2 className="font-raleway font-bold text-xl text-gray-800 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="font-rubik text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <Button
              variant="outline"
              href={service.status === "Available" ? service.link : undefined}
              disabled={service.status !== "Available"}
              icon={<Icon type="arrow-right" />}
              className="w-full justify-center"
            >
              {service.status === "Available" ? "Watch Now" : "Coming Soon"}
            </Button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
} 
