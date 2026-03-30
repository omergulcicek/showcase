import { getPageMap } from "nextra/page-map";
async function run() {
  try {
    const map = await getPageMap();
    console.log(JSON.stringify(map, null, 2));
  } catch (e) {
    console.error(e);
  }
}
run();
