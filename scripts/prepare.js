import { readFileSync, writeFileSync } from "node:fs";

const DEFAULT_BUILD_OUTPUT_HTML = "./dist/index.html";

function modifyBuildOutput() {
  const data = readFileSync(DEFAULT_BUILD_OUTPUT_HTML, "utf-8");

  const newValue = data
    .replaceAll(/crossorigin src="/gm, 'src=".')
    .replaceAll(/crossorigin href="/gm, 'href=".');

  writeFileSync("./dist/index.html", newValue, "utf-8");
}

modifyBuildOutput();
