import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/defaultLayout.tsx", [index("routes/learn.tsx")]),
] satisfies RouteConfig;
