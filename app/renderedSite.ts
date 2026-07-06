import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import manifest from "../data/rendered-pages-manifest.json";

type RenderedPage = {
  slug: string;
  file: string;
  url: string;
};

const pages = manifest.pages as RenderedPage[];

const compatibilityLayer = String.raw`
<style id="destroy-static-compatibility">
  html {
    max-width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  body.destroy-menu-open {
    overflow: hidden;
  }

  .reviews {
    overflow: hidden;
  }

  .reviews .prev-button {
    left: 0 !important;
  }

  .reviews .next-button {
    right: 0 !important;
  }

  .elementor-location-popup {
    display: none;
  }

  .elementor-location-popup.destroy-popup-open {
    position: fixed !important;
    inset: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100vw !important;
    height: 100vh !important;
    padding: 20px !important;
    background: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 999999 !important;
    opacity: 1 !important;
    pointer-events: all !important;
    animation: destroyFadeIn 180ms ease-out both;
  }

  .elementor-location-popup.destroy-popup-open > .e-con,
  .elementor-location-popup.destroy-popup-open > .elementor-element {
    width: min(650px, 92vw) !important;
    max-height: 90vh !important;
    overflow: visible !important;
    position: relative !important;
    transform-origin: center;
    animation: destroyScaleIn 220ms ease-out both;
  }

  .elementor-location-popup.destroy-popup-open > .e-con > .elementor-element,
  .elementor-location-popup.destroy-popup-open > .elementor-element > .elementor-element {
    max-height: 90vh;
    overflow: auto;
  }

  .destroy-popup-close {
    position: absolute;
    top: 12px;
    right: 12px;
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 999px;
    background: #ffffff;
    color: #111111;
    font: 28px/1 Arial, sans-serif;
    cursor: pointer;
    z-index: 1000000;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    transition: background 160ms ease, color 160ms ease, transform 160ms ease;
  }

  .destroy-popup-close:hover {
    background: #d61313;
    color: #ffffff;
    transform: translateY(-1px);
  }

  .destroy-form-success {
    display: block !important;
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.92);
    color: #111111;
    font: 500 13px/1.35 Manrope, Arial, sans-serif;
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801,
  .destroy-article-card {
    position: relative !important;
    overflow: hidden !important;
    border-radius: 20px !important;
    min-height: 425px;
    display: flex !important;
    align-items: flex-end !important;
    text-decoration: none !important;
    background-size: cover !important;
    background-position: center !important;
    box-shadow: none !important;
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801::before,
  a.destroy-article-card::before {
    content: "" !important;
    position: absolute;
    inset: 0;
    z-index: 0;
    display: block !important;
    opacity: 1 !important;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 28%, rgba(0, 0, 0, 0.44) 62%, rgba(0, 0, 0, 0.92) 100%) !important;
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801 > .e-con-inner,
  .destroy-article-card > .e-con-inner {
    position: relative !important;
    z-index: 1 !important;
    width: 100%;
    min-height: inherit;
    margin-top: auto !important;
    padding: 0 30px 30px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    align-items: flex-start !important;
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801,
  .elementor-4938 .elementor-element.elementor-element-a1da801 *,
  .destroy-article-card,
  .destroy-article-card * {
    color: #ffffff !important;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.78);
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-widget-post-info,
  .destroy-article-card .elementor-widget-post-info {
    margin-bottom: 12px !important;
  }

  .elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-heading-title,
  .elementor-4938 .elementor-element.elementor-element-a1da801 .bal,
  .destroy-article-card .elementor-heading-title,
  .destroy-article-card .bal {
    color: #ffffff !important;
    font-family: Manrope, Arial, sans-serif !important;
    font-size: 24px !important;
    line-height: 1.28 !important;
    font-weight: 600 !important;
  }

  .elementor-element-a8749f1 {
    position: relative !important;
    overflow: hidden !important;
  }

  .elementor-element-a8749f1::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.76) 100%);
  }

  .elementor-element-a8749f1 > * {
    position: relative;
    z-index: 1;
  }

  .elementor-element-a8749f1,
  .elementor-element-a8749f1 .elementor-heading-title,
  .elementor-element-a8749f1 .elementor-post-info,
  .elementor-element-a8749f1 .elementor-post-info__item,
  .elementor-element-a8749f1 a,
  .elementor-element-a8749f1 span {
    color: #ffffff !important;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.75);
  }

  .elementor-6457 .elementor-element.elementor-element-d308b40,
  .elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-heading-title,
  .elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-label,
  .elementor-6457 .elementor-element.elementor-element-d308b40 label,
  .elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-option,
  .elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-subgroup label {
    color: #ffffff !important;
  }

  .elementor-6457 .elementor-element.elementor-element-c92da57 .elementor-field-group > label {
    color: rgba(255, 255, 255, 0.72) !important;
  }

  .elementor-6457 input[type="file"] {
    width: 100%;
    min-height: 38px;
    border: 0 !important;
    border-radius: 999px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
    font: 500 14px/1.2 Manrope, Arial, sans-serif !important;
  }

  .elementor-6457 input[type="file"]::file-selector-button {
    margin-right: 12px;
    padding: 11px 20px;
    border: 0;
    border-radius: 999px;
    background: #c91515;
    color: #ffffff;
    font: 700 14px/1 Manrope, Arial, sans-serif;
    cursor: pointer;
    transition: background 160ms ease, transform 160ms ease;
  }

  .elementor-6457 input[type="file"]::file-selector-button:hover {
    background: #e11a1a;
    transform: translateY(-1px);
  }

  @keyframes destroyFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes destroyScaleIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 1200px) {
    .elementor-43 .elementor-element.elementor-element-ab81c16 .megaMenu {
      position: static !important;
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuIcon {
      position: relative;
      z-index: 1000000;
      width: 40px;
      height: 40px;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 999px;
      background: #ffffff;
      align-items: center;
      justify-content: center;
      gap: 4px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuIcon span {
      width: 18px;
      height: 2px;
      border-radius: 3px;
      transition: transform 180ms ease, opacity 180ms ease;
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems {
      position: fixed !important;
      inset: 0 !important;
      display: flex !important;
      width: 100vw !important;
      min-height: 100dvh !important;
      padding: 96px 24px 36px !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 22px !important;
      background: rgba(255, 255, 255, 0.97) !important;
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow: none !important;
      text-align: center !important;
      z-index: 999998 !important;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: opacity 220ms ease, transform 220ms ease;
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems.active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuItem a {
      color: #111111 !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      line-height: 1.2 !important;
      letter-spacing: 0 !important;
    }
  }

  @media (max-width: 700px) {
    .elementor-location-popup.destroy-popup-open {
      padding: 12px !important;
    }

    .destroy-popup-close {
      top: 8px;
      right: 8px;
      width: 34px;
      height: 34px;
      font-size: 24px;
    }

    .elementor-4938 .elementor-element.elementor-element-a1da801,
    .destroy-article-card {
      min-height: 350px;
      border-radius: 18px !important;
    }

    .elementor-4938 .elementor-element.elementor-element-a1da801 > .e-con-inner,
    .destroy-article-card > .e-con-inner {
      padding: 0 22px 24px !important;
    }

    .elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-heading-title,
    .elementor-4938 .elementor-element.elementor-element-a1da801 .bal,
    .destroy-article-card .elementor-heading-title,
    .destroy-article-card .bal {
      font-size: 20px !important;
    }

    .elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems {
      padding-top: 88px !important;
      gap: 20px !important;
    }
  }
</style>
<script id="destroy-static-compatibility">
(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }
    callback();
  }

  ready(function () {
    var popup = document.querySelector(".elementor-location-popup");

    function openPopup(event) {
      if (!popup) return;
      if (event) event.preventDefault();
      popup.classList.add("destroy-popup-open");
      popup.removeAttribute("aria-hidden");
      document.body.classList.add("dialog-prevent-scroll");
      document.documentElement.style.overflow = "hidden";
      var firstInput = popup.querySelector("input:not([type='hidden']), select, textarea");
      if (firstInput && firstInput.focus) setTimeout(function () { firstInput.focus(); }, 120);
    }

    function closePopup() {
      if (!popup) return;
      popup.classList.remove("destroy-popup-open");
      popup.setAttribute("aria-hidden", "true");
      document.body.classList.remove("dialog-prevent-scroll");
      document.documentElement.style.overflow = "";
    }

    if (popup) {
      popup.setAttribute("aria-hidden", "true");
      var popupPanel = popup.querySelector(":scope > .e-con, :scope > .elementor-element") || popup;
      popupPanel.classList.add("destroy-popup-panel");
      if (!popup.querySelector(".destroy-popup-close")) {
        var closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "destroy-popup-close";
        closeButton.setAttribute("aria-label", "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443");
        closeButton.textContent = "\u00d7";
        closeButton.addEventListener("click", closePopup);
        popupPanel.prepend(closeButton);
      }

      popup.addEventListener("click", function (event) {
        if (event.target === popup) closePopup();
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closePopup();
      });
    }

    document.addEventListener("click", function (event) {
      var trigger = event.target && event.target.closest("[id], a[href]");
      var requestId = "\u0437\u0430\u044f\u0432\u043a\u0430";
      while (trigger && trigger !== document.documentElement) {
        var id = trigger.getAttribute("id");
        var href = trigger.getAttribute("href");
        if (id === requestId || href === "#" + requestId || href === "/#" + requestId) break;
        trigger = trigger.parentElement && trigger.parentElement.closest("[id], a[href]");
      }
      if (!trigger || trigger === document.documentElement) return;
      openPopup(event);
    });

    document.querySelectorAll("a.e-con").forEach(function (card) {
      if (card.querySelector(".elementor-widget-post-info") && card.querySelector(".bal, .elementor-widget-heading")) {
        card.classList.add("destroy-article-card");
      }
    });

    document.querySelectorAll(".menuIcon").forEach(function (icon) {
      icon.addEventListener("click", function () {
        setTimeout(function () {
          document.body.classList.toggle("destroy-menu-open", Boolean(document.querySelector(".menuItems.active")));
        }, 0);
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target || !event.target.closest(".menuItems a")) return;
      document.body.classList.remove("destroy-menu-open");
    });

    document.querySelectorAll("img[data-src]").forEach(function (img) {
      if (!img.getAttribute("src") || img.getAttribute("src").indexOf("data:image") === 0) {
        img.setAttribute("src", img.getAttribute("data-src"));
      }
    });

    document.querySelectorAll("source[data-srcset]").forEach(function (source) {
      if (!source.getAttribute("srcset")) {
        source.setAttribute("srcset", source.getAttribute("data-srcset"));
      }
    });

    document.addEventListener("submit", function (event) {
      var form = event.target && event.target.closest("form");
      if (!form) return;
      event.preventDefault();
      var response = form.querySelector(".wpcf7-response-output");
      if (!response) {
        response = document.createElement("div");
        response.className = "wpcf7-response-output";
        form.appendChild(response);
      }
      response.classList.add("destroy-form-success");
      response.removeAttribute("aria-hidden");
      response.textContent = "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0417\u0430\u044f\u0432\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.";
      form.setAttribute("data-status", "sent");
    });
  });
})();
</script>`;

export function getRenderedPages() {
  return pages;
}

export function findRenderedPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function readRenderedHtml(page: RenderedPage) {
  const html = readFileSync(join(process.cwd(), "data", "rendered-pages", page.file), "utf8");
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;

  return `${head}\n${body}\n${compatibilityLayer}`;
}

export function metadataFromHtml(html: string, fallbackTitle = "DESTROY"): Metadata {
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim() || fallbackTitle;
  const description =
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]?.trim() ||
    "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 DESTROY \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u0438 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.";

  return {
    title,
    description,
  };
}
