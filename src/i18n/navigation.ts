import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing"; // You'll create this next
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
