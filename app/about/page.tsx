"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const OrnamentLine = ({ width = 200 }: { width?: number }) => (
  <svg width={width} height="18" viewBox={`0 0 ${width} 18`} fill="none">
    <line x1="0" y1="9" x2={width * 0.38} y2="9" stroke="#C9A96E" strokeWidth="0.8" />
    <polygon points={`${width*0.41},9 ${width*0.445},4 ${width*0.48},9 ${width*0.445},14`} fill="#C9A96E" opacity="0.7" />
    <circle cx={width * 0.5} cy="9" r="3" fill="#8B2020" />
    <polygon points={`${width*0.52},9 ${width*0.555},4 ${width*0.59},9 ${width*0.555},14`} fill="#C9A96E" opacity="0.7" />
    <line x1={width * 0.62} y1="9" x2={width} y2="9" stroke="#C9A96E" strokeWidth="0.8" />
    <circle cx={width * 0.35} cy="9" r="1.5" fill="#C9A96E" opacity="0.5" />
    <circle cx={width * 0.65} cy="9" r="1.5" fill="#C9A96E" opacity="0.5" />
  </svg>
);

const Corner = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M0 0 L18 0 L18 2.5 L2.5 2.5 L2.5 18 L0 18 Z" fill="#C9A96E" opacity="0.7" />
    <rect x="19" y="19" width="4" height="4" fill="#8B2020" opacity="0.45" />
  </svg>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
    <h2 className="font-serif font-bold text-xl px-2 text-center" style={{ color: "#8B2020" }}>
      {children}
    </h2>
    <div className="h-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
  </div>
);

