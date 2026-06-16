import { useEffect } from "react";

type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [k, v] = selector.replace(/[\[\]"]/g, "").split("=");
    el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta(meta: Meta) {
  useEffect(() => {
    if (meta.title) document.title = meta.title;
    if (meta.description) setMeta('meta[name="description"]', "content", meta.description);
    if (meta.ogTitle) setMeta('meta[property="og:title"]', "content", meta.ogTitle);
    if (meta.ogDescription) setMeta('meta[property="og:description"]', "content", meta.ogDescription);
    if (meta.canonical) setLink("canonical", meta.canonical);
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.canonical]);
}
