// WhatsApp da ALM: todos os CTAs do site usam este número.
const WHATSAPP = "5511940127499";

const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Linhas de produto. "featured" é o item mostrado na home e na capa da linha.
const LINES = [
  { id: "bnc", name: "Conectores BNC", featured: "bnc-mola-parafuso",
    desc: "BNC de crimpar, compressão, mola, borne, 90 graus e engate rápido para cabos RG 06 e RG 59." },
  { id: "f", name: "Conectores F", featured: "conector-f-rosca-rg-59",
    desc: "Conectores F de rosca, anel e compressão para RG 06 e RG 59." },
  { id: "plug", name: "Plug e Jack", featured: "plug-p4-borne",
    desc: "Plugs e jacks P4 e RCA nas versões borne, engate rápido, plástico e dourado." },
  { id: "adaptadores", name: "Adaptadores", featured: "bnc-m-x-2-bnc-f",
    desc: "Adaptadores BNC, RCA, F e VGA x RJ45 para ligar câmeras, DVRs e monitores." },
  { id: "emendas", name: "Emendas", featured: "emenda-bnc",
    desc: "Emendas BNC, F, F em T, F x RCA e RJ45 fêmea x fêmea." },
  { id: "divisores", name: "Divisores", featured: "divisor-3-saidas",
    desc: "Divisores de 2, 3 e 4 saídas." },
  { id: "fontes", name: "Fontes", featured: "fonte-12v-10a-grade",
    desc: "Fontes 12v de 3A a 50A e 24v 5A, com modelos em grade." },
  { id: "acessorios", name: "Acessórios", featured: "testador-rj45-e-bnc",
    desc: "Video balun, plugs RJ, alicates, testador, baterias, abraçadeiras, passa fio e monitor 7\"." },
];

