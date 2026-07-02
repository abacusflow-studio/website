"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const demoUrl =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://app-demo.abacusflow.dpdns.org";

const webItems = [
  {
    title: "业务仪表盘",
    description: "把库存、采购、销售和数据刻画放到同一个经营视图中。",
    image: "/static/img/showcase/web/web-dashboard-overview.png",
    alt: "AbacusFlow Web 后台业务仪表盘概览截图",
  },
  {
    title: "库存管理",
    description: "围绕商品、仓点、数量与流水追踪库存状态。",
    image: "/static/img/showcase/web/web-inventory-management.png",
    alt: "AbacusFlow Web 后台库存管理截图",
  },
  {
    title: "采购单管理",
    description: "从供应商到入库记录，保留可回溯的采购链路。",
    image: "/static/img/showcase/web/web-purchase-order.png",
    alt: "AbacusFlow Web 后台采购单管理截图",
  },
  {
    title: "销售单管理",
    description: "连接客户、商品、出库与销售流水，减少业务断点。",
    image: "/static/img/showcase/web/web-sale-order.png",
    alt: "AbacusFlow Web 后台销售单管理截图",
  },
  {
    title: "产品中心",
    description: "统一维护产品档案，让库存和交易引用同一份商品资料。",
    image: "/static/img/showcase/web/web-product-center.png",
    alt: "AbacusFlow Web 后台产品中心截图",
  },
  {
    title: "客户管理",
    description: "沉淀客户交易记录，为销售复盘和后续跟进提供依据。",
    image: "/static/img/showcase/web/web-customer-management.png",
    alt: "AbacusFlow Web 后台客户管理截图",
  },
  {
    title: "供应商管理",
    description: "将供应商资料、采购单和商品来源放入同一业务上下文。",
    image: "/static/img/showcase/web/web-supplier-management.png",
    alt: "AbacusFlow Web 后台供应商管理截图",
  },
  {
    title: "储存点管理",
    description: "清楚区分门店、仓库和其他储存点的库存归属。",
    image: "/static/img/showcase/web/web-depot-management.png",
    alt: "AbacusFlow Web 后台储存点管理截图",
  },
  {
    title: "数据刻画",
    description: "按业务模型组织经营数据，为后续分析与扩展留出空间。",
    image: "/static/img/showcase/web/web-analytics-insight.png",
    alt: "AbacusFlow Web 后台数据刻画截图",
  },
];

const mobileItems = [
  {
    title: "Mobile 现场首页",
    image: "/static/img/showcase/mobile/mobile-entry-home.png",
    alt: "AbacusFlow Mobile 现场首页截图",
  },
  {
    title: "采购录入",
    image: "/static/img/showcase/mobile/mobile-purchase-entry.png",
    alt: "AbacusFlow Mobile 采购录入截图",
  },
  {
    title: "销售录入",
    image: "/static/img/showcase/mobile/mobile-sale-entry.png",
    alt: "AbacusFlow Mobile 销售录入截图",
  },
  {
    title: "扫码查询",
    image: "/static/img/showcase/mobile/mobile-scan-lookup.png",
    alt: "AbacusFlow Mobile 扫码查询截图",
  },
  {
    title: "流水记录",
    image: "/static/img/showcase/mobile/mobile-records-list.png",
    alt: "AbacusFlow Mobile 流水记录截图",
  },
  {
    title: "个人入口",
    image: "/static/img/showcase/mobile/mobile-profile-home.png",
    alt: "AbacusFlow Mobile 个人入口截图",
  },
];

const modules = [
  ["Overview", "业务仪表盘", "把关键业务状态放在首页，先看到问题，再进入模块处理。"],
  ["Inventory", "库存管理", "围绕商品和储存点记录库存数量、归属与变化。"],
  ["Purchase", "采购单管理", "记录供应商、商品和入库关系，形成采购链路。"],
  ["Sale", "销售单管理", "连接客户、产品和出库动作，让销售结果可追踪。"],
  ["Product", "产品中心", "统一商品资料，避免库存、采购、销售各说各话。"],
  ["Customer", "客户管理", "沉淀客户资料和交易记录，支撑后续复盘。"],
  ["Supplier", "供应商管理", "管理供应来源，让采购单能回到真实合作方。"],
  ["Depot", "储存点管理", "表达门店、仓库等不同储存位置的库存边界。"],
  ["Insight", "数据刻画", "以领域模型组织数据，为经营分析和扩展打基础。"],
] as const;

