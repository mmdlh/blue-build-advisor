import { motion } from "framer-motion";
import { Lightbulb, Building, Home, Factory, Hotel, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    id: "residential",
    icon: Home,
    title: "住宅精装解决方案",
    subtitle: "打造智能舒适的理想之家",
    desc: "针对住宅项目提供从基础建材到智能系统的一体化解决方案，涵盖门窗、地面、墙面、厨卫等全品类。",
    features: ["全屋智能联动系统", "E0级环保材料保障", "一站式选材配送", "10年品质保证"],
    stats: { projects: "3200+", satisfaction: "99%", saving: "25%" },
  },
  {
    id: "commercial",
    icon: Building,
    title: "商业空间解决方案",
    subtitle: "专业商业空间建材配套",
    desc: "为办公楼、商场、酒店等商业空间提供高端、耐用、美观的建材整体方案。",
    features: ["高耐久商用标准", "防火A级认证材料", "快速安装施工方案", "5年商业质保"],
    stats: { projects: "860+", satisfaction: "98%", saving: "30%" },
  },
  {
    id: "industrial",
    icon: Factory,
    title: "工业厂房解决方案",
    subtitle: "高性能工业建材系统",
    desc: "为工业厂房和仓储设施提供高强度、防腐蚀、耐磨损的专业建材方案。",
    features: ["防腐防静电体系", "重载地面系统", "专业保温隔热", "满足行业标准"],
    stats: { projects: "450+", satisfaction: "97%", saving: "20%" },
  },
  {
    id: "hotel",
    icon: Hotel,
    title: "酒店民宿解决方案",
    subtitle: "品质空间 · 格调呈现",
    desc: "为酒店和精品民宿提供兼具美感与实用性的建材方案，提升空间品质与入住体验。",
    features: ["防水防潮专业方案", "隔音降噪系统", "定制化装饰材料", "快速翻新方案"],
    stats: { projects: "680+", satisfaction: "99%", saving: "15%" },
  },
];

const SolutionsPage = () => {
  const [activeId, setActiveId] = useState("residential");
  const active = solutions.find(s => s.id === activeId)!;

  return (
    <div className="container py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="rounded-lg bg-accent/10 p-2">
            <Lightbulb className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">解决方案</h2>
        </div>
        <p className="text-muted-foreground">根据场景需求，为您提供专业化的建材整体解决方案</p>
      </motion.div>

      {/* Tab Selector - Large icon cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {solutions.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`rounded-xl p-5 text-left transition-all border-2 ${
              activeId === s.id
                ? "border-primary bg-primary/5 glow-primary"
                : "border-border bg-card hover:border-primary/20"
            }`}
          >
            <s.icon className={`h-7 w-7 mb-3 ${activeId === s.id ? "text-primary" : "text-muted-foreground"}`} />
            <h4 className={`font-semibold text-sm ${activeId === s.id ? "text-primary" : "text-foreground"}`}>{s.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{s.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Active Solution Detail */}
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-border bg-card overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 p-8 md:p-10">
            <active.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">{active.title}</h3>
            <p className="text-muted-foreground mb-6">{active.desc}</p>
            <div className="space-y-3 mb-8">
              {active.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
            <button className="rounded-full gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground flex items-center gap-2 hover:scale-105 transition-transform">
              咨询方案 <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="lg:col-span-2 bg-secondary p-8 md:p-10 flex flex-col justify-center">
            <h4 className="font-semibold text-foreground mb-6">方案数据</h4>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary">{active.stats.projects}</div>
                <div className="text-sm text-muted-foreground">成功案例</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">{active.stats.satisfaction}</div>
                <div className="text-sm text-muted-foreground">客户满意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-highlight">{active.stats.saving}</div>
                <div className="text-sm text-muted-foreground">平均成本节约</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionsPage;
