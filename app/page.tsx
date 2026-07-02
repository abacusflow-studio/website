"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const demoUrl =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://app-demo.abacusflow.dpdns.org";

const showcase = [
  {
    title: "业务仪表盘",
    tag: "全局视图",
    image: "/static/img/showcase/web/web-dashboard-overview.png",
    alt: "AbacusFlow Web 后台业务仪表盘概览截图",
  },
  {
    title: "库存管理",
    tag: "库存归属",
    image: "/static/img/showcase/web/web-inventory-management.png",
    alt: "AbacusFlow Web 后台库存管理截图",
  },
  {
    title: "采购单管理",
    tag: "采购入库",
    image: "/static/img/showcase/web/web-purchase-order.png",
    alt: "AbacusFlow Web 后台采购单管理截图",
  },
  {
    title: "销售单管理",
    tag: "销售出库",
    image: "/static/img/showcase/web/web-sale-order.png",
    alt: "AbacusFlow Web 后台销售单管理截图",
  },
  {
    title: "数据刻画",
    tag: "经营分析",
    image: "/static/img/showcase/web/web-analytics-insight.png",
    alt: "AbacusFlow Web 后台数据刻画截图",
  },
];

const cards = [
  ["产品与库存", "产品中心、库存管理、储存点归属"],
  ["采购与销售", "采购单、销售单、交易流水"],
  ["客户与供应商", "合作伙伴资料与业务记录互相追踪"],
  ["Mobile 现场", "现场录入、扫码查询、流水记录"],
] as const;

const businessFlow = [
  ["产品", "统一产品档案，作为采购、销售、库存的共同引用。"],
  ["仓点", "明确门店、仓库和其他储存点的库存边界。"],
  ["采购", "从供应商到入库，形成可回溯的采购记录。"],
  ["库存", "围绕产品和仓点追踪数量、归属和变化。"],
  ["销售", "把客户、商品、出库和销售单连接在一起。"],
  ["数据刻画", "将交易与库存沉淀为可分析的经营数据。"],
] as const;

const webModules = [
  ["业务仪表盘", "全局状态先看见，再进入具体模块处理。"],
  ["库存管理", "产品库存、仓点归属、库存流水。"],
  ["采购单管理", "供应商、采购商品、入库记录。"],
  ["销售单管理", "客户、销售商品、出库结果。"],
  ["产品中心", "维护商品资料，统一业务引用。"],
  ["客户管理", "沉淀客户资料与交易记录。"],
  ["供应商管理", "管理供应来源和采购上下文。"],
  ["储存点管理", "表达门店、仓库等储存位置。"],
  ["数据刻画", "围绕业务模型组织分析视图。"],
] as const;

const mobileFlows = [
  ["现场录入", "采购到货、销售出库可以直接在现场记录。"],
  ["扫码查询", "面向查货、核对、盘点的移动入口。"],
  ["流水记录", "现场动作回到同一条业务流，后续可追踪。"],
] as const;

