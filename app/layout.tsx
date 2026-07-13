import type { Metadata } from "next";

const siteUrl = "https://destroy-msk.ru";
const criticalCompatibilityCss = String.raw`
html{scroll-behavior:smooth;max-width:100%;overflow-x:hidden;overflow-y:auto}
body{max-width:100%;overflow-x:hidden;overflow-y:visible}
body.destroy-menu-open{overflow:hidden}
.reviews{overflow:hidden}
.reviews .prev-button{left:0!important}
.reviews .next-button{right:0!important}
.elementor-location-popup{display:none}
.elementor-location-popup.destroy-popup-open{position:fixed!important;inset:0!important;display:flex!important;align-items:center!important;justify-content:center!important;width:100vw!important;height:100vh!important;padding:20px!important;background:rgba(0,0,0,.8)!important;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);z-index:999999!important;opacity:1!important;pointer-events:all!important}
.elementor-location-popup.destroy-popup-open>.e-con,.elementor-location-popup.destroy-popup-open>.elementor-element{width:min(650px,92vw)!important;max-height:90vh!important;overflow:visible!important;position:relative!important}
.elementor-location-popup.destroy-popup-open>.e-con>.elementor-element,.elementor-location-popup.destroy-popup-open>.elementor-element>.elementor-element{max-height:90vh;overflow:auto}
.destroy-popup-close{position:absolute;top:12px;right:12px;display:flex!important;align-items:center!important;justify-content:center!important;width:38px;height:38px;padding:0!important;border:0;border-radius:999px;background:#fff;color:#111;font:32px/1 Arial,sans-serif!important;text-align:center;appearance:none;-webkit-appearance:none;cursor:pointer;z-index:1000000;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:background 160ms ease,color 160ms ease,transform 160ms ease}
.destroy-popup-close:hover{background:#d61313;color:#fff;transform:translateY(-1px)}
.wpcf7 select.wpcf7-select,.wpcf7-form-control.wpcf7-select{padding-right:44px!important;background-position:right 18px center!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3.destroy-home-hero-pin-ready{position:relative!important;height:var(--destroy-home-hero-pin-height,980px)!important;max-width:100%!important;overflow:visible!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3.destroy-home-hero-pin-ready>.wrapper{position:relative!important;top:auto!important;z-index:5!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3.destroy-home-hero-pin-ready>.wrapper.destroy-home-hero-fixed{position:fixed!important;top:var(--destroy-home-hero-pin-top,18px)!important;left:var(--destroy-home-hero-pin-left,50px)!important;width:var(--destroy-home-hero-pin-width,1160px)!important;z-index:70!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3.destroy-home-hero-pin-ready>.wrapper.destroy-home-hero-after{position:absolute!important;top:auto!important;bottom:0!important;left:0!important;width:100%!important;z-index:5!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper{position:relative!important;overflow:hidden!important;isolation:isolate;background-image:linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.34) 50%,rgba(0,0,0,.58))!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper::before{z-index:1!important;background:linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.22) 52%,rgba(0,0,0,.5))!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;pointer-events:none!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper::after{display:none!important;background-image:none!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper>.destroy-home-hero-inline-canvas{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;object-fit:cover;opacity:1;transform:scale(var(--destroy-home-hero-scale,1.035));transform-origin:center center;will-change:transform}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper>.destroy-home-hero-inline-glow{position:absolute;inset:auto -12% -24% -12%;height:58%;z-index:1;pointer-events:none;background:radial-gradient(ellipse at center,rgba(198,13,13,var(--destroy-home-hero-red,.24)),transparent 68%);filter:blur(20px);opacity:var(--destroy-home-hero-glow,.9);transform:scale(var(--destroy-home-hero-glow-scale,1));transform-origin:center bottom}
.elementor-2 .elementor-element.elementor-element-4ac6fe3 .wrapper>.wrapperItem{position:relative!important;z-index:2!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3>.wrapper>.wrapperItem:first-child .icon .content{box-sizing:border-box!important;padding-left:94px!important;overflow:hidden!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3>.wrapper>.wrapperItem:first-child .icon .content::before{left:-58px!important;width:126px!important;border-radius:999px!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3>.wrapper>.wrapperItem:first-child .icon .content::after{left:19px!important;width:42px!important;height:42px!important;z-index:1!important}
.elementor-2 .elementor-element.elementor-element-4ac6fe3>.wrapper>.wrapperItem:first-child .icon .content:nth-child(3)::after{left:17px!important;width:45px!important;height:45px!important;bottom:50%!important}
.elementor-4938 .elementor-element.elementor-element-a1da801,.destroy-article-card{position:relative!important;overflow:hidden!important;border-radius:20px!important;min-height:425px;display:flex!important;align-items:flex-end!important;text-decoration:none!important;background-size:cover!important;background-position:center!important;box-shadow:none!important}
.elementor-4938 .elementor-element.elementor-element-a1da801::before,a.destroy-article-card::before{content:""!important;position:absolute;inset:0;z-index:0;display:block!important;opacity:1!important;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.05) 28%,rgba(0,0,0,.44) 62%,rgba(0,0,0,.92) 100%)!important}
.elementor-4938 .elementor-element.elementor-element-a1da801>.e-con-inner,.destroy-article-card>.e-con-inner{position:relative!important;z-index:1!important;width:100%;min-height:inherit;margin-top:auto!important;padding:0 30px 30px!important;display:flex!important;flex-direction:column!important;justify-content:flex-end!important;align-items:flex-start!important}
.elementor-4938 .elementor-element.elementor-element-a1da801,.elementor-4938 .elementor-element.elementor-element-a1da801 *,.destroy-article-card,.destroy-article-card *{color:#fff!important;text-shadow:0 2px 14px rgba(0,0,0,.78)}
.elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-widget-post-info,.destroy-article-card .elementor-widget-post-info{margin-bottom:12px!important}
.elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-heading-title,.elementor-4938 .elementor-element.elementor-element-a1da801 .bal,.destroy-article-card .elementor-heading-title,.destroy-article-card .bal{color:#fff!important;font-family:Manrope,Arial,sans-serif!important;font-size:24px!important;line-height:1.28!important;font-weight:600!important}
.elementor-element-a8749f1{position:relative!important;overflow:hidden!important}
.elementor-element-a8749f1::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.18) 0%,rgba(0,0,0,.5) 55%,rgba(0,0,0,.76) 100%)}
.elementor-element-a8749f1>*{position:relative;z-index:1}
.elementor-element-a8749f1,.elementor-element-a8749f1 .elementor-heading-title,.elementor-element-a8749f1 .elementor-post-info,.elementor-element-a8749f1 .elementor-post-info__item,.elementor-element-a8749f1 a,.elementor-element-a8749f1 span{color:#fff!important;text-shadow:0 2px 14px rgba(0,0,0,.75)}
.destroy-site-reveal{opacity:0;transform:translate3d(0,28px,0);transition:opacity 720ms cubic-bezier(.2,.75,.2,1) var(--destroy-reveal-delay,0ms),transform 720ms cubic-bezier(.2,.75,.2,1) var(--destroy-reveal-delay,0ms);will-change:opacity,transform}
.destroy-site-reveal.is-visible{opacity:1;transform:translate3d(0,0,0)}
.destroy-site-parallax{--destroy-parallax-y:0px;transform:translate3d(0,var(--destroy-parallax-y),0);transition:transform 180ms ease-out;will-change:transform}
.destroy-article-card{transform-style:preserve-3d;transition:transform 420ms cubic-bezier(.2,.75,.2,1),box-shadow 420ms ease}
.destroy-article-card:hover{transform:perspective(900px) rotateX(2deg) rotateY(-2deg) translateY(-6px);box-shadow:0 24px 55px rgba(0,0,0,.24)}
@media (prefers-reduced-motion:reduce){.destroy-site-reveal,.destroy-site-parallax,.destroy-article-card{transition:none!important;transform:none!important}.destroy-site-reveal{opacity:1!important}}
.elementor-6457 .elementor-element.elementor-element-d308b40,.elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-heading-title,.elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-label,.elementor-6457 .elementor-element.elementor-element-d308b40 label,.elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-option,.elementor-6457 .elementor-element.elementor-element-d308b40 .elementor-field-subgroup label{color:#fff!important}
.elementor-6457 .elementor-element.elementor-element-c92da57 .elementor-field-group>label{color:rgba(255,255,255,.72)!important}
.elementor-6457 input[type=file]{width:100%;min-height:38px;border:0!important;border-radius:999px!important;background:rgba(255,255,255,.1)!important;color:#fff!important;font:500 14px/1.2 Manrope,Arial,sans-serif!important}
.elementor-6457 input[type=file]::file-selector-button{margin-right:12px;padding:11px 20px;border:0;border-radius:999px;background:#c91515;color:#fff;font:700 14px/1 Manrope,Arial,sans-serif;cursor:pointer;transition:background 160ms ease,transform 160ms ease}
.elementor-6457 input[type=file]::file-selector-button:hover{background:#e11a1a;transform:translateY(-1px)}
.destroy-scroll-scene{position:relative;width:var(--destroy-scene-vw,100vw);min-height:150vh;margin-left:calc(50% - var(--destroy-scene-half-vw,50vw));margin-right:calc(50% - var(--destroy-scene-half-vw,50vw));isolation:isolate}
.destroy-scroll-scene__sticky{position:sticky;top:0;min-height:100vh;overflow:visible;border-radius:0;background:#201818;isolation:isolate;box-shadow:none;opacity:var(--destroy-scene-soft-opacity,1);will-change:opacity}
.destroy-scroll-scene__sticky.is-fixed{position:fixed;top:0;left:0;width:var(--destroy-scene-vw,100vw);z-index:40}
.destroy-scroll-scene__sticky.is-after{position:absolute;top:auto;bottom:0;left:0;width:var(--destroy-scene-vw,100vw)}
.destroy-scroll-scene__canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none}
.destroy-scroll-scene__sticky::before{content:"";position:absolute;inset:-20%;z-index:1;pointer-events:none;background:radial-gradient(circle at 50% 58%,rgba(176,18,18,var(--destroy-scene-glow-alpha,.24)),transparent 32%),linear-gradient(120deg,rgba(0,0,0,.74),rgba(0,0,0,.22) 48%,rgba(0,0,0,.68));mix-blend-mode:normal;transform:scale(var(--destroy-scene-glow-scale,1));transform-origin:center center;will-change:transform,opacity}
.destroy-scroll-scene__sticky::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 88px),repeating-linear-gradient(0deg,rgba(255,255,255,.03) 0 1px,transparent 1px 88px);opacity:var(--destroy-scene-grid-opacity,.16)}
.destroy-scroll-scene__shade{position:absolute;inset:auto -18% -35% -18%;height:52%;z-index:2;pointer-events:none;background:radial-gradient(ellipse at center,rgba(176,18,18,var(--destroy-scene-shade-alpha,.22)),transparent 64%);transform:scale(var(--destroy-scene-shade-scale,1));transform-origin:center bottom;filter:blur(18px)}
.destroy-scroll-scene__overlay{position:relative!important;z-index:3!important;width:min(1120px,calc(var(--destroy-scene-vw,100vw) - 48px));min-height:100vh;height:auto;margin:0 auto;background-image:none!important;background-color:transparent!important;border-radius:0!important}
.destroy-scroll-scene__overlay::before{background-image:none!important}
.destroy-scroll-scene__overlay>*{position:relative;z-index:3}
.destroy-scroll-scene__overlay .contentItem{opacity:1!important;transform:none!important}
.destroy-scroll-scene__overlay.destroy-scroll-scene--animated .contentItem{--destroy-item-progress:0;--destroy-item-x:0px;--destroy-item-y:0px;--destroy-item-rx:0deg;--destroy-item-ry:0deg;opacity:var(--destroy-item-progress)!important;transform:translate3d(var(--destroy-item-x),calc((1 - var(--destroy-item-progress)) * 42px + var(--destroy-item-y)),0) rotateX(var(--destroy-item-rx)) rotateY(var(--destroy-item-ry))!important;transform-style:preserve-3d;will-change:opacity,transform;transition:opacity 180ms linear,transform 260ms cubic-bezier(.2,.75,.2,1)}
@media (prefers-reduced-motion:reduce){.destroy-scroll-scene__overlay .contentItem{opacity:1!important;transform:none!important;transition:none!important}}
.destroy-scroll-scene .quizle,.destroy-scroll-scene .quizle-body,.destroy-scroll-scene .quizle-questions,.destroy-scroll-scene .quizle-question__body{height:auto!important;max-height:none!important;overflow:visible!important}
.destroy-scroll-scene .quizle-answers{max-height:none!important;overflow:visible!important;padding-right:0!important;margin-right:0!important;scrollbar-width:auto;scrollbar-gutter:auto;overscroll-behavior:auto}
html body .destroy-scroll-scene .quizle.quizle--view-slides .quizle-body .quizle-questions .quizle-question .quizle-answers{height:auto!important;max-height:none!important;overflow:visible!important;padding-right:0!important;margin-right:0!important}
.destroy-scroll-scene .quizle-answer{flex:0 0 auto!important}
.destroy-scroll-scene .quizle-answer label{min-height:56px!important;padding-top:12px!important;padding-bottom:12px!important}
@media (max-width:700px){.destroy-scroll-scene{min-height:140vh}.destroy-scroll-scene__sticky{top:0;min-height:100vh}.destroy-scroll-scene__overlay{width:min(calc(var(--destroy-scene-vw,100vw) - 20px),100%);min-height:100vh}.destroy-scroll-scene .quizle-answer label{min-height:52px!important}}
@media (max-width:1200px){.elementor-43 .elementor-element.elementor-element-ab81c16 .megaMenu{position:static!important}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuIcon{position:relative;z-index:1000000;width:40px;height:40px;padding:0;border:1px solid rgba(0,0,0,.12);border-radius:999px;background:#fff;align-items:center;justify-content:center;gap:4px;box-shadow:0 8px 24px rgba(0,0,0,.08)}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuIcon span{width:18px;height:2px;border-radius:3px;transition:transform 180ms ease,opacity 180ms ease}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems{position:fixed!important;inset:0!important;display:flex!important;width:100vw!important;min-height:100dvh!important;padding:96px 24px 36px!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;gap:22px!important;background:rgba(255,255,255,.97)!important;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:none!important;text-align:center!important;z-index:999998!important;opacity:0;pointer-events:none;transform:translateY(-10px);transition:opacity 220ms ease,transform 220ms ease}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems.active{opacity:1;pointer-events:auto;transform:translateY(0)}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuItem a{color:#111!important;font-size:16px!important;font-weight:700!important;line-height:1.2!important;letter-spacing:0!important}}
@media (max-width:700px){.elementor-location-popup.destroy-popup-open{padding:12px!important}.destroy-popup-close{top:8px;right:8px;width:34px;height:34px;font-size:24px}.elementor-4938 .elementor-element.elementor-element-a1da801,.destroy-article-card{min-height:350px;border-radius:18px!important}.elementor-4938 .elementor-element.elementor-element-a1da801>.e-con-inner,.destroy-article-card>.e-con-inner{padding:0 22px 24px!important}.elementor-4938 .elementor-element.elementor-element-a1da801 .elementor-heading-title,.elementor-4938 .elementor-element.elementor-element-a1da801 .bal,.destroy-article-card .elementor-heading-title,.destroy-article-card .bal{font-size:20px!important}.elementor-43 .elementor-element.elementor-element-ab81c16 .menuItems{padding-top:88px!important;gap:20px!important}}
`;
const criticalCompatibilityJs = String.raw`
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

    function appendMenuLink(list, title, href) {
      if (!list || list.querySelector('a[href="' + href + '"]')) return;
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = href;
      link.textContent = title;
      item.appendChild(link);
      list.appendChild(item);
    }

    document.querySelectorAll(".menuItems").forEach(function (menu) {
      var servicesLink = Array.prototype.find.call(menu.querySelectorAll(".menuItem > a.menuLink"), function (link) {
        return (link.textContent || "").trim() === "\u041d\u0430\u0448\u0438 \u0443\u0441\u043b\u0443\u0433\u0438";
      });
      if (servicesLink) servicesLink.href = "/uslugi/";

      appendMenuLink(menu.querySelector("#private ul"), "\u0420\u0430\u0441\u0447\u0438\u0441\u0442\u043a\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u043e\u0432", "/raschistka-uchastkov/");
      appendMenuLink(menu.querySelector("#private ul"), "\u0421\u043f\u0438\u043b \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432", "/spil-i-udalenie-derevev/");
      appendMenuLink(menu.querySelector("#private ul"), "\u0420\u0430\u0437\u0431\u043e\u0440 \u0432\u0435\u0442\u0445\u0438\u0445 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0439", "/razbor-vethih-stroenij/");
      appendMenuLink(menu.querySelector("#private ul"), "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0437\u0430\u0431\u043e\u0440\u043e\u0432", "/demontazh-zabora/");
      appendMenuLink(menu.querySelector("#internal ul"), "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0438", "/demontazh-shtukaturki/");
      appendMenuLink(menu.querySelector("#internal ul"), "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0441\u0442\u044f\u0436\u043a\u0438", "/demontazh-styazhki/");
      appendMenuLink(menu.querySelector("#large ul"), "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436 \u0442\u0440\u043e\u0442\u0443\u0430\u0440\u043d\u043e\u0439 \u043f\u043b\u0438\u0442\u043a\u0438 \u0438 \u0431\u043e\u0440\u0434\u044e\u0440\u043e\u0432", "/demontazh-trotuarnoj-plitki-bordyurov/");
    });

    var extraMenuItems = [
      ["\u041d\u0430\u0448\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u044b", "/nashi-obekty/"],
      ["\u0412\u0438\u0434\u0435\u043e", "/nashi-video/"],
    ];
    document.querySelectorAll(".menuItems").forEach(function (menu) {
      extraMenuItems.forEach(function (item) {
        if (menu.querySelector('a[href="' + item[1] + '"]')) return;
        var wrapper = document.createElement("div");
        wrapper.className = "menuItem";
        var link = document.createElement("a");
        link.href = item[1];
        link.textContent = item[0];
        wrapper.appendChild(link);
        menu.appendChild(wrapper);
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

    var scrollSceneItems = [];
    var scrollSceneFrameCount = 21;
    var scrollSceneFramePath = "/videos/grunge-frames/frame_";
    var scrollSceneSelector = [
      ".elementor-global-4659",
      ".elementor-global-5598",
      ".elementor-element-4659",
      ".elementor-element-27cc395"
    ].join(",");
    var scrollSceneSurfaceSelector = [
      ".elementor-global-4659 > .wrapper",
      ".elementor-global-5598 > .wrapper",
      ".elementor-element-4659 > .wrapper",
      ".elementor-element-27cc395 > .wrapper"
    ].join(",");

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function updateScrollSceneViewportVars() {
      var width = document.documentElement.clientWidth || window.innerWidth || 0;
      document.documentElement.style.setProperty("--destroy-scene-vw", width + "px");
      document.documentElement.style.setProperty("--destroy-scene-half-vw", (width / 2) + "px");
    }

    function shouldUseScrollScene(element) {
      if (!element || element.classList.contains("destroy-scroll-scene__overlay")) return false;
      if (element.closest(".elementor-location-popup")) return false;
      if (element.matches(scrollSceneSurfaceSelector)) return true;
      if (element.matches(scrollSceneSelector)) return false;
      if (!element.classList || !element.classList.contains("elementor-element")) return false;
      if ((element.offsetHeight || element.getBoundingClientRect().height) < 180) return false;
      var background = "";
      try {
        background = window.getComputedStyle(element).backgroundImage || "";
      } catch (error) {}
      return /grunge|scratch|scratched/i.test(background);
    }

    function getScrollSceneSurface(element) {
      if (element && element.matches(scrollSceneSelector)) {
        return element.querySelector(":scope > .wrapper") || element;
      }
      return element;
    }

    function getScrollSceneFrameUrl(index) {
      var number = String(index + 1).padStart(4, "0");
      return scrollSceneFramePath + number + ".jpg";
    }

    function resizeScrollScene(item) {
      var rect = item.sticky.getBoundingClientRect();
      var ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      var width = Math.max(1, Math.round(rect.width * ratio));
      var height = Math.max(1, Math.round(rect.height * ratio));
      if (item.canvas.width !== width || item.canvas.height !== height) {
        item.canvas.width = width;
        item.canvas.height = height;
        return true;
      }
      return false;
    }

    function findNearestLoadedFrame(item, index) {
      if (item.frames[index]) return index;
      for (var distance = 1; distance < scrollSceneFrameCount; distance += 1) {
        var before = index - distance;
        var after = index + distance;
        if (before >= 0 && item.frames[before]) return before;
        if (after < scrollSceneFrameCount && item.frames[after]) return after;
      }
      return -1;
    }

    function loadScrollSceneFrame(item, index) {
      index = Math.round(clamp(index, 0, scrollSceneFrameCount - 1));
      if (item.frames[index] || item.loading[index]) return;
      item.loading[index] = true;
      var image = new Image();
      image.decoding = "async";
      image.onload = function () {
        item.frames[index] = image;
        item.loading[index] = false;
        if (index === item.wantedFrame || item.currentFrame < 0) {
          drawScrollSceneFrame(item, index);
        }
      };
      image.onerror = function () {
        item.loading[index] = false;
      };
      image.src = getScrollSceneFrameUrl(index);
    }

    function preloadScrollSceneFrames(item, centerIndex) {
      for (var offset = -4; offset <= 4; offset += 1) {
        loadScrollSceneFrame(item, centerIndex + offset);
      }
      if (item.preloadStarted) return;
      item.preloadStarted = true;
      var loadIndex = 0;
      var run = function () {
        var loadedThisPass = 0;
        while (loadIndex < scrollSceneFrameCount && loadedThisPass < 4) {
          loadScrollSceneFrame(item, loadIndex);
          loadIndex += 1;
          loadedThisPass += 1;
        }
        if (loadIndex < scrollSceneFrameCount) {
          if ("requestIdleCallback" in window) {
            window.requestIdleCallback(run, { timeout: 600 });
          } else {
            window.setTimeout(run, 80);
          }
        }
      };
      run();
    }

    function drawScrollSceneFrame(item, index) {
      if (!item.context) return;
      item.wantedFrame = Math.round(clamp(index, 0, scrollSceneFrameCount - 1));
      var frameIndex = findNearestLoadedFrame(item, item.wantedFrame);
      if (frameIndex < 0) {
        loadScrollSceneFrame(item, item.wantedFrame);
        return;
      }
      var resized = resizeScrollScene(item);
      var image = item.frames[frameIndex];
      var canvas = item.canvas;
      var context = item.context;
      if (item.currentFrame === frameIndex && !resized) return;
      var imageWidth = image.naturalWidth || image.width || 16;
      var imageHeight = image.naturalHeight || image.height || 9;
      var scale = Math.max(canvas.width / imageWidth, canvas.height / imageHeight);
      var sourceWidth = canvas.width / scale;
      var sourceHeight = canvas.height / scale;
      var sourceX = (imageWidth - sourceWidth) / 2;
      var sourceY = (imageHeight - sourceHeight) / 2;
      try {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
        item.currentFrame = frameIndex;
        item.sticky.setAttribute("data-frame", String(frameIndex + 1));
      } catch (error) {}
    }

    function updateScrollScenes() {
      scrollSceneItems.forEach(function (item) {
        var sceneRect = item.scene.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
        var stickyHeight = item.sticky.offsetHeight || viewportHeight;
        item.sticky.classList.toggle("is-fixed", sceneRect.top <= 0 && sceneRect.bottom >= stickyHeight);
        item.sticky.classList.toggle("is-after", sceneRect.bottom < stickyHeight);
        var scrollable = Math.max(1, sceneRect.height - viewportHeight);
        var targetProgress = clamp(-sceneRect.top / scrollable, 0, 1);
        item.progress = targetProgress;
        var edgeSoftness = clamp(Math.min(item.progress, 1 - item.progress) / 0.18, 0, 1);
        item.sticky.style.setProperty("--destroy-scene-progress", item.progress.toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-soft-opacity", (0.985 + edgeSoftness * 0.015).toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-glow-scale", (0.92 + item.progress * 0.34).toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-glow-alpha", (0.2 + item.progress * 0.2).toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-grid-opacity", (0.16 + item.progress * 0.16).toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-shade-scale", (0.82 + item.progress * 0.5).toFixed(3));
        item.sticky.style.setProperty("--destroy-scene-shade-alpha", (0.14 + item.progress * 0.3).toFixed(3));
        item.contentItems.forEach(function (contentItem, index) {
          var start = 0.045 + index * 0.115;
          var reveal = clamp((item.progress - start) / 0.15, 0, 1);
          contentItem.style.setProperty("--destroy-item-progress", reveal.toFixed(3));
        });
        var frameIndex = Math.round(item.progress * (scrollSceneFrameCount - 1));
        drawScrollSceneFrame(item, frameIndex);
        preloadScrollSceneFrames(item, frameIndex);
      });
      if (scrollSceneItems.length) window.requestAnimationFrame(updateScrollScenes);
    }

    function initScrollScene(target) {
      target = getScrollSceneSurface(target);
      if (!shouldUseScrollScene(target)) return;
      var parent = target.parentNode;
      if (!parent) return;
      target.classList.add("destroy-scroll-scene__overlay");
      var scene = document.createElement("section");
      scene.className = "destroy-scroll-scene";
      scene.setAttribute("aria-label", "Scroll animation scene");
      var sticky = document.createElement("div");
      sticky.className = "destroy-scroll-scene__sticky";
      var canvas = document.createElement("canvas");
      canvas.className = "destroy-scroll-scene__canvas";
      canvas.setAttribute("aria-hidden", "true");
      var shade = document.createElement("div");
      shade.className = "destroy-scroll-scene__shade";
      parent.insertBefore(scene, target);
      sticky.appendChild(canvas);
      sticky.appendChild(shade);
      sticky.appendChild(target);
      scene.appendChild(sticky);
      var item = {
        scene: scene,
        sticky: sticky,
        canvas: canvas,
        context: canvas.getContext("2d"),
        frames: [],
        loading: {},
        currentFrame: -1,
        wantedFrame: 0,
        preloadStarted: false,
        progress: 0,
        overlay: target,
        contentItems: Array.prototype.slice.call(target.querySelectorAll(".contentItem"))
      };
      if (item.contentItems.length) target.classList.add("destroy-scroll-scene--animated");
      target.addEventListener("pointermove", function (event) {
        item.contentItems.forEach(function (contentItem) {
          var rect = contentItem.getBoundingClientRect();
          var x = clamp((event.clientX - (rect.left + rect.width / 2)) / Math.max(1, rect.width), -1, 1);
          var y = clamp((event.clientY - (rect.top + rect.height / 2)) / Math.max(1, rect.height), -1, 1);
          contentItem.style.setProperty("--destroy-item-x", (x * 7).toFixed(2) + "px");
          contentItem.style.setProperty("--destroy-item-y", (y * 5).toFixed(2) + "px");
          contentItem.style.setProperty("--destroy-item-rx", (y * -2.8).toFixed(2) + "deg");
          contentItem.style.setProperty("--destroy-item-ry", (x * 2.8).toFixed(2) + "deg");
        });
      });
      target.addEventListener("pointerleave", function () {
        item.contentItems.forEach(function (contentItem) {
          contentItem.style.setProperty("--destroy-item-x", "0px");
          contentItem.style.setProperty("--destroy-item-y", "0px");
          contentItem.style.setProperty("--destroy-item-rx", "0deg");
          contentItem.style.setProperty("--destroy-item-ry", "0deg");
        });
      });
      scrollSceneItems.push(item);
      resizeScrollScene(item);
      loadScrollSceneFrame(item, 0);
      preloadScrollSceneFrames(item, 0);
    }

    updateScrollSceneViewportVars();
    Array.prototype.slice.call(document.querySelectorAll(scrollSceneSurfaceSelector + ", .elementor-element")).forEach(initScrollScene);
    if (scrollSceneItems.length) {
      window.addEventListener("resize", function () {
        updateScrollSceneViewportVars();
        scrollSceneItems.forEach(function (item) {
          resizeScrollScene(item);
          drawScrollSceneFrame(item, item.wantedFrame || 0);
        });
      });
      updateScrollScenes();
    }

    var homeHeroFrameCount = 17;
    var homeHeroFramePath = "/videos/home-hero-frames/frame_";

    function getHomeHeroFrameUrl(index) {
      var number = String(index + 1).padStart(4, "0");
      return homeHeroFramePath + number + ".jpg";
    }

    function drawCoverImage(context, image, canvas) {
      var imageWidth = image.naturalWidth || image.width || 16;
      var imageHeight = image.naturalHeight || image.height || 9;
      var cropX = imageWidth * 0.078;
      var croppedWidth = imageWidth - cropX * 2;
      var scale = Math.max(canvas.width / croppedWidth, canvas.height / imageHeight);
      var sourceWidth = canvas.width / scale;
      var sourceHeight = canvas.height / scale;
      var sourceX = cropX + (croppedWidth - sourceWidth) / 2;
      var sourceY = (imageHeight - sourceHeight) / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);
    }

    function initHomeHeroInlineAnimation() {
      if (window.__destroyWorkflowEnabled || document.querySelector(".destroy-workflow-scroll")) return;
      var hero = document.querySelector(".elementor-2 .elementor-element-4ac6fe3 > .wrapper");
      if (!hero || hero.classList.contains("destroy-home-hero-inline-ready")) return;
      hero.classList.add("destroy-home-hero-inline-ready");
      var pinContainer = hero.closest(".elementor-2 .elementor-element-4ac6fe3");
      if (pinContainer) pinContainer.classList.add("destroy-home-hero-pin-ready");
      var canvas = document.createElement("canvas");
      canvas.className = "destroy-home-hero-inline-canvas";
      canvas.setAttribute("aria-hidden", "true");
      var glow = document.createElement("div");
      glow.className = "destroy-home-hero-inline-glow";
      hero.insertBefore(glow, hero.firstChild);
      hero.insertBefore(canvas, glow);

      var context = canvas.getContext("2d");
      if (!context) return;
      var frames = [];
      var loading = {};
      var wantedFrame = 0;
      var currentFrame = -1;
      var preloadStarted = false;
      var ticking = false;
      var pinRange = 440;
      var pinOffset = 18;

      function resize() {
        var rect = hero.getBoundingClientRect();
        var ratio = Math.min(window.devicePixelRatio || 1, 1.45);
        var width = Math.max(1, Math.round(rect.width * ratio));
        var height = Math.max(1, Math.round(rect.height * ratio));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          currentFrame = -1;
        }
      }

      function updatePinGeometry() {
        if (!pinContainer) return;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
        var heroHeight = hero.offsetHeight || hero.getBoundingClientRect().height || 420;
        pinRange = Math.round(Math.max(340, Math.min(520, viewportHeight * 0.62)));
        pinOffset = Math.round(Math.max(10, Math.min(28, viewportHeight * 0.03)));
        pinContainer.style.setProperty("--destroy-home-hero-pin-height", Math.ceil(heroHeight + pinRange) + "px");
        pinContainer.style.setProperty("--destroy-home-hero-pin-top", pinOffset + "px");
      }

      function setPinMode(mode) {
        if (!pinContainer) return;
        if (mode === "fixed") {
          var rect = pinContainer.getBoundingClientRect();
          hero.style.setProperty("--destroy-home-hero-pin-left", Math.round(rect.left) + "px");
          hero.style.setProperty("--destroy-home-hero-pin-width", Math.round(rect.width) + "px");
        }
        hero.classList.toggle("destroy-home-hero-fixed", mode === "fixed");
        hero.classList.toggle("destroy-home-hero-after", mode === "after");
      }

      function nearest(index) {
        if (frames[index]) return index;
        for (var distance = 1; distance < homeHeroFrameCount; distance += 1) {
          var before = index - distance;
          var after = index + distance;
          if (before >= 0 && frames[before]) return before;
          if (after < homeHeroFrameCount && frames[after]) return after;
        }
        return -1;
      }

      function loadFrame(index) {
        index = Math.round(clamp(index, 0, homeHeroFrameCount - 1));
        if (frames[index] || loading[index]) return;
        loading[index] = true;
        var image = new Image();
        image.decoding = "async";
        image.onload = function () {
          frames[index] = image;
          loading[index] = false;
          if (index === wantedFrame || currentFrame < 0) drawFrame(wantedFrame);
        };
        image.onerror = function () {
          loading[index] = false;
        };
        image.src = getHomeHeroFrameUrl(index);
      }

      function preload(center) {
        for (var offset = -2; offset <= 2; offset += 1) loadFrame(center + offset);
        if (preloadStarted) return;
        preloadStarted = true;
        var next = 0;
        var run = function () {
          var loaded = 0;
          while (next < homeHeroFrameCount && loaded < 2) {
            loadFrame(next);
            next += 1;
            loaded += 1;
          }
          if (next < homeHeroFrameCount) {
            if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 500 });
            else window.setTimeout(run, 80);
          }
        };
        run();
      }

      function drawFrame(index) {
        resize();
        wantedFrame = Math.round(clamp(index, 0, homeHeroFrameCount - 1));
        var frameIndex = nearest(wantedFrame);
        if (frameIndex < 0) {
          loadFrame(wantedFrame);
          return;
        }
        if (currentFrame === frameIndex) return;
        try {
          drawCoverImage(context, frames[frameIndex], canvas);
          currentFrame = frameIndex;
          hero.setAttribute("data-hero-frame", String(frameIndex + 1));
        } catch (error) {}
      }

      function update() {
        ticking = false;
        var rect = pinContainer ? pinContainer.getBoundingClientRect() : hero.getBoundingClientRect();
        if (pinContainer) {
          var heroHeight = hero.offsetHeight || hero.getBoundingClientRect().height || 420;
          if (rect.top <= pinOffset && rect.bottom > pinOffset + heroHeight) setPinMode("fixed");
          else if (rect.bottom <= pinOffset + heroHeight) setPinMode("after");
          else setPinMode("normal");
        }
        var progress = pinContainer ? clamp((pinOffset - rect.top) / Math.max(1, pinRange), 0, 1) : 0;
        var frameIndex = Math.round(progress * (homeHeroFrameCount - 1));
        hero.style.setProperty("--destroy-home-hero-scale", (1.04 - progress * 0.024).toFixed(3));
        hero.style.setProperty("--destroy-home-hero-red", (0.18 + progress * 0.18).toFixed(3));
        hero.style.setProperty("--destroy-home-hero-glow", (0.78 + progress * 0.2).toFixed(3));
        hero.style.setProperty("--destroy-home-hero-glow-scale", (0.92 + progress * 0.22).toFixed(3));
        drawFrame(frameIndex);
        preload(frameIndex);
      }

      function requestUpdate() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      }

      loadFrame(0);
      preload(0);
      updatePinGeometry();
      window.setTimeout(updatePinGeometry, 600);
      update();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", function () {
        updatePinGeometry();
        resize();
        drawFrame(wantedFrame);
        requestUpdate();
      });
    }

    initHomeHeroInlineAnimation();

    var calcObject = document.getElementById("calc-object");
    var calcArea = document.getElementById("calc-area");
    var calcWork = document.getElementById("calc-work");
    var calcTrash = document.getElementById("calc-trash");
    var calcTotal = document.getElementById("calc-total");
    var calcDetails = document.getElementById("calc-details");
    var calcButton = document.getElementById("calc-button");
    if (calcObject && calcArea && calcWork && calcTrash && calcTotal && calcDetails) {
      var objectRate = { flat: 900, house: 1200, commercial: 1100, site: 750 };
      var workRate = { light: 0.75, standard: 1, hard: 1.45, tech: 1.75 };
      var formatter = new Intl.NumberFormat("ru-RU");
      var calculateDemolition = function () {
        var meters = Math.max(1, Number(calcArea.value || 1));
        var base = (objectRate[calcObject.value] || 900) * meters * (workRate[calcWork.value] || 1);
        if (calcTrash.checked) base += meters * 350;
        calcTotal.textContent = "\u043e\u0442 " + formatter.format(Math.round(base / 100) * 100) + " \u20bd";
        calcDetails.textContent =
          "\u0420\u0430\u0441\u0447\u0435\u0442 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439: " +
          meters +
          " \u043c2, " +
          calcObject.options[calcObject.selectedIndex].text.toLowerCase() +
          ", " +
          calcWork.options[calcWork.selectedIndex].text.toLowerCase() +
          (calcTrash.checked ? ", \u0432\u044b\u0432\u043e\u0437 \u043c\u0443\u0441\u043e\u0440\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d." : ", \u0431\u0435\u0437 \u0432\u044b\u0432\u043e\u0437\u0430 \u043c\u0443\u0441\u043e\u0440\u0430.");
      };
      [calcObject, calcArea, calcWork, calcTrash].forEach(function (element) {
        element.addEventListener("input", calculateDemolition);
        element.addEventListener("change", calculateDemolition);
      });
      if (calcButton) calcButton.addEventListener("click", calculateDemolition);
      calculateDemolition();
    }

    var motionTargets = Array.prototype.slice.call(document.querySelectorAll(".elementor-section, .elementor-location-footer, .destroy-rendered-works > *"));
    var motionObserver = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }) : null;
    motionTargets.forEach(function (element, index) {
      if (element.closest(".destroy-workflow-scroll, .destroy-scroll-scene, .elementor-location-header")) return;
      element.classList.add("destroy-site-reveal");
      element.style.setProperty("--destroy-reveal-delay", Math.min(index * 45, 280) + "ms");
      if (motionObserver) motionObserver.observe(element);
      else element.classList.add("is-visible");
    });

    var parallaxTargets = Array.prototype.slice.call(document.querySelectorAll("img, .destroy-article-card")).filter(function (element) {
      var rect = element.getBoundingClientRect();
      return element.classList.contains("destroy-article-card") || (element.naturalWidth > 500 || rect.height > 160);
    });
    parallaxTargets.forEach(function (element) {
      if (element.closest(".elementor-location-header, .destroy-workflow-scroll, .destroy-scroll-scene")) return;
      element.classList.add("destroy-site-parallax");
    });
    var parallaxTicking = false;
    function updateSiteParallax() {
      parallaxTicking = false;
      var viewportHeight = window.innerHeight || 1;
      parallaxTargets.forEach(function (element) {
        if (!element.classList.contains("destroy-site-parallax")) return;
        var rect = element.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > viewportHeight + 80) return;
        var offset = ((viewportHeight * 0.5 - (rect.top + rect.height * 0.5)) / viewportHeight) * 18;
        element.style.setProperty("--destroy-parallax-y", offset.toFixed(2) + "px");
      });
    }
    function requestSiteParallax() {
      if (parallaxTicking) return;
      parallaxTicking = true;
      window.requestAnimationFrame(updateSiteParallax);
    }
    if (parallaxTargets.length) {
      requestSiteParallax();
      window.addEventListener("scroll", requestSiteParallax, { passive: true });
      window.addEventListener("resize", requestSiteParallax);
    }

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
`;

