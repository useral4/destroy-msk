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
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 38px;
    height: 38px;
    padding: 0 !important;
    border: 0;
    border-radius: 999px;
    background: #ffffff;
    color: #111111;
    font: 32px/1 Arial, sans-serif !important;
    text-align: center;
    appearance: none;
    -webkit-appearance: none;
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

  .wpcf7 select.wpcf7-select,
  .wpcf7-form-control.wpcf7-select {
    padding-right: 44px !important;
    background-position: right 18px center !important;
  }

  .destroy-home-hero-scroll-scene {
    position: relative !important;
    display: block !important;
    width: var(--destroy-scene-vw, 100vw) !important;
    min-height: 145vh !important;
    margin-left: calc(50% - var(--destroy-scene-half-vw, 50vw)) !important;
    margin-right: calc(50% - var(--destroy-scene-half-vw, 50vw)) !important;
    padding: 0 !important;
    overflow: visible !important;
    background: #171111 !important;
    isolation: isolate;
  }

  .destroy-home-hero-scroll {
    position: relative !important;
    display: block !important;
    width: 100% !important;
    height: 100vh !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: transparent !important;
    isolation: isolate;
  }

  .destroy-home-hero-scroll__sticky {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    display: block;
    overflow: hidden;
    background: #171111;
    isolation: isolate;
  }

  .destroy-home-hero-scroll__canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: none !important;
    transform: scale(var(--destroy-hero-scale, 1.055));
    transform-origin: center center;
    opacity: var(--destroy-hero-opacity, 0.96);
    will-change: transform;
  }

  .destroy-home-hero-scroll__shade {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.84), rgba(0, 0, 0, 0.54) 48%, rgba(0, 0, 0, 0.34)),
      radial-gradient(circle at 50% 58%, rgba(176, 18, 18, var(--destroy-hero-red, 0.22)), transparent 42%);
    opacity: var(--destroy-hero-shade, 0.96);
  }

  .destroy-home-hero-scroll > .e-con-inner {
    position: relative !important;
    z-index: 2 !important;
    width: min(1180px, calc(100% - 40px)) !important;
    min-height: 100vh;
    margin: 0 auto !important;
    padding: 120px 0 70px !important;
    display: flex !important;
    align-items: center !important;
  }

  .destroy-home-hero-scroll .wrapper,
  .destroy-home-hero-scroll .wrapperItem {
    position: relative;
    z-index: 2;
    background-image: none !important;
    background-color: transparent !important;
  }

  .destroy-home-hero-scroll-scene {
    min-height: 160vh !important;
    background: #151010 !important;
  }

  .destroy-home-hero-scroll-scene .destroy-scroll-scene__sticky {
    height: 100vh;
    min-height: 100vh;
    background: #151010;
  }

  .destroy-home-hero-scroll-scene .destroy-scroll-scene__canvas {
    filter: none !important;
    transform: scale(var(--destroy-hero-scale, 1.08));
    transform-origin: center center;
    opacity: 1;
    will-change: transform;
  }

  .destroy-home-hero-scroll-scene .destroy-scroll-scene__sticky::before {
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.46) 48%, rgba(0, 0, 0, 0.38)),
      radial-gradient(circle at 48% 58%, rgba(196, 15, 15, var(--destroy-hero-red, 0.24)), transparent 42%) !important;
    opacity: var(--destroy-hero-shade, 0.94);
    transform: none;
  }

  .destroy-home-hero-scroll-scene .destroy-scroll-scene__sticky::after {
    opacity: 0.06;
  }

  .destroy-home-hero-scroll-scene .destroy-scroll-scene__shade {
    inset: auto -18% -32% -18%;
    height: 48%;
    background: radial-gradient(ellipse at center, rgba(190, 14, 14, 0.34), transparent 62%);
    filter: blur(22px);
  }

  .destroy-home-hero-scroll__overlay {
    width: min(1180px, calc(var(--destroy-scene-vw, 100vw) - 80px)) !important;
    min-height: 100vh !important;
    padding: 104px 0 68px !important;
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 380px) !important;
    gap: 38px !important;
    align-items: center !important;
    background: none !important;
    background-image: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    overflow: visible !important;
  }

  .destroy-home-hero-scroll__overlay::before,
  .destroy-home-hero-scroll__overlay::after,
  .destroy-home-hero-scroll__overlay > .wrapperItem::before,
  .destroy-home-hero-scroll__overlay > .wrapperItem::after {
    content: none !important;
    display: none !important;
    background: none !important;
    background-image: none !important;
  }

  .destroy-home-hero-scroll__overlay,
  .destroy-home-hero-scroll__overlay * {
    color: #ffffff !important;
  }

  .destroy-home-hero-scroll__overlay input,
  .destroy-home-hero-scroll__overlay select,
  .destroy-home-hero-scroll__overlay textarea,
  .destroy-home-hero-scroll__overlay option {
    color: #111111 !important;
    text-shadow: none !important;
  }

  .destroy-home-hero-scroll__overlay .wpcf7-submit {
    color: #ffffff !important;
  }

  .destroy-home-hero-scroll__overlay .wpcf7-list-item-label,
  .destroy-home-hero-scroll__overlay .wpcf7-list-item-label a {
    color: #ffffff !important;
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem {
    position: relative !important;
    z-index: 3 !important;
    width: auto !important;
    max-width: none !important;
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem:first-child {
    background: none !important;
    background-image: none !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem:first-child .h1 {
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
    font-size: clamp(34px, 4vw, 58px) !important;
    line-height: 0.98 !important;
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem:first-child .listItem {
    text-shadow: 0 3px 18px rgba(0, 0, 0, 0.85);
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem:first-child .icon .content {
    color: #111111 !important;
    text-shadow: none !important;
    background: rgba(255, 255, 255, 0.88) !important;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22) !important;
  }

  .destroy-home-hero-scroll__overlay > .wrapperItem:nth-child(2) {
    background: rgba(28, 28, 28, 0.78) !important;
    background-image: none !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 24px !important;
    box-shadow: 0 26px 80px rgba(0, 0, 0, 0.36) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
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

  .destroy-scroll-scene {
    position: relative;
    width: var(--destroy-scene-vw, 100vw);
    min-height: 150vh;
    margin-left: calc(50% - var(--destroy-scene-half-vw, 50vw));
    margin-right: calc(50% - var(--destroy-scene-half-vw, 50vw));
    isolation: isolate;
  }

  .destroy-scroll-scene__sticky {
    position: sticky;
    top: 0;
    min-height: 100vh;
    overflow: hidden;
    border-radius: 0;
    background: #201818;
    isolation: isolate;
    box-shadow: none;
    opacity: var(--destroy-scene-soft-opacity, 1);
    will-change: opacity;
  }

  .destroy-scroll-scene__sticky.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--destroy-scene-vw, 100vw);
    z-index: 40;
  }

  .destroy-scroll-scene__sticky.is-after {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: var(--destroy-scene-vw, 100vw);
  }

  .destroy-scroll-scene__canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
  }

  .destroy-scroll-scene__sticky::before {
    content: "";
    position: absolute;
    inset: -20%;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 58%, rgba(176, 18, 18, var(--destroy-scene-glow-alpha, 0.24)), transparent 32%),
      linear-gradient(120deg, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.22) 48%, rgba(0, 0, 0, 0.68));
    mix-blend-mode: normal;
    transform: scale(var(--destroy-scene-glow-scale, 1));
    transform-origin: center center;
    will-change: transform, opacity;
  }

  .destroy-scroll-scene__sticky::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 88px),
      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 88px);
    opacity: var(--destroy-scene-grid-opacity, 0.16);
  }

  .destroy-scroll-scene__shade {
    position: absolute;
    inset: auto -18% -35% -18%;
    height: 52%;
    z-index: 2;
    pointer-events: none;
    background: radial-gradient(ellipse at center, rgba(176, 18, 18, var(--destroy-scene-shade-alpha, 0.22)), transparent 64%);
    transform: scale(var(--destroy-scene-shade-scale, 1));
    transform-origin: center bottom;
    filter: blur(18px);
  }

  .destroy-scroll-scene__overlay {
    position: relative !important;
    z-index: 3 !important;
    width: min(1120px, calc(var(--destroy-scene-vw, 100vw) - 48px));
    min-height: 100vh;
    height: auto;
    margin: 0 auto;
    background-image: none !important;
    background-color: transparent !important;
    border-radius: 0 !important;
  }

  .destroy-scroll-scene__overlay::before {
    background-image: none !important;
  }

  .destroy-scroll-scene__overlay > * {
    position: relative;
    z-index: 3;
  }

  .destroy-scroll-scene .quizle-answers {
    max-height: min(50vh, 430px) !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    padding-right: 12px !important;
    margin-right: -12px !important;
    scrollbar-width: thin;
    scrollbar-color: #c91515 rgba(255, 255, 255, 0.22);
    scrollbar-gutter: stable;
    overscroll-behavior: contain;
  }

  .destroy-scroll-scene .quizle-answers::-webkit-scrollbar {
    width: 6px;
  }

  .destroy-scroll-scene .quizle-answers::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.16);
    border-radius: 999px;
  }

  .destroy-scroll-scene .quizle-answers::-webkit-scrollbar-thumb {
    background: #c91515;
    border-radius: 999px;
  }

  .destroy-scroll-scene .quizle-answer {
    flex: 0 0 auto !important;
  }

  .destroy-scroll-scene .quizle-answer label {
    min-height: 56px !important;
    padding-top: 12px !important;
    padding-bottom: 12px !important;
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
    .destroy-scroll-scene {
      min-height: 140vh;
    }

    .destroy-scroll-scene__sticky {
      top: 0;
      min-height: 100vh;
    }

    .destroy-scroll-scene__overlay {
      width: min(calc(var(--destroy-scene-vw, 100vw) - 20px), 100%);
      min-height: 100vh;
    }

    .destroy-scroll-scene .quizle-answers {
      max-height: min(44vh, 340px) !important;
      padding-right: 8px !important;
      margin-right: -8px !important;
    }

    .destroy-scroll-scene .quizle-answer label {
      min-height: 52px !important;
    }

    .destroy-home-hero-scroll-scene {
      min-height: 145vh !important;
    }

    .destroy-home-hero-scroll {
      height: 100vh !important;
      min-height: 100vh !important;
    }

    .destroy-home-hero-scroll > .e-con-inner {
      width: min(calc(100% - 20px), 100%) !important;
      padding: 92px 0 42px !important;
    }

    .destroy-home-hero-scroll__canvas {
      transform: scale(var(--destroy-hero-scale, 1.08));
    }

    .destroy-home-hero-scroll__overlay {
      width: min(calc(var(--destroy-scene-vw, 100vw) - 20px), 100%) !important;
      grid-template-columns: 1fr !important;
      align-content: center !important;
      gap: 18px !important;
      padding: 86px 0 36px !important;
    }

    .destroy-home-hero-scroll__overlay > .wrapperItem:first-child .h1 {
      font-size: clamp(29px, 9vw, 42px) !important;
    }

    .destroy-home-hero-scroll__overlay > .wrapperItem:nth-child(2) {
      border-radius: 18px !important;
    }

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
        progress: 0
      };
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

    function initHomeHeroScroll() {
      var hero = document.querySelector(".elementor-2 .elementor-element-4ac6fe3 > .wrapper");
      if (!hero || hero.classList.contains("destroy-home-hero-scroll-ready")) return;
      var parent = hero.parentNode;
      if (!parent) return;
      var scene = document.createElement("section");
      scene.className = "destroy-scroll-scene destroy-home-hero-scroll-scene";
      scene.setAttribute("aria-label", "Hero scroll animation scene");
      var sticky = document.createElement("div");
      sticky.className = "destroy-scroll-scene__sticky destroy-home-hero-scroll__sticky";
      var canvas = document.createElement("canvas");
      canvas.className = "destroy-scroll-scene__canvas destroy-home-hero-scroll__canvas";
      canvas.setAttribute("aria-hidden", "true");
      var shade = document.createElement("div");
      shade.className = "destroy-scroll-scene__shade destroy-home-hero-scroll__shade";
      parent.insertBefore(scene, hero);
      sticky.appendChild(canvas);
      sticky.appendChild(shade);
      sticky.appendChild(hero);
      scene.appendChild(sticky);
      hero.classList.add("destroy-scroll-scene__overlay", "destroy-home-hero-scroll__overlay", "destroy-home-hero-scroll-ready");

      var context = canvas.getContext("2d");
      if (!context) return;
      var frames = [];
      var loading = {};
      var wantedFrame = 0;
      var currentFrame = -1;
      var preloadStarted = false;
      var ticking = false;

      function resize() {
        var rect = sticky.getBoundingClientRect();
        var ratio = Math.min(window.devicePixelRatio || 1, 1.6);
        var width = Math.max(1, Math.round(rect.width * ratio));
        var height = Math.max(1, Math.round(rect.height * ratio));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          currentFrame = -1;
        }
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
        for (var offset = -3; offset <= 3; offset += 1) loadFrame(center + offset);
        if (preloadStarted) return;
        preloadStarted = true;
        var next = 0;
        var run = function () {
          var loaded = 0;
          while (next < homeHeroFrameCount && loaded < 3) {
            loadFrame(next);
            next += 1;
            loaded += 1;
          }
          if (next < homeHeroFrameCount) {
            if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 600 });
            else window.setTimeout(run, 90);
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
          sticky.setAttribute("data-frame", String(frameIndex + 1));
        } catch (error) {}
      }

      function update() {
        ticking = false;
        var rect = scene.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
        var stickyHeight = sticky.offsetHeight || viewportHeight;
        sticky.classList.toggle("is-fixed", rect.top <= 0 && rect.bottom >= stickyHeight);
        sticky.classList.toggle("is-after", rect.bottom < stickyHeight);
        var scrollable = Math.max(1, rect.height - viewportHeight);
        var progress = clamp(-rect.top / scrollable, 0, 1);
        var frameIndex = Math.round(progress * (homeHeroFrameCount - 1));
        sticky.style.setProperty("--destroy-scene-progress", progress.toFixed(3));
        sticky.style.setProperty("--destroy-scene-soft-opacity", (0.985 + clamp(Math.min(progress, 1 - progress) / 0.18, 0, 1) * 0.015).toFixed(3));
        sticky.style.setProperty("--destroy-scene-glow-scale", (0.92 + progress * 0.34).toFixed(3));
        sticky.style.setProperty("--destroy-scene-glow-alpha", (0.2 + progress * 0.2).toFixed(3));
        sticky.style.setProperty("--destroy-scene-grid-opacity", (0.08 + progress * 0.12).toFixed(3));
        sticky.style.setProperty("--destroy-scene-shade-scale", (0.82 + progress * 0.5).toFixed(3));
        sticky.style.setProperty("--destroy-scene-shade-alpha", (0.14 + progress * 0.3).toFixed(3));
        sticky.style.setProperty("--destroy-hero-blur", "0px");
        sticky.style.setProperty("--destroy-hero-scale", (1.055 - progress * 0.045).toFixed(3));
        sticky.style.setProperty("--destroy-hero-red", (0.18 + progress * 0.22).toFixed(3));
        sticky.style.setProperty("--destroy-hero-shade", (0.98 - progress * 0.18).toFixed(3));
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
      update();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", function () {
        resize();
        drawFrame(wantedFrame);
        requestUpdate();
      });
    }

    initHomeHeroScroll();

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