const proof = [
  "5 个核心业务领域",
  "9 个主要业务入口",
  "Web 管理分析 + Mobile 现场录入",
  "DDD 分层设计",
] as const;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = showcase[activeIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcase.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="af-page">
      <header className="af-nav">
        <a className="af-brand" href="#top" aria-label="返回首页顶部">
          <span>算</span>
          <strong>AbacusFlow</strong>
        </a>
        <nav aria-label="首页导航">
          <a href="#showcase">产品</a>
          <a href="#flow">业务流</a>
          <a href="#web">后台</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="af-pill-button" href={demoUrl}>
          进入演示
        </a>
      </header>

      <section className="af-hero" id="top">
        <p className="af-eyebrow">小算盘 AbacusFlow</p>
        <h1>
          进销存业务
          <span>指挥台</span>
        </h1>
        <p className="af-lede">
          把产品、库存、采购、销售、客户、供应商和仓点，放进同一条可追踪的业务流里。
        </p>

        <div className="af-actions">
          <a className="af-primary" href={demoUrl}>
            打开 Web 演示
          </a>
          <a className="af-secondary" href="#showcase">
            看产品截图
          </a>
        </div>

        <div className="af-stage" id="showcase">
          <div className="af-laptop" aria-label="AbacusFlow 产品界面预览">
            <div className="af-window-bar">
              <i />
              <i />
              <i />
              <strong>{active.title}</strong>
            </div>
            <Image
              src={active.image}
              alt={active.alt}
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 900px) 94vw, 980px"
            />
          </div>

          <div className="af-phone">
            <Image
              src="/static/img/showcase/mobile/mobile-entry-home.png"
              alt="AbacusFlow Mobile 现场首页截图"
              width={390}
              height={844}
              sizes="130px"
            />
          </div>

          <div className="af-module-switcher" aria-label="Web 截图切换">
            {showcase.map((item, index) => (
              <button
                aria-label={`切换到${item.title}截图`}
                className={index === activeIndex ? "is-active" : ""}
                key={item.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <small>{item.tag}</small>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="af-flow" id="flow" aria-label="核心业务入口">
        {cards.map(([title, description]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="af-section af-story" aria-labelledby="story-title">
        <div className="af-section-copy">
          <p className="af-section-kicker">Traceable Flow</p>
          <h2 id="story-title">业务不再散落在表格里</h2>
          <p>
            小算盘把产品、仓点、采购、库存、销售和数据刻画放进一条线里。
            你看到的不是孤立功能，而是每个业务动作的上下游关系。
          </p>
        </div>
        <div className="af-flowline" aria-label="进销存业务流">
          {businessFlow.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="af-section af-web-section" id="web">
        <div className="af-section-copy">
          <p className="af-section-kicker">Web Console</p>
          <h2>Web 后台负责管理与分析</h2>
          <p>
            后台入口按真实业务组织：从仪表盘看状态，从采购、销售、库存进入处理，
            从产品、客户、供应商和储存点维护业务基础资料。
          </p>
        </div>
        <div className="af-web-grid">
          {webModules.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="af-section af-mobile-section">
        <div className="af-mobile-copy">
          <p className="af-section-kicker">Mobile Field Work</p>
          <h2>Mobile 负责现场动作</h2>
          <p>
            采购到货、销售出库、扫码查货这些动作经常发生在电脑之外。
            Mobile 入口负责把现场记录接回 Web 后台的业务流。
          </p>
          <div className="af-mobile-points">
            {mobileFlows.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="af-mobile-gallery" aria-label="Mobile 现场功能截图">
          <Image
            src="/static/img/showcase/mobile/mobile-purchase-entry.png"
            alt="AbacusFlow Mobile 采购录入截图"
            width={390}
            height={844}
            sizes="180px"
          />
          <Image
            src="/static/img/showcase/mobile/mobile-scan-lookup.png"
            alt="AbacusFlow Mobile 扫码查询截图"
            width={390}
            height={844}
            sizes="180px"
          />
        </div>
      </section>

      <section className="af-section af-proof-section">
        <div className="af-section-copy">
          <p className="af-section-kicker">Credibility</p>
          <h2>可信度来自清楚的业务边界</h2>
        </div>
        <div className="af-proof-grid">
          <article>
            <strong>5 个核心业务领域</strong>
            <span>产品、库存、交易、合作伙伴、储存点。</span>
          </article>
          <article>
            <strong>9 个主要业务入口</strong>
            <span>仪表盘、库存、采购、销售、产品、客户、供应商、储存点、数据刻画。</span>
          </article>
          <article>
            <strong>Web + Mobile 双端</strong>
            <span>Web 负责管理与分析，Mobile 负责现场录入与扫码查询。</span>
          </article>
          <article>
            <strong>DDD 分层设计</strong>
            <span>业务模型按领域组织，便于后续维护和扩展。</span>
          </article>
        </div>
      </section>

      <footer className="af-footer" id="contact">
        <div className="af-proof">
          {proof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="af-footer-line">
          <span>&copy; 2026 AbacusFlow 小算盘</span>
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener">
            鲁ICP备2025171035号
          </a>
          <a href="mailto:1964302791@qq.com">1964302791@qq.com</a>
        </div>
      </footer>
    </main>
  );
}
