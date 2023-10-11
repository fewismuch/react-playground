import { saveAs } from "file-saver";
import index from "./template/index.html?raw";
import pkg from "./template/package.json?raw";
import config from "./template/vite.config.js?raw";
import readme from "./template/README.md?raw";

export async function downloadProject(files) {
  if (!confirm("Download project files?")) {
    return;
  }

  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();

  // basic structure
  zip.file("index.html", index);
  zip.file("package.json", pkg);
  zip.file("vite.config.js", config);
  zip.file("README.md", readme);

  // project src
  const src = zip.folder("src")!;

  Object.keys(files).forEach((name) => {
    if (files[name].name !== "import-map.json") {
      src.file(name, files[name].value);
    } else {
      zip.file(name, files[name].value);
    }
  });

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "react-project.zip");
}
