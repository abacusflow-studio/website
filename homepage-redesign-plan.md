# AbacusFlow 首页改版实施文档

> 文件建议路径：`docs/homepage-redesign-plan.md`
> 目标项目：`abacusflow-apps/apps/web`
> 首页目标：把 `/` 从后台跳转页改造成公开产品首页，同时保留 `/dashboard` 等后台路由作为真实业务系统入口。
> 演示地址：`https://app-demo.abacusflow.dpdns.org`

---

## 1. 改版结论

新版首页不应该做成泛 SaaS 营销页，也不应该继续按照静态 `index.html` 的方式实现。

AbacusFlow 当前更适合被表达为：

> **小算盘 AbacusFlow：进销存业务指挥台。**

首页要讲清楚一件事：

> AbacusFlow 把产品、库存、采购、销售、客户、供应商、仓点和经营数据放进同一条可追踪的业务流里。

这次首页改版的核心不是“换一个深色科技风皮肤”，而是把项目已经存在的 Web 后台、Mobile 现场端、演示系统入口和真实业务模块，用一个可信的公开首页组织起来。

---

## 2. 项目真实状态

### 2.1 Web 端不是静态站

当前 Web 项目位于：

```text
abacusflow-apps/apps/web
```

技术栈是：

```text
Next.js App Router
React
Ant Design
ECharts
Auth0
TypeScript
```

当前根首页文件：

```text
abacusflow-apps/apps/web/src/app/page.tsx
```

当前行为是直接跳转：

```tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
```

所以本次不是修改 `index.html`，而是把 `/` 改造成公开首页。

### 2.2 后台已有真实业务路由

后台当前已有主要业务入口：

```text
/dashboard                     业务仪表盘
/inventory                     库存管理
/transaction/purchase-order     采购单管理
/transaction/sale-order         销售单管理
/products                      产品管理
/products/category             产品类别管理
/partner/customer              客户管理
/partner/supplier              供应商管理
/depots                        储存点管理
/analytics                     数据刻画
/feedback                      问题反馈
```

首页文案和页面结构必须围绕这些真实模块组织，不要写成虚构的“通用 AI SaaS 平台”。

### 2.3 Mobile App 是现场录入端

Mobile App 位于：

```text
abacusflow-apps/apps/mobile
```

它不是官网的附属装饰，而是 AbacusFlow 双端产品叙事的一部分。Mobile App 当前主功能围绕四个底部 Tab：

```text
录入：入库、出库、新品建档、草稿续填
流水：查看最近入库 / 出库流水
查询：扫码或关键词查询产品、库存、单据
我的：账号信息、客户 / 供应商 / 储存点资料、问题反馈
```

首页应该表达：

```text
Web 后台负责经营管理、业务总览和数据复盘。
Mobile App 负责现场录入、扫码查询、入库出库和流水追踪。
```

---

## 3. 演示地址与截图的关系

### 3.1 有演示地址，仍然需要真实截图

即使有演示地址：

```text
https://app-demo.abacusflow.dpdns.org
```

首页仍然需要展示真实产品截图。

原因：

1. 演示地址负责“进入深度体验”，截图负责“第一眼建立信任”。
2. 用户进入演示系统前，需要先看到产品完成度。
3. 演示系统可能需要登录、加载、权限或网络条件，不适合作为唯一展示方式。
4. 截图能在首页、社交分享、项目介绍、README、宣传图中复用。
5. 首页主视觉如果没有真实后台画面，会更像概念页，而不像已经可运行的业务系统。

因此最终策略是：

```text
Web 后台：从演示地址重新统一截图一套，使用规范文件名。
Mobile App：先用规范文件名占位，后续用真实截图覆盖同名文件。
演示地址：作为 CTA 入口保留，不替代截图。
```

### 3.2 不再正式复用旧 demo 图片

仓库已有旧截图可以作为临时参考，但新版首页正式资源不建议直接继续使用旧路径，例如：

```text
static/img/demo/dashboard.png
static/img/demo/inventory.png
static/img/demo/purchseorder.png
```

原因：

1. 旧截图命名不统一，例如 `purchseorder.png` 拼写不规范。
2. 旧截图可能不是最新演示环境状态。
3. 首页需要一套统一比例、统一主题、统一数据状态的正式展示图。

新版应从演示地址重新截图，并使用新的资源目录和文件名。

---

## 4. 首页资源目录规范

新增目录：

```text
abacusflow-apps/apps/web/public/static/img/showcase/
```

子目录：

```text
abacusflow-apps/apps/web/public/static/img/showcase/web/
abacusflow-apps/apps/web/public/static/img/showcase/mobile/
```

最终结构：

```text
public/
  static/
    img/
      showcase/
        web/
          web-dashboard-overview.png
          web-inventory-management.png
          web-purchase-order.png
          web-sale-order.png
          web-product-center.png
          web-customer-management.png
          web-supplier-management.png
          web-depot-management.png
          web-analytics-insight.png
        mobile/
          mobile-entry-home.png
          mobile-purchase-entry.png
          mobile-sale-entry.png
          mobile-scan-lookup.png
          mobile-records-list.png
          mobile-profile-home.png
```

