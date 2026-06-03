import { getTodayLunar } from "@/utils/dateHelpers";
import { computeEvents } from "@/utils/eventHelpers";
import { getIsAdmin, getSupabase } from "@/utils/supabase/queries";
import {
  ArrowRight,
  BarChart2,
  Cake,
  CalendarDays,
  Database,
  Flower2,
  GitMerge,
  Network,
  Star,
  Users,
  Image as ImageIcon,
  Info,
} from "lucide-react";
import Link from "next/link";

const eventTypeConfig = {
  birthday: {
    icon: Cake,
    label: "Sinh nhật",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  death_anniversary: {
    icon: Flower2,
    label: "Ngày giỗ",
    color: "text-purple-700",
    bg: "bg-purple-50",
  },
  custom_event: {
    icon: Star,
    label: "Sự kiện",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
};

const cardStyle = {
  backgroundColor: "rgba(253,247,228,0.88)",
  border: "1px solid rgba(201,169,110,0.45)",
  borderTop: "2px solid #8B2020",
  boxShadow: "0 2px 12px -4px rgba(44,24,16,0.08)",
} as const;

const iconWrapStyle = {
  backgroundColor: "rgba(139,32,32,0.08)",
  color: "#8B2020",
} as const;

export default async function DashboardLaunchpad() {
  const isAdmin = await getIsAdmin();
  const supabase = await getSupabase();

  const { data: persons } = await supabase
    .from("persons")
    .select(
      "id, full_name, birth_year, birth_month, birth_day, death_year, death_month, death_day, death_lunar_year, death_lunar_month, death_lunar_day, is_deceased",
    );

  const { data: customEvents } = await supabase
    .from("custom_events")
    .select("id, name, content, event_date, location, created_by");

  const allEvents = computeEvents(persons ?? [], customEvents ?? []);
  const upcomingEvents = allEvents.filter(
    (e) => e.daysUntil >= 0 && e.daysUntil <= 30,
  );

  const lunar = getTodayLunar();

  const publicFeatures = [
    {
      title: "Cây gia phả",
      description: "Xem và tương tác với sơ đồ dòng họ",
      icon: <Network className="size-8" />,
      href: "/dashboard/members",
    },
    {
      title: "Tra cứu danh xưng",
      description: "Hệ thống gọi tên họ hàng chuẩn xác",
      icon: <GitMerge className="size-8" />,
      href: "/dashboard/kinship",
    },
    {
      title: "Thống kê gia phả",
      description: "Tổng quan dữ liệu và biểu đồ phân tích",
      icon: <BarChart2 className="size-8" />,
      href: "/dashboard/stats",
    },
    {
      title: "Phòng trưng bày",
      description: "Lưu giữ và chia sẻ hình ảnh, kỷ niệm dòng họ",
      icon: <ImageIcon className="size-8" />,
      href: "/dashboard/gallery",
    },
    {
      title: "Giới thiệu & Liên hệ",
      description: "Phả ký và thông tin về dòng họ Thái Hữu",
      icon: <Info className="size-8" />,
      href: "/about",
    },
  ];

  const adminFeatures = [
    {
      title: "Quản lý Người dùng",
      description: "Phê duyệt tài khoản và phân quyền",
      icon: <Users className="size-8" />,
      href: "/dashboard/users",
    },
    {
      title: "Thứ tự gia phả",
      description: "Sắp xếp và xem cấu trúc hệ thống",
      icon: <Network className="size-8" />,
      href: "/dashboard/lineage",
    },
    {
      title: "Sao lưu & Phục hồi",
      description: "Xuất/Nhập dữ liệu toàn hệ thống",
      icon: <Database className="size-8" />,
      href: "/dashboard/data",
    },
  ];

  return (
    <main className="flex-1 flex flex-col p-4 sm:p-8 max-w-7xl mx-auto w-full">

      {/* ── Date & Upcoming Events ───────────────────────────────────── */}
      <Link
        href="/dashboard/events"
        className="group relative block overflow-hidden mb-10 transition-all duration-300 hover:-translate-y-1"
        style={{
          ...cardStyle,
          borderTop: "1px solid rgba(201,169,110,0.45)",
          borderLeft: "3px solid #8B2020",
        }}
      >
        <div className="relative p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          {/* Date section */}
          <div
            className="md:w-[35%] w-full flex flex-col items-center md:items-start text-center md:text-left gap-4 md:pr-8"
            style={{ borderRight: "1px solid rgba(201,169,110,0.35)" }}
          >
            <div
              className="size-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={iconWrapStyle}
            >
              <CalendarDays className="size-7" />
            </div>
            <div className="mt-1">
              <p
                className="text-xl sm:text-2xl font-bold font-serif tracking-tight"
                style={{ color: "#2C1810" }}
              >
                {lunar.solarStr}
              </p>
              <div
                className="mt-3 inline-flex items-center gap-2 px-3 py-1.5"
                style={{
                  backgroundColor: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.35)",
                }}
              >
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#B8860B" }}
                >
                  Âm lịch:
                </span>
                <span className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                  {lunar.lunarDayStr}
                </span>
              </div>
              <p
                className="text-sm flex items-center justify-center md:justify-start gap-1 mt-2 font-medium"
                style={{ color: "#6B4232" }}
              >
                Năm {lunar.lunarYear}
              </p>
            </div>
          </div>

          {/* Events summary */}
          <div className="md:w-[65%] w-full flex-1">
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs font-bold uppercase tracking-widest flex items-center gap-2.5"
                    style={{ color: "#B8860B" }}
                  >
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full size-2 bg-amber-500"></span>
                    </span>
                    Sự kiện 30 ngày tới ({upcomingEvents.length})
                  </p>
                  <ArrowRight
                    className="size-5 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "#C9A96E" }}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {upcomingEvents.slice(0, 4).map((evt, i) => {
                    const cfg = eventTypeConfig[evt.type];
                    const Icon = cfg.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3.5 p-3 transition-all duration-200 cursor-pointer"
                        style={{ backgroundColor: "rgba(201,169,110,0.06)" }}
                      >
                        <div
                          className={`size-10 flex items-center justify-center shrink-0 ${cfg.bg}`}
                        >
                          <Icon className={`size-4 ${cfg.color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span
                            className="text-sm font-semibold truncate block"
                            style={{ color: "#2C1810" }}
                          >
                            {evt.personName}
                          </span>
                          <span
                            className="text-xs font-medium pt-0.5 block"
                            style={{ color: "#6B4232" }}
                          >
                            {evt.daysUntil === 0
                              ? "Hôm nay"
                              : evt.daysUntil === 1
                                ? "Ngày mai"
                                : `${evt.daysUntil} ngày nữa`}{" "}
                            · {evt.eventDateLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {upcomingEvents.length > 4 && (
                  <p
                    className="text-xs mt-2 text-center sm:text-left font-medium"
                    style={{ color: "#B8860B" }}
                  >
                    + {upcomingEvents.length - 4} sự kiện khác đang chờ...
                  </p>
                )}
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center h-full gap-3 py-6"
                style={{ opacity: 0.75 }}
              >
                <div
                  className="p-4 transition-transform duration-300 group-hover:scale-105"
                  style={iconWrapStyle}
                >
                  <CalendarDays className="size-6" />
                </div>
                <p className="text-center font-medium px-4" style={{ color: "#6B4232" }}>
                  Không có sự kiện nào trong 30 ngày tới.
                </p>
                <div
                  className="flex items-center gap-2 text-sm mt-1 font-medium group-hover:opacity-100 opacity-70 transition-opacity"
                  style={{ color: "#8B2020" }}
                >
                  <span>Xem sự kiện trong năm</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* ── Feature Grid ─────────────────────────────────────────────── */}
      <div className="space-y-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {publicFeatures.map((feat) => (
              <Link
                key={feat.href}
                href={feat.href}
                className="group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1"
                style={cardStyle}
              >
                <div
                  className="size-14 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={iconWrapStyle}
                >
                  {feat.icon}
                </div>
                <h4
                  className="text-lg font-bold font-serif mb-2 group-hover:text-[#8B2020] transition-colors"
                  style={{ color: "#2C1810" }}
                >
                  {feat.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#6B4232" }}>
                  {feat.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {isAdmin && (
          <section>
            <h3
              className="font-serif font-bold text-lg mb-6 flex items-center gap-3"
              style={{ color: "#8B2020" }}
            >
              <span className="h-px w-8" style={{ backgroundColor: "#C9A96E" }} />
              Quản trị viên
              <span className="h-px flex-1" style={{ backgroundColor: "rgba(201,169,110,0.35)" }} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {adminFeatures.map((feat) => (
                <Link
                  key={feat.href}
                  href={feat.href}
                  className="group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    ...cardStyle,
                    borderTop: "2px solid #6B1818",
                  }}
                >
                  <div
                    className="size-14 flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ backgroundColor: "rgba(107,24,24,0.08)", color: "#6B1818" }}
                  >
                    {feat.icon}
                  </div>
                  <h4
                    className="text-lg font-bold font-serif mb-2 group-hover:text-[#6B1818] transition-colors"
                    style={{ color: "#2C1810" }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B4232" }}>
                    {feat.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
