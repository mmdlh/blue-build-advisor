import { motion } from "framer-motion";
import { Building2, Users, Target, MapPin, Award, TrendingUp } from "lucide-react";

const milestones = [
  { year: "2018", event: "公司成立，聚焦智慧建材数字化平台" },
  { year: "2019", event: "完成A轮融资，签约首批50家品牌" },
  { year: "2020", event: "上线AI智能选材推荐系统" },
  { year: "2021", event: "服务用户突破10万，GMV破亿" },
  { year: "2023", event: "完成B+轮融资，拓展全国30城" },
  { year: "2025", event: "合作品牌超200家，服务用户超50万" },
];

const team = [
  { name: "张建华", role: "创始人 & CEO", desc: "前某500强建材事业部总经理，20年行业经验" },
  { name: "李明智", role: "CTO", desc: "前互联网大厂技术VP，AI与大数据专家" },
  { name: "王芳", role: "COO", desc: "前供应链管理专家，10年建材流通行业经验" },
  { name: "陈思远", role: "产品总监", desc: "前设计平台产品负责人，专注用户体验设计" },
];

const values = [
  { icon: Target, title: "使命", desc: "让每一栋建筑都用上最优质的材料" },
  { icon: Users, title: "愿景", desc: "成为全球领先的智慧建材服务平台" },
  { icon: Award, title: "价值观", desc: "品质至上、创新驱动、客户第一" },
  { icon: TrendingUp, title: "目标", desc: "2027年服务用户突破200万" },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-15" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Building2 className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">关于智建优选</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              我们致力于用科技重塑建材行业，连接优质品牌与用户需求，打造智慧建筑的美好未来。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border p-6 text-center"
            >
              <v.icon className="h-7 w-7 mx-auto mb-3 text-primary" />
              <h4 className="font-bold text-foreground mb-1">{v.title}</h4>
              <p className="text-xs text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-14">
        <h3 className="text-xl font-bold text-foreground mb-8 text-center">发展历程</h3>
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center gap-4 mb-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } pl-10 md:pl-0`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <span className="text-sm font-bold text-primary">{m.year}</span>
                <p className="text-sm text-muted-foreground">{m.event}</p>
              </div>
              <div className="absolute left-4 md:relative md:left-auto flex-shrink-0 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container pb-14">
        <h3 className="text-xl font-bold text-foreground mb-8 text-center">核心团队</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center card-hover-lift"
            >
              <div className="w-16 h-16 mx-auto rounded-full gradient-hero flex items-center justify-center text-xl font-bold text-primary-foreground mb-4">
                {t.name.charAt(0)}
              </div>
              <h4 className="font-bold text-foreground">{t.name}</h4>
              <p className="text-xs text-primary font-medium mt-0.5">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map placeholder */}
      <section className="container pb-4">
        <div className="rounded-xl border border-border bg-secondary p-10 text-center">
          <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
          <h4 className="font-bold text-foreground mb-1">总部地址</h4>
          <p className="text-sm text-muted-foreground">深圳市南山区科技园南区 智建大厦18层</p>
          <p className="text-sm text-muted-foreground mt-1">全国30城设有服务中心</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