---

## 5. Web 后台截图清单

Web 后台截图需要从：

```text
https://app-demo.abacusflow.dpdns.org
```

重新截取。

### 5.1 Web 截图命名与用途

| 文件名                         | 推荐来源页面                  | 首页用途                | 表达重点                                 |
| ------------------------------ | ----------------------------- | ----------------------- | ---------------------------------------- |
| `web-dashboard-overview.png`   | `/dashboard`                  | Hero 第一屏主视觉       | 业务指挥台、库存信号、快捷入口、业务概览 |
| `web-inventory-management.png` | `/inventory`                  | 产品展示区              | 库存单元、仓点、安全库存、库存状态       |
| `web-purchase-order.png`       | `/transaction/purchase-order` | 产品展示区 / 业务流程区 | 采购入库链路                             |
| `web-sale-order.png`           | `/transaction/sale-order`     | 产品展示区 / 业务流程区 | 销售出库链路                             |
| `web-product-center.png`       | `/products`                   | 产品展示区              | 商品档案、产品资料、规格编码             |
| `web-customer-management.png`  | `/partner/customer`           | 产品展示区              | 客户资料、销售关系                       |
| `web-supplier-management.png`  | `/partner/supplier`           | 产品展示区              | 供应商资料、采购关系                     |
| `web-depot-management.png`     | `/depots`                     | 产品展示区              | 仓库、门店、货位、储存点                 |
| `web-analytics-insight.png`    | `/analytics`                  | 数据刻画 / 可信度区     | 订单、销售、采购、库存、伙伴趋势         |

### 5.2 Web 截图规范

推荐截图尺寸：

```text
1600 x 1000
```

也可以统一使用：

```text
1440 x 960
```

但不要混用不同尺寸。

截图要求：

```text
浏览器缩放统一：90% 或 100%
主题统一：尽量统一深色主题；如果后台以浅色表格为主，也要保持全部截图同一主题
数据状态统一：产品、库存、采购单、销售单、客户、供应商、图表都应有演示数据
不要截浏览器地址栏、书签栏、开发者工具
不要出现真实邮箱、手机号、客户隐私、服务器错误
不要出现空表格、加载中、报错状态
```

Hero 主视觉固定使用：

```text
/static/img/showcase/web/web-dashboard-overview.png
```

不要让 Hero 主视觉随机轮播。第一屏要稳定、清晰、可信。

---

## 6. Mobile App 截图占位清单

Mobile App 截图由后续手动提供。首页第一版先引用同名占位 PNG，真实截图完成后直接覆盖同名文件即可，不需要改代码。

### 6.1 Mobile 截图命名与用途

| 文件名                      | 推荐截图页面    | 首页用途            | 表达重点                         |
| --------------------------- | --------------- | ------------------- | -------------------------------- |
| `mobile-entry-home.png`     | 录入 Tab 首页   | Mobile 展示区主图   | 入库、出库、新品建档、草稿续填   |
| `mobile-purchase-entry.png` | 采购入库表单    | Mobile 展示区扩展图 | 现场采购入库                     |
| `mobile-sale-entry.png`     | 销售出库表单    | Mobile 展示区扩展图 | 现场销售出库                     |
| `mobile-scan-lookup.png`    | 扫码 / 查询页面 | Mobile 展示区主图   | 扫码或关键词查询产品、库存、单据 |
| `mobile-records-list.png`   | 流水记录页面    | Mobile 展示区主图   | 最近入库、出库、操作记录         |
| `mobile-profile-home.png`   | 我的页面        | Mobile 展示区扩展图 | 账号信息、资料入口、反馈入口     |

### 6.2 Mobile 占位尺寸

推荐尺寸：

```text
390 x 844
```

或者：

```text
430 x 932
```

第一版首页可以只展示三张：

```text
mobile-entry-home.png
mobile-scan-lookup.png
mobile-records-list.png
```

其余三张作为后续扩展：

```text
mobile-purchase-entry.png
mobile-sale-entry.png
mobile-profile-home.png
```

---

## 7. 占位图策略

为了避免首页开发阶段图片 404，Codex 需要先创建同名 PNG 占位图。

### 7.1 Web 占位图

目录：

```text
abacusflow-apps/apps/web/public/static/img/showcase/web/
```

文件：

```text
web-dashboard-overview.png
web-inventory-management.png
web-purchase-order.png
web-sale-order.png
web-product-center.png
web-customer-management.png
web-supplier-management.png
web-depot-management.png
web-analytics-insight.png
```

尺寸：

```text
1600 x 1000
```

视觉：

```text
深色背景
细网格
青绿色描边
轻微发光
中心显示文件名
```

### 7.2 Mobile 占位图

目录：

```text
abacusflow-apps/apps/web/public/static/img/showcase/mobile/
```

文件：

