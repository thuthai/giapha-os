"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Network,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

interface LandingHeroProps {
  siteName: string;
}

export default function LandingHero({ siteName }: LandingHeroProps) {
  return (
    <motion.div
      className="max-w-5xl text-center space-y-12 w-full relative z-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div
        className="space-y-6 sm:space-y-8 flex flex-col items-center"
        variants={fadeIn}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-amber-800 bg-white/60 rounded-full shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] border border-amber-200/50 relative overflow-hidden group"
        >
          <BookOpen className="size-4 text-amber-500" />
          Gia phả số — Dòng họ Thái Hữu
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-bold text-stone-900 tracking-tight leading-[1.1] max-w-4xl">
          {siteName}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
          Gìn giữ và lưu truyền cội nguồn, giá trị truyền thống của dòng họ
          Thái Hữu qua từng thế hệ.
        </p>
      </motion.div>

      {/* Câu đối */}
      <motion.div variants={fadeIn} className="flex justify-center px-4">
        <div className="relative inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-8 py-6 bg-white/70 rounded-2xl border border-amber-200/60 shadow-[0_4px_24px_-8px_rgba(180,120,0,0.15)]">
          {/* Decorative left */}
          <span className="hidden sm:block text-amber-300/60 text-4xl font-serif select-none">&ldquo;</span>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="text-lg sm:text-xl font-serif font-semibold text-stone-700 tracking-wide">
              Thái bình truyền nghĩa sáng
            </span>
            <span className="hidden sm:block w-px h-8 bg-amber-300/50" />
            <span className="block sm:hidden text-amber-300/60 text-lg">—</span>
            <span className="text-lg sm:text-xl font-serif font-semibold text-stone-700 tracking-wide">
              Hữu đức kết tình thân
            </span>
          </div>

          {/* Decorative right */}
          <span className="hidden sm:block text-amber-300/60 text-4xl font-serif select-none">&rdquo;</span>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0 relative"
        variants={fadeIn}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-amber-500/30 blur-2xl rounded-full z-0 hidden sm:block" />

        <Link
          href="/login"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-white bg-primary border border-stone-800 hover:bg-stone-800 hover:border-stone-700 rounded-xl shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:shadow-stone-900/20 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center gap-3">
            Đăng nhập để xem gia phả
            <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" />
          </span>
        </Link>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left border-t border-stone-200/50 pt-12 relative"
        variants={staggerContainer}
      >
        {[
          {
            icon: <BookOpen className="size-6 text-amber-700" />,
            title: "Lưu trữ Gia phả",
            desc: "Ghi chép đầy đủ thông tin từng thành viên qua nhiều thế hệ — tên húy, ngày sinh, ngày mất, và các mối quan hệ huyết thống.",
          },
          {
            icon: <Network className="size-6 text-amber-700" />,
            title: "Cây Phả hệ Trực quan",
            desc: "Xem toàn bộ cây gia phả dạng sơ đồ, theo dõi từng nhánh họ và mối quan hệ giữa các thế hệ một cách dễ dàng.",
          },
          {
            icon: <ShieldCheck className="size-6 text-amber-700" />,
            title: "Riêng tư & Bảo mật",
            desc: "Thông tin nhạy cảm như số điện thoại, địa chỉ được phân quyền chặt chẽ. Chỉ thành viên được duyệt mới có quyền xem.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="card-feature flex flex-col items-start group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-100/50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-3.5 bg-white rounded-2xl mb-6 shadow-sm ring-1 ring-stone-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10">
              {feature.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 font-serif relative z-10 group-hover:text-amber-900 transition-colors">
              {feature.title}
            </h3>
            <p className="text-stone-600 text-base leading-relaxed relative z-10">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
