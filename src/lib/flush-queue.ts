// src/lib/flush-queue.ts
import { getQueue, remove } from "./submission-queue";

export async function flushSubmissionQueue() {
  const queue = getQueue();
  for (const item of queue) {
    try {
      const res = await fetch("/api/bootcamp-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item.payload)
      });
      const json = await res.json();
      if (json.success) remove(item.submissionId);
    } catch {
      // stays in queue, will be retried next time
    }
  }
}