```text
mobile-entry-home.png
mobile-purchase-entry.png
mobile-sale-entry.png
mobile-scan-lookup.png
mobile-records-list.png
mobile-profile-home.png
```

尺寸：

```text
390 x 844
```

视觉：

```text
手机截图比例
深色背景
青绿色边框
轻微网格
中心显示文件名
```

---

## 8. 首页信息架构

新版首页建议分为 8 个区域：

```text
1. Landing Header
2. Hero 第一屏
3. 业务流转区
4. Web 后台能力区
5. Web 产品截图展示区
6. Mobile App 现场端展示区
7. 技术与可信度区
8. Footer
```

---

## 9. 页面内容设计

### 9.1 Landing Header

导航项：

```text
业务流程
Web 后台
产品展示
移动现场端
技术架构
进入演示
```

锚点：

```text
业务流程       -> #flow
Web 后台       -> #web-modules
产品展示       -> #web-showcase
移动现场端     -> #mobile
技术架构       -> #architecture
进入演示       -> /dashboard 或 NEXT_PUBLIC_DEMO_URL
```

右侧主按钮：

```text
进入演示系统
```

移动端导航：

```text
隐藏中间链接，只保留品牌和进入演示按钮。
```

---

### 9.2 Hero 第一屏

Hero 顶部小标题：

```text
ABACUSFLOW COMMAND CENTER
```

主标题：

```text
小算盘 AbacusFlow
进销存业务指挥台
```

强调文案：

```text
把产品、库存、采购、销售、客户、供应商和仓点，
放进同一条可追踪的业务流里。
```

副文案：

```text
面向零售、贸易和中小型经营团队，小算盘帮助你管理商品档案、库存数量、采购入库、销售出库、客户供应商和经营数据，让日常业务从记录走向联动。
```

CTA：

```text
进入演示系统
查看产品界面
```

Hero 主视觉：

```text
/static/img/showcase/web/web-dashboard-overview.png
```

Hero 右侧图像外层做成“浏览器窗口 / 业务指挥台屏幕”，不要裸放图片。

悬浮业务卡片：

```text
采购入库
销售出库
低库存提醒
```

底部业务链路：

```text
产品 → 仓点 → 库存 → 采购 → 销售 → 数据刻画
```

---

### 9.3 业务流转区

区块标题：

```text
一条业务流，串起进销存日常
```

副标题：

```text
AbacusFlow 不只是把多个管理页面放在一起，而是围绕真实经营动作组织数据：建档、入库、出库、库存变化和数据复盘。
```

流程：

```text
商品建档
维护产品、类别、规格、编码等基础信息。

伙伴维护
客户与供应商分开管理，支撑销售和采购链路。

采购入库
采购单记录供应商、产品和入库数量。

库存变化
库存数量、仓点、安全库存和异常状态集中呈现。

销售出库
销售单关联客户、商品和库存扣减。

数据刻画
通过经营图表复盘采购、销售和库存趋势。
```

---

### 9.4 Web 后台能力区

区块标题：

```text
Web 后台：把经营数据放到同一个工作台
```

模块卡片：

```text
业务仪表盘
库存管理
采购单管理
销售单管理
产品中心
客户管理
供应商管理
储存点管理
数据刻画
```

模块文案：

```text
业务仪表盘
集中查看库存信号、业务入口和异常提醒，让日常操作从一个工作台开始。

库存管理
围绕库存单元、仓点和安全库存组织数据，及时发现低库存和异常库存。

采购单管理
记录从供应商到入库的采购流程，让采购动作和库存变化保持一致。

销售单管理
记录从客户到出库的销售流程，让销售动作和库存扣减形成闭环。

产品中心
维护产品资料、产品类别、规格编码等基础数据，为后续业务流提供统一口径。

客户管理
维护客户资料，让销售单、客户关系和经营复盘可以被持续追踪。

供应商管理
维护供应商资料，让采购单、供应关系和采购复盘保持关联。

储存点管理
管理仓库、门店、货位等库存所在地，让库存数量具备明确位置语义。

数据刻画
通过图表观察订单趋势、销售收入、采购成本、库存状态、客户和供应商排行。
```

---

### 9.5 Web 产品截图展示区

区块标题：

```text
真实后台界面，而不是概念图
```

副标题：

```text
从演示环境统一截取产品界面，让用户在进入系统前先看到业务工作台的完成度。
```

展示形式：

```text
左侧：大截图舞台
右侧：当前截图标题、说明、模块标签、入口按钮
底部：截图切换按钮
```

不要做成普通图片堆叠，也不要做成无说明轮播。每张图都应该解释它在业务链路中的作用。

---

### 9.6 Mobile App 现场端展示区

区块标题：

```text
Mobile App：把现场动作接入业务流
```

副标题：

```text
Web 后台适合总览和管理，Mobile App 适合现场录入、扫码查询、入库出库和流水追踪。
```

第一版展示三张手机卡：

```text
现场录入      -> mobile-entry-home.png
扫码查询      -> mobile-scan-lookup.png
流水记录      -> mobile-records-list.png
```

扩展展示三张：

