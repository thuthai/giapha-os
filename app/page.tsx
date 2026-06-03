import Footer from "@/components/Footer";
import LandingHero from "@/components/LandingHero";
import config from "./config";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col selection:bg-red-100 selection:text-red-900 relative overflow-hidden"
      style={{ backgroundColor: "#F5EDD8" }}
    >
      {/* Họa tiết hình thoi truyền thống */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 3 L45 24 L24 45 L3 24 Z' fill='none' stroke='%23C9A96E' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ánh sáng vàng mờ phía trên */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% -5%, rgba(184,134,11,0.18), transparent)",
        }}
      />

      {/* Ánh đỏ mờ bên trái */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "-8%",
          width: "45vw",
          height: "45vw",
          maxWidth: "600px",
          maxHeight: "600px",
          background: "rgba(139,32,32,0.07)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-28 relative z-10 w-full">
        <LandingHero siteName={config.siteName} />
      </main>

      <Footer className="bg-transparent relative z-10 border-none" />
    </div>
  );
}
