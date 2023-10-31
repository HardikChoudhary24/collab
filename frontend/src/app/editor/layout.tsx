import Navbar from "@/components/Navbar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
    <Navbar/>
      <section>{children}</section>
    </div>
  );
}
