"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import DonationModal from "@/components/molecules/DonationModal";
import { BASE_PATH } from "@/constants/paths";


export default function GetInvolved() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          {/* ── Section heading ── */}
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

          {/* ── Two cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[41.5fr_58.5fr] gap-5">
            {/* Left: Donate card */}
            <div
              className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-90"
              style={{ background: "#F5F5F5" }}
            >
              {/* Decorative dot pattern */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #71286F 1px, transparent 1px)",
                  backgroundSize: "12px 12px"
                }}
              />

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-[#121212] leading-tight mb-4">
                  Make a<br />
                  Lasting Impact
                </h3>
                <p className="text-base text-[#444444] leading-relaxed max-w-xs mb-8">
                  Your donation supports young minds in their pursuit of
                  technology, providing crucial tools and support for their
                  success.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setModalOpen(true)}
                >
                  Donate Now
                </Button>
              </div>

              {/* Coin jar image */}
              <div className="absolute bottom-0 right-0 h-48 w-40  sm:w-52 sm:h-64 pointer-events-none">
                <Image
                  src={`${BASE_PATH}/donate-jar.png`}
                  alt="Donation jar"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right: Community card */}
            <div
              className="relative rounded-3xl overflow-hidden p-10"
              style={{ background: "#F5EFE8" }}
            >
              {/* Dot pattern */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20"
                aria-hidden
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #8B6340 1px, transparent 1px)",
                  backgroundSize: "12px 12px"
                }}
              />

              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-[#121212] leading-tight mb-2">
                  Join our Community
                </h3>
                <p className="text-base text-[#444] leading-relaxed mb-8">
                  Join us to stay updated on our latest initiatives, events, and
                  opportunities.
                </p>

                {/* Form */}
                <div
                  className="bg-[#fbfbfc] rounded-2xl p-6 flex flex-col gap-4"
                  style={{ boxShadow: "0px 4px 12px 2px #ededed" }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#44444] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#444444] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="abcd@gmail.com"
                        className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#444444] mb-2">
                      Area of Interest
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your area of interest"
                      className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="md">
                      Join Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <DonationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
