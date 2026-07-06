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
    scroll-behavior: smooth;
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
    overflow: auto !important;
    transform-origin: center;
    animation: destroyScaleIn 220ms ease-out both;
  }

  .destroy-popup-close {
    position: fixed;
    top: 18px;
    right: 22px;
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
  }

  .destroy-popup-close:hover {
    background: #d61313;
    color: #ffffff;
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

  @media (max-width: 700px) {
    .elementor-location-popup.destroy-popup-open {
      padding: 12px !important;
    }

    .destroy-popup-close {
      top: 10px;
      right: 10px;
      width: 34px;
      height: 34px;
      font-size: 24px;
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
      if (!popup.querySelector(".destroy-popup-close")) {
        var closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "destroy-popup-close";
        closeButton.setAttribute("aria-label", "Закрыть заявку");
        closeButton.textContent = "×";
        closeButton.addEventListener("click", closePopup);
        popup.prepend(closeButton);
      }

      popup.addEventListener("click", function (event) {
        if (event.target === popup) closePopup();
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closePopup();
      });
    }

    document.addEventListener("click", function (event) {
      var trigger = event.target && event.target.closest('[id="заявка"], a[href="#заявка"], a[href="/#заявка"]');
      if (!trigger) return;
      openPopup(event);
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
      response.textContent = "Спасибо! Заявка принята. Менеджер свяжется с вами в ближайшее время.";
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
    "Демонтажные услуги DESTROY в Москве и Московской области.";

  return {
    title,
    description,
  };
}
