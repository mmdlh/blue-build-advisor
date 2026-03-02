import { motion } from "framer-motion";
import { Palette, Star, Heart } from "lucide-react";
import { useState } from "react";

const tabs = ["全部风格", "现代简约", "轻奢雅致", "新中式", "工业风", "北欧自然"];

const products = [
  { name: "意大利卡拉拉白大理石瓷砖", style: "轻奢雅致", price: "¥258/片", size: "800×800mm", rating: 4.9, color: "bg-gradient-to-br from-gray-100 to-gray-200" },
  { name: "橡木纹实木复合地板", style: "北欧自然", price: "¥368/㎡", size: "1200×195mm", rating: 4.8, color: "bg-gradient-to-br from-amber-50 to-amber-100" },
  { name: "微水泥艺术涂料", style: "工业风", price: "¥120/㎡", size: "定制", rating: 4.7, color: "bg-gradient-to-br from-stone-100 to-stone-200" },
  { name: "岩板一体式台面", style: "现代简约", price: "¥1,280/米", size: "定制", rating: 4.9, color: "bg-gradient-to-br from-slate-100 to-slate-200" },
  { name: "手工编织壁纸系列", style: "新中式", price: "¥188/卷", size: "10m×0.53m", rating: 4.6, color: "bg-gradient-to-br from-orange-50 to-orange-100" },
  { name: "艺术马赛克拼花砖", style: "轻奢雅致", price: "¥98/片", size: "300×300mm", rating: 4.8, color: "bg-gradient-to-br from-blue-50 to-blue-100" },
  { name: "竹炭纤维集成墙面", style: "现代简约", price: "¥85/㎡", size: "3000×400mm", rating: 4.7, color: "bg-gradient-to-br from-emerald-50 to-emerald-100" },
  { name: "复古手工花砖", style: "新中式", price: "¥68/片", size: "200×200mm", rating: 4.5, color: "bg-gradient-to-br from-rose-50 to-rose-100" },
  { name: "超薄岩板背景墙", style: "轻奢雅致", price: "¥580/㎡", size: "2600×1200mm", rating: 4.9, color: "bg-gradient-to-br from-zinc-100 to-zinc-200" },
];

const DecorativePage = () => {
  const [activeTab, setActiveTab] = useState("全部风格");
  const filtered = activeTab === "全部风格" ? products : products.filter(p => p.style === activeTab);

  return (
    <div className="container py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-highlight/10 p-2">
            <Palette className="h-5 w-5 text-highlight" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">装饰材料</h2>
        </div>
        <p className="text-muted-foreground">精选全球顶级装饰材料，为您打造理想空间</p>
      </motion.div>

      {/* Style Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card border border-border text-muted-foreground hover:border-primary/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Masonry-like grid (different from other pages) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            className="break-inside-avoid rounded-xl border border-border bg-card overflow-hidden card-hover-lift"
          >
            <div className={`${p.color} flex items-center justify-center`} style={{ height: `${160 + (i % 3) * 40}px` }}>
              <Palette className="h-8 w-8 text-foreground/20" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{p.style}</span>
                <button className="text-muted-foreground hover:text-destructive transition-colors">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <h4 className="font-medium text-foreground text-sm mb-1">{p.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">规格: {p.size}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{p.price}</span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="h-3 w-3 text-highlight fill-highlight" />
                  <span className="text-muted-foreground">{p.rating}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DecorativePage;