// Catálogo do site atual (almeidaseguranca.com.br/produtos.php). [nome, linhas, imagem]
const PRODUCTS = [
  ["Plug RCA Dourado", "plug", "plug-rca-dourado"],
  ["Plug RCA Plástico", "plug", "plug-rca-plastico"],
  ["Plug P4 Engate Rápido", "plug", "plug-p4-engate-rapido"],
  ["Jack P4 Engate Rápido", "plug", "jack-p4-engate-rapido"],
  ["Plug RCA Borne", "plug", "plug-rca-borne"],
  ["Conector BNC Crimpar", "bnc", "bnc-crimpar"],
  ["Conector F Anel RG 06", "f", "conector-f-anel-rg-06"],
  ["Plug P4 Plástico", "plug", "plug-p4-plastico"],
  ["Jack P4 Plástico", "plug", "jack-p4-plastico"],
  ["Conector BNC Compressão 59", "bnc", "bnc-compressao-59"],
  ["Conector BNC 90 Graus", "bnc", "conector-bnc-90-graus"],
  ["Conector BNC Capa Plástico", "bnc", "conector-bnc-capa-plastico"],
  ["Conector BNC Engate Rápido", "bnc", "conector-bnc-engate-rapido"],
  ["Conector BNC Mola Parafuso 4mm", "bnc", "conector-bnc-mola-parafuso-4mm"],
  ["Adaptador RCA Macho x F", "adaptadores", "adaptador-rca-macho-x-f"],
  ["Conector BNC F Mola Solda", "bnc f", "conector-bcn-f-mola-solda"],
  ["Conector BNC F Borne", "bnc f", "conector-bnc-f-borne"],
  ["Emenda F", "emendas", "emenda-f"],
  ["Emenda BNC", "emendas", "emenda-bnc"],
  ["BNC Fêmea x RCA", "adaptadores", "bnc-femea-x-rca"],
  ["Jack P4 Borne", "plug", "jack-p4-borne"],
  ["Plug P4 Borne", "plug", "plug-p4-borne"],
  ["Video Balun", "acessorios", "video-ballun"],
  ["Video Balun", "acessorios", "video-ballun-02"],
  ["F Macho x BNC", "adaptadores", "f-macho-x-bnc"],
  ["Plug Modular RJ-11", "acessorios", "plug-modular-rj-11"],
  ["Plug Modular RJ-45", "acessorios", "plug-modular-rj-45"],
  ["Emenda F em T", "emendas", "emenda-f-em-t"],
  ["BNC x RCA Fêmea", "adaptadores", "bnc-x-rca-femea"],
  ["BNC (M) x 2 BNC (F)", "adaptadores", "bnc-m-x-2-bnc-f"],
  ["BNC x F Fêmea", "adaptadores", "bnc-x-f-femea"],
  ["Conector F Rosca RG 06", "f", "conector-f-rosca-rg-06"],
  ["Conector F Rosca RG 59", "f", "conector-f-rosca-rg-59"],
  ["Alicate RJ-45", "acessorios", "alicate-rj45"],
  ["Divisor 2 Saídas", "divisores", "divisor-2-saidas"],
  ["Divisor 3 Saídas", "divisores", "divisor-3-saidas"],
  ["Divisor 4 Saídas", "divisores", "divisor-4-saidas"],
  ["Fixa Cabo RG 59 Preto", "acessorios", "fixa-cabo-rg-59-preto"],
  ["Fonte 24v 5A Grade", "fontes", "fonte-24v-5a-grade"],
  ["Fonte 12v 15A Grade", "fontes", "fonte-12v-15a-grade"],
  ["Fonte 12v 3A", "fontes", "fonte-12v-3A"],
  ["Abraçadeira 2,5x100mm Branca", "acessorios", "abracadeira-2-5x100mm-branca"],
  ["Abraçadeira 2,5x100mm Preta", "acessorios", "abracadeira-2-5x100mm-preta"],
  ["Abraçadeira 3,6x150mm Branca", "acessorios", "abracadeira-3-6x150mm-branca"],
  ["Abraçadeira 3,6x150mm Preta", "acessorios", "abracadeira-3-6x150mm-preta"],
  ["Abraçadeira 4,8x200mm Branca", "acessorios", "abracadeira-4-8x200mm-branca"],
  ["Abraçadeira 4,8x200mm Preta", "acessorios", "abracadeira-4-8x200mm-preta"],
  ["Passa Fio", "acessorios", "passa-fio"],
  ["F Compressão RG 06", "f", "f-compressao-rg-06"],
  ["Conector BNC de Crimpar RG 06", "bnc", "conector-bnc-de-crimpar-rg-06"],
  ["Conector BNC de Crimpar RG 59", "bnc", "conector-bnc-de-crimpar-rg-59"],
  ["BNC Mola Parafuso", "bnc", "bnc-mola-parafuso"],
  ["BNC Borne", "bnc", "bnc-borne"],
  ["Emenda F Macho x RCA", "emendas", "emenda-f-macho-x-rca"],
  ["Emenda RJ45 Fêmea x Fêmea", "emendas", "emenda-rj45-femea-x-femea"],
  ["Testador RJ45 e BNC", "acessorios", "testador-rj45-e-bnc"],
  ["Alicate de Compressão HT510B", "acessorios", "alicate-de-compressao-ht510b"],
  ["Bateria de Lithium 2016", "acessorios", "bateria-de-lithium-2016"],
  ["Bateria 9V Alcalina", "acessorios", "bateria-9v-alcalina"],
  ["Bateria 12V Encartelado", "acessorios", "bateria-12v-encartelado"],
  ["Decapador p/ RGC 59/06", "acessorios", "decap-p-rgc59-06"],
  ["Bateria CR123A", "acessorios", "bateria-cr123a"],
  ["Fonte 12v 50A Grade", "fontes", "fonte-12v-50a-grade"],
  ["Fonte 12v 30A Grade", "fontes", "fonte-12v-30a-grade"],
  ["Fonte 12v 20A Grade", "fontes", "fonte-12v-20a-grade"],
  ["Monitor 7 Polegadas", "acessorios", "monitor-7-polegadas"],
  ["Fonte 12v 5A Grade", "fontes", "fonte-12v-5a-grade"],
  ["Fonte 12v 10A Grade", "fontes", "fonte-12v-10a-grade"],
  ["Bateria 12V", "acessorios", "bateria-12v"],
  ["Adaptador VGA x RJ45", "adaptadores", "adaptador-vga-x-rj45"],
].map(([name, lines, img]) => ({ id: img, name, lines: lines.split(" "), img: `img/p/${img}.jpg` }));

