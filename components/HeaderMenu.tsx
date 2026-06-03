"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  ChevronDown,
  Database,
  GitMerge,
  Info,
  Network,
  UserCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoutButton from "./LogoutButton";
import { useUser } from "./UserProvider";

export default function HeaderMenu() {
  const { user, isAdmin } = useUser();
  const userEmail = user?.email;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 pl-2 pr-4 py-1.5 transition-all duration-200 border"
        style={{
          borderColor: isOpen ? "rgba(201,169,110,0.6)" : "transparent",
          backgroundColor: isOpen ? "rgba(201,169,110,0.12)" : "transparent",
        }}
      >
        <div
          className="size-8 flex items-center justify-center font-bold text-sm"
          style={{
            background: "linear-gradient(135deg, #C9A96E, #B8860B)",
            color: "#FAF0D7",
          }}
        >
          {userEmail ? (
            userEmail.charAt(0).toUpperCase()
          ) : (
            <UserCircle className="size-5" />
          )}
        </div>
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "#6B4232" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-56 py-2 z-50 overflow-hidden"
            style={{
              backgroundColor: "#FAF0D7",
              border: "1px solid rgba(201,169,110,0.55)",
              boxShadow: "0 8px 24px -4px rgba(44,24,16,0.12)",
            }}
          >
            <div
              className="px-4 py-3 mb-1"
              style={{
                borderBottom: "1px solid rgba(201,169,110,0.35)",
                backgroundColor: "rgba(201,169,110,0.1)",
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                style={{ color: "#B8860B" }}
              >
                Tài khoản
              </p>
              <p className="text-sm font-medium truncate" style={{ color: "#2C1810" }}>
                {userEmail}
              </p>
            </div>

            <div className="py-1">
              {[
                { href: "/dashboard", icon: <Network className="size-4" />, label: "Bảng điều khiển" },
                { href: "/dashboard/members", icon: <Network className="size-4" />, label: "Cây gia phả" },
                { href: "/dashboard/kinship", icon: <GitMerge className="size-4" />, label: "Tra cứu danh xưng" },
                { href: "/dashboard/stats", icon: <BarChart2 className="size-4" />, label: "Thống kê" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:text-[#8B2020] hover:bg-[rgba(139,32,32,0.06)]"
                  style={{ color: "#6B4232" }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

              {isAdmin && (
                <>
                  <div className="px-4 py-2 mt-1">
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#8B2020" }}
                    >
                      Quản trị viên
                    </p>
                  </div>

                  {[
                    { href: "/dashboard/users", icon: <Users className="size-4" />, label: "Quản lý Người dùng" },
                    { href: "/dashboard/lineage", icon: <Network className="size-4" />, label: "Thứ tự gia phả" },
                    { href: "/dashboard/data", icon: <Database className="size-4" />, label: "Sao lưu & Phục hồi" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:text-[#8B2020] hover:bg-[rgba(139,32,32,0.06)]"
                      style={{ color: "#6B4232" }}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </>
              )}

              <div
                className="my-1 mx-4 h-px"
                style={{ backgroundColor: "rgba(201,169,110,0.35)" }}
              />

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:text-[#8B2020] hover:bg-[rgba(139,32,32,0.06)]"
                style={{ color: "#6B4232" }}
              >
                <Info className="size-4" />
                Giới thiệu
              </Link>

              <LogoutButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
