// import Sidebar from "@/app/components/admin/Sidebar";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>

//       <Sidebar />

//       <main
//         style={{
//           marginLeft: "270px",
//           padding: "30px",
//           minHeight: "100vh",
//           background: "#F8FAFC",
//         }}
//       >
//         {children}
//       </main>

//     </div>
//   );
// }
import Sidebar from "@/app/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />

      <main
        style={{
          marginLeft: "270px",
          padding: "30px",
          minHeight: "100vh",
          background: "#F8FAFC",
        }}
      >
        {children}
      </main>
    </div>
  );
}