// Códigos de referência do catálogo do site original (almeidaseguranca.com.br/produtos.php).
const CODES = {
  "plug-rca-dourado": "AL-310",
  "plug-rca-plastico": "AL-300",
  "plug-p4-engate-rapido": "AL-323",
  "jack-p4-engate-rapido": "AL-324",
  "plug-rca-borne": "AL-320",
  "bnc-crimpar": "AL-224",
  "conector-f-anel-rg-06": "AL-500",
  "plug-p4-plastico": "AL-340",
  "jack-p4-plastico": "AL-341",
  "bnc-compressao-59": "AL-230",
  "conector-bnc-90-graus": "AL-290",
  "conector-bnc-capa-plastico": "AL-291",
  "conector-bnc-engate-rapido": "AL-223",
  "conector-bnc-mola-parafuso-4mm": "AL-202",
  "adaptador-rca-macho-x-f": "AL-407",
  "conector-bcn-f-mola-solda": "AL-211",
  "conector-bnc-f-borne": "AL-223",
  "emenda-f": "AL-410",
  "emenda-bnc": "AL-401",
  "bnc-femea-x-rca": "AL-402",
  "jack-p4-borne": "AL-351",
  "plug-p4-borne": "AL-350",
  "video-ballun": "AL-100",
  "video-ballun-02": "AL-101",
  "f-macho-x-bnc": "AL-409",
  "plug-modular-rj-11": "AL-311",
  "plug-modular-rj-45": "AL-345",
  "emenda-f-em-t": "AL-411",
  "bnc-x-rca-femea": "AL-404",
  "bnc-m-x-2-bnc-f": "AL-405",
  "bnc-x-f-femea": "AL-406",
  "conector-f-rosca-rg-06": "AL-511",
  "conector-f-rosca-rg-59": "AL-510",
  "alicate-rj45": "AL-1001",
  "divisor-2-saidas": "AL-902",
  "divisor-3-saidas": "AL-903",
  "divisor-4-saidas": "AL-904",
  "fixa-cabo-rg-59-preto": "AL-160",
  "fonte-24v-5a-grade": "AL-724G",
  "fonte-12v-15a-grade": "AL-715G",
  "fonte-12v-3A": "AL-703",
  "abracadeira-2-5x100mm-branca": "AL-811",
  "abracadeira-2-5x100mm-preta": "AL-810",
  "abracadeira-3-6x150mm-branca": "AL-816",
  "abracadeira-3-6x150mm-preta": "AL-815",
  "abracadeira-4-8x200mm-branca": "AL-821",
  "abracadeira-4-8x200mm-preta": "AL-820",
  "passa-fio": "AL-10/AL-20/AL-30",
  "f-compressao-rg-06": "AL-531",
  "conector-bnc-de-crimpar-rg-06": "AL-226",
  "conector-bnc-de-crimpar-rg-59": "AL-225",
  "bnc-mola-parafuso": "AL-200",
  "bnc-borne": "AL-220",
  "emenda-f-macho-x-rca": "AL-408",
  "emenda-rj45-femea-x-femea": "AL-R45",
  "testador-rj45-e-bnc": "AL-145",
  "alicate-de-compressao-ht510b": "AL-1005",
  "bateria-de-lithium-2016": "AL-2016",
  "bateria-9v-alcalina": "AL-09V",
  "bateria-12v-encartelado": "AL-12VC",
  "decap-p-rgc59-06": "AL-1003",
  "bateria-cr123a": "CL-123A",
  "fonte-12v-50a-grade": "AL-750G",
  "fonte-12v-30a-grade": "AL-730G",
  "fonte-12v-20a-grade": "AL-720G",
  "monitor-7-polegadas": "AL-1130",
  "fonte-12v-5a-grade": "AL-705G",
  "fonte-12v-10a-grade": "AL-710G",
  "bateria-12v": "AL-12V",
  "adaptador-vga-x-rj45": "AL-114",
};
const NEW = ["fonte-12v-10a-grade", "fonte-12v-3A", "divisor-3-saidas"];