```text
采购入库      -> mobile-purchase-entry.png
销售出库      -> mobile-sale-entry.png
我的工作台    -> mobile-profile-home.png
```

展示方式：

```text
手机壳 / 手机边框 + 截图
下方或右侧配业务说明
桌面端三列展示
手机端一列展示
```

不要把 Mobile App 当作小角标放在页脚。它应该作为 AbacusFlow 双端能力的一部分被明确展示。

---

### 9.7 技术与可信度区

不要写没有依据的数据：

```text
100+ 企业用户
<100ms 数据响应
24/7 云端访问
全球可用
```

推荐写真实可信的能力：

```text
5 个核心业务领域
产品、库存、交易、合作伙伴、储存点围绕业务边界组织。

9 个主要业务入口
仪表盘、库存、采购、销售、产品、客户、供应商、储存点、数据刻画。

Web + Mobile 双端
Web 负责管理与分析，Mobile 负责现场录入与扫码查询。

DDD 分层设计
业务模型按领域组织，便于后续维护和扩展。
```

---

### 9.8 Footer

Footer 内容：

```text
品牌：小算盘 AbacusFlow
一句话：面向零售、贸易和中小型经营团队的进销存业务指挥台。
导航：业务流程 / Web 后台 / 移动现场端 / 技术架构 / 进入演示
联系入口：邮箱或反馈入口
备案信息：保留现有备案信息，如果当前项目已有备案文案，不要删除。
```

---

## 10. 技术实现方案

### 10.1 修改范围

修改：

```text
abacusflow-apps/apps/web/src/app/page.tsx
abacusflow-apps/apps/web/src/app/globals.css
```

新增：

```text
abacusflow-apps/apps/web/src/components/landing/
abacusflow-apps/apps/web/public/static/img/showcase/web/
abacusflow-apps/apps/web/public/static/img/showcase/mobile/
```

不要修改：

```text
静态 index.html
后台 /(admin) 路由结构
后台 Auth0 逻辑
后台 Ant Design 布局
```

---

### 10.2 推荐组件结构

```text
src/components/landing/
  landing-page.tsx
  landing-header.tsx
  landing-hero.tsx
  business-flow.tsx
  web-module-grid.tsx
  web-showcase.tsx
  mobile-showcase.tsx
  architecture-section.tsx
  landing-footer.tsx
  landing-data.ts
```

`src/app/page.tsx` 保持很薄：

```tsx
import { LandingPage } from "../components/landing/landing-page";

export default function Home() {
  return <LandingPage />;
}
```

---

### 10.3 LandingPage 结构

```tsx
import { ArchitectureSection } from "./architecture-section";
import { BusinessFlow } from "./business-flow";
import { LandingFooter } from "./landing-footer";
import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { MobileShowcase } from "./mobile-showcase";
import { WebModuleGrid } from "./web-module-grid";
import { WebShowcase } from "./web-showcase";

export function LandingPage() {
  return (
    <main className="af-landing" data-theme="dark">
      <LandingHeader />
      <LandingHero />
      <BusinessFlow />
      <WebModuleGrid />
      <WebShowcase />
      <MobileShowcase />
      <ArchitectureSection />
      <LandingFooter />
    </main>
  );
}
```

首页根容器可以使用 `data-theme="dark"`，但不要影响后台主题逻辑。

---

### 10.4 landing-data.ts

