"use client";

import { useState } from "react";
import DonationModal from "@/components/molecules/DonationModal";
import CommunityWelcomeModal from "@/components/molecules/CommunityWelcomeModal";
import DonateCard from "@/components/organisms/DonateCard";
import CommunityCard from "@/components/organisms/CommunityCard";
import { motion, Variants } from "framer-motion";

export default function GetInvolved() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  // Parent variants to handle staggering of children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Reusable child variant for smooth slide up
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom professional cubic bezier
      }
    }
  };

  return (
    <>
      <section className="w-full bg-white">
        <motion.div
          className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-14" variants={itemVariants}>
            <h2 className="text-[clamp(3.5rem,4.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e] leading-tight">
              Get Involved, <span className="text-brand-primary">Support</span>{" "}
              Our Mission
            </h2>
            <p className="mt-4 text-base text-[#777] max-w-5xl mx-auto leading-relaxed">
              Your support fuels our mission to empower communities through
              education and innovation, transforming lives one step at a time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[41.5fr_58.5fr] gap-5">
            <motion.div variants={itemVariants}>
              <DonateCard onDonateClick={() => setDonateOpen(true)} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CommunityCard onSuccess={() => setWelcomeOpen(true)} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
      {welcomeOpen && (
        <CommunityWelcomeModal
          name=""
          onClose={() => setWelcomeOpen(false)}
          whatsappUrl="https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo"
        />
      )}
    </>
  );
}