const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const lineById = Object.fromEntries(LINES.map((l) => [l.id, l]));
const itemsOf = (lineId) => PRODUCTS.filter((p) => p.lines.includes(lineId));
const askMsg = (p) => `Olá! Gostaria de um orçamento de: ${p.name}${CODES[p.id] ? ` (${CODES[p.id]})` : ""}`;

const WA_SVG = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.2-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2.7 1.1 3.3.9 3.8.8.6 0 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z"/></svg>';

const $ = (s, el = document) => el.querySelector(s);
const page = document.querySelector("[data-page]")?.dataset.page;

/* ---------- Comum a todas as páginas ---------- */

document.querySelectorAll("[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa); });
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

const menu = $("#menu");
const nav = $("#nav");
function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("is-open", open);
}
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
document.addEventListener("click", (e) => { if (!e.target.closest(".topbar")) setMenu(false); });

// Botão flutuante, lista de orçamento e zoom ficam iguais em todas as páginas.
document.body.insertAdjacentHTML("beforeend", `
<a class="wa-float" href="${waLink("Olá! Vim pelo site da ALM.")}" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">${WA_SVG}</a>
<div class="cart" id="cart" hidden>
  <div class="cart__panel" id="cartPanel" hidden>
    <ul id="cartList"></ul>
    <button class="cart__clear" id="cartClear" type="button">Limpar lista</button>
  </div>
  <div class="cart__bar">
    <button class="cart__toggle" id="cartToggle" type="button" aria-expanded="false" aria-controls="cartPanel">
      <span class="cart__n" id="cartN">0</span><span id="cartLabel">itens na lista</span>
    </button>
    <a class="btn btn--signal btn--sm" id="cartSend" href="${waLink("Olá!")}" target="_blank" rel="noopener">Enviar no WhatsApp</a>
  </div>
</div>
<dialog class="zoom" id="zoom" aria-labelledby="zoomName">
  <form method="dialog"><button class="zoom__close" aria-label="Fechar">×</button></form>
  <img id="zoomImg" src="" alt="">
  <p id="zoomName"></p>
  <a class="btn btn--signal" id="zoomWa" href="${waLink("Olá!")}" target="_blank" rel="noopener">${WA_SVG}Pedir orçamento deste item</a>
</dialog>`);

/* Lista de orçamento, guardada no navegador para seguir entre as páginas */
const STORE_KEY = "alm-lista";
let cart = {};
try { cart = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { cart = {}; }
Object.keys(cart).forEach((id) => { if (!byId[id]) delete cart[id]; });

function saveCart() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch {}
}

function renderCart() {
  const ids = Object.keys(cart);
  const total = ids.length;
  $("#cart").hidden = total === 0;
  document.body.classList.toggle("has-cart", total > 0);
  if (total === 0) { $("#cartPanel").hidden = true; $("#cartToggle").setAttribute("aria-expanded", "false"); }
  $("#cartN").textContent = total;
  $("#cartLabel").innerHTML = `${total === 1 ? "item" : "itens"}<span class="cart__label-long"> na lista</span>`;
  $("#cartList").innerHTML = ids.map((id) => `
    <li>
      <span>${byId[id].name}</span>
      <span class="qty">
        <button type="button" data-dec="${id}" aria-label="Diminuir quantidade de ${byId[id].name}">−</button>
        <output>${cart[id]}</output>
        <button type="button" data-inc="${id}" aria-label="Aumentar quantidade de ${byId[id].name}">+</button>
      </span>
      <button class="rm" type="button" data-rm="${id}">Remover</button>
    </li>`).join("");
  const lines = ids.map((id) => `- ${cart[id]}x ${byId[id].name}${CODES[id] ? ` (${CODES[id]})` : ""}`).join("\n");
  $("#cartSend").href = waLink(`Olá! Gostaria de um orçamento dos itens abaixo:\n\n${lines}`);
  document.querySelectorAll("[data-add]").forEach((b) => {
    const on = b.dataset.add in cart;
    b.setAttribute("aria-pressed", String(on));
    b.textContent = on ? "Na lista ✓" : "Adicionar";
  });
}

