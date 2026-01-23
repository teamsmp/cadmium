import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const ua = ctx.request.headers.get("user-agent") ?? "";
  const isCli =
    ua.includes("curl") || ua.includes("wget") || ua.includes("httpie");

  if (!isCli) {
    return next();
  }

  const url = new URL(ctx.request.url);

  if (!url.pathname.startsWith("/cli")) {
    url.pathname = "/cli" + url.pathname;
  }

  return next(new Request(url, ctx.request));
};
