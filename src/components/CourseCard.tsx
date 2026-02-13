import { Star, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  tag?: string;
}

const CourseCard = ({ title, instructor, image, rating, students, duration, price, tag }: CourseCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground border-0 text-xs">
            {tag}
          </Badge>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
            {rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">${price}</span>
          <span className="text-xs text-muted-foreground line-through">${(price * 1.5).toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