$("#cartList").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.inc) cart[b.dataset.inc]++;
  if (b.dataset.dec) cart[b.dataset.dec] = Math.max(1, cart[b.dataset.dec] - 1);
  if (b.dataset.rm) delete cart[b.dataset.rm];
  saveCart(); renderCart();
});
$("#cartToggle").addEventListener("click", () => {
  const open = $("#cartPanel").hidden;
  $("#cartPanel").hidden = !open;
  $("#cartToggle").setAttribute("aria-expanded", String(open));
});
$("#cartClear").addEventListener("click", () => { cart = {}; saveCart(); renderCart(); });

const zoom = $("#zoom");
function openZoom(p) {
  $("#zoomImg").src = p.img;
  $("#zoomImg").alt = p.name;
  $("#zoomName").textContent = p.name;
  $("#zoomWa").href = waLink(askMsg(p));
  if (typeof zoom.showModal === "function") zoom.showModal();
}
zoom.addEventListener("click", (e) => { if (e.target === zoom) zoom.close(); });

// Cliques em "Adicionar" e nas fotos, em qualquer página.
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    if (id in cart) delete cart[id]; else cart[id] = 1;
    saveCart(); renderCart();
    return;
  }
  const z = e.target.closest("[data-zoom]");
  if (z) openZoom(byId[z.dataset.zoom]);
});

/* ---------- Início: contagens do mosaico + carrossel de destaques ---------- */

if (page === "home") {
  document.querySelectorAll("[data-line]").forEach((a) => {
    a.querySelector(".line__n").textContent = `${itemsOf(a.dataset.line).length} itens`;
  });
  $("#highlights").innerHTML = LINES.map((l) => {
    const p = byId[l.featured];
    return `<div><article class="hl">
      <a class="hl__img" href="catalogo.html#${l.id}" aria-label="Ver linha ${l.name}" draggable="false">
        <span class="hl__line">${l.name}</span>
        ${NEW.includes(p.id) ? '<span class="tag">Novidade</span>' : ""}
        <img src="${p.img}" alt="${p.name}" loading="lazy" width="560" height="560" draggable="false">
      </a>
      <div class="hl__body">
        <span class="hl__name">${p.name}</span>
        <span class="hl__code">${CODES[p.id] ? `Cód. ${CODES[p.id]} · ` : ""}${itemsOf(l.id).length} itens na linha</span>
      </div>
      <div class="hl__actions">
        <a class="link" href="catalogo.html#${l.id}">Ver linha</a>
        <a class="ask" href="${waLink(askMsg(p))}" target="_blank" rel="noopener" aria-label="Pedir orçamento de ${p.name} no WhatsApp">${WA_SVG}</a>
      </div>
    </article></div>`;
  }).join("");
}

/* ---------- Catálogo: primeiro a linha, depois os itens dela ---------- */

