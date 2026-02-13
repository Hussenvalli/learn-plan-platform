import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-secondary" />
              <span className="font-heading text-lg font-bold">Secure Digital Technology</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Empowering learners worldwide with quality education and expert-led courses.
            </p>
          </div>

          {[
            { title: "Platform", links: ["Browse Courses", "Pricing", "Instructors", "Enterprise"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
            { title: "Support", links: ["Help Center", "FAQs", "Community", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © 2025 Secure Digital Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
