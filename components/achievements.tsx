"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    number: "98%",
    label: "Success Rate",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Satisfied Clients",
  },
  {
    icon: Briefcase,
    number: "50+",
    label: "Years Experience",
  },
  {
    icon: Award,
    number: "25+",
    label: "Industry Awards",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            A track record of success and excellence in legal services spanning
            over five decades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <achievement.icon className="w-12 h-12 text-secondary" />
              </div>
              <div className="text-4xl font-bold mb-2 text-secondary">
                {achievement.number}
              </div>
              <div className="text-gray-200">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}