import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp 2025",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=340&fit=crop",
    rating: 4.8,
    students: 15420,
    duration: "42h",
    price: 49,
    tag: "Bestseller",
  },
  {
    title: "UI/UX Design Masterclass: From Figma to Reality",
    instructor: "Alex Chen",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop",
    rating: 4.9,
    students: 8300,
    duration: "28h",
    price: 39,
    tag: "New",
  },
  {
    title: "Data Science & Machine Learning with Python",
    instructor: "Dr. Maria Lopez",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    rating: 4.7,
    students: 12100,
    duration: "56h",
    price: 59,
  },
  {
    title: "Digital Marketing Strategy & Social Media",
    instructor: "James Park",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
    rating: 4.6,
    students: 6800,
    duration: "18h",
    price: 29,
  },
  {
    title: "Photography: From Beginner to Professional",
    instructor: "Emma Williams",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=340&fit=crop",
    rating: 4.8,
    students: 9200,
    duration: "24h",
    price: 34,
    tag: "Popular",
  },
  {
    title: "Business Analytics & Data Visualization",
    instructor: "Michael Davis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    rating: 4.5,
    students: 5400,
    duration: "20h",
    price: 44,
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hand-picked courses by our experts to help you start your learning journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
