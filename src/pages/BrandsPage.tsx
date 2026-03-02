import { motion } from "framer-motion";
import { Award, ExternalLink, Star } from "lucide-react";

const brands = [
  { name: "旭格 SCHÜCO", origin: "德国", category: "门窗系统", desc: "全球高端门窗系统领导者", rating: 4.9, products: 128, tier: "platinum" },
  { name: "三棵树 SKSHU", origin: "中国", category: "涂料", desc: "中国绿色涂料领军品牌", rating: 4.8, products: 96, tier: "gold" },
  { name: "东鹏 DONGPENG", origin: "中国", category: "瓷砖", desc: "中国建陶行业标志性品牌", rating: 4.9, products: 210, tier: "platinum" },
  { name: "西门子 SIEMENS", origin: "德国", category: "智能控制", desc: "全球电气与自动化技术巨头", rating: 4.8, products: 85, tier: "platinum" },
  { name: "松下 Panasonic", origin: "日本", category: "新风系统", desc: "日本百年科技品牌", rating: 4.7, products: 64, tier: "gold" },
  { name: "凯迪仕 KAADAS", origin: "中国", category: "智能锁", desc: "智能锁行业领导品牌", rating: 4.8, products: 42, tier: "gold" },
  { name: "海康威视 HIKVISION", origin: "中国", category: "安防系统", desc: "全球安防解决方案龙头", rating: 4.7, products: 156, tier: "gold" },
  { name: "圣戈班 Saint-Gobain", origin: "法国", category: "玻璃/石膏", desc: "世界500强建材巨头", rating: 4.9, products: 180, tier: "platinum" },
  { name: "欧普照明 OPPLE", origin: "中国", category: "照明", desc: "中国照明行业领先品牌", rating: 4.6, products: 230, tier: "gold" },
];

const tierStyles: Record<string, string> = {
  platinum: "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent",
  gold: "border-highlight/20 bg-gradient-to-br from-highlight/5 to-transparent",
};

const tierLabels: Record<string, { label: string; className: string }> = {
  platinum: { label: "铂金合作", className: "bg-primary/10 text-primary" },
  gold: { label: "金牌合作", className: "bg-highlight/10 text-highlight" },
};

const BrandsPage = () => {
  return (
    <div className="container py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-primary/10 p-2">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">品牌中心</h2>
        </div>
        <p className="text-muted-foreground">汇聚全球200+顶级建材品牌，品质有保障</p>
      </motion.div>

      {/* Brand cards - 3 column with tier distinction */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-xl border-2 p-6 card-hover-lift ${tierStyles[b.tier]}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-lg font-bold text-primary">
                {b.name.charAt(0)}
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${tierLabels[b.tier].className}`}>
                {tierLabels[b.tier].label}
              </span>
            </div>
            <h4 className="font-bold text-foreground mb-1">{b.name}</h4>
            <p className="text-xs text-muted-foreground mb-3">{b.origin} · {b.category}</p>
            <p className="text-sm text-muted-foreground mb-4">{b.desc}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-highlight fill-highlight" />
                  <span className="text-foreground font-medium">{b.rating}</span>
                </div>
                <span className="text-muted-foreground">{b.products}款产品</span>
              </div>
              <button className="flex items-center gap-1 text-primary hover:underline text-xs font-medium">
                进入品牌馆 <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