```ts
export const demoUrl =
  process.env.NEXT_PUBLIC_DEMO_URL || "/dashboard";

export const navItems = [
  { label: "业务流程", href: "#flow" },
  { label: "Web 后台", href: "#web-modules" },
  { label: "产品展示", href: "#web-showcase" },
  { label: "移动现场端", href: "#mobile" },
  { label: "技术架构", href: "#architecture" },
];

export const businessFlowItems = [
  {
    title: "商品建档",
    description: "维护产品、类别、规格、编码等基础信息。",
  },
  {
    title: "伙伴维护",
    description: "客户与供应商分开管理，支撑销售和采购链路。",
  },
  {
    title: "采购入库",
    description: "采购单记录供应商、产品和入库数量。",
  },
  {
    title: "库存变化",
    description: "库存数量、仓点、安全库存和异常状态集中呈现。",
  },
  {
    title: "销售出库",
    description: "销售单关联客户、商品和库存扣减。",
  },
  {
    title: "数据刻画",
    description: "通过经营图表复盘采购、销售和库存趋势。",
  },
];

export const moduleCards = [
  {
    title: "业务仪表盘",
    description: "集中查看库存信号、业务入口和异常提醒。",
  },
  {
    title: "库存管理",
    description: "管理库存单元、仓点、安全库存和库存异常。",
  },
  {
    title: "采购单管理",
    description: "记录供应商到入库的采购流程。",
  },
  {
    title: "销售单管理",
    description: "记录客户到出库的销售流程。",
  },
  {
    title: "产品中心",
    description: "维护产品资料、类别、规格和编码。",
  },
  {
    title: "客户管理",
    description: "让客户资料与销售动作关联起来。",
  },
  {
    title: "供应商管理",
    description: "让供应商资料与采购动作关联起来。",
  },
  {
    title: "储存点管理",
    description: "管理仓库、门店、货位等库存所在地。",
  },
  {
    title: "数据刻画",
    description: "观察订单、收入、采购、库存和伙伴排行。",
  },
];

export const webShowcaseItems = [
  {
    key: "dashboard",
    title: "业务仪表盘",
    eyebrow: "Dashboard",
    description:
      "库存信号、快捷入口、业务提醒和核心数据集中在一个工作台里，适合每天打开后先扫一眼。",
    image: "/static/img/showcase/web/web-dashboard-overview.png",
    href: "/dashboard",
    alt: "小算盘 AbacusFlow 业务仪表盘界面截图",
  },
  {
    key: "inventory",
    title: "库存管理",
    eyebrow: "Inventory",
    description:
      "围绕库存单元、仓点、安全库存和库存状态组织数据，帮助团队及时发现低库存和异常库存。",
    image: "/static/img/showcase/web/web-inventory-management.png",
    href: "/inventory",
    alt: "小算盘 AbacusFlow 库存管理界面截图",
  },
  {
    key: "purchase",
    title: "采购单管理",
    eyebrow: "Purchase Order",
    description:
      "记录从供应商到商品入库的采购流程，让采购动作和库存变化保持一致。",
    image: "/static/img/showcase/web/web-purchase-order.png",
    href: "/transaction/purchase-order",
    alt: "小算盘 AbacusFlow 采购单管理界面截图",
  },
  {
    key: "sale",
    title: "销售单管理",
    eyebrow: "Sale Order",
    description:
      "记录从客户到商品出库的销售流程，让销售动作和库存扣减形成闭环。",
    image: "/static/img/showcase/web/web-sale-order.png",
    href: "/transaction/sale-order",
    alt: "小算盘 AbacusFlow 销售单管理界面截图",
  },
  {
    key: "product",
    title: "产品中心",
    eyebrow: "Product Center",
    description:
      "维护产品资料、产品类别、规格编码等基础数据，为采购、销售和库存提供统一口径。",
    image: "/static/img/showcase/web/web-product-center.png",
    href: "/products",
    alt: "小算盘 AbacusFlow 产品中心界面截图",
  },
  {
    key: "customer",
    title: "客户管理",
    eyebrow: "Customer",
    description:
      "集中维护客户资料，让销售单、客户关系和经营复盘可以被持续追踪。",
    image: "/static/img/showcase/web/web-customer-management.png",
    href: "/partner/customer",
    alt: "小算盘 AbacusFlow 客户管理界面截图",
  },
  {
    key: "supplier",
    title: "供应商管理",
    eyebrow: "Supplier",
    description:
      "集中维护供应商资料，让采购单、供货关系和后续复盘保持关联。",
    image: "/static/img/showcase/web/web-supplier-management.png",
    href: "/partner/supplier",
    alt: "小算盘 AbacusFlow 供应商管理界面截图",
  },
  {
    key: "depot",
    title: "储存点管理",
    eyebrow: "Depot",
    description:
      "管理仓库、门店、货位等库存所在地，让库存数量具备明确位置语义。",
    image: "/static/img/showcase/web/web-depot-management.png",
    href: "/depots",
    alt: "小算盘 AbacusFlow 储存点管理界面截图",
  },
  {
    key: "analytics",
    title: "数据刻画",
    eyebrow: "Analytics",
    description:
      "通过图表观察订单、销售、采购、库存、客户和供应商趋势，让经营复盘有数据依据。",
    image: "/static/img/showcase/web/web-analytics-insight.png",
    href: "/analytics",
    alt: "小算盘 AbacusFlow 数据刻画界面截图",
  },
];

export const mobileShowcaseItems = [
  {
    key: "entry-home",
    title: "现场录入",
    eyebrow: "Entry",
    description:
      "把入库、出库、新品建档和草稿续填放到手机端，现场人员不必回到电脑前再补录。",
    image: "/static/img/showcase/mobile/mobile-entry-home.png",
    alt: "小算盘 AbacusFlow Mobile App 现场录入首页截图",
  },
  {
    key: "purchase-entry",
    title: "采购入库",
    eyebrow: "Purchase Entry",
    description:
      "采购到货后可以在现场直接录入入库信息，让库存变化更及时。",
    image: "/static/img/showcase/mobile/mobile-purchase-entry.png",
    alt: "小算盘 AbacusFlow Mobile App 采购入库截图",
  },
  {
    key: "sale-entry",
    title: "销售出库",
    eyebrow: "Sale Entry",
    description:
      "门店或仓库出货时直接记录出库动作，让销售和库存扣减形成闭环。",
    image: "/static/img/showcase/mobile/mobile-sale-entry.png",
    alt: "小算盘 AbacusFlow Mobile App 销售出库截图",
  },
  {
    key: "scan-lookup",
    title: "扫码查询",
    eyebrow: "Scan & Lookup",
    description:
      "通过扫码或关键词快速查询产品、库存和单据，适合仓库和门店现场使用。",
    image: "/static/img/showcase/mobile/mobile-scan-lookup.png",
    alt: "小算盘 AbacusFlow Mobile App 扫码查询截图",
  },
  {
    key: "records",
    title: "流水记录",
    eyebrow: "Records",
    description:
      "最近入库、出库和操作记录集中展示，让现场动作可以被追踪和复盘。",
    image: "/static/img/showcase/mobile/mobile-records-list.png",
    alt: "小算盘 AbacusFlow Mobile App 流水记录截图",
  },
  {
    key: "profile",
    title: "我的工作台",
    eyebrow: "Profile",
    description:
      "账号信息、常用资料、问题反馈等入口集中在手机端，形成完整现场工作台。",
    image: "/static/img/showcase/mobile/mobile-profile-home.png",
    alt: "小算盘 AbacusFlow Mobile App 我的页面截图",
  },
];
```

