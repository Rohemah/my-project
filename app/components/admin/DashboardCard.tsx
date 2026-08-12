type Props = {
  title: string;
  value: number;
};

export default function DashboardCard({ title, value }: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}