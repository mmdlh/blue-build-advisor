import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Leaf, TrendingUp, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "5000+", label: "优质产品", icon: Star },
  { value: "200+", label: "合作品牌", icon: Shield },
  { value: "98%", label: "客户满意度", icon: TrendingUp },
  { value: "50万+", label: "服务用户", icon: Zap },
];

const categories = [
  { title: "智能门窗系统", desc: "自动感应，节能降噪", image: "🏠", tag: "热销", link: "/smart-materials" },
  { title: "绿色保温材料", desc: "环保节能，持久耐用", image: "🌿", tag: "环保", link: "/energy-saving" },
  { title: "高端瓷砖石材", desc: "品质臻选，格调非凡", image: "💎", tag: "精选", link: "/decorative" },
  { title: "智能照明系统", desc: "智慧控制，光影艺术", image: "💡", tag: "智能", link: "/smart-materials" },
  { title: "防水防腐涂料", desc: "强效防护，品质保障", image: "🛡️", tag: "专业", link: "/engineering" },
  { title: "新型装配建材", desc: "高效装配，绿色施工", image: "🏗️", tag: "创新", link: "/engineering" },
];

const featured = [
  { name: "德国旭格智能门窗", price: "¥2,680/㎡", rating: "4.9", sold: "1.2万+" },
  { name: "三棵树净味抗甲醛漆", price: "¥398/桶", rating: "4.8", sold: "8,500+" },
  { name: "东鹏瓷砖大理石系列", price: "¥158/片", rating: "4.9", sold: "3.6万+" },
  { name: "欧普智能调光面板", price: "¥299/套", rating: "4.7", sold: "5,200+" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-28">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-6">
              🚀 2026 智慧建筑新时代
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              智慧建材<br />一站式选购平台
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              汇聚全球顶尖建材品牌，AI智能推荐最优方案，让建筑更智能、更环保、更高效。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/smart-materials"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
              >
                立即选购 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                查看方案
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/5 animate-float" />
        <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-primary-foreground/10" />
      </section>

      {/* Stats */}
      <section className="container -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="rounded-xl bg-card border border-border p-6 text-center glow-primary"
            >
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground">热门品类</h3>
            <p className="text-muted-foreground mt-1">精选优质建材分类，满足多样化需求</p>
          </div>
          <Link to="/smart-materials" className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all">
            查看全部 <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.2 }}
            >
              <Link
                to={cat.link}
                className="block rounded-xl border border-border bg-card p-6 card-hover-lift group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{cat.image}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {cat.tag}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cat.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground">精选好物</h3>
            <p className="text-muted-foreground mt-1">口碑之选，品质保证</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="rounded-xl border border-border bg-card overflow-hidden card-hover-lift"
            >
              <div className="h-40 gradient-hero/10 bg-secondary flex items-center justify-center">
                <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-foreground text-sm mb-2">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 text-highlight fill-highlight" />
                    {item.rating}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">已售 {item.sold}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mt-16">
        <div className="rounded-2xl gradient-hero p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-bg opacity-10" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              需要专业建材方案？
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              我们的专家团队为您提供一对一定制化建材解决方案，从选材到施工全程无忧。
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary hover:scale-105 transition-transform"
            >
              免费咨询 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