---

## 11. 样式实现细节

### 11.1 命名规则

所有 Landing 样式统一使用前缀：

```text
af-landing-
```

例如：

```text
af-landing
af-landing-header
af-landing-hero
af-landing-section
af-landing-card
af-web-showcase
af-mobile-showcase
```

避免污染后台：

```text
.ant-layout
.ant-card
.af-dashboard
.af-command-button
.af-flow-board
.af-login-*
```

---

### 11.2 视觉原则

复用现有 `globals.css` 中的 AbacusFlow 视觉体系：

```text
--af-panel
--af-border
--af-text
--af-muted
--af-cyan
--af-green
--af-radius
af-gradient-text
af-gradient-border
```

首页视觉关键词：

```text
深色业务指挥台
青绿色数据光感
真实产品截图
玻璃态信息面板
网格背景
Web 管理端 + Mobile 现场端
```

不要做成：

```text
泛蓝色科技模板
虚构办公场景
无业务含义的霓虹光效
堆砌营销指标
```

---

### 11.3 基础 CSS 示例

```css
.af-landing {
  min-height: 100vh;
  color: var(--af-text, #f8fafc);
  background:
    radial-gradient(circle at 18% 12%, rgba(34, 197, 94, 0.20), transparent 34%),
    radial-gradient(circle at 78% 8%, rgba(56, 189, 248, 0.18), transparent 32%),
    linear-gradient(180deg, #050609 0%, #08111a 42%, #050609 100%);
  overflow-x: hidden;
}

.af-landing::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 82%);
}

.af-landing-section {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100vw - 40px));
  margin: 0 auto;
  padding: 96px 0;
}

.af-landing-kicker {
  color: var(--af-green, #22c55e);
  font-family: var(--font-fira-code), monospace;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
```

---

### 11.4 响应式规则

桌面端：

```text
Hero：左文案 + 右 Web 后台屏幕
业务流程：6 步网格展示
Web 模块：3 列或 4 列
Web 截图：左大图 + 右说明
Mobile：3 个手机模型并排
```

平板端：

```text
Hero 改为上下结构
Web 截图说明面板放到截图下方
模块卡片 2 列
Mobile 手机模型 2 + 1 排布
```

手机端：

```text
导航隐藏中间链接，只保留品牌 + 进入演示
Hero 标题控制在 40px 以下
后台截图缩小为全宽卡片
模块卡片 1 列
Mobile 手机模型 1 列
CTA 按钮全宽或自然换行
```

CSS 示例：