const destroyWorkflowBootJs = String.raw`
(function(){
  window.__destroyWorkflowEnabled = location.pathname === "/";
  if (window.__destroyWorkflowEnabled) document.documentElement.classList.add("destroy-workflow-enabled","destroy-workflow-booting");
})();
`;

const destroyWorkflowCss = String.raw`
html.destroy-workflow-enabled{overflow-x:clip!important;overflow-y:auto!important;scroll-behavior:auto!important}
html.destroy-workflow-booting .elementor-2 .elementor-element-4ac6fe3{visibility:hidden!important}
body.destroy-workflow-page{overflow-x:clip!important;overflow-y:visible!important}
body.destroy-workflow-page .elementor-location-header{position:relative!important;top:auto!important;z-index:100!important;margin:0 0 8px!important;background:transparent!important;opacity:1!important;visibility:visible!important;pointer-events:auto!important;transform:none!important;transition:none!important}
body.destroy-workflow-page .elementor-location-header .headerWrapper{transition:.1s ease-in-out!important;padding:0!important;background:transparent!important;border-radius:0!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
body.destroy-workflow-page .elementor-location-header .headerWrapper.destroy-header-scrolled{padding:10px 18px!important;background:rgba(255,255,255,.85)!important;border-radius:20px!important;backdrop-filter:blur(25px)!important;-webkit-backdrop-filter:blur(25px)!important}
.destroy-workflow-page .destroy-workflow-original-hidden{display:none!important}
.destroy-workflow-scroll{--destroy-workflow-progress:0;position:relative;width:100vw;height:400vh;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);background:#111;color:#fff;isolation:isolate}
.destroy-workflow-scroll *{box-sizing:border-box}
.destroy-workflow-scroll__sticky{position:sticky;top:0;height:100vh;min-height:100svh;overflow:hidden;background:#111 center/118% auto no-repeat;isolation:isolate}
.destroy-workflow-scroll__sticky.is-pinned{height:100vh;min-height:100svh}
.destroy-workflow-scroll__canvas{position:absolute;inset:-1%;z-index:0;width:102%;height:102%;display:block;transform:scale(1.01);transform-origin:62% 52%;will-change:transform}
.destroy-workflow-scroll__canvas--next{z-index:1;opacity:0;pointer-events:none;transition:opacity 560ms cubic-bezier(.2,.75,.2,1)}
.destroy-workflow-scroll__canvas--next.is-visible{opacity:1}
.destroy-workflow-scroll__sticky.is-playing .destroy-workflow-scroll__canvas{animation:destroy-workflow-camera 520ms cubic-bezier(.18,.72,.2,1) both}
.destroy-workflow-scroll__overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(8,8,8,.86) 0%,rgba(8,8,8,.67) 36%,rgba(8,8,8,.24) 66%,rgba(8,8,8,.48) 100%),linear-gradient(0deg,rgba(0,0,0,.5) 0%,transparent 34%,rgba(0,0,0,.12) 100%);pointer-events:none}
.destroy-workflow-scroll__texture{position:absolute;inset:-12%;z-index:2;pointer-events:none;background:repeating-linear-gradient(90deg,rgba(255,255,255,.034) 0 1px,transparent 1px 96px),repeating-linear-gradient(0deg,rgba(255,255,255,.028) 0 1px,transparent 1px 96px);opacity:.2;transform:translate3d(calc(var(--destroy-workflow-progress) * -28px),calc(var(--destroy-workflow-progress) * 18px),0);transition:transform 420ms cubic-bezier(.2,.75,.2,1)}
.destroy-workflow-scroll__accent{position:absolute;left:0;right:0;bottom:0;z-index:2;height:22%;pointer-events:none;background:linear-gradient(0deg,rgba(176,18,18,.3),transparent);opacity:.76}
.destroy-workflow-scroll__cut{position:absolute;inset:0;z-index:3;pointer-events:none;opacity:0;transform:translateX(-105%);background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.03) 44%,rgba(255,255,255,.3) 50%,rgba(176,18,18,.2) 53%,transparent 62%)}
.destroy-workflow-scroll__sticky.is-frame-cut .destroy-workflow-scroll__cut{animation:destroy-workflow-cut 260ms cubic-bezier(.22,.68,.24,1) both}
.destroy-workflow-scroll__stage{position:relative;z-index:4;height:100%;width:100%}
.destroy-workflow-scroll__inner{position:relative;width:min(1180px,calc(100% - 96px));height:100%;margin:0 auto}
.destroy-workflow-scroll__slides{position:relative;width:min(760px,72vw);height:100%}
.destroy-workflow-scroll__step{position:absolute;top:50%;left:0;width:100%;margin:0;opacity:0;visibility:hidden;transform:translate3d(0,calc(-50% + 42px),0);transition:opacity 180ms ease,transform 380ms cubic-bezier(.2,.82,.2,1),visibility 0s linear 380ms;pointer-events:none}
.destroy-workflow-scroll__step.is-before{transform:translate3d(0,calc(-50% - 42px),0)}
.destroy-workflow-scroll__step.is-active{opacity:1;visibility:visible;transform:translate3d(0,-50%,0);transition-delay:90ms,40ms,0s;pointer-events:auto}
.destroy-workflow-scroll__meta{display:flex;align-items:center;gap:14px;margin:0 0 22px;color:rgba(255,255,255,.72);font:700 12px/1.2 Manrope,Arial,sans-serif;text-transform:uppercase;letter-spacing:0}
.destroy-workflow-scroll__meta::before{content:"";display:block;width:44px;height:3px;background:#b01212}
.destroy-workflow-scroll__meta strong{color:#fff;font-weight:800}
.destroy-workflow-scroll__title{max-width:740px;margin:0;color:#fff;font-family:"Merriweather",Georgia,serif;font-size:clamp(38px,4.3vw,62px);font-weight:700;line-height:1.08;letter-spacing:0;text-wrap:balance;text-shadow:0 4px 28px rgba(0,0,0,.34)}
.destroy-workflow-scroll__title span{display:block;margin-top:5px;color:#ff3636}
.destroy-workflow-scroll__text{max-width:650px;margin:23px 0 0;color:rgba(255,255,255,.88);font:500 clamp(15px,1.35vw,19px)/1.55 Manrope,Arial,sans-serif;text-shadow:0 2px 16px rgba(0,0,0,.44)}
.destroy-workflow-scroll__details{display:flex;align-items:flex-start;gap:38px;margin-top:28px}
.destroy-workflow-scroll__points{display:grid;gap:12px;min-width:300px;margin:0;padding:0;list-style:none}
.destroy-workflow-scroll__points li{position:relative;margin:0;padding-left:27px;color:#fff;font:700 14px/1.4 Manrope,Arial,sans-serif}
.destroy-workflow-scroll__points li::before{content:"";position:absolute;left:0;top:.38em;width:10px;height:10px;border:2px solid #ff3636;transform:rotate(45deg)}
.destroy-workflow-scroll__fact{display:flex;min-width:158px;flex-direction:column;margin:0;padding-left:20px;border-left:3px solid #b01212;color:rgba(255,255,255,.68);font:600 12px/1.35 Manrope,Arial,sans-serif;text-transform:uppercase}
.destroy-workflow-scroll__fact strong{margin-bottom:4px;color:#fff;font:800 27px/1 Manrope,Arial,sans-serif;text-transform:none;white-space:nowrap}
.destroy-workflow-scroll__actions{display:flex;align-items:center;gap:24px;margin-top:32px}
.destroy-workflow-scroll__button{display:inline-flex;min-height:50px;align-items:center;justify-content:center;padding:0 28px;border:1px solid #b01212;border-radius:4px;background:#b01212;color:#fff!important;font:800 14px/1 Manrope,Arial,sans-serif;text-decoration:none!important;text-transform:uppercase;box-shadow:0 12px 30px rgba(176,18,18,.24);transition:background 160ms ease,transform 160ms ease,box-shadow 160ms ease}
.destroy-workflow-scroll__button:hover{background:#d01818;transform:translateY(-2px);box-shadow:0 16px 36px rgba(176,18,18,.34)}
.destroy-workflow-scroll__phone{color:#fff!important;font:800 15px/1.2 Manrope,Arial,sans-serif;text-decoration:none!important;border-bottom:1px solid rgba(255,255,255,.5);padding-bottom:4px}
.destroy-workflow-scroll__rail{position:absolute;right:clamp(20px,3vw,48px);top:50%;z-index:6;display:grid;gap:14px;transform:translateY(-50%)}
.destroy-workflow-scroll__rail button{display:grid;width:62px;height:22px;grid-template-columns:24px 1fr;align-items:center;gap:8px;padding:0;border:0;background:transparent;color:rgba(255,255,255,.48);font:700 11px/1 Manrope,Arial,sans-serif;cursor:pointer;transition:color 180ms ease}
.destroy-workflow-scroll__rail button i{display:block;width:16px;height:2px;background:rgba(255,255,255,.42);transition:width 220ms ease,background 180ms ease}
.destroy-workflow-scroll__rail button.is-active{color:#fff}
.destroy-workflow-scroll__rail button.is-active i{width:30px;background:#ff3636}
.destroy-workflow-scroll__footer{position:absolute;left:0;right:0;bottom:30px;z-index:5;display:flex;width:min(1180px,calc(100% - 96px));align-items:center;gap:16px;margin:0 auto;color:rgba(255,255,255,.5);font:700 11px/1 Manrope,Arial,sans-serif}
.destroy-workflow-scroll__counter{display:flex;align-items:baseline;gap:4px;min-width:48px}
.destroy-workflow-scroll__counter strong{color:#fff;font-size:15px}
.destroy-workflow-scroll__progress{position:relative;width:150px;height:2px;background:rgba(255,255,255,.24);overflow:hidden}
.destroy-workflow-scroll__progress i{display:block;width:calc((25% + (var(--destroy-workflow-progress) * 75%)));height:100%;background:#ff3636;transition:width 340ms cubic-bezier(.2,.75,.2,1)}
.destroy-workflow-scroll__sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
@keyframes destroy-workflow-camera{0%{transform:scale(1.035) translate3d(4px,2px,0)}100%{transform:scale(1.01) translate3d(0,0,0)}}
@keyframes destroy-workflow-cut{0%{opacity:0;transform:translateX(-105%)}18%{opacity:.8}100%{opacity:0;transform:translateX(105%)}}
@media (max-width:900px){.destroy-workflow-scroll__inner,.destroy-workflow-scroll__footer{width:calc(100% - 56px)}.destroy-workflow-scroll__slides{width:min(680px,82vw)}.destroy-workflow-scroll__rail{right:12px}.destroy-workflow-scroll__details{gap:24px}.destroy-workflow-scroll__overlay{background:linear-gradient(90deg,rgba(8,8,8,.84),rgba(8,8,8,.54) 62%,rgba(8,8,8,.48)),linear-gradient(0deg,rgba(0,0,0,.54),transparent 42%)}}
@media (max-width:700px){.destroy-workflow-scroll{height:280vh}.destroy-workflow-scroll__sticky{background-size:auto 100%}.destroy-workflow-scroll__inner{width:calc(100% - 34px);margin:0 0 0 16px}.destroy-workflow-scroll__slides{width:calc(100vw - 70px)}.destroy-workflow-scroll__step{top:40%;bottom:auto;transform:translate3d(0,calc(-50% + 34px),0)}.destroy-workflow-scroll__step.is-before{transform:translate3d(0,calc(-50% - 34px),0)}.destroy-workflow-scroll__step.is-active{transform:translate3d(0,-50%,0)}.destroy-workflow-scroll__meta{gap:10px;margin-bottom:14px;font-size:10px}.destroy-workflow-scroll__meta::before{width:28px;height:2px}.destroy-workflow-scroll__title{font-size:clamp(31px,9.2vw,42px);line-height:1.08}.destroy-workflow-scroll__text{margin-top:16px;font-size:14px;line-height:1.45}.destroy-workflow-scroll__details{display:block;margin-top:18px}.destroy-workflow-scroll__points{min-width:0;gap:8px}.destroy-workflow-scroll__points li{font-size:12px}.destroy-workflow-scroll__fact{display:none}.destroy-workflow-scroll__actions{gap:14px;margin-top:20px}.destroy-workflow-scroll__button{min-height:44px;padding:0 17px;font-size:11px}.destroy-workflow-scroll__phone{font-size:12px}.destroy-workflow-scroll__rail{right:4px;gap:9px}.destroy-workflow-scroll__rail button{width:42px;grid-template-columns:16px 1fr;gap:4px;font-size:9px}.destroy-workflow-scroll__rail button i{width:10px}.destroy-workflow-scroll__rail button.is-active i{width:18px}.destroy-workflow-scroll__footer{left:16px;right:auto;bottom:18px;width:calc(100% - 74px);margin:0}.destroy-workflow-scroll__progress{width:92px}.destroy-workflow-scroll__overlay{background:linear-gradient(90deg,rgba(8,8,8,.78),rgba(8,8,8,.43)),linear-gradient(0deg,rgba(0,0,0,.8),rgba(0,0,0,.08) 72%)}}
@media (max-width:380px) and (max-height:650px){.destroy-workflow-scroll__step{bottom:44px}.destroy-workflow-scroll__meta{margin-bottom:8px}.destroy-workflow-scroll__title{font-size:28px}.destroy-workflow-scroll__text{margin-top:10px;font-size:12px;line-height:1.35}.destroy-workflow-scroll__details{margin-top:10px}.destroy-workflow-scroll__points{gap:4px}.destroy-workflow-scroll__points li{font-size:11px}.destroy-workflow-scroll__actions{margin-top:12px}.destroy-workflow-scroll__button{min-height:40px;padding:0 12px;font-size:10px}.destroy-workflow-scroll__phone{font-size:11px}.destroy-workflow-scroll__rail{gap:5px}.destroy-workflow-scroll__footer{bottom:14px}}
@media (max-width:380px) and (max-height:520px){.destroy-workflow-scroll__title{font-size:26px}.destroy-workflow-scroll__text{display:none}}
@media (max-height:690px) and (min-width:701px){.destroy-workflow-scroll__title{font-size:clamp(34px,4vw,50px)}.destroy-workflow-scroll__text{margin-top:16px}.destroy-workflow-scroll__details{margin-top:18px}.destroy-workflow-scroll__actions{margin-top:22px}.destroy-workflow-scroll__footer{bottom:20px}}
@media (prefers-reduced-motion:reduce){.destroy-workflow-scroll__step,.destroy-workflow-scroll__canvas,.destroy-workflow-scroll__texture,.destroy-workflow-scroll__progress i{animation:none!important;transition:none!important}}
`;

