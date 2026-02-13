import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              🎓 Over 10,000+ courses available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Unlock Your Potential with{" "}
            <span className="text-secondary">World-Class</span> Learning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-lg"
          >
            Learn from industry experts, build real-world skills, and advance your
            career with our curated collection of courses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base">
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-8 mt-12 text-primary-foreground/70"
          >
            <div>
              <p className="text-2xl font-bold text-primary-foreground">50K+</p>
              <p className="text-sm">Active Students</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div>
              <p className="text-2xl font-bold text-primary-foreground">200+</p>
              <p className="text-sm">Expert Instructors</p>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div>
              <p className="text-2xl font-bold text-primary-foreground">95%</p>
              <p className="text-sm">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
