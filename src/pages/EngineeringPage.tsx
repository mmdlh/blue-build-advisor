import { motion } from "framer-motion";
import { Wrench, FileCheck, ClipboardList, Truck, CheckCircle2, Headphones, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "需求咨询", desc: "专业顾问一对一需求沟通，精准把握项目要求" },
  { icon: FileCheck, title: "方案设计", desc: "工程师团队出具定制化建材方案与报价" },
  { icon: Wrench, title: "生产制造", desc: "严格按照设计参数组织生产，全程质检" },
  { icon: Truck, title: "物流配送", desc: "专业物流团队直送工地，安全高效" },
  { icon: CheckCircle2, title: "安装指导", desc: "现场技术支持，确保安装质量达标" },
  { icon: Headphones, title: "售后保障", desc: "5年质保承诺，终身技术支持服务" },
];

const cases = [
  { name: "深圳湾超级总部基地", type: "商业综合体", area: "120万㎡", material: "高性能幕墙系统 + 智能遮阳", status: "已交付" },
  { name: "杭州亚运村运动员公寓", type: "住宅工程", area: "45万㎡", material: "绿色装配式建材 + 节能门窗", status: "已交付" },
  { name: "成都天府国际会议中心", type: "公共建筑", area: "18万㎡", material: "超大规格岩板 + 声学材料", status: "施工中" },
  { name: "上海临港数据中心园区", type: "工业建筑", area: "8万㎡", material: "防静电地板 + 隔热保温系统", status: "施工中" },
];

const EngineeringPage = () => {
  return (
    <div>
      {/* Header with accent bg */}
      <section className="bg-gradient-to-r from-primary/5 via-secondary to-accent/5 py-14">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg gradient-hero p-2.5">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">工程定制</h2>
            </div>
            <p className="text-muted-foreground max-w-xl">
              为大型建筑工程提供一站式建材定制服务，从方案设计到施工交付全程专业支持
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps - Timeline layout */}
      <section className="container py-12">
        <h3 className="text-xl font-bold text-foreground mb-8">定制流程</h3>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden" />
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 pl-14 md:pl-0"
              >
                <div className="absolute left-0 md:relative flex-shrink-0 rounded-full border-4 border-background bg-primary p-2.5 z-10">
                  <step.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="md:text-center">
                  <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cases - Table layout */}
      <section className="container pb-12">
        <h3 className="text-xl font-bold text-foreground mb-6">工程案例</h3>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-foreground">项目名称</th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-foreground">项目类型</th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-foreground">建筑面积</th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-foreground">使用材料</th>
                  <th className="px-5 py-3.5 text-left text-sm font-semibold text-foreground">状态</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c, i) => (
                  <motion.tr
                    key={c.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{c.name}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{c.type}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{c.area}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{c.material}</td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        c.status === "已交付" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">有工程需求？联系我们获取免费报价</h3>
            <p className="text-sm text-muted-foreground">专业工程顾问团队，48小时内出具定制方案</p>
          </div>
          <button className="flex-shrink-0 rounded-full gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground flex items-center gap-2 hover:scale-105 transition-transform">
            获取报价 <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EngineeringPage;
