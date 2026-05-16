// src/lib/submission-queue.ts
export interface QueuedSubmission {
  submissionId: string;
  payload: Record<string, unknown>;
  attempts: number;
  queuedAt: number;
}

const KEY = "tabi_submission_queue";
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function enqueue(
  submissionId: string,
  payload: Record<string, unknown>
) {
  const queue = getQueue().filter((q) => q.submissionId !== submissionId);
  queue.push({ submissionId, payload, attempts: 0, queuedAt: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(queue));
}

export function getQueue(): QueuedSubmission[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: QueuedSubmission[] = JSON.parse(raw);
    return parsed.filter((q) => Date.now() - q.queuedAt < MAX_AGE_MS);
  } catch {
    return [];
  }
}

export function remove(submissionId: string) {
  const queue = getQueue().filter((q) => q.submissionId !== submissionId);
  localStorage.setItem(KEY, JSON.stringify(queue));
}
