"use client";

import { useState } from "react";
import DonationModal from "@/components/molecules/DonationModal";
import CommunityWelcomeModal from "@/components/molecules/CommunityWelcomeModal";
import DonateCard from "@/components/organisms/DonateCard";
import CommunityCard from "@/components/organisms/CommunityCard";

export default function GetInvolved() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(3.5rem,4.5vw,3.5rem)] font-bold tracking-tight text-[#1a1a2e] leading-tight">
              Get Involved, <span className="text-brand-primary">Support</span>{" "}
              Our Mission
            </h2>
            <p className="mt-4 text-base text-[#777] max-w-5xl mx-auto leading-relaxed">
              Your support fuels our mission to empower communities through
              education and innovation, transforming lives one step at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[41.5fr_58.5fr] gap-5">
            <DonateCard onDonateClick={() => setDonateOpen(true)} />
            <CommunityCard onSuccess={() => setWelcomeOpen(true)} />
          </div>
        </div>
      </section>

      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
      {welcomeOpen && (
        <CommunityWelcomeModal
          name=""
          onClose={() => setWelcomeOpen(false)}
          whatsappUrl="https://chat.whatsapp.com/YOUR_GROUP_LINK"
        />
      )}
    </>
  );
}
