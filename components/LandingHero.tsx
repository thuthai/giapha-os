"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

// Đường kẻ hoa văn truyền thống
const OrnamentLine = ({ width = 220 }: { width?: number }) => (
  <svg width={width} height="20" viewBox={`0 0 ${width} 20`} fill="none">
    <line x1="0" y1="10" x2={width * 0.38} y2="10" stroke="#C9A96E" strokeWidth="0.8" />
    <polygon
      points={`${width * 0.41},10 ${width * 0.445},5 ${width * 0.48},10 ${width * 0.445},15`}
      fill="#C9A96E"
      opacity="0.7"
    />
    <circle cx={width * 0.5} cy="10" r="3.5" fill="#8B2020" />
    <polygon
      points={`${width * 0.52},10 ${width * 0.555},5 ${width * 0.59},10 ${width * 0.555},15`}
      fill="#C9A96E"
      opacity="0.7"
    />
    <line x1={width * 0.62} y1="10" x2={width} y2="10" stroke="#C9A96E" strokeWidth="0.8" />
    <circle cx={width * 0.35} cy="10" r="1.5" fill="#C9A96E" opacity="0.5" />
    <circle cx={width * 0.65} cy="10" r="1.5" fill="#C9A96E" opacity="0.5" />
  </svg>
);

// Góc trang trí
const Corner = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M0 0 L20 0 L20 2.5 L2.5 2.5 L2.5 20 L0 20 Z" fill="#C9A96E" opacity="0.75" />
    <rect x="21" y="21" width="4" height="4" fill="#8B2020" opacity="0.5" />
  </svg>
);

interface LandingHeroProps {
  siteName: string;
}

export default function LandingHero({ siteName }: LandingHeroProps) {
  return (
    <motion.div
      className="max-w-4xl text-center w-full relative z-10 space-y-8"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Hoa văn đầu trang */}
      <motion.div variants={fadeIn} className="flex justify-center">
        <OrnamentLine width={220} />
      </motion.div>

      {/* Nhãn nhỏ */}
      <motion.div variants={fadeIn} className="flex justify-center">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase"
          style={{
            color: "#8B2020",
            border: "1px solid #C9A96E",
            backgroundColor: "rgba(253,247,228,0.85)",
          }}
        >
          <BookOpen className="size-3" style={{ color: "#B8860B" }} />
          Gia phả số · Dòng họ Thái Hữu
        </span>
      </motion.div>

      {/* Tiêu đề chính */}
      <motion.div variants={fadeIn} className="space-y-4">
        <h1
          className="font-serif font-bold tracking-tight leading-tight"
          style={{
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            color: "#2C1810",
          }}
        >
          {siteName}
        </h1>

        {/* Dấu phân cách dưới tiêu đề */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-20" style={{ backgroundColor: "#C9A96E" }} />
          <div
            className="w-2.5 h-2.5 rotate-45"
            style={{ backgroundColor: "#8B2020" }}
          />
          <div className="h-px w-20" style={{ backgroundColor: "#C9A96E" }} />
        </div>

        <p
          className="text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-light"
          style={{ color: "#6B4232" }}
        >
          Gìn giữ và lưu truyền cội nguồn, giá trị truyền thống của dòng họ
          Thái Hữu qua từng thế hệ.
        </p>
      </motion.div>

      {/* Câu đối — khung cổ điển */}
      <motion.div variants={fadeIn} className="flex justify-center px-4">
        <div
          className="relative px-10 sm:px-16 py-8 w-full max-w-2xl"
          style={{
            border: "1px solid #C9A96E",
            backgroundColor: "rgba(253,247,228,0.9)",
          }}
        >
          {/* Viền kép bên trong */}
          <div
            className="absolute inset-[6px] pointer-events-none"
            style={{ border: "1px solid rgba(201,169,110,0.35)" }}
          />

          {/* Góc trang trí 4 cạnh */}
          <Corner className="absolute top-0 left-0" />
          <Corner className="absolute top-0 right-0 rotate-90" />
          <Corner className="absolute bottom-0 left-0 -rotate-90" />
          <Corner className="absolute bottom-0 right-0 rotate-180" />

          {/* Nhãn câu đối */}
          <p
            className="text-[9px] font-bold tracking-[0.45em] uppercase mb-5"
            style={{ color: "#B8860B" }}
          >
            Câu đối dòng họ
          </p>

          {/* Câu đối */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <p
              className="font-serif font-bold text-xl sm:text-2xl tracking-wide"
              style={{ color: "#8B2020" }}
            >
              Thái bình truyền nghĩa sáng
            </p>
            <span
              className="hidden sm:block w-px h-10"
              style={{ backgroundColor: "#C9A96E" }}
            />
            <span
              className="block sm:hidden text-xl font-light"
              style={{ color: "#C9A96E" }}
            >
              ·
            </span>
            <p
              className="font-serif font-bold text-xl sm:text-2xl tracking-wide"
              style={{ color: "#8B2020" }}
            >
              Hữu đức kết tình thân
            </p>
          </div>

          <div className="flex justify-center mt-5">
            <OrnamentLine width={160} />
          </div>
        </div>
      </motion.div>

      {/* Nút CTA */}
      <motion.div variants={fadeIn}>
        <Link
          href="/login"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4 text-base font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          style={{
            backgroundColor: "#8B2020",
            color: "#FAF0D7",
            border: "1px solid #6B1818",
            boxShadow: "0 4px 24px -6px rgba(139,32,32,0.45)",
          }}
        >
          Xem Gia Phả
          <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left pt-10"
        style={{ borderTop: "1px solid rgba(201,169,110,0.4)" }}
        variants={stagger}
      >
        {[
          {
            icon: <BookOpen className="size-5" />,
            title: "Lưu trữ Gia phả",
            desc: "Ghi chép đầy đủ thông tin từng thành viên qua nhiều thế hệ — tên húy, ngày sinh, ngày mất, và các mối quan hệ huyết thống.",
          },
          {
            icon: <Network className="size-5" />,
            title: "Cây Phả hệ Trực quan",
            desc: "Xem toàn bộ cây gia phả dạng sơ đồ, theo dõi từng nhánh họ và mối quan hệ giữa các thế hệ một cách dễ dàng.",
          },
          {
            icon: <ShieldCheck className="size-5" />,
            title: "Riêng tư & Bảo mật",
            desc: "Thông tin nhạy cảm được phân quyền chặt chẽ. Chỉ thành viên được duyệt mới có quyền truy cập.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn}
            whileHover={{ y: -4 }}
            className="flex flex-col p-6 group transition-all duration-300"
            style={{
              backgroundColor: "rgba(253,247,228,0.7)",
              border: "1px solid rgba(201,169,110,0.45)",
              borderTop: "2px solid #8B2020",
            }}
          >
            <div
              className="p-2.5 mb-4 w-fit"
              style={{
                backgroundColor: "rgba(139,32,32,0.08)",
                color: "#8B2020",
              }}
            >
              {feature.icon}
            </div>
            <h3
              className="font-serif font-bold text-lg mb-2 group-hover:transition-colors"
              style={{ color: "#2C1810" }}
            >
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#6B4232" }}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Hoa văn cuối trang */}
      <motion.div variants={fadeIn} className="flex justify-center pb-4">
        <OrnamentLine width={220} />
      </motion.div>
    </motion.div>
  );
}
