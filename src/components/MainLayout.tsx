import { NavLink, Outlet } from "react-router-dom";
import { Building2, Phone, Search } from "lucide-react";

const navItems = [
  { path: "/", label: "首页", end: true },
  { path: "/smart-materials", label: "智能建材" },
  { path: "/energy-saving", label: "节能环保" },
  { path: "/decorative", label: "装饰材料" },
  { path: "/engineering", label: "工程定制" },
  { path: "/brands", label: "品牌中心" },
  { path: "/solutions", label: "解决方案" },
  { path: "/about", label: "关于我们" },
];

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span>服务热线: 400-888-6688</span>
          </div>
          <div className="flex items-center gap-4">
            <span>帮助中心</span>
            <span>我的订单</span>
            <span>登录 / 注册</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="gradient-hero rounded-xl p-2.5">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">智建优选</h1>
              <p className="text-xs text-muted-foreground">智慧建材一站式选购平台</p>
            </div>
          </div>
          <div className="relative hidden md:block w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              className="w-full rounded-full border border-border bg-muted/50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="搜索建材产品、品牌、解决方案..."
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="container pb-0">
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `relative px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap rounded-t-lg ${
                    isActive
                      ? "text-primary bg-primary/5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:gradient-hero after:rounded-full"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="gradient-hero rounded-lg p-2">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">智建优选</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                致力于为用户提供最优质的智慧建材产品和解决方案，打造智能化、绿色化的未来建筑。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">产品服务</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>智能建材</li><li>节能环保</li><li>装饰材料</li><li>工程定制</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">帮助支持</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>购买指南</li><li>配送说明</li><li>售后服务</li><li>常见问题</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">联系我们</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>客服热线: 400-888-6688</li>
                <li>工作时间: 9:00-18:00</li>
                <li>邮箱: service@zhijian.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2026 智建优选 版权所有 | 智慧建材一站式选购平台
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
