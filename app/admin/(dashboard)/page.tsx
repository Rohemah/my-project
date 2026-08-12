import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  // User is not logged in
  if (!session?.user) {
    redirect("/admin/login");
  }

  // User is logged in but is not an admin
  if (session.user.role?.toUpperCase() !== "ADMIN") {
    redirect("/admin/login");
  }

  // Admin is authenticated
  const Dashboard = (await import("./DashboardClient")).default;

  return <Dashboard />;
}