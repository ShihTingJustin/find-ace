import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;
let container;

describe("測試", () => {
  beforeEach(async () => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;

    // 讀取 main.js 文件並將其作為 script 插入到 JSDOM 實例中
    const js = fs.readFileSync(path.resolve(__dirname, "../main.js"), "utf-8");
    const scriptEl = dom.window.document.createElement("script");
    scriptEl.textContent = js;
    dom.window.document.head.appendChild(scriptEl);

    // 等待 DOMContentLoaded 事件
    await new Promise((resolve) => {
      dom.window.document.addEventListener("DOMContentLoaded", resolve);
    });
  });

  it("fa fa-thumbs-up 存在於 .ans element", () => {
    const playerRecords = container.querySelectorAll(".table tbody tr");

    expect(playerRecords[1].children[0].innerHTML.includes("流川楓")).toBe(
      true
    );
    expect(
      playerRecords[1].children[0].innerHTML.includes("fa fa-thumbs-up")
    ).toBe(true);
    expect(playerRecords[4].children[0].innerHTML.includes("三井壽")).toBe(
      true
    );
    expect(
      playerRecords[4].children[0].innerHTML.includes("fa fa-thumbs-up")
    ).toBe(true);
  });
});