if (page === "catalogo") {
  const picker = $("#picker");
  const view = $("#lineview");
  const q = $("#q");
  let current = null;

  picker.innerHTML = LINES.map((l) => {
    const p = byId[l.featured];
    return `<a class="pick" href="#${l.id}">
      <span class="pick__img"><img src="${p.img}" alt="" loading="lazy" width="560" height="560"></span>
      <span class="pick__body">
        <span class="pick__title"><b>${l.name}</b><span>${itemsOf(l.id).length} itens</span></span>
        <span class="pick__desc">${l.desc}</span>
      </span>
    </a>`;
  }).join("");

  $("#tabs").innerHTML = `<a class="tab tab--back" href="#linhas">Todas as linhas</a>` +
    LINES.map((l) => `<a class="tab" href="#${l.id}" data-tab="${l.id}">${l.name}</a>`).join("");

  const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function renderItems() {
    const term = normalize(q.value.trim());
    const items = itemsOf(current).filter((p) => !term || term.split(/\s+/).every((t) => normalize(p.name).includes(t)));
    $("#grid").innerHTML = items.map((p, i) => `
      <li class="card" id="p-${p.id}" style="--i:${Math.min(i, 12)}">
        <button class="card__zoom" type="button" data-zoom="${p.id}" aria-label="Ampliar ${p.name}">
          <img src="${p.img}" alt="${p.name}" loading="lazy" width="560" height="560">
        </button>
        <div class="card__body">
          <p class="card__name">${p.name}</p>
          ${CODES[p.id] ? `<p class="card__code">Cód. ${CODES[p.id]}</p>` : ""}
        </div>
        <div class="card__actions">
          <button class="add" type="button" data-add="${p.id}" aria-pressed="false" aria-label="Adicionar ${p.name} à lista">Adicionar</button>
          <a class="ask" href="${waLink(askMsg(p))}" target="_blank" rel="noopener" aria-label="Pedir orçamento de ${p.name} no WhatsApp">${WA_SVG}</a>
        </div>
      </li>`).join("");
    $("#empty").hidden = items.length > 0;
    const total = itemsOf(current).length;
    $("#count").textContent = term ? `${items.length} de ${total} itens` : `${total} itens nesta linha`;
    renderCart();
  }

  function showLine(id, focusProduct) {
    const line = lineById[id];
    current = line ? id : null;
    picker.hidden = !!line;
    $("#pickerHead").hidden = !!line;
    view.hidden = !line;
    if (!line) { document.title = "Catálogo | Alm Segurança Eletrônica"; return; }
    document.title = `${line.name} | Alm Segurança Eletrônica`;
    $("#lineName").textContent = line.name;
    $("#lineDesc").textContent = line.desc;
    document.querySelectorAll("[data-tab]").forEach((t) => t.setAttribute("aria-current", String(t.dataset.tab === id)));
    $(`[data-tab="${id}"]`).scrollIntoView({ block: "nearest", inline: "center" });
    q.value = "";
    renderItems();
    if (focusProduct) {
      const card = document.getElementById(`p-${focusProduct}`);
      card.classList.add("is-target");
      card.scrollIntoView({ block: "center" });
    } else {
      if (location.hash) $("#catalogo").scrollIntoView({ block: "start" });
    }
  }

  // Links próprios: catalogo.html#bnc abre a linha; catalogo.html#p-bnc-borne abre a linha e destaca o item.
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith("p-") && byId[h.slice(2)]) showLine(byId[h.slice(2)].lines[0], h.slice(2));
    else showLine(h);
  }
  window.addEventListener("hashchange", route);
  q.addEventListener("input", renderItems);
  route();
}

/* ---------- Contato: monta a mensagem e abre no WhatsApp ---------- */

if ($("#waForm")) {
  $("#waForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const nome = f.nome.value.trim();
    const msg = f.mensagem.value.trim();
    const err = $("#formError");
    if (!nome || !msg) {
      err.hidden = false;
      (nome ? f.mensagem : f.nome).focus();
      return;
    }
    err.hidden = true;
    const parts = [
      `Olá! ${f.assunto.value}.`,
      `Nome: ${nome}`,
      f.empresa.value.trim() ? `Empresa: ${f.empresa.value.trim()}` : null,
      f.cidade.value.trim() ? `Cidade: ${f.cidade.value.trim()}` : null,
      "",
      msg,
    ].filter((x) => x !== null);
    const a = document.createElement("a");
    a.href = waLink(parts.join("\n"));
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
  });
}


/* ---------- Movimento: cabeçalho, entradas ao rolar, contadores, voltar ao topo ---------- */

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const topbar = $("#topbar");
document.body.insertAdjacentHTML("beforeend", '<button class="to-top" id="toTop" type="button" aria-label="Voltar ao topo"><svg viewBox="0 0 24 24"><path d="m5 15 7-7 7 7"/></svg></button>');
const toTop = $("#toTop");
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
function onScroll() {
  const y = window.scrollY;
  topbar.classList.toggle("is-scrolled", y > 40);
  toTop.classList.toggle("is-on", y > 700);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Páginas internas: aplica as mesmas entradas (fadeInUp) dos blocos da home.
const AUTO = [".section .head", ".bento > *", ".panel", ".tier", ".steps li", ".mvv > div", ".proof div", ".cta", ".pick", ".story > *", ".contact > *"];
document.querySelectorAll(AUTO.join(",")).forEach((el) => {
  if (el.closest("[data-reveal]") || el.querySelector("[data-reveal]")) return;
  el.dataset.reveal = "up";
  const sib = [...el.parentElement.children].filter((c) => c.matches(AUTO.join(",")));
  const i = sib.indexOf(el);
  if (i > 0) el.style.setProperty("--d", `${Math.min(i, 6) * 0.1}s`);
});

function countUp(el) {
  const to = +el.dataset.count, from = +(el.dataset.from || 0), pre = el.dataset.prefix || "";
  if (reduce) { el.textContent = pre + to; return; }
  const t0 = performance.now(), dur = 1800;
  const tick = (t) => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = pre + Math.round(from + (to - from) * e);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      en.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => { if (!el.closest("[data-reveal]")) cio.observe(el); });
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
}

