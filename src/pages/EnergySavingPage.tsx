import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, Wind, ThermometerSun, Recycle, ArrowRight } from "lucide-react";

const metrics = [
  { icon: ThermometerSun, value: "40%", label: "降低能耗", color: "text-primary" },
  { icon: Droplets, value: "60%", label: "节水效率", color: "text-accent" },
  { icon: Recycle, value: "95%", label: "可回收率", color: "text-primary" },
  { icon: Wind, value: "30dB", label: "静音降噪", color: "text-accent" },
];

const products = [
  { name: "气凝胶纳米保温板", desc: "超薄高效隔热，A级防火材料，导热系数低至0.013W/(m·K)", icon: ThermometerSun, specs: ["厚度: 10-50mm", "防火等级: A1", "使用寿命: 50年"], badge: "明星产品" },
  { name: "光伏建筑一体化玻璃", desc: "透光发电两不误，替代传统幕墙，年发电量可达120kWh/㎡", icon: Sun, specs: ["透光率: 30-70%", "转化效率: 18%", "质保: 25年"], badge: "创新科技" },
  { name: "海绵城市透水地砖", desc: "快速渗水，减少城市内涝，抗压强度≥50MPa", icon: Droplets, specs: ["透水系数: ≥2.0", "抗压: ≥50MPa", "使用寿命: 30年"], badge: "市政推荐" },
  { name: "生态竹木纤维墙板", desc: "零甲醛释放，即装即住，防潮防蛀抗变形", icon: Leaf, specs: ["甲醛: E0级", "防潮等级: B1", "安装方式: 快装"], badge: "环保之选" },
  { name: "相变储能蓄热材料", desc: "智能调温，昼夜温差自动调节，节能效果显著", icon: Wind, specs: ["储热密度: 200kJ/kg", "循环寿命: 10000次", "温控精度: ±1℃"], badge: "前沿技术" },
  { name: "再生骨料环保混凝土", desc: "建筑废料重生，强度媲美传统混凝土，减碳60%", icon: Recycle, specs: ["强度等级: C30-C50", "再生率: ≥80%", "减碳: 60%"], badge: "绿色减碳" },
];

const EnergySavingPage = () => {
  return (
    <div>
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-accent/10 via-secondary to-primary/5 py-16 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-10" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium text-accent">绿色建筑 · 可持续发展</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">节能环保建材</h2>
            <p className="text-muted-foreground max-w-xl">
              引领绿色建筑新潮流，采用先进节能技术与环保材料，为可持续发展贡献力量。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="container -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border p-5 text-center"
            >
              <m.icon className={`h-8 w-8 mx-auto mb-2 ${m.color}`} />
              <div className="text-2xl font-bold text-foreground">{m.value}</div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products - Horizontal cards (different layout from SmartMaterials grid) */}
      <section className="container mt-12">
        <h3 className="text-xl font-bold text-foreground mb-6">核心产品</h3>
        <div className="space-y-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5 md:p-6 flex flex-col md:flex-row gap-5 card-hover-lift"
            >
              <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-auto rounded-lg bg-secondary flex items-center justify-center">
                <p.icon className="h-10 w-10 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-semibold text-foreground">{p.name}</h4>
                  <span className="flex-shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{p.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.specs.map((s) => (
                    <span key={s} className="rounded-md bg-muted px-2.5 py-1 text-xs text-foreground">{s}</span>
                  ))}
                </div>
                <button className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  了解详情 <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnergySavingPage;
