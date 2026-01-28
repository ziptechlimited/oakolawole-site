import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Heart,
  GraduationCap,
  Users,
  HandHeart,
  Scale,
  Leaf,
} from "lucide-react";
import SEO from "@/components/SEO";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Legal Education Outreach",
    description:
      "We conduct free legal awareness programs in schools and communities, educating citizens about their rights and the legal system.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Scale,
    title: "Pro Bono Legal Services",
    description:
      "Our team provides free legal representation to individuals who cannot afford legal services, ensuring access to justice for all.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Users,
    title: "Community Development",
    description:
      "We actively participate in community development initiatives, supporting local projects that improve the quality of life.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: HandHeart,
    title: "Youth Mentorship",
    description:
      "Through our mentorship program, we guide aspiring legal professionals and students pursuing careers in law.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const CSR = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA44A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Giving Back
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Corporate Social Responsibility
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              At O.A. Kolawole & Co., we believe in giving back to our
              communities and making a positive impact beyond the courtroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
                Our Commitment
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Making a Difference in Our Communities
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We recognize that our responsibility extends beyond providing
                  legal services. As a leading Nigerian law firm, we are
                  committed to contributing positively to the society in which
                  we operate.
                </p>
                <p>
                  Our corporate social responsibility initiatives focus on
                  education, access to justice, community development, and
                  environmental sustainability. We believe that by investing in
                  these areas, we can help build a better Nigeria.
                </p>
                <p>
                  Through strategic partnerships with non-profit organizations,
                  educational institutions, and community groups, we work to
                  create lasting positive change in the lives of those we serve.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Community outreach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            label="Our Initiatives"
            title="Areas of Impact"
            description="We focus our CSR efforts on initiatives that create meaningful and lasting impact in our communities."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elegant">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <initiative.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-navy-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-white/70 text-lg">
              Through our CSR initiatives, we have touched the lives of many
              individuals and communities across Nigeria.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Pro Bono Hours" },
              { number: "20+", label: "Schools Reached" },
              { number: "1,000+", label: "Lives Impacted" },
              { number: "15+", label: "Community Projects" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-playfair text-4xl md:text-5xl font-semibold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
              Get Involved
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We welcome partnerships with organizations and individuals who
              share our commitment to making a positive impact in our
              communities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-md transition-all"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CSR;
