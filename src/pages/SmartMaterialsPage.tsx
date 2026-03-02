import { motion } from "framer-motion";
import { Filter, Star, ShoppingCart, Cpu, Wifi, Eye } from "lucide-react";
import { useState } from "react";

const subcategories = ["全部", "智能门窗", "智能锁具", "智能照明", "智能家居", "传感设备"];

const products = [
  { name: "AI感应智能门窗系统 Pro", brand: "旭格", price: 2680, unit: "㎡", rating: 4.9, sold: "1.2万", tag: "AI推荐", features: ["自动感应", "节能降噪", "远程控制"] },
  { name: "指纹虹膜双认证智能锁", brand: "凯迪仕", price: 3299, unit: "套", rating: 4.8, sold: "8500", tag: "热销", features: ["双认证", "防撬报警", "远程开锁"] },
  { name: "全屋智能调光面板套装", brand: "欧普", price: 1599, unit: "套", rating: 4.7, sold: "5200", tag: "新品", features: ["语音控制", "场景模式", "节能50%"] },
  { name: "智能新风温控一体机", brand: "松下", price: 4580, unit: "台", rating: 4.9, sold: "3100", tag: "旗舰", features: ["PM2.5过滤", "恒温恒湿", "低噪运行"] },
  { name: "物联网环境监测传感器", brand: "小米", price: 299, unit: "个", rating: 4.6, sold: "2.4万", tag: "性价比", features: ["温湿度", "甲醛检测", "APP联动"] },
  { name: "智能电动窗帘轨道系统", brand: "杜亚", price: 899, unit: "套", rating: 4.7, sold: "9800", tag: "畅销", features: ["静音电机", "定时开合", "光感联动"] },
  { name: "全屋智能安防监控套装", brand: "海康", price: 2199, unit: "套", rating: 4.8, sold: "6700", tag: "安全", features: ["4K超清", "AI识别", "云存储"] },
  { name: "智能地暖温控器 T3", brand: "西门子", price: 459, unit: "个", rating: 4.5, sold: "4300", tag: "节能", features: ["精准控温", "Wi-Fi连接", "电量统计"] },
];

const SmartMaterialsPage = () => {
  const [active, setActive] = useState("全部");

  return (
    <div className="container py-10">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-primary/10 p-2">
            <Cpu className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">智能建材</h2>
        </div>
        <p className="text-muted-foreground">智能科技赋能建筑，让家居生活更便捷、更安全</p>
      </motion.div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-8 flex-wrap">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-border bg-card overflow-hidden card-hover-lift group"
          >
            <div className="h-44 bg-secondary relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wifi className="h-7 w-7 text-primary" />
              </div>
              <span className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                {product.tag}
              </span>
              <button className="absolute top-3 right-3 rounded-full bg-card/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="h-4 w-4 text-foreground" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
              <h4 className="font-medium text-foreground text-sm leading-snug mb-3 line-clamp-2">{product.name}</h4>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {product.features.map((f) => (
                  <span key={f} className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{f}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">¥{product.price}<span className="text-xs font-normal text-muted-foreground">/{product.unit}</span></span>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-highlight fill-highlight" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground">已售 {product.sold}</span>
                <button className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground flex items-center gap-1 hover:bg-primary/90 transition-colors">
                  <ShoppingCart className="h-3 w-3" /> 加入购物车
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmartMaterialsPage;
