import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // No login session → login page
  if (!session?.user) {
    redirect("/admin/login");
  }

  // Only ADMIN can access the dashboard
  if (session.user.role?.toUpperCase() !== "ADMIN") {
    redirect("/admin/login");
  }

  return <>{children}</>;
}