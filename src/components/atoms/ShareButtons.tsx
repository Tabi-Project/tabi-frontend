"use client";

import { useState } from "react";
import {
  Share2,
  Link as LinkIcon,
  Linkedin,
  Facebook,
  Check,
  Instagram
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

interface ShareButtonsProps {
  title: string;
  url: string;
}

// Custom X (formerly Twitter) Icon component
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
);

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "X",
      icon: <XIcon size={16} />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-black hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: <BsWhatsapp size={18} />,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]"
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:bg-[#4267B2]/10 hover:text-[#4267B2]"
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      href: `https://www.instagram.com/`,
      color: "hover:bg-[#E1306C]/10 hover:text-[#E1306C]"
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 py-8 border-y border-gray-100 my-10">
      <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a2e] uppercase tracking-wider">
        <Share2 size={16} className="text-brand-primary" />
        <span>Share this post</span>
      </div>

      <div className="flex items-center flex-wrap gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border border-gray-200 text-[#555] transition-all duration-300 flex items-center justify-center ${link.color}`}
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}

        <button
          onClick={copyToClipboard}
          className={`p-3 rounded-full border border-gray-200 text-[#555] transition-all duration-300 flex items-center gap-2 hover:bg-brand-primary/10 hover:text-brand-primary ${copied ? "bg-green-50 text-green-600 border-green-200" : ""}`}
          title="Copy link"
        >
          {copied ? <Check size={18} /> : <LinkIcon size={18} />}
          {copied && <span className="text-xs font-medium pr-1">Copied!</span>}
        </button>
      </div>
    </div>
  );
}
