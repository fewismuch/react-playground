import { zlibSync, unzlibSync, strToU8, strFromU8 } from "fflate";
import { saveAs } from "file-saver";
import index from "./template/index.html?raw";
import pkg from "./template/package.json?raw";
import config from "./template/vite.config.js?raw";
import readme from "./template/README.md?raw";

export async function downloadFiles(files: any) {
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

export function debounce(fn: Function, n = 100) {
  let handle: any;
  return (...args: any[]) => {
    if (handle) clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, n);
  };
}

// 编码
export function utoa(data: string): string {
  const buffer = strToU8(data);
  const zipped = zlibSync(buffer, { level: 9 });
  const binary = strFromU8(zipped, true);
  return btoa(binary);
}

// 解码
export function atou(base64: string): string {
  const binary = atob(base64);

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith("\x78\xDA")) {
    const buffer = strToU8(binary, true);
    const unzipped = unzlibSync(buffer);
    return strFromU8(unzipped);
  }

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary));
}
