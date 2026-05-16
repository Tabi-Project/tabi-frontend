"use client";

import { useEffect } from "react";
import { flushSubmissionQueue } from "@/lib/flush-queue";

export default function SubmissionFlusher() {
  useEffect(() => {
    flushSubmissionQueue();
  }, []);

  return null;
}