```css
@media (max-width: 900px) {
  .af-landing-nav {
    display: none;
  }

  .af-landing-hero-grid,
  .af-web-showcase-layout,
  .af-mobile-showcase-layout {
    grid-template-columns: 1fr;
  }

  .af-module-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .af-landing-section {
    width: min(100% - 28px, 1180px);
    padding: 68px 0;
  }

  .af-module-grid,
  .af-flow-grid,
  .af-mobile-phone-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 12. 交互与可访问性

首页可以有轻量动画，但不要影响性能和可读性。

推荐保留：

```text
Hero 光斑缓慢移动
截图卡片轻微浮动
按钮 hover 发光
截图切换淡入
```

必须支持减少动态效果：

```css
@media (prefers-reduced-motion: reduce) {
  .af-landing *,
  .af-landing *::before,
  .af-landing *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

图片必须有准确 `alt`：

```tsx
<Image
  src={item.image}
  alt={item.alt}
  width={1600}
  height={1000}
/>
```

轮播 / 切换按钮必须有 `aria-label`：

```tsx
<button aria-label={`查看${item.title}截图`}>
  {item.title}
</button>
```

---

## 13. 路由与演示入口

推荐使用环境变量配置演示地址：

```env
NEXT_PUBLIC_DEMO_URL=https://app-demo.abacusflow.dpdns.org
```

代码：

```ts
export const demoUrl =
  process.env.NEXT_PUBLIC_DEMO_URL || "/dashboard";
```

CTA：

```text
进入演示系统 -> demoUrl
查看产品界面 -> #web-showcase
```

如果同一个域名部署首页和后台：

```text
进入演示系统 -> /dashboard
```

如果官网和 demo 分开部署：

```text
进入演示系统 -> https://app-demo.abacusflow.dpdns.org
```

---

## 14. Metadata 建议

当前全局 metadata 可以后续微调为：

```ts
export const metadata = {
  title: "小算盘 AbacusFlow | 进销存业务指挥台",
  description:
    "小算盘 AbacusFlow 面向零售、贸易和中小型经营团队，连接产品、库存、采购、销售、客户、供应商和仓点数据。",
};
```

如果担心影响后台页面，可以先不改 `layout.tsx`，只完成首页视觉和内容。

---

## 15. 实施步骤

### 第一步：创建资源目录和占位图

创建目录：

```bash
mkdir -p abacusflow-apps/apps/web/public/static/img/showcase/web
mkdir -p abacusflow-apps/apps/web/public/static/img/showcase/mobile
```

创建 Web 占位图：

```text
web-dashboard-overview.png
web-inventory-management.png
web-purchase-order.png
web-sale-order.png
web-product-center.png
web-customer-management.png
web-supplier-management.png
web-depot-management.png
web-analytics-insight.png
```

创建 Mobile 占位图：

```text
mobile-entry-home.png
mobile-purchase-entry.png
mobile-sale-entry.png
mobile-scan-lookup.png
mobile-records-list.png
mobile-profile-home.png
```

### 第二步：新增 Landing 组件目录

```bash
mkdir -p abacusflow-apps/apps/web/src/components/landing
```

新增文件：

```text
landing-page.tsx
landing-header.tsx
landing-hero.tsx
business-flow.tsx
web-module-grid.tsx
web-showcase.tsx
mobile-showcase.tsx
architecture-section.tsx
landing-footer.tsx
landing-data.ts
```

### 第三步：修改首页路由

把 `src/app/page.tsx` 从 redirect 改为渲染 `LandingPage`。

### 第四步：实现首页样式

在 `src/app/globals.css` 末尾新增 Landing CSS。

要求：

```text
所有类名前缀使用 af-landing- 或 af-web-showcase- / af-mobile-showcase-
不要覆盖 Ant Design 和后台已有 class
```

### 第五步：实现截图展示逻辑

Hero 固定使用：

```text
/static/img/showcase/web/web-dashboard-overview.png
```

WebShowcase 使用 9 张 Web 图片。

MobileShowcase 第一版展示 3 张 Mobile 图片：

```text
mobile-entry-home.png
mobile-scan-lookup.png
mobile-records-list.png
```

### 第六步：本地验证

Web：

```bash
cd abacusflow-apps/apps/web
npm run lint
npm run build
npm run dev
```

检查页面：

```text
/
#flow
#web-modules
#web-showcase
#mobile
#architecture
/dashboard
/inventory
/transaction/purchase-order
/transaction/sale-order
/products
/partner/customer
/partner/supplier
/depots
/analytics
```

---

## 16. 验收标准

### 16.1 内容验收

```text
首页 5 秒内能看懂：AbacusFlow 是进销存业务指挥台。
首页明确展示产品、库存、采购、销售、客户、供应商、仓点、数据刻画。
首页同时表达 Web 后台和 Mobile 现场端。
首页没有虚构用户数、性能数字、SLA。
首页 CTA 能进入演示系统。
```

### 16.2 视觉验收

```text
第一屏有 Web 后台截图。
整体延续深色业务指挥台风格。
主色使用青绿 / 青蓝数据光感。
卡片是玻璃态，但不过度圆角。
移动端不溢出、不重叠、不横向撑破。
Web 截图和 Mobile 截图有明确展示区域。
```

### 16.3 技术验收

```text
/ 不再 redirect 到 /dashboard。
/dashboard 等后台路由不受影响。
npm run lint 通过。
npm run build 通过。
图片路径不 404。
Landing 样式不污染后台 Ant Design 页面。
prefers-reduced-motion 生效。
图片 alt、按钮 aria-label 完整。
```

---

## 17. 后续替换真实截图流程

### 17.1 替换 Web 截图

从演示地址重新截图后，直接覆盖：

```text
abacusflow-apps/apps/web/public/static/img/showcase/web/*.png
```

不要修改前端代码。

### 17.2 替换 Mobile 截图

从模拟器或真机截图后，直接覆盖：

```text
abacusflow-apps/apps/web/public/static/img/showcase/mobile/*.png
```

不要修改前端代码。

### 17.3 截图更新注意事项

```text
文件名必须保持不变
图片比例尽量保持一致
截图不要包含隐私数据
截图不要包含空状态和错误状态
截图更新后重新检查首页移动端展示效果
```

---

# 18. 最终 Codex 提示词

下面内容可以直接复制给 Codex：

```text
请基于当前 AbacusFlow 项目实现公开首页，不要修改静态 index.html。

项目位置是 abacusflow-apps/apps/web，技术栈是 Next.js App Router + React + Ant Design。当前 src/app/page.tsx 只有 redirect("/dashboard")，请改为渲染 LandingPage，但不要影响现有 /(admin) 下的后台路由。

首页定位是“小算盘 AbacusFlow：进销存业务指挥台”，不是泛 SaaS 宣传页。首页要讲清楚：产品、库存、采购、销售、客户、供应商、仓点和数据刻画被放进同一条可追踪的业务流中。

Web 后台虽然已有演示地址 https://app-demo.abacusflow.dpdns.org，但首页仍然需要展示后台截图。截图负责建立第一眼产品可信度，演示地址负责让用户进入深度体验。请不要继续使用旧的 static/img/demo/*.png 作为正式资源，而是创建新的截图资源目录：

abacusflow-apps/apps/web/public/static/img/showcase/web/
abacusflow-apps/apps/web/public/static/img/showcase/mobile/

请先创建以下 Web 后台占位 PNG，后续我会从演示地址重新截图后覆盖同名文件：

web-dashboard-overview.png
web-inventory-management.png
web-purchase-order.png
web-sale-order.png
web-product-center.png
web-customer-management.png
web-supplier-management.png
web-depot-management.png
web-analytics-insight.png

Web 占位图尺寸使用 1600x1000，深色背景、细网格、青绿色边框、轻微发光，中心显示对应文件名。

请先创建以下 Mobile App 占位 PNG，后续我会截图后覆盖同名文件：

mobile-entry-home.png
mobile-purchase-entry.png
mobile-sale-entry.png
mobile-scan-lookup.png
mobile-records-list.png
mobile-profile-home.png

Mobile 占位图尺寸使用 390x844，模拟手机截图比例，深色背景、青绿色边框、轻微网格，中心显示对应文件名。

请新增 src/components/landing 目录，拆分：

landing-page.tsx
landing-header.tsx
landing-hero.tsx
business-flow.tsx
web-module-grid.tsx
web-showcase.tsx
mobile-showcase.tsx
architecture-section.tsx
landing-footer.tsx
landing-data.ts

src/app/page.tsx 只负责渲染 LandingPage，保持简洁。

Hero 第一屏固定使用：
/static/img/showcase/web/web-dashboard-overview.png

WebShowcase 使用以下图片：
/static/img/showcase/web/web-dashboard-overview.png
/static/img/showcase/web/web-inventory-management.png
/static/img/showcase/web/web-purchase-order.png
/static/img/showcase/web/web-sale-order.png
/static/img/showcase/web/web-product-center.png
/static/img/showcase/web/web-customer-management.png
/static/img/showcase/web/web-supplier-management.png
/static/img/showcase/web/web-depot-management.png
/static/img/showcase/web/web-analytics-insight.png

MobileShowcase 使用以下图片：
/static/img/showcase/mobile/mobile-entry-home.png
/static/img/showcase/mobile/mobile-purchase-entry.png
/static/img/showcase/mobile/mobile-sale-entry.png
/static/img/showcase/mobile/mobile-scan-lookup.png
/static/img/showcase/mobile/mobile-records-list.png
/static/img/showcase/mobile/mobile-profile-home.png

首页文案请围绕真实模块：
业务仪表盘、库存管理、采购单管理、销售单管理、产品中心、客户管理、供应商管理、储存点管理、数据刻画、Mobile 现场录入、扫码查询、流水记录。

Hero 文案使用方向：
小算盘 AbacusFlow
进销存业务指挥台
把产品、库存、采购、销售、客户、供应商和仓点，放进同一条可追踪的业务流里。

不要写没有依据的 100+ 用户、<100ms、24/7、全球可用、企业级 SLA 等指标。可信度区请写：
5 个核心业务领域：产品、库存、交易、合作伙伴、储存点。
9 个主要业务入口：仪表盘、库存、采购、销售、产品、客户、供应商、储存点、数据刻画。
Web + Mobile 双端：Web 负责管理与分析，Mobile 负责现场录入与扫码查询。
DDD 分层设计：业务模型按领域组织，便于后续维护和扩展。

视觉上复用现有 globals.css 中的 af 设计系统，包括 --af-panel、--af-border、--af-text、--af-muted、--af-cyan、--af-green、--af-radius、af-gradient-text、af-gradient-border 等。首页根容器可使用 data-theme="dark"，但不要影响后台主题逻辑。

Landing CSS 放到 src/app/globals.css 末尾，所有 Landing 相关 class 使用 af-landing-、af-web-showcase-、af-mobile-showcase- 前缀，避免污染后台 Ant Design 页面。

实现时注意：
1. 移动端响应式。
2. prefers-reduced-motion。
3. 图片 alt 必须准确。
4. 按钮和截图切换控件要有 aria-label。
5. CTA 使用 NEXT_PUBLIC_DEMO_URL，如果没有该环境变量，则回退到 /dashboard。
6. 不要破坏现有 /(admin) 后台布局、Auth0 逻辑和路由。
7. npm run lint 能通过。
8. npm run build 能通过。
```