"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, BookOpen, Heart, Scroll, Star } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const values = [
  {
    icon: <BookOpen className="size-5 text-amber-700" />,
    title: "Hiếu học",
    desc: "Dòng họ Thái Hữu luôn đặt việc học lên hàng đầu. Truyền thống hiếu học từ đời này sang đời khác là nền tảng để con cháu vươn lên và cống hiến cho xã hội.",
  },
  {
    icon: <Heart className="size-5 text-amber-700" />,
    title: "Trung hiếu",
    desc: "Lấy chữ Hiếu làm gốc, chữ Trung làm trọng. Con cháu trong dòng họ được dạy dỗ để trọng ơn sinh thành, giữ nghĩa với tổ tiên và hết lòng với đất nước.",
  },
  {
    icon: <Star className="size-5 text-amber-700" />,
    title: "Cần kiệm",
    desc: "Sinh ra trên mảnh đất miền Trung nắng gió, người Thái Hữu mang trong mình đức tính cần cù, chịu khó và biết quý trọng những gì mình có được.",
  },
  {
    icon: <Scroll className="size-5 text-amber-700" />,
    title: "Nhân nghĩa",
    desc: "Tình làng nghĩa xóm, yêu thương đùm bọc lẫn nhau là truyền thống ngàn đời. Dù đi đâu, con cháu họ Thái Hữu vẫn giữ trọn tình người và nghĩa gia tộc.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] selection:bg-amber-200 selection:text-amber-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_0%,#fef3c7,transparent)] pointer-events-none" />

      <Link href="/dashboard" className="btn absolute top-6 left-6 z-20">
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        Quay lại
      </Link>

      <div className="flex-1 flex flex-col justify-center items-center px-4 py-24 relative z-10 w-full">
        <motion.div
          className="max-w-3xl w-full space-y-8"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >

          {/* Header */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center space-y-3"
          >
            <p className="text-sm font-semibold text-amber-700 tracking-widest uppercase">
              Gia tộc
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900">
              Dòng họ Thái Hữu
            </h1>
            <p className="text-stone-500 text-base">
              Gốc miền Trung · Truyền thống ngàn đời
            </p>
          </motion.div>

          {/* Câu đối */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="relative bg-white rounded-3xl border border-amber-200/60 shadow-sm px-8 py-10 text-center overflow-hidden">
              {/* Background ornament */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_50%_50%,#fef3c720,transparent)] pointer-events-none" />

              <p className="text-xs font-semibold tracking-[0.3em] text-amber-600/70 uppercase mb-6">
                Câu đối dòng họ
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-800 tracking-wide">
                  Thái bình truyền nghĩa sáng
                </p>
                <span className="hidden sm:block text-amber-300 text-3xl font-light select-none">|</span>
                <span className="block sm:hidden text-amber-400 text-lg select-none">—</span>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-stone-800 tracking-wide">
                  Hữu đức kết tình thân
                </p>
              </div>

              <p className="text-sm text-stone-400 italic leading-relaxed max-w-lg mx-auto">
                Đời thái bình là khi đạo nghĩa được truyền lại sáng ngời —
                người có đức là người biết vun đắp tình thân trong gia tộc.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-amber-300/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                <div className="h-px w-16 bg-linear-to-l from-transparent to-amber-300/50" />
              </div>
            </div>
          </motion.div>

          {/* Giá trị truyền thống */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="bg-white rounded-3xl border border-stone-200/60 shadow-sm px-8 py-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl">
                  <Scroll className="size-5" />
                </div>
                <h2 className="text-xl font-bold font-serif text-stone-900">
                  Giá trị truyền thống
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    custom={3 + i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex gap-4 p-4 rounded-2xl bg-stone-50/80 border border-stone-100 hover:border-amber-200/60 hover:bg-amber-50/30 transition-colors group"
                  >
                    <div className="mt-0.5 p-2 bg-white rounded-xl shadow-sm ring-1 ring-stone-100 group-hover:scale-110 transition-transform shrink-0">
                      {v.icon}
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 font-serif mb-1 group-hover:text-amber-900 transition-colors">
                        {v.title}
                      </p>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer quote */}
          <motion.div
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center pb-4"
          >
            <p className="text-stone-400 text-sm italic font-serif">
              "Cây có gốc mới nở cành xanh ngọn — Nước có nguồn mới bể rộng sông sâu."
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
