import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes({
  // optional options:
  // ignoredRouteFiles: ["*.test.tsx","*.spec.tsx"],
  // rootDirectory: "src/pages"  // if you don’t use the default
}) satisfies RouteConfig;
