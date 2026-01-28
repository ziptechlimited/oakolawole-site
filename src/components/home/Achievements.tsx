import { motion } from "framer-motion";
import { Trophy, Users, Building, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "FRM Communications",
    description:
      "Successfully represented FRM Communications Limited against Keystone Bank in a complex financial dispute.",
  },
  {
    icon: Building,
    title: "Mainstream Energy",
    description:
      "Ongoing representation of Mainstream Energy Solutions before the National Industrial Court of Nigeria.",
  },
  {
    icon: Award,
    title: "Mars Exploration",
    description:
      "Representing Mars Exploration & Production Limited in matters before the Industrial Arbitration Panel.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Consistent track record of achieving favorable outcomes for clients across various legal matters.",
  },
];

const Achievements = () => {
  return (
    <section className="section-padding bg-navy-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Our Track Record
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Notable Achievements
          </h2>
          <p className="text-white/70 text-lg">
            Our firm has successfully represented clients in landmark cases
            across Nigeria, establishing a reputation for excellence in legal
            practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-accent/30">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