/* Hero: slideshow em fade com barras de progresso */
function initSlides() {
  const slides = [...document.querySelectorAll("#slides .slide")];
  const dots = $("#dots");
  if (!slides.length || !dots) return;
  const DUR = 6000;
  dots.style.setProperty("--dur", `${DUR}ms`);
  dots.innerHTML = slides.map((_, i) => `<button type="button" role="tab" aria-label="Imagem ${i + 1}"></button>`).join("");
  const btns = [...dots.children];
  let cur = 0, timer;
  function go(n) {
    slides[cur].classList.remove("is-on");
    btns[cur].classList.remove("is-on"); btns[cur].setAttribute("aria-selected", "false");
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add("is-on");
    void btns[cur].offsetWidth;
    btns[cur].classList.add("is-on"); btns[cur].setAttribute("aria-selected", "true");
    clearTimeout(timer);
    if (!reduce) timer = setTimeout(() => go(cur + 1), DUR);
  }
  btns.forEach((b, i) => b.addEventListener("click", () => go(i)));
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(timer); else go(cur); });
  slides[0].classList.remove("is-on");
  go(0);
}

/* Carrossel: autoplay a cada 3 s, setas, arrastar e pausa ao passar o mouse */
function initCarousel() {
  const view = $("#carView"), track = $("#highlights");
  if (!view || !track) return;
  const items = track.children.length;
  let idx = 0, timer, per = 4;
  const perView = () => (innerWidth < 560 ? 1.15 : innerWidth < 860 ? 2 : innerWidth < 1100 ? 3 : 4);
  function layout() {
    per = perView();
    track.style.setProperty("--per", per);
    go(idx, false);
  }
  function maxIdx() { return Math.max(0, Math.ceil(items - per)); }
  function go(n, anim = true) {
    const max = maxIdx();
    idx = n > max ? 0 : n < 0 ? max : n;
    track.style.transition = anim ? "" : "none";
    const w = view.clientWidth / per;
    track.style.transform = `translateX(${-idx * w}px)`;
  }
  const play = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(idx + 1), 3000); };
  const stop = () => clearInterval(timer);
  $("#next").addEventListener("click", () => { go(idx + 1); play(); });
  $("#prev").addEventListener("click", () => { go(idx - 1); play(); });
  view.addEventListener("mouseenter", stop);
  view.addEventListener("mouseleave", play);
  view.addEventListener("focusin", stop);
  // arrastar / deslizar
  let x0 = null, dx = 0, base = 0, moved = false;
  view.addEventListener("pointerdown", (e) => {
    x0 = e.clientX; dx = 0; moved = false; stop();
    base = -idx * (view.clientWidth / per);
    track.style.transition = "none";
  });
  window.addEventListener("pointermove", (e) => {
    if (x0 === null) return;
    dx = e.clientX - x0;
    if (Math.abs(dx) > 6) { moved = true; view.classList.add("is-drag"); }
    track.style.transform = `translateX(${base + dx}px)`;
  });
  window.addEventListener("pointerup", () => {
    if (x0 === null) return;
    x0 = null; view.classList.remove("is-drag");
    const w = view.clientWidth / per;
    const step = Math.round(-dx / w) || (Math.abs(dx) > 40 ? (dx < 0 ? 1 : -1) : 0);
    const max = maxIdx();
    go(Math.min(max, Math.max(0, idx + step)));
    play();
  });
  view.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  addEventListener("resize", layout);
  layout();
  play();
}

if (page === "home") { initCarousel(); initSlides(); }

renderCart();