const flowSteps = [
  "产品中心",
  "库存管理",
  "采购单",
  "销售单",
  "客户",
  "供应商",
  "储存点",
  "数据刻画",
] as const;

const credibility = [
  ["5 个核心业务领域", "产品、库存、交易、合作伙伴、储存点。"],
  [
    "9 个主要业务入口",
    "仪表盘、库存、采购、销售、产品、客户、供应商、储存点、数据刻画。",
  ],
  ["Web + Mobile 双端", "Web 负责管理与分析，Mobile 负责现场录入与扫码查询。"],
  ["DDD 分层设计", "业务模型按领域组织，便于后续维护和扩展。"],
] as const;

export default function Home() {
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const activeWeb = webItems[activeWebIndex];
  const activeMobile = mobileItems[activeMobileIndex];
  const webCount = useMemo(
    () => `${String(activeWebIndex + 1).padStart(2, "0")} / 09`,
    [activeWebIndex],
  );

  return (
    <main className="af-landing-page">
      <header className="af-landing-header">
        <a className="af-landing-brand" href="#top" aria-label="返回首页顶部">
          <span className="af-landing-brand-mark">算</span>
          <span>
            <strong>小算盘</strong>
            <small>AbacusFlow</small>
          </span>
        </a>
        <nav className="af-landing-nav" aria-label="首页导航">
          <a href="#business-flow">业务流</a>
          <a href="#web-modules">Web 后台</a>
          <a href="#mobile">Mobile</a>
          <a href="#architecture">架构</a>
        </nav>
        <a className="af-landing-header-cta" href={demoUrl}>
          进入演示
        </a>
      </header>

      <section className="af-landing-hero" id="top">
        <div>
          <p className="af-landing-kicker">小算盘 AbacusFlow</p>
          <h1>
            <span className="af-gradient-text">进销存业务指挥台</span>
          </h1>
          <p className="af-landing-hero-lede">
            把产品、库存、采购、销售、客户、供应商和仓点，放进同一条可追踪的业务流里。
          </p>
          <div className="af-landing-actions">
            <a className="af-landing-primary-action" href={demoUrl}>
              打开 Web 演示
            </a>
            <a className="af-landing-secondary-action" href="#web-modules">
              查看业务入口
            </a>
          </div>
        </div>

        <div aria-label="AbacusFlow 产品截图预览">
          <div className="af-landing-browser af-gradient-border">
            <div className="af-landing-browser-bar">
              <span />
              <span />
              <span />
              <strong>业务仪表盘</strong>
            </div>
            <Image
              src="/static/img/showcase/web/web-dashboard-overview.png"
              alt="AbacusFlow Web 后台业务仪表盘概览截图"
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 980px) 100vw, 58vw"
            />
          </div>
          <div className="af-landing-hero-badges" aria-label="首页可信度摘要">
            <span>5 个核心业务领域</span>
            <span>9 个主要业务入口</span>
            <span>Web + Mobile 双端</span>
          </div>
        </div>
      </section>

      <section className="af-landing-section" id="business-flow">
        <div className="af-landing-section-heading">
          <p className="af-landing-kicker">Traceable Business Flow</p>
          <h2>不是孤立模块，是一条能回溯的进销存业务流</h2>
          <p>
            AbacusFlow
            将产品档案、库存归属、采购来源、销售去向和合作伙伴放在同一套业务语义里，让每一次现场录入和后台分析都能找到上下文。
          </p>
        </div>
        <div className="af-landing-flow-map" aria-label="AbacusFlow 业务流节点">
          {flowSteps.map((step, index) => (
            <div className="af-landing-flow-node" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="af-landing-section" id="web-modules">
        <div className="af-landing-section-heading">
          <p className="af-landing-kicker">Web Console</p>
          <h2>围绕真实业务入口组织后台</h2>
          <p>
            Web
            后台负责管理与分析，把每天反复发生的采购、销售、库存和资料维护收进统一工作台。
          </p>
        </div>
        <div className="af-landing-module-grid">
          {modules.map(([eyebrow, title, description]) => (
            <article className="af-landing-module-card" key={title}>
              <span>{eyebrow}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="af-web-showcase-section" id="web-showcase">
        <div className="af-landing-section-heading">
          <p className="af-landing-kicker">Product Screens</p>
          <h2>第一眼看到真实后台，而不是泛泛的 SaaS 插画</h2>
          <p>这些图片先使用占位截图，后续可直接用演示环境截图覆盖同名文件。</p>
        </div>
        <div className="af-web-showcase-shell">
          <div className="af-web-showcase-preview">
            <Image
              src={activeWeb.image}
              alt={activeWeb.alt}
              width={1600}
              height={1000}
              sizes="(max-width: 980px) 100vw, 760px"
            />
          </div>
          <div className="af-web-showcase-panel">
            <p>{webCount}</p>
            <h3>{activeWeb.title}</h3>
            <span>{activeWeb.description}</span>
            <div className="af-web-showcase-controls" aria-label="Web 后台截图切换">
              {webItems.map((item, index) => (
                <button
                  aria-label={`切换到${item.title}截图`}
                  className={
                    index === activeWebIndex
                      ? "af-web-showcase-control is-active"
                      : "af-web-showcase-control"
                  }
                  key={item.title}
                  onClick={() => setActiveWebIndex(index)}
                  type="button"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="af-mobile-showcase-section" id="mobile">
        <div className="af-mobile-showcase-copy">
          <p className="af-landing-kicker">Mobile Field Entry</p>
          <h2>Mobile 负责现场录入、扫码查询和流水记录</h2>
          <p>
            采购到货、销售出库、现场查货这类动作不一定发生在电脑前。Mobile
            入口把现场动作接回同一条业务流。
          </p>
          <div className="af-mobile-showcase-tabs" aria-label="Mobile 截图切换">
            {mobileItems.map((item, index) => (
              <button
                aria-label={`切换到${item.title}截图`}
                className={
                  index === activeMobileIndex
                    ? "af-mobile-showcase-tab is-active"
                    : "af-mobile-showcase-tab"
                }
                key={item.title}
                onClick={() => setActiveMobileIndex(index)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="af-mobile-showcase-phone" aria-label="Mobile 截图预览">
          <Image
            src={activeMobile.image}
            alt={activeMobile.alt}
            width={390}
            height={844}
            sizes="(max-width: 680px) 86vw, 390px"
          />
        </div>
      </section>

      <section className="af-landing-section" id="architecture">
        <div className="af-landing-section-heading">
          <p className="af-landing-kicker">Credibility</p>
          <h2>可信度来自清楚的业务边界</h2>
          <p>
            首页不使用未经验证的用户数、性能承诺或服务等级指标，只呈现当前产品真实覆盖的业务范围与技术组织方式。
          </p>
        </div>
        <div className="af-landing-credibility-grid">
          {credibility.map(([title, description]) => (
            <article className="af-landing-credibility-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="af-landing-footer" id="contact">
        <div>
          <p className="af-landing-kicker">AbacusFlow</p>
          <h2>从演示环境进入完整后台体验</h2>
          <p>首页负责快速理解产品，演示地址负责进入业务模块做深度体验。</p>
        </div>
        <div className="af-landing-footer-actions">
          <a className="af-landing-primary-action" href={demoUrl}>
            进入演示
          </a>
          <a className="af-landing-secondary-action" href="mailto:1964302791@qq.com">
            联系我们
          </a>
        </div>
      </footer>
      <p className="af-landing-icp">
        &copy; 2026 AbacusFlow 小算盘 ·{" "}
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener">
          鲁ICP备2025171035号
        </a>
      </p>
    </main>
  );
}
