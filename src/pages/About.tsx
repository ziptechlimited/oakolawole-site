import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Target, Eye, Heart, Scale, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our legal practice.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Our clients' interests are at the heart of everything we do.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "We are committed to achieving the best outcomes for our clients.",
  },
];

const offices = [
  {
    city: "Abuja",
    type: "Head Office",
    address:
      "Suite 19, Jinifa Plaza, Plot 1014, Samuel Ademulegun Avenue, Central Business District",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734685/wole002_di5afl.jpg",
  },
  {
    city: "Lagos",
    type: "Branch Office",
    address:
      "Plot 6, Block 113, Adebisi Ogunniyi Crescent, off Agungi-Ajiran Road, Lekki-Epe Expressway",
    image:
      "https://res.cloudinary.com/dgxl5swen/image/upload/v1769734827/wole_001_bigkzz.jpg",
  },
  {
    city: "Jos",
    type: "Branch Office",
    address: "No. 3, Constitutional Hill Road, Jos, Plateau State",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about O.A. Kolawole & Co., a leading Nigerian law firm committed to excellence, integrity, and client success. Discover our history and core values."
        canonicalUrl="/about"
      />
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
              About Us
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              A Legacy of Legal Excellence
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              O.A. Kolawole & Co. is a full-service Nigerian law firm committed
              to excellence, ethics, and professionalism in every aspect of our
              practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
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
                Our Story
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Building Trust Through Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O.A. Kolawole & Co. is a full-service law firm positioned to
                  render high quality legal services tailored to meet the unique
                  needs of each client. We combine legal expertise with a deep
                  understanding of our clients' industries to provide practical,
                  effective solutions.
                </p>
                <p>
                  Our legal team consists of experienced professionals with
                  decades of combined experience across diverse practice areas.
                  The team includes lawyers who have worked at prestigious
                  firms, bringing invaluable experience in complex litigation,
                  advisory, and transactional work.
                </p>
                <p>
                  We believe in building relationships based on trust and mutual
                  respect. We understand that each client has unique needs, and
                  we are committed to developing innovative strategies to help
                  achieve both immediate and long-term goals.
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
                  src="https://res.cloudinary.com/dgxl5swen/image/upload/v1769614564/kolawole.jpg"
                  alt="Law firm team discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 bg-card rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality legal services tailored to meet the
                unique needs of each client, while maintaining the highest
                standards of ethics and professionalism. We are committed to
                being the trusted legal partner our clients deserve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 lg:p-10 bg-card rounded-2xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a leading Nigerian law firm known for
                excellence, integrity, and innovative legal solutions. We aspire
                to set the standard for legal practice in Nigeria, delivering
                value that exceeds our clients' expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every action we take in service of our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeader
            label="Our Locations"
            title="Strategic Presence Across Nigeria"
            description="With offices in Abuja, Lagos, and Jos, we are strategically positioned to serve clients across Nigeria."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elegant">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={office.image}
                      alt={`${office.city} office`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-accent" />
                      <span className="text-accent text-sm font-medium">
                        {office.type}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground text-sm min-h-[2lh] leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