export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex flex-col selection:bg-red-100 selection:text-red-900 relative"
      style={{ backgroundColor: "#F5EDD8" }}
    >
      {/* Họa tiết hình thoi */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 3 L45 24 L24 45 L3 24 Z' fill='none' stroke='%23C9A96E' stroke-width='0.5' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(184,134,11,0.12), transparent)" }}
      />

      <Link
        href="/dashboard"
        className="btn absolute top-6 left-6 z-20"
        style={{ color: "#6B4232" }}
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        Quay lại
      </Link>

      <div className="flex-1 flex flex-col items-center px-4 py-20 relative z-10 w-full">
        <motion.div
          className="max-w-3xl w-full space-y-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* ─── TIÊU ĐỀ ─────────────────────────────────── */}
          <motion.div variants={fadeUp} className="text-center space-y-4 pt-4">
            <OrnamentLine width={180} />
            <p className="text-[10px] tracking-[0.35em] uppercase font-bold mt-4" style={{ color: "#B8860B" }}>
              Thái Hữu Tộc · Đệ Tam Chi · Nhánh Sơn Thành
            </p>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl leading-tight" style={{ color: "#2C1810" }}>
              Phả Ký
            </h1>
            <h2 className="font-serif font-semibold text-2xl sm:text-3xl" style={{ color: "#8B2020" }}>
              Họ Thái Hữu Sơn Thành
            </h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="h-px w-16" style={{ backgroundColor: "#C9A96E" }} />
              <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#8B2020" }} />
              <div className="h-px w-16" style={{ backgroundColor: "#C9A96E" }} />
            </div>
            <p className="text-sm" style={{ color: "#8B6B55" }}>
              Làng Yên Duệ · Xã Sơn Thành · Huyện Yên Thành · Tỉnh Nghệ An
            </p>
          </motion.div>

          {/* ─── LỜI TỰA ─────────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <div
              className="relative p-7 sm:p-9"
              style={{ border: "1px solid #C9A96E", backgroundColor: "rgba(253,247,228,0.9)" }}
            >
              <div className="absolute inset-[5px] pointer-events-none" style={{ border: "1px solid rgba(201,169,110,0.3)" }} />
              <Corner className="absolute top-0 left-0" />
              <Corner className="absolute top-0 right-0 rotate-90" />
              <Corner className="absolute bottom-0 left-0 -rotate-90" />
              <Corner className="absolute bottom-0 right-0 rotate-180" />

              <SectionTitle>Lời Tựa</SectionTitle>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#4A3020" }}>
                <p className="italic font-serif text-base text-center" style={{ color: "#8B2020" }}>
                  "Nước có sử, nhà có phổ — gia phổ sáng tỏ, hàng chiêu hàng mục phân biệt thân sơ, trên dưới rõ ràng."
                </p>
                <p>
                  Nước nhà cần phải có sử sách, dòng họ cần phải có phả ký để truyền cho con cháu muôn đời biết và hiểu được công đức tổ tiên. Chữ Hán có câu <em>"Uống nước sông sâu nên nhớ nguồn"</em> — có tổ tiên, có ông cha mới có ta.
                </p>
                <p>
                  Họ Thái Hữu xuất phát từ làng Xuân Nguyên, xã Xuân Thành — nơi sinh ra Cụ Thái Nguyên Đỉnh, thủy tổ của họ Thái Hữu làng Yên Duệ ngày nay. Do trải qua nhiều biến cố lịch sử, phả ký bản gốc bị thất thoát, chỉ còn bản sao chép bằng chữ quốc ngữ theo văn cúng tổ hằng năm.
                </p>
                <p>
                  Tháng 7 năm Quý Mão (2023), ban soạn thảo gồm 8 thành viên do Ông <strong>Thái Hữu Thuyên</strong> chắp bút đã nhờ các bậc lão thành nhớ lại, sưu tầm và ghi chép lại phả ký để con cháu, chắt, chút mãi mãi lưu giữ và bổ sung.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── NGUỒN GỐC ────────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <div
              className="p-7 sm:p-9"
              style={{ border: "1px solid rgba(201,169,110,0.5)", backgroundColor: "rgba(253,247,228,0.7)", borderTop: "3px solid #8B2020" }}
            >
              <SectionTitle>Nguồn Gốc Dòng Họ</SectionTitle>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: "#4A3020" }}>
                <div className="flex gap-3 items-start p-4 rounded" style={{ backgroundColor: "rgba(139,32,32,0.06)", border: "1px solid rgba(201,169,110,0.3)" }}>
                  <div className="shrink-0 mt-1 w-1 h-full min-h-[60px] rounded-full" style={{ backgroundColor: "#8B2020", opacity: 0.5 }} />
                  <div>
                    <p className="font-serif font-bold text-base mb-1" style={{ color: "#8B2020" }}>
                      Cụ Thái Bá Du (1521 – 1602)
                    </p>
                    <p className="text-xs mb-2" style={{ color: "#B8860B" }}>
                      Thái phó Chân Quận công Trung đẳng Đại vương · Danh thần thời Hậu Lê
                    </p>
                    <p>
                      Nguyên tổ của dòng họ Thái là Cụ Thái Bá Đội, từ Vân Nam (Trung Quốc) đến ngụ ở Đông Triều năm 1350. Cụ Thái Bá Du — hậu duệ đời sau — sinh năm Tân Tỵ (1521) tại xứ Yên Trường, huyện Lương Sơn, Châu Hoan (nay là xã Yên Sơn, huyện Đô Lương, tỉnh Nghệ An).
                    </p>
                    <p className="mt-2">
                      Xuất thân trong gia tộc tướng lĩnh, Cụ lập nhiều công trạng trong cuộc chiến Lê–Mạc phân tranh, được triều đình phong tặng nhiều danh hiệu và bổng lộc. Tám người con trai của Cụ đều là dũng tướng Nhà Lê, trong đó có Phò mã, Quận công và các tước hầu.
                    </p>
                  </div>
                </div>

                <p className="text-xs italic text-center" style={{ color: "#8B6B55" }}>
                  Họ Thái Hữu trên đất Yên Thành là con cháu của Cụ Tổ Thái Bá Du — dòng dõi võ tướng, thập bát quân công lừng lẫy một thời.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── THỦY TỔ NHÁNH SƠN THÀNH ─────────────────── */}
          <motion.div variants={fadeUp}>
            <div
              className="p-7 sm:p-9"
              style={{ border: "1px solid rgba(201,169,110,0.5)", backgroundColor: "rgba(253,247,228,0.7)", borderTop: "3px solid #8B2020" }}
            >
              <SectionTitle>Thủy Tổ Nhánh Sơn Thành</SectionTitle>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#4A3020" }}>
                <p>
                  <strong style={{ color: "#2C1810" }}>Cụ Thái Nguyên Đỉnh</strong> (húy Tự Hữu Bổ) là thủy tổ của họ Thái Hữu làng Yên Duệ, xã Sơn Thành. Cụ thi đậu Cử nhân, được triều đình thăng chức làm quan, có công giúp nước phò dân, khai khẩn điền địa, hướng dẫn sản xuất.
                </p>
                <p>
                  Là người nghiên cứu khoa học thuộc Bộ Canh Nông, Cụ có công đưa khoa học trồng lúa nước vào Việt Nam — giúp Vua cung cấp lương thực cho nghĩa quân Trần Quang Khải, Trạng Nguyên Bạch Liêu. Cụ lừng danh một thời trong nền khoa học Việt Nam, được nhân dân kính trọng, và do công lao lớn được Nhà Vua phong Sắc Công Thần.
                </p>
                <p>
                  Khi Cụ qua đời, Vua ban chiếu cho nhân dân xã Quan Xá — huyện Đông Thành — tỉnh Nghệ An lập đền thờ phụng. Tại Đình làng Yên Duệ, Cụ được thờ phụng cùng Trạng Nguyên Bạch Liêu và hai vị Trần Bá Thành, Trần Bá Quát.
                </p>

                {/* Hai đạo sắc phong */}
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-3" style={{ color: "#B8860B" }}>
                    Hai Đạo Sắc Phong — Khải Định Hoàng Triều
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        label: "Sắc thứ nhất",
                        year: "Đinh Tỵ 1917 — Khải Định năm thứ 2",
                        content: "Sắc phong Thái Nguyên Đỉnh Tả Quản Đạo Triều Lê. Đắc thụ linh phù — Dực Bảo Trung Hưng Chi Thần.",
                      },
                      {
                        label: "Sắc thứ hai",
                        year: "Giáp Tý 1924 — Khải Định năm thứ 9",
                        content: "Nguyên tặng Thái Nguyên Đỉnh Hữu Quản Đạo Xứ Linh Sơ Triều Lê — Dực Bảo Trung Hưng Linh Phù. Gia tặng Đoan Túc Tôn Thần.",
                      },
                    ].map((sac, i) => (
                      <div
                        key={i}
                        className="p-4 text-xs leading-relaxed"
                        style={{
                          backgroundColor: "rgba(139,32,32,0.05)",
                          border: "1px solid rgba(201,169,110,0.4)",
                          borderLeft: "3px solid #8B2020",
                        }}
                      >
                        <p className="font-bold mb-1" style={{ color: "#8B2020" }}>{sac.label}</p>
                        <p className="italic mb-2" style={{ color: "#B8860B" }}>{sac.year}</p>
                        <p style={{ color: "#4A3020" }}>{sac.content}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center italic" style={{ color: "#8B6B55" }}>
                    Hai đạo sắc hiện đang lưu giữ tại nhà thờ họ Thái, làng Yên Duệ, xã Sơn Thành.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── BÀI THƠ ─────────────────────────────────── */}
          <motion.div variants={fadeUp}>
            <div
              className="relative p-7 sm:p-9 text-center"
              style={{ border: "1px solid #C9A96E", backgroundColor: "rgba(253,247,228,0.9)" }}
            >
              <div className="absolute inset-[5px] pointer-events-none" style={{ border: "1px solid rgba(201,169,110,0.3)" }} />
              <Corner className="absolute top-0 left-0" />
              <Corner className="absolute top-0 right-0 rotate-90" />
              <Corner className="absolute bottom-0 left-0 -rotate-90" />
              <Corner className="absolute bottom-0 right-0 rotate-180" />

              <SectionTitle>Vần Thơ Dòng Họ</SectionTitle>
              <p className="text-[10px] tracking-widest uppercase mb-5" style={{ color: "#B8860B" }}>
                Con cháu Họ Thái Hữu tại làng Yên Duệ đọc trước tổ tiên
              </p>

              <div className="font-serif text-sm leading-loose space-y-0.5 text-left max-w-md mx-auto" style={{ color: "#4A3020" }}>
                {[
                  "Sống làm người đứng trong thiên địa",
                  "Phải nghĩ điều nhân nghĩa Hiếu Trung;",
                  "Giữ gìn đạo lý thủy chung;",
                  "Biết ơn tiên tổ cha ông sinh thành;",
                  "Suy từ lẽ cây xanh nhờ cội;",
                  "Ăn quả ngọt nhớ tới người trồng;",
                  "Cho dù vơi cạn biển đông;",
                  "Càng sâu ơn trước càng nồng tình sau;",
                  "Từ kim cổ qua bao thế hệ",
                  "Cửa Tộc Đường rạng vẻ trang nghiêm;",
                  "Yên Duệ muôn thủa nào quên;",
                  "Nhà thờ họ Thái một thiên sử hồng;",
                  "Con cháu, chắt dốc lòng cung kính;",
                  "Nối Cha Ông liêm chính thuận hòa;",
                  "Chung, riêng vẹn cả nước nhà;",
                  "Mừng xây tổ ấm cho ta xum vầy;",
                  "Mong họ ta ngày ngày hưng thịnh;",
                  "Sống yên vui hóa cảnh nên người;",
                  "Dù ai muôn dặm đất trời;",
                  "Chớ quên cội rễ chớ phai lòng vàng;",
                  "Mấy lời nhắn nhủ tỏ tường;",
                  "Mong sao hậu thế đời đời chớ quên.",
                ].map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <OrnamentLine width={160} />
              </div>
            </div>
          </motion.div>

          {/* ─── FOOTER GHI CHÚ ──────────────────────────── */}
          <motion.div variants={fadeUp} className="text-center space-y-3 pb-6">
            <OrnamentLine width={200} />
            <p className="text-xs italic" style={{ color: "#8B6B55" }}>
              Phả ký được ghi chép và bổ sung tháng 7 năm Quý Mão (2023)
            </p>
            <p className="text-xs" style={{ color: "#8B6B55" }}>
              T.M Ban soạn thảo — Trưởng ban <strong style={{ color: "#2C1810" }}>Thái Hữu Thuyên</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
