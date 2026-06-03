import config from "@/app/config";
import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import { UserProvider } from "@/components/UserProvider";
import { getProfile, getUser } from "@/utils/supabase/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DiamondPattern = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 3 L45 24 L24 45 L3 24 Z' fill='none' stroke='%23C9A96E' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
      backgroundSize: "48px 48px",
    }}
  />
);

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const profile = await getProfile(user.id);

  if (!profile?.is_active) {
    return (
      <div
        className="min-h-screen text-primary flex flex-col font-sans relative overflow-hidden"
        style={{ backgroundColor: "#F5EDD8" }}
      >
        <DiamondPattern />

        <header
          className="sticky top-0 z-30 backdrop-blur-xl border-b transition-all duration-200"
          style={{
            backgroundColor: "rgba(245,237,216,0.93)",
            borderBottomColor: "rgba(201,169,110,0.55)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <h1
                className="text-xl sm:text-2xl font-serif font-bold group-hover:text-[#8B2020] transition-colors"
                style={{ color: "#2C1810" }}
              >
                {config.siteName}
              </h1>
            </Link>
            <div className="w-32">
              <LogoutButton />
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
          <div
            className="max-w-md w-full text-center p-10"
            style={{
              backgroundColor: "rgba(253,247,228,0.9)",
              border: "1px solid rgba(201,169,110,0.5)",
              borderTop: "3px solid #8B2020",
            }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "rgba(139,32,32,0.08)", color: "#8B2020" }}
            >
              <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-3" style={{ color: "#2C1810" }}>
              Tài khoản chờ duyệt
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A96E" }} />
              <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#8B2020" }} />
              <div className="h-px w-12" style={{ backgroundColor: "#C9A96E" }} />
            </div>
            <p className="leading-relaxed" style={{ color: "#6B4232" }}>
              Tài khoản của bạn đã được đăng ký thành công. Tuy nhiên, hệ thống yêu cầu
              Quản trị viên kích hoạt tài khoản trước khi bạn có thể xem thông tin gia phả.
            </p>
            <p className="text-sm mt-4 italic" style={{ color: "#B8860B" }}>
              Vui lòng liên hệ người quản trị dòng họ để được cấp quyền sớm nhất.
            </p>
          </div>
        </main>

        <Footer className="mt-auto bg-transparent border-none relative z-10" />
      </div>
    );
  }

  return (
    <UserProvider user={user} profile={profile}>
      <div
        className="min-h-screen text-primary flex flex-col font-sans relative"
        style={{ backgroundColor: "#F5EDD8" }}
      >
        <DiamondPattern />
        <DashboardHeader />
        <div className="relative z-10">{children}</div>
        <Footer
          className="mt-auto bg-transparent border-none relative z-10"
          showDisclaimer={true}
        />
      </div>
    </UserProvider>
  );
}
