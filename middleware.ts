import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Apply middleware configuration for specific routes
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
