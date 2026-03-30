import { getRouteToFilepath } from "./node_modules/nextra/dist/server/page-map/get.js";
async function run() {
  const map = await getRouteToFilepath("tr");
  console.log(map);
}
run().catch(console.error);
