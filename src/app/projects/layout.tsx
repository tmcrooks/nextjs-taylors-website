import Header from "@/ui/Header";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <div className="w-full flex-none">
        <Header />
      </div>
      <div className="flex-grow p-6 md:p-12">{children}</div>
    </div>
  );
}