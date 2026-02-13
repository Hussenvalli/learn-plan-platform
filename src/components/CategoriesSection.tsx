import { motion } from "framer-motion";
import { Code, Palette, BarChart3, Music, Camera, Globe } from "lucide-react";

const categories = [
  { icon: Code, label: "Development", count: "1,200+ courses", color: "bg-blue-500/10 text-blue-600" },
  { icon: Palette, label: "Design", count: "800+ courses", color: "bg-pink-500/10 text-pink-600" },
  { icon: BarChart3, label: "Business", count: "950+ courses", color: "bg-green-500/10 text-green-600" },
  { icon: Music, label: "Music", count: "400+ courses", color: "bg-amber-500/10 text-amber-600" },
  { icon: Camera, label: "Photography", count: "350+ courses", color: "bg-violet-500/10 text-violet-600" },
  { icon: Globe, label: "Languages", count: "500+ courses", color: "bg-cyan-500/10 text-cyan-600" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our wide range of topics and find the perfect course for your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl mb-3 ${cat.color} transition-transform group-hover:scale-110`}>
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{cat.label}</h3>
              <p className="text-xs text-muted-foreground">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