const destroyWorkflowJs = String.raw`
(function(){
  function ready(callback){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",callback,{once:true});return;}callback();}
  function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
  function htmlEscape(value){return String(value).replace(/[&<>"']/g,function(char){return({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char];});}

  ready(function(){
    if(location.pathname!=="/" || document.querySelector(".destroy-workflow-scroll")) return;
    var originalHero=document.querySelector(".elementor-2 .elementor-element-4ac6fe3");
    if(!originalHero || !originalHero.parentNode) return;

    document.body.classList.add("destroy-workflow-page");

    var steps=[
      {eyebrow:"Демонтаж под ключ",title:"Демонтажные услуги любой сложности",accent:"без лишних переплат",text:"Разбираем квартиры, дома и коммерческие помещения в Москве и Московской области.",points:["Выезд мастера бесплатно","Точная смета до начала работ"],fact:"15 минут",factLabel:"на оценку стоимости",actions:[{label:"Рассчитать стоимость",href:"#заявка",primary:true},{label:"+7 (916) 006-77-77",href:"tel:+79160067777"}]},
      {eyebrow:"Подготовка объекта",title:"Приезжаем со своими инструментами",accent:"и начинаем без задержек",text:"Осматриваем объект, фиксируем объем и заранее защищаем все зоны, которые должны остаться целыми.",points:["Мешки для мусора в подарок","Понятный план демонтажа"],fact:"0 ₽",factLabel:"выезд мастера"},
      {eyebrow:"Работа на объекте",title:"Демонтаж без выходных",accent:"с 8:00 до 23:00",text:"Работаем поэтапно, контролируем пыль и шум, поддерживаем порядок на объекте в течение всей смены.",points:["Убираем объект после работы","Фотоотчеты по ходу демонтажа"],fact:"24/7",factLabel:"прием заявок"},
      {eyebrow:"Чистая площадка",title:"Вывозим строительный мусор",accent:"и сдаем готовый объект",text:"После демонтажа погружаем отходы, организуем вывоз и оставляем площадку готовой к следующему этапу работ.",points:["Погрузка и вывоз после работ","Оплата по согласованной смете"],fact:"Бесплатно",factLabel:"вывоз после работ",actions:[{label:"Оставить заявку",href:"#заявка",primary:true},{label:"Позвонить",href:"tel:+79160067777"}]}
    ];
    var stepFrames=[[0,0],[2,3],[4,5],[8,9]];
    var preloadFrameIndexes=[0,1,2,3,4,5,8,9];
    var maxFrameIndex=9;
    var framePath="/videos/destroy-workflow-frames/frame_";
    function frameUrl(index){return framePath+String(index+1).padStart(4,"0")+".jpg";}

    var section=document.createElement("section");
    section.className="destroy-workflow-scroll";
    section.setAttribute("aria-label","Демонтажные услуги — четыре этапа");
    function stepMarkup(step,index){
      var heading=index===0?"h1":"h2";
      var points=step.points.map(function(point){return '<li>'+htmlEscape(point)+'</li>';}).join("");
      var actions=step.actions?'<div class="destroy-workflow-scroll__actions">'+step.actions.map(function(action){return '<a class="'+(action.primary?'destroy-workflow-scroll__button':'destroy-workflow-scroll__phone')+'" href="'+htmlEscape(action.href)+'">'+htmlEscape(action.label)+'</a>';}).join("")+'</div>':"";
      return '<article class="destroy-workflow-scroll__step'+(index===0?' is-active':'')+'" data-step="'+index+'" aria-label="Слайд '+(index+1)+': '+htmlEscape(step.title)+'" aria-hidden="'+(index===0?'false':'true')+'"><p class="destroy-workflow-scroll__meta"><strong>0'+(index+1)+'</strong><span>'+htmlEscape(step.eyebrow)+'</span></p><'+heading+' class="destroy-workflow-scroll__title">'+htmlEscape(step.title)+'<span>'+htmlEscape(step.accent)+'</span></'+heading+'><p class="destroy-workflow-scroll__text">'+htmlEscape(step.text)+'</p><div class="destroy-workflow-scroll__details"><ul class="destroy-workflow-scroll__points">'+points+'</ul><p class="destroy-workflow-scroll__fact"><strong>'+htmlEscape(step.fact)+'</strong><span>'+htmlEscape(step.factLabel)+'</span></p></div>'+actions+'</article>';
    }
    var rail=steps.map(function(step,index){return '<button type="button" class="'+(index===0?'is-active':'')+'" data-workflow-step="'+index+'" aria-label="Открыть слайд '+(index+1)+': '+htmlEscape(step.title)+'"'+(index===0?' aria-current="step"':'')+'><i aria-hidden="true"></i><span aria-hidden="true">0'+(index+1)+'</span></button>';}).join("");
    section.innerHTML='<div class="destroy-workflow-scroll__sticky"><canvas class="destroy-workflow-scroll__canvas" aria-hidden="true"></canvas><div class="destroy-workflow-scroll__overlay" aria-hidden="true"></div><div class="destroy-workflow-scroll__texture" aria-hidden="true"></div><div class="destroy-workflow-scroll__accent" aria-hidden="true"></div><div class="destroy-workflow-scroll__cut" aria-hidden="true"></div><div class="destroy-workflow-scroll__stage"><div class="destroy-workflow-scroll__inner"><div class="destroy-workflow-scroll__slides" role="group" aria-live="polite">'+steps.map(stepMarkup).join("")+'</div></div></div><nav class="destroy-workflow-scroll__rail" aria-label="Слайды главного экрана">'+rail+'</nav><div class="destroy-workflow-scroll__footer" aria-hidden="true"><div class="destroy-workflow-scroll__counter"><strong>01</strong><span>/ 04</span></div><div class="destroy-workflow-scroll__progress"><i></i></div></div></div>';

    section.querySelector(".destroy-workflow-scroll__canvas").insertAdjacentHTML("afterend",'<canvas class="destroy-workflow-scroll__canvas destroy-workflow-scroll__canvas--next" aria-hidden="true"></canvas>');
    var siteHeader=document.querySelector(".elementor-location-header");
    var headerWrapper=siteHeader && siteHeader.querySelector(".headerWrapper");
    var pageRoot=originalHero.closest(".elementor-2");
    var insertionParent=pageRoot && pageRoot.parentNode ? pageRoot.parentNode : originalHero.parentNode;
    var insertionTarget=pageRoot && pageRoot.parentNode ? pageRoot : originalHero;
    insertionParent.insertBefore(section,insertionTarget);
    originalHero.classList.add("destroy-workflow-original-hidden");
    document.documentElement.classList.remove("destroy-workflow-booting");
    var headerLayoutHeight=siteHeader ? Math.ceil(siteHeader.getBoundingClientRect().height) : 0;
    if(siteHeader && headerLayoutHeight){
      siteHeader.style.height=(headerLayoutHeight+20)+"px";
      siteHeader.style.boxSizing="border-box";
    }
    function syncHeaderMetrics(){
      if(!siteHeader) return;
      siteHeader.style.height="";
      headerLayoutHeight=Math.ceil(siteHeader.getBoundingClientRect().height);
      if(headerLayoutHeight){
        siteHeader.style.height=(headerLayoutHeight+20)+"px";
        siteHeader.style.boxSizing="border-box";
      }
    }
    function updateHeaderState(rect){
      if(!headerWrapper) return;
      headerWrapper.classList.toggle("destroy-header-scrolled",window.scrollY>20);
    }
    syncHeaderMetrics();
    updateHeaderState(section.getBoundingClientRect());

    var sticky=section.querySelector(".destroy-workflow-scroll__sticky");
    var canvas=section.querySelector(".destroy-workflow-scroll__canvas");
    var nextCanvas=section.querySelector(".destroy-workflow-scroll__canvas--next");
    var context=canvas && canvas.getContext ? canvas.getContext("2d") : null;
    var nextContext=nextCanvas && nextCanvas.getContext ? nextCanvas.getContext("2d") : null;
    var stepEls=Array.prototype.slice.call(section.querySelectorAll(".destroy-workflow-scroll__step"));
    var railButtons=Array.prototype.slice.call(section.querySelectorAll("[data-workflow-step]"));
    var counter=section.querySelector(".destroy-workflow-scroll__counter strong");
    if(sticky) sticky.style.backgroundImage='url("'+frameUrl(0)+'")';
    if(!context || !nextContext) return;

    var frames=[];
    var framePromises=[];
    var wantedFrame=0;
    var currentFrame=-1;
    var activeStep=-1;
    var ticking=false;
    var wheelLock=false;
    var animationToken=0;
    var scrollAnimationToken=0;
    var snapStep=null;
    var wheelUnlockTimer=0;
    var reducedMotion=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resizeCanvas(){
      var rect=sticky.getBoundingClientRect();
      var ratio=Math.min(window.devicePixelRatio||1,1.7);
      var width=Math.max(1,Math.round(rect.width*ratio));
      var height=Math.max(1,Math.round(rect.height*ratio));
      if(canvas.width!==width || canvas.height!==height || nextCanvas.width!==width || nextCanvas.height!==height){
        canvas.width=width;
        canvas.height=height;
        nextCanvas.width=width;
        nextCanvas.height=height;
        currentFrame=-1;
      }
    }

    function drawCoverImage(targetContext,targetCanvas,image){
      resizeCanvas();
      var imageWidth=image.naturalWidth||image.width||16;
      var imageHeight=image.naturalHeight||image.height||9;
      var cropX=imageWidth*.078;
      var croppedWidth=imageWidth-cropX*2;
      var scale=Math.max(targetCanvas.width/croppedWidth,targetCanvas.height/imageHeight);
      var sourceWidth=targetCanvas.width/scale;
      var sourceHeight=targetCanvas.height/scale;
      var sourceX=cropX+(croppedWidth-sourceWidth)/2;
      var sourceY=(imageHeight-sourceHeight)/2;
      targetContext.drawImage(image,sourceX,sourceY,sourceWidth,sourceHeight,0,0,targetCanvas.width,targetCanvas.height);
    }

    function drawFrame(index,force){
      wantedFrame=Math.round(clamp(index,0,maxFrameIndex));
      if(!frames[wantedFrame]) return;
      if(!force && currentFrame===wantedFrame) return;
      try{
        context.clearRect(0,0,canvas.width,canvas.height);
        drawCoverImage(context,canvas,frames[wantedFrame]);
        currentFrame=wantedFrame;
        section.setAttribute("data-frame",String(wantedFrame+1));
      }catch(error){}
    }

    function loadFrame(index){
      index=Math.round(clamp(index,0,maxFrameIndex));
      if(frames[index]) return Promise.resolve(frames[index]);
      if(framePromises[index]) return framePromises[index];
      framePromises[index]=new Promise(function(resolve){
        var image=new Image();
        image.decoding="async";
        image.loading="eager";
        if("fetchPriority" in image) image.fetchPriority=index<2?"high":"low";
        image.onload=function(){frames[index]=image;resolve(image);};
        image.onerror=function(){resolve(null);};
        image.src=frameUrl(index);
      });
      return framePromises[index];
    }

    function preloadFrames(){
      preloadFrameIndexes.forEach(loadFrame);
    }

    function restartClass(className,duration){
      sticky.classList.remove(className);
      void sticky.offsetWidth;
      sticky.classList.add(className);
      window.setTimeout(function(){sticky.classList.remove(className);},duration);
    }

    function setStep(index){
      index=clamp(index,0,stepEls.length-1);
      if(index===activeStep) return;
      activeStep=index;
      stepEls.forEach(function(el,i){
        el.classList.toggle("is-active",i===index);
        el.classList.toggle("is-before",i<index);
        el.setAttribute("aria-hidden",i===index?"false":"true");
      });
      railButtons.forEach(function(button,i){
        button.classList.toggle("is-active",i===index);
        if(i===index) button.setAttribute("aria-current","step");
        else button.removeAttribute("aria-current");
      });
      if(counter) counter.textContent="0"+(index+1);
      animateStepFrames(index);
    }

    function animateStepFrames(index){
      var pair=stepFrames[index]||stepFrames[0];
      var first=pair[0];
      var second=pair[1];
      var token=++animationToken;
      nextCanvas.classList.remove("is-visible");
      if(first===second){
        loadFrame(first).then(function(){
          if(token!==animationToken || !frames[first]) return;
          drawFrame(first,true);
        });
        return;
      }
      if((window.innerWidth||0)<=700){
        loadFrame(first).then(function(){
          if(token!==animationToken || !frames[first]) return;
          drawFrame(first,true);
        });
        loadFrame(second).then(function(){
          if(token!==animationToken || !frames[first] || !frames[second]) return;
          nextContext.clearRect(0,0,nextCanvas.width,nextCanvas.height);
          drawCoverImage(nextContext,nextCanvas,frames[second]);
          void nextCanvas.offsetWidth;
          nextCanvas.classList.add("is-visible");
          window.setTimeout(function(){
            if(token!==animationToken) return;
            drawFrame(second,true);
            nextCanvas.classList.remove("is-visible");
          },240);
        });
        return;
      }
      Promise.all([loadFrame(first),loadFrame(second)]).then(function(){
        if(token!==animationToken || !frames[first] || !frames[second]) return;
        restartClass("is-playing",520);
        drawFrame(first,true);
        nextContext.clearRect(0,0,nextCanvas.width,nextCanvas.height);
        drawCoverImage(nextContext,nextCanvas,frames[second]);
        if(reducedMotion){
          drawFrame(second,true);
          return;
        }
        void nextCanvas.offsetWidth;
        nextCanvas.classList.add("is-visible");
        window.setTimeout(function(){
          if(token!==animationToken) return;
          drawFrame(second,true);
          nextCanvas.classList.remove("is-visible");
        },560);
      });
    }

    function updateStickyMode(rect){
      var stickyHeight=sticky.offsetHeight||window.innerHeight||1;
      var isPinned=rect.top<=1 && rect.bottom>=stickyHeight-2;
      sticky.classList.toggle("is-pinned",isPinned);
    }

    function update(){
      ticking=false;
      var rect=section.getBoundingClientRect();
      updateHeaderState(rect);
      var vh=window.innerHeight||1;
      var stepDistance=vh*((window.innerWidth||0)<=700?.62:1);
      var stageOffset=clamp(-rect.top,0,(steps.length-1)*stepDistance);
      var progress=clamp(stageOffset/Math.max(1,(steps.length-1)*stepDistance),0,1);
      var stepIndex=snapStep===null?clamp(Math.round(stageOffset/stepDistance),0,steps.length-1):snapStep;
      section.style.setProperty("--destroy-workflow-progress",progress.toFixed(3));
      updateStickyMode(rect);
      setStep(stepIndex);
    }

    function requestUpdate(){
      if(ticking) return;
      ticking=true;
      window.requestAnimationFrame(update);
    }

    function sectionTop(){
      return section.getBoundingClientRect().top+window.scrollY;
    }

    function animateScrollTo(target,index){
      var token=++scrollAnimationToken;
      var startY=window.scrollY;
      var distance=target-startY;
      var duration=reducedMotion?0:430;
      var started=performance.now();
      wheelLock=true;
      snapStep=clamp(index,0,steps.length-1);
      setStep(snapStep);
      function tick(now){
        if(token!==scrollAnimationToken) return;
        var progress=duration===0?1:clamp((now-started)/duration,0,1);
        var eased=1-Math.pow(1-progress,4);
        window.scrollTo(0,startY+distance*eased);
        if(progress<1){window.requestAnimationFrame(tick);return;}
        snapStep=null;
        window.clearTimeout(wheelUnlockTimer);
        wheelUnlockTimer=window.setTimeout(function(){
          wheelLock=false;
          requestUpdate();
        },140);
      }
      window.requestAnimationFrame(tick);
    }

    function moveTo(index){
      index=clamp(index,0,steps.length);
      var stepDistance=(window.innerHeight||1)*((window.innerWidth||0)<=700?.62:1);
      animateScrollTo(sectionTop()+index*stepDistance,index);
    }

    function handleWheel(event){
      if(Math.abs(event.deltaY)<14) return;
      var top=sectionTop();
      var vh=window.innerHeight||1;
      var stepDistance=vh*((window.innerWidth||0)<=700?.62:1);
      var y=window.scrollY;
      var rect=section.getBoundingClientRect();
      var engaged=rect.top<vh && rect.bottom>0 && y<top+steps.length*stepDistance+4;
      if(!engaged) return;
      if(wheelLock){event.preventDefault();return;}
      var current=clamp(Math.round((y-top)/stepDistance),0,steps.length);
      if(event.deltaY<0 && current===0 && y<=top+4) return;
      if(event.deltaY>0 && current===steps.length) return;
      var next=current+(event.deltaY>0?1:-1);
      next=clamp(next,0,steps.length);
      event.preventDefault();
      moveTo(next);
    }

    railButtons.forEach(function(button){
      button.addEventListener("click",function(){moveTo(Number(button.getAttribute("data-workflow-step"))||0);});
    });
    loadFrame(0);
    loadFrame(1);
    preloadFrames();
    update();
    window.addEventListener("wheel",handleWheel,{passive:false});
    window.addEventListener("scroll",requestUpdate,{passive:true});
    window.addEventListener("resize",function(){syncHeaderMetrics();resizeCanvas();drawFrame(wantedFrame);requestUpdate();});
  });
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "\u0414\u0435\u043c\u043e\u043d\u0442\u0430\u0436\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u043f\u043e\u0434 \u043a\u043b\u044e\u0447 \u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c - DESTROY",
  description:
    "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0435\u043c\u043e\u043d\u0442\u0430\u0436\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. \u0411\u044b\u0441\u0442\u0440\u043e, \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0438 \u043d\u0435\u0434\u043e\u0440\u043e\u0433\u043e.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script id="destroy-workflow-boot" dangerouslySetInnerHTML={{ __html: destroyWorkflowBootJs }} />
        <link rel="preload" as="image" href="/videos/destroy-workflow-frames/frame_0001.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/videos/home-hero-frames/frame_0001.jpg" fetchPriority="high" />
        <style id="destroy-static-critical" dangerouslySetInnerHTML={{ __html: criticalCompatibilityCss }} />
        <style id="destroy-workflow-style" dangerouslySetInnerHTML={{ __html: destroyWorkflowCss }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <script id="destroy-workflow-runtime" dangerouslySetInnerHTML={{ __html: destroyWorkflowJs }} />
        <script id="destroy-static-runtime" dangerouslySetInnerHTML={{ __html: criticalCompatibilityJs }} />
      </body>
    </html>
  );
}
