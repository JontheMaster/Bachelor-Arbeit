(function(){
"use strict";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reqChip = id => `<button type="button" class="chip req" data-req="${id}" title="Anforderung ${id} in der Tabelle zeigen">${id}</button>`;
const LETTERS = ["A","B","C"];
const LV = {ok:["unbedenklich","var(--ok)"], warn:["klärungsbedürftig","var(--warn)"], crit:["grenzverletzend","var(--crit)"]};

/* ---------- Kapitelbalken ---------- */
function chapters(){
  const bar = $("#chbar"), leg = $("#chlegend");
  bar.innerHTML = CHAPTERS.map(c => `<a href="${c.href}" style="flex:${c.pages};background:color-mix(in srgb,${c.c} 22%,var(--surface))" title="Kapitel ${c.n}: ${esc(c.t)} (${c.p})">${c.n}${c.pages>=7?`<span>${esc(c.t)}</span>`:""}</a>`).join("");
  leg.innerHTML = CHAPTERS.map(c => `<div><b>${c.p}</b><span>${c.n} ${esc(c.t)}</span></div>`).join("");
}

/* ---------- Grundfunktionen, Stakeholder, Nutzungsszenario ---------- */
function concept(){
  $("#gfs").innerHTML = GFS.map(g => `<article class="card gf"><span class="no">GF ${g.n}</span><h4>${esc(g.t)}</h4><p>${esc(g.d)}</p><div class="chips">${g.r.map(reqChip).join("")}</div></article>`).join("");
  $("#stake").innerHTML = STAKE.map(col => `<div class="stake-col ${col.cls}"><header><b>${col.lvl}</b><span class="label">${col.note}</span></header>${col.roles.map(r => `<div class="card role"><h4>${esc(r.t)}</h4><p>${esc(r.i)}</p><p class="why">${esc(r.e)}</p></div>`).join("")}</div>`).join("");
  $("#story").innerHTML = STORY.map(s => `<li><span class="when">${esc(s.w)}</span><h4>${esc(s.h)}</h4><p>${esc(s.p)}</p>${s.gf?`<span class="gftag gf-tag">${s.gf}</span>`:""}</li>`).join("");
  $("#stories").innerHTML = STORIES.map(u => `<article class="us"><span class="id">${u.id}</span>
    <div class="line"><i>Rolle</i><span>Als Trainer</span></div>
    <div class="line"><i>Wunsch</i><span>${esc(u.want)}</span></div>
    <div class="line why"><i>Zweck</i><span>${esc(u.why)}</span></div>
    <footer><span class="label">Bezug</span><span class="chips">${u.r.map(reqChip).join("")}</span></footer></article>`).join("");
  $("#ucflow").innerHTML = UCFLOW.map(s => s.w==="loop"
    ? `<li class="loop"><b>${s.n}</b><span>${esc(s.t)}</span></li>`
    : `<li><b>${s.n}</b><span><em class="who ${s.w==="u"?"u":""}">${s.w==="u"?"Trainer:in":"Prototyp"}</em>${esc(s.t)}</span></li>`).join("");
  $("#conflicts").innerHTML = CONFLICTS.map(c => `<article class="card cf"><h4>${esc(c.t)}</h4>
    <div class="tug"><div>${c.l.x}${c.l.r.length?`<span class="chips">${c.l.r.map(reqChip).join("")}</span>`:""}</div><i>gegen</i><div>${c.rr.x}${c.rr.r.length?`<span class="chips">${c.rr.r.map(reqChip).join("")}</span>`:""}</div></div>
    <p class="res"><b>Lösung</b><span>${esc(c.res)}</span></p>
    ${c.cost?`<p class="res cost"><b>Preis</b><span>${esc(c.cost)}</span></p>`:""}
    <footer>${esc(c.where)}</footer></article>`).join("");
  $("#decisions").innerHTML = DECISIONS.map(d => `<article class="card d"><span class="when">${esc(d.w)}</span><h4>${esc(d.t)}</h4>
    <div class="ba"><div class="b4">${esc(d.b)}</div><i aria-label="wird zu">→</i><div class="af">${esc(d.a)}</div></div><p>${esc(d.p)}</p></article>`).join("");
  $("#anat").innerHTML = TAB8.map(r => `<div class="anat-row"><div><b>${r[0]}</b><p>${esc(r[1])}</p></div><code>${r[2]}</code></div>`).join("");
}

/* ---------- Anforderungen ---------- */
const RF = {type:"all", prio:new Set(), gf:"all", src:new Set(), id:null};
function reqFilters(){
  const f = $("#reqfilters");
  const btn = (grp, val, label, pressed, extra="") => `<button type="button" class="fbtn ${extra}" data-g="${grp}" data-v="${val}" aria-pressed="${pressed}">${label}</button>`;
  f.innerHTML = `
    <div class="fgroup"><span>Art</span>${btn("type","all","Alle",RF.type==="all")}${btn("type","F","Funktional",RF.type==="F")}${btn("type","NF","Nichtfunktional",RF.type==="NF")}</div>
    <div class="fgroup"><span>Priorität</span>${["Muss","Soll","Kann"].map(p => btn("prio",p,p,RF.prio.has(p))).join("")}</div>
    <div class="fgroup"><span>GF</span>${btn("gf","all","alle",RF.gf==="all")}${[1,2,3,4,5,6].map(n => btn("gf",String(n),n,RF.gf===String(n))).join("")}</div>
    <div class="fgroup"><span>Quelle</span>${btn("src","k",'<span class="dot" style="background:var(--s-meth)"></span>Interview',RF.src.has("k"))}${btn("src","a",'<span class="dot" style="background:var(--s-sg)"></span>Literatur',RF.src.has("a"))}${btn("src","s",'<span class="dot" style="background:var(--s-best)"></span>Synthese',RF.src.has("s"))}</div>
    <span class="fcount" id="fcount"></span>`;
}
function reqList(){
  const list = REQS.filter(r => {
    if (RF.id) return r.id === RF.id;
    if (RF.type==="F" && !/^F\d/.test(r.id)) return false;
    if (RF.type==="NF" && !/^NF/.test(r.id)) return false;
    if (RF.prio.size && !RF.prio.has(r.p)) return false;
    if (RF.gf!=="all" && r.gf!==RF.gf) return false;
    if (RF.src.size && ![...RF.src].every(t => r.s.some(s => s[0]===t))) return false;
    return true;
  });
  const cls = {k:"st-k", a:"st-a", s:"st-s"};
  $("#reqlist").innerHTML = list.length ? list.map(r => `<li id="req-${r.id}"><span class="rid">${r.id}</span><span class="rtxt">${esc(r.t)}</span>
    <span class="rmeta"><span class="pill p-${r.p.toLowerCase()}">${r.p}</span>${r.gf && r.gf!=="–" ? `<span class="gftag">GF ${r.gf}</span>`:""}${r.s.map(s => `<span class="${cls[s[0]]}"><span class="src">${esc(s[1])}</span></span>`).join("")}</span></li>`).join("")
    : `<li class="empty">Keine Anforderung erfüllt alle gewählten Filter.</li>`;
  $("#fcount").innerHTML = RF.id
    ? `${RF.id} · <button type="button" class="fbtn" id="freset">alle zeigen</button>`
    : `${list.length} von ${REQS.length}`;
}
function reqEvents(){
  $("#reqfilters").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.id === "freset"){ RF.id = null; reqFilters(); reqList(); return; }
    const g = b.dataset.g, v = b.dataset.v; RF.id = null;
    if (g==="type") RF.type = v;
    if (g==="gf") RF.gf = v;
    if (g==="prio" || g==="src"){ const s = RF[g]; s.has(v) ? s.delete(v) : s.add(v); }
    reqFilters(); reqList();
  });
}
function focusReq(id){
  RF.type="all"; RF.prio.clear(); RF.src.clear(); RF.gf="all"; RF.id=id;
  reqFilters(); reqList();
  const t = $("#anforderungsliste");
  t.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block:"start"});
  const li = $("#req-"+id);
  if (li){ li.classList.add("flash"); setTimeout(() => li.classList.remove("flash"), 1600); }
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-req]");
  if (b){ e.preventDefault(); focusReq(b.dataset.req); }
});

/* ---------- Klassendiagramm ---------- */
const CD = {sel:null, area:null, evo:false, orig:false};
const H = 52;
function norm(dx, dy){ const l = Math.hypot(dx,dy) || 1; return [dx/l, dy/l]; }
function edgeSvg(e, i){
  let pts = e.pts.map(p => p.slice());
  let deco = "";
  if (e.k === "c"){
    const [p0, p1] = pts; const [ux, uy] = norm(p1[0]-p0[0], p1[1]-p0[1]); const nx = -uy, ny = ux;
    const a = [p0[0]+ux*9+nx*6, p0[1]+uy*9+ny*6], tip = [p0[0]+ux*18, p0[1]+uy*18], b = [p0[0]+ux*9-nx*6, p0[1]+uy*9-ny*6];
    deco += `<path class="dm" d="M${p0} L${a} L${tip} L${b} Z"/>`;
    pts[0] = tip;
  } else {
    const pe = pts[pts.length-1], pp = pts[pts.length-2]; const [ux, uy] = norm(pe[0]-pp[0], pe[1]-pp[1]); const nx = -uy, ny = ux;
    deco += `<polyline class="hd" points="${pe[0]-ux*10+nx*6},${pe[1]-uy*10+ny*6} ${pe} ${pe[0]-ux*10-nx*6},${pe[1]-uy*10-ny*6}"/>`;
  }
  const d = "M" + pts.map(p => p.join(" ")).join(" L");
  const lab = e.l ? `<text x="${e.lp[0]}" y="${e.lp[1]}" text-anchor="${e.lp[2]}">${esc(e.l)}</text>` : "";
  const ms = (e.m||[]).map(m => `<text class="m" x="${m[1]}" y="${m[2]}" text-anchor="${m[3]}">${esc(m[0])}</text>`).join("");
  return `<g class="edge ${e.k==="d"?"dep":""}" data-i="${i}" data-f="${e.f}" data-t="${e.to}"><path class="l" d="${d}"/>${deco}${lab}${ms}</g>`;
}
function classSvg(c){
  const cx = c.x + c.w/2;
  const txt = c.st
    ? `<text class="st" x="${cx}" y="${c.y+19}" text-anchor="middle">«${c.st}»</text><text class="nm" x="${cx}" y="${c.y+39}" text-anchor="middle">${c.n}</text>`
    : `<text class="nm" x="${cx}" y="${c.y+31}" text-anchor="middle">${c.n}</text>`;
  let badge = "";
  if (c.evo){
    const lab = c.evo === "n" ? "NEU" : "GEÄNDERT", w = c.evo === "n" ? 30 : 58;
    badge = `<g class="badge ${c.evo==="n"?"new":""}" aria-hidden="true"><rect x="${c.x+c.w-w-4}" y="${c.y-9}" width="${w}" height="16" rx="3"/><text x="${c.x+c.w-w/2-4}" y="${c.y+2.5}" text-anchor="middle">${lab}</text></g>`;
  }
  return `<g class="cls" data-id="${c.id}" tabindex="0" role="button" aria-label="Klasse ${c.n}"><rect class="box" x="${c.x}" y="${c.y}" width="${c.w}" height="${H}" rx="4"/>${txt}${badge}</g>`;
}
function zones(){
  const z = [["inhalt",10,16,670,486],["nutzung",700,16,205,486],["verein",940,16,230,486]];
  return z.map(([a,x,y,w,h]) => `<g class="zone"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/><text x="${x+14}" y="${y+24}">${AREAS[a]}</text></g>`).join("");
}
function cdRender(){
  const stage = $("#cdstage");
  if (CD.orig){
    stage.innerHTML = `<div class="orig"><img src="__ABB2__" alt="Abb. 2 aus der Arbeit: konzeptionelles Klassendiagramm mit den Bereichen Inhalt, Nutzung und Vereinskontext." width="875" height="961"></div>`;
  } else {
    stage.innerHTML = `<svg viewBox="0 0 1180 512" role="img" aria-label="Konzeptionelles Klassendiagramm mit 13 Klassen" class="${CD.evo?"evo":""}">${zones()}${EDGES.map(edgeSvg).join("")}${CLASSES.map(classSvg).join("")}</svg>`;
  }
  cdHighlight();
}
function cdHighlight(){
  const svg = $("#cdstage svg");
  if (svg){
    svg.classList.toggle("evo", CD.evo);
    $$(".cls", svg).forEach(g => g.classList.remove("sel","near"));
    $$(".edge", svg).forEach(g => g.classList.remove("on"));
    let dim = false;
    if (CD.sel){
      dim = true;
      $(`.cls[data-id="${CD.sel}"]`, svg).classList.add("sel");
      $$(".edge", svg).forEach(g => {
        if (g.dataset.f===CD.sel || g.dataset.t===CD.sel){
          g.classList.add("on");
          const o = g.dataset.f===CD.sel ? g.dataset.t : g.dataset.f;
          $(`.cls[data-id="${o}"]`, svg).classList.add("near");
        }
      });
    } else if (CD.area){
      dim = true;
      const ids = CLASSES.filter(c => c.a===CD.area).map(c => c.id);
      ids.forEach(id => $(`.cls[data-id="${id}"]`, svg).classList.add("near"));
      $$(".edge", svg).forEach(g => { if (ids.includes(g.dataset.f) && ids.includes(g.dataset.t)) g.classList.add("on"); });
    }
    svg.classList.toggle("dimmed", dim);
  }
  $$("#cdlist .chip").forEach(b => b.classList.toggle("on", b.dataset.cls===CD.sel));
  $$("#cdbar [data-area]").forEach(b => b.setAttribute("aria-pressed", String((b.dataset.area||null)===CD.area && !CD.sel)));
  $("#cdbar [data-t=evo]").setAttribute("aria-pressed", String(CD.evo));
  $("#cdbar [data-t=orig]").setAttribute("aria-pressed", String(CD.orig));
  $("#evo").hidden = !CD.evo;
  cdPanel();
}
function cdPanel(){
  const p = $("#cdpanel");
  if (!CD.sel){
    const n = CD.area ? CLASSES.filter(c => c.a===CD.area).length : 13;
    p.innerHTML = `<div><span class="label">${CD.area ? AREAS[CD.area] + " · " + AREA_NOTE[CD.area] : "Lesehilfe"}</span>
      <h4>${CD.area ? n + " Klassen" : "13 Klassen, 3 Bereiche"}</h4>
      <p>${CD.area ? "Die Trennung des Vereinskontexts von den Inhalten geht auf NF13 zurück. Ein anderer Verein hinterlegt nur seine eigenen Angaben." : "Das Diagramm beschreibt fachliche Bestandteile, keine technische Umsetzung. Methoden, Sichtbarkeiten und Datentypen fehlen bewusst, die Attribute stehen in Anhang 7."}</p></div>
      <div><span class="label">Notation</span><ul style="margin-top:.35rem">
        <li><b>Raute</b>: Komposition, das Teil gehört fest zum Ganzen</li>
        <li><b>Pfeil</b>: gerichtete Assoziation mit Multiplizitäten</li>
        <li><b>gestrichelt</b>: Abhängigkeit</li>
        <li><b>«lokal»</b>: liegt nur auf dem Gerät, <b>«gemeinsam»</b>: vereinsweiter Zähler</li>
      </ul></div>
      <div><span class="label">So geht’s</span><p style="margin-top:.35rem">Wähle eine Klasse im Diagramm oder in der Liste darüber. Ihre Beziehungen werden hervorgehoben, hier erscheinen Bedeutung, Attribute und Anforderungen.</p></div>`;
    return;
  }
  const c = CLASSES.find(x => x.id===CD.sel);
  const rel = EDGES.filter(e => e.f===c.id || e.to===c.id).map(e => `<li>${esc(e.s)}</li>`).join("");
  p.innerHTML = `<div><span class="label">${AREAS[c.a]}${c.st?` · «${c.st}»`:""}</span><h4>${c.n}</h4><p>${esc(c.m)}</p>
      ${c.at.length ? `<div class="attrs" style="margin-top:.6rem">${c.at.map(a => `<code>${a}</code>`).join("")}</div>` : ""}
      ${CD.evo && c.en ? `<p class="evo-note ${c.evo==="n"?"new":""}" style="margin-top:.6rem">${esc(c.en)}</p>` : ""}</div>
    <div><span class="label">Beziehungen</span><ul style="margin-top:.35rem">${rel}</ul></div>
    <div><span class="label">Anforderungen</span><div class="chips" style="margin-top:.35rem">${c.r.map(reqChip).join("")}</div>
      <button type="button" class="btn ghost small" data-clear="1" style="margin-top:1rem">Auswahl aufheben</button></div>`;
}
function cdInit(){
  $("#cdbar").innerHTML = `<button type="button" class="fbtn" data-area="" aria-pressed="true">Alle Bereiche</button>${Object.keys(AREAS).map(a => `<button type="button" class="fbtn" data-area="${a}" aria-pressed="false">${AREAS[a]}</button>`).join("")}
    <span style="flex:1"></span><button type="button" class="fbtn" data-t="evo" aria-pressed="false">Entwicklung zeigen</button><button type="button" class="fbtn" data-t="orig" aria-pressed="false">Originalabbildung (Abb. 2)</button>`;
  $("#cdlist").innerHTML = CLASSES.map(c => `<button type="button" class="chip" data-cls="${c.id}">${c.n}</button>`).join("");
  $("#cdbar").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.t==="evo"){ CD.evo = !CD.evo; if (CD.evo) CD.orig = false; cdRender(); return; }
    if (b.dataset.t==="orig"){ CD.orig = !CD.orig; if (CD.orig) CD.evo = false; cdRender(); return; }
    if ("area" in b.dataset){ CD.area = b.dataset.area || null; CD.sel = null; if (CD.orig){ CD.orig=false; cdRender(); } else cdHighlight(); }
  });
  const pick = id => { CD.sel = CD.sel===id ? null : id; CD.area = null; if (CD.orig){ CD.orig=false; cdRender(); } else cdHighlight(); };
  $("#cdstage").addEventListener("click", e => { const g = e.target.closest(".cls"); if (g) pick(g.dataset.id); else if (CD.sel){ CD.sel=null; cdHighlight(); } });
  $("#cdstage").addEventListener("keydown", e => { const g = e.target.closest(".cls"); if (g && (e.key==="Enter"||e.key===" ")){ e.preventDefault(); pick(g.dataset.id); } });
  $("#cdlist").addEventListener("click", e => { const b = e.target.closest("[data-cls]"); if (b) pick(b.dataset.cls); });
  $("#cdpanel").addEventListener("click", e => { if (e.target.closest("[data-clear]")){ CD.sel=null; cdHighlight(); } });
  cdRender();
}

/* ---------- Szenarienbestand ---------- */
let invPh = "all";
function inventory(){
  const lab = {all:"Alle", vor:"vor dem Training", im:"im Training", nach:"nach dem Training"};
  $("#invbar").innerHTML = Object.keys(lab).map(k => `<button type="button" class="fbtn" data-ph="${k}" aria-pressed="${invPh===k}">${lab[k]}${k!=="all"?` · ${INVENTORY.filter(s=>s.ph===k).length}`:""}</button>`).join("");
  $("#inv").innerHTML = INVENTORY.filter(s => invPh==="all" || s.ph===invPh).map(s => `<article class="card sc ${s.play?"play":""}"><span class="ph">${lab[s.ph]}${s.play?" · ausgearbeitet":""}</span><h4>${esc(s.t)}</h4><p>${esc(s.f)}</p><p class="basis">${esc(s.b)}</p>${s.play?`<button type="button" class="btn small go" data-play="${s.play}">Durchspielen</button>`:""}</article>`).join("");
}

/* ---------- Szenario-Player ---------- */
const KEY = "praevention-trainingsalltag-v1";
let P = {cur:"s1", prog:{}};
let fbOpen = false;
try { const raw = localStorage.getItem(KEY); if (raw){ const o = JSON.parse(raw); if (o && o.prog && SCEN[o.cur]) P = o; } } catch(e){}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch(e){} };
const prog = id => (P.prog[id] = P.prog[id] || {step:"intro", ch:[], done:false});
function stateLabel(id){
  const g = P.prog[id];
  if (!g || (g.step==="intro" && !g.done)) return "Neu anfangen";
  if (g.step==="end") return "Abgeschlossen · erneut startbar";
  if (typeof g.step==="number") return `Weiter bei Punkt ${g.step+1} von 3`;
  return g.done ? "Abgeschlossen · erneut startbar" : "Neu anfangen";
}
function picker(){
  $("#picker").innerHTML = Object.keys(SCEN).map(id => { const s = SCEN[id]; return `<button type="button" class="pick" data-s="${id}" aria-pressed="${P.cur===id}"><span class="ph">Szenario ${s.no} · ${s.ph}</span><b>${s.t}</b><small>${esc(s.short)}</small><span class="state">${stateLabel(id)}</span></button>`; }).join("");
}
function help(){
  return `<div class="ph-foot"><details><summary>Hilfe und Beratung</summary><div class="help"><p>Im Prototyp steht hier eine offizielle, vereinsunabhängige Beratungsstelle, erreichbar aus jeder Ansicht (F09). Zum Beispiel:</p><p>Hilfe-Telefon Sexueller Missbrauch, kostenfrei und anonym</p><p class="num">0800 22 55 530</p></div></details></div>`;
}
function phone(){
  const s = SCEN[P.cur], g = prog(P.cur);
  const segs = [0,1,2].map(i => `<i class="${(g.step==="end" || (typeof g.step==="number" && i<=g.step)) ? "on":""}"></i>`).join("");
  let body = "";
  if (g.step==="intro"){
    body = `<span class="label">${esc(s.f)}</span><h4>${s.t}</h4>
      <div class="chips"><span class="chip">${esc(s.age)}</span><span class="chip">${esc(s.place)}</span><span class="chip">${esc(s.ph)}</span></div>
      <div class="sit"><span class="label">Vorgeschichte</span>${esc(s.hist)}</div>
      <div class="sit"><span class="label">Ausgangssituation</span>${esc(s.start)}</div>
      <div class="ph-actions"><button type="button" class="btn" data-act="start">Zum ersten Entscheidungspunkt</button></div>
      <p class="fine">Inhaltliche Grundlage: ${esc(s.basis)}</p>`;
  } else if (typeof g.step==="number"){
    const i = g.step, ep = s.eps[i], ch = g.ch[i];
    const picked = ch !== undefined && ch !== null;
    body = `<span class="label">Entscheidungspunkt ${i+1} von 3</span>
      <div class="sit">${esc(ep.sit)}</div>
      <p class="q">${esc(ep.q)}</p>
      <div class="opts">${ep.o.map((o,k) => `<button type="button" class="opt ${picked ? (ch===k?"picked":"faded") : ""}" data-opt="${k}" ${picked?"disabled":""} aria-pressed="${ch===k}"><span class="letter">${LETTERS[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      ${picked ? `<div class="ph-actions"><button type="button" class="btn ghost" data-act="fb" aria-expanded="${fbOpen}">${fbOpen?"Rückmeldung ausblenden":"Rückmeldung ansehen"}</button><button type="button" class="btn" data-act="next">${i<2?"Weiter":"Zur Auswertung"}</button></div>` : `<p class="fine">Keine Zeitbegrenzung. Keine Option ist offensichtlich falsch.</p>`}
      ${picked && fbOpen ? `<div class="fb"><div class="e"><b>Erkennen</b>${esc(ep.fb[0])}</div><div class="a"><b>Absichern</b>${esc(ep.fb[1])}</div><div class="h"><b>Handeln</b>${esc(ep.fb[2])}</div></div>` : ""}
      ${picked ? `<p class="fine">Wie es weitergeht, hängt nicht von deiner Wahl ab.</p>` : ""}`;
  } else {
    const grp = ["ok","warn","crit"].map(l => { const items = s.mk.filter(m => m[1]===l); return `<div class="ev-group"><h5><span class="dot" style="background:${LV[l][1]}"></span>${LV[l][0]} · ${items.length}</h5><ul>${items.map(m => `<li class="${m[2]?"":"no"}"><span>${esc(m[0])}</span><small>${m[2]?"eingetreten":"nicht eingetreten"}</small></li>`).join("")}</ul></div>`; }).join("");
    body = `<span class="label">Auswertung · ${esc(s.t)}</span><h4>Was war unbedenklich, was nicht?</h4>
      <p class="fine" style="font-size:var(--t-s)">Eingeordnet wird die Situation, nicht deine Entscheidung.</p>
      ${grp}
      <div><span class="label">Einschätzungsspiegel</span></div>
      <div class="spiegel">${s.eps.map((ep,i) => `<div class="row"><span class="mono">Punkt ${i+1}</span><span>${esc(ep.q)}</span><span class="mine">deine Wahl: ${g.ch[i]!=null?LETTERS[g.ch[i]]:"–"}</span></div>`).join("")}</div>
      <p class="f11">Hier stünde der Anteil je Option aus deinem Verein. Diese Seite zählt nicht mit. Der Prototyp zeigt an dieser Stelle einen Hinweis, solange zu wenige Entscheidungen anderer vorliegen (F11).</p>
      <div class="contact"><span class="label">Ansprechpersonen im Verein</span><span>Hier hinterlegt der Verein Namen, Funktion und Kontaktweg (F08).</span></div>
      <div class="ph-actions"><button type="button" class="btn ghost" data-act="again">Nochmal</button><button type="button" class="btn" data-act="other">Nächstes Szenario</button></div>`;
  }
  $("#phone").innerHTML = `<div class="ph-top"><b>${s.t}</b><span class="seg" aria-label="Fortschritt">${segs}</span></div><div class="ph-body">${body}</div>${help()}`;
}
function playerRender(){ picker(); phone(); }
function gotoPlayer(){
  const ph = $("#phone"); const r = ph.getBoundingClientRect();
  if (r.top < 60 || r.top > innerHeight*0.6) $("#durchspielen").scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto":"smooth", block:"start"});
}
function playerInit(){
  $("#picker").addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (!b) return; P.cur = b.dataset.s; fbOpen=false; save(); playerRender(); });
  $("#phone").addEventListener("click", e => {
    const g = prog(P.cur);
    const o = e.target.closest("[data-opt]");
    if (o && !o.disabled){ g.ch[g.step] = Number(o.dataset.opt); fbOpen=false; save(); playerRender(); return; }
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act;
    if (act==="start"){ g.step = 0; g.ch = []; }
    if (act==="fb"){ fbOpen = !fbOpen; }
    if (act==="next"){ fbOpen=false; if (g.step<2) g.step++; else { g.step="end"; g.done=true; } }
    if (act==="again"){ P.prog[P.cur] = {step:"intro", ch:[], done:true}; fbOpen=false; }
    if (act==="other"){ const ids = Object.keys(SCEN); P.cur = ids[(ids.indexOf(P.cur)+1)%ids.length]; fbOpen=false; }
    save(); playerRender();
    if (act!=="fb") gotoPlayer();
  });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-play]"); if (!b) return;
    P.cur = b.dataset.play; const g = prog(P.cur); if (g.step==="end"){ g.step="intro"; g.ch=[]; }
    fbOpen=false; save(); playerRender(); $("#durchspielen").scrollIntoView({behavior:"smooth", block:"start"});
  });
  const ep = SCEN.s1.eps[0];
  $("#teaserOpts").innerHTML = ep.o.map((o,k) => `<button type="button" class="opt" data-t1="${k}"><span class="letter">${LETTERS[k]}</span><span>${esc(o)}</span></button>`).join("");
  $("#teaserOpts").addEventListener("click", e => {
    const b = e.target.closest("[data-t1]"); if (!b) return;
    P.cur = "s1"; P.prog.s1 = {step:0, ch:[Number(b.dataset.t1)], done:(P.prog.s1||{}).done||false}; fbOpen = false; save(); playerRender();
    $("#durchspielen").scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto":"smooth", block:"start"});
  });
  $("#invbar").addEventListener("click", e => { const b = e.target.closest("[data-ph]"); if (!b) return; invPh = b.dataset.ph; inventory(); });
  playerRender();
}

/* ---------- Quellen ---------- */
const QF = {strands:new Set(), sel:null};
function years(){
  const x0 = 40, x1 = 830, oj = 880, base = 128, step = 17;
  const yx = y => y==null ? oj : x0 + (y-2003)*(x1-x0)/23;
  const stack = {};
  const dots = SOURCES.map((s,i) => { const key = s.y==null?"oj":s.y; stack[key] = (stack[key]||0)+1; return {i, x:yx(s.y), y: base - 10 - (stack[key]-1)*step, s}; });
  const ticks = [2003,2005,2010,2013,2015,2018,2020,2024,2026].map(y => `<line class="ax" x1="${yx(y)}" x2="${yx(y)}" y1="${base}" y2="${base+5}"/><text x="${yx(y)}" y="${base+19}" text-anchor="middle">${y}</text>`).join("");
  $("#years").innerHTML = `<svg viewBox="0 0 920 152" role="img" aria-label="Erscheinungsjahre der 28 Quellen, 2003 bis 2026">
    <line class="ax" x1="${x0-10}" x2="${x1+10}" y1="${base}" y2="${base}"/>${ticks}
    <line class="ax" x1="${oj-14}" x2="${oj+14}" y1="${base}" y2="${base}"/><text x="${oj}" y="${base+19}" text-anchor="middle">o. J.</text>
    <text x="${x0-10}" y="14">Erscheinungsjahr · ein Punkt je Quelle</text>
    ${dots.map(d => `<circle class="${STRANDS[d.s.s].c}" data-src="${d.i}" cx="${d.x}" cy="${d.y}" r="7" style="fill:var(--${STRANDS[d.s.s].c})"><title>${esc(d.s.k)} (${d.s.y||"o. J."})</title></circle>`).join("")}
  </svg>`;
}
function strands(){
  $("#strands").innerHTML = `<button type="button" class="fbtn" data-st="" aria-pressed="${QF.strands.size===0}">Alle Stränge</button>` + Object.keys(STRANDS).map(k => {
    const n = SOURCES.filter(s => s.s===k).length;
    return `<button type="button" class="fbtn ${STRANDS[k].c}" data-st="${k}" aria-pressed="${QF.strands.has(k)}"><span class="dot"></span>${STRANDS[k].n} · ${n}</button>`;
  }).join("");
}
function lit(){
  $("#lit").innerHTML = SOURCES.map((s,i) => {
    const vis = !QF.strands.size || QF.strands.has(s.s);
    const sc = (s.sc||[]).map(id => `<button type="button" class="chip" data-play="${id}">${SCEN[id].t}</button>`).join("");
    return `<article class="card lc ${STRANDS[s.s].c} ${QF.sel===i?"sel":""}" id="src-${i}" ${vis?"":"hidden"}>
      <header><span class="str"><span class="dot"></span>${STRANDS[s.s].sn}</span><span class="typ">${s.ty}</span></header>
      <h4>${esc(s.k)}, ${s.y||"o. J."}</h4>
      <p class="ti">${esc(s.ti)}</p>
      <p class="ve">${esc(s.au)} · ${esc(s.ve)}</p>
      <p class="role">${esc(s.ro)}</p>
      ${(s.r&&s.r.length)||sc ? `<div class="links">${s.r&&s.r.length?`<span>trägt</span>${s.r.map(reqChip).join("")}`:""}${sc?`<span>Szenario</span>${sc}`:""}</div>`:""}
      ${s.via?`<p class="via">Darüber zitiert: ${esc(s.via)}</p>`:""}
    </article>`;
  }).join("");
  $$("#years circle").forEach(c => { const s = SOURCES[c.dataset.src]; c.classList.toggle("mute", QF.strands.size>0 && !QF.strands.has(s.s)); c.classList.toggle("sel", Number(c.dataset.src)===QF.sel); });
}
function sourcesInit(){
  years(); strands(); lit();
  $("#strands").addEventListener("click", e => {
    const b = e.target.closest("[data-st]"); if (!b) return;
    const k = b.dataset.st;
    if (!k) QF.strands.clear(); else (QF.strands.has(k) ? QF.strands.delete(k) : QF.strands.add(k));
    QF.sel = null; strands(); lit();
  });
  $("#years").addEventListener("click", e => {
    const c = e.target.closest("circle"); if (!c) return;
    const i = Number(c.dataset.src); QF.sel = QF.sel===i ? null : i;
    if (QF.sel!=null && QF.strands.size && !QF.strands.has(SOURCES[i].s)) { QF.strands.clear(); strands(); }
    lit();
    if (QF.sel!=null) $("#src-"+i).scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto":"smooth", block:"nearest"});
  });
}

/* ---------- Navigation ---------- */
function navSpy(){
  const links = $$("#navlist a"); const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(ents => {
    ents.forEach(en => { if (en.isIntersecting){ links.forEach(a => a.classList.remove("cur")); const a = map.get(en.target.id); if (a){ a.classList.add("cur"); const ul = a.closest("ul"); if (ul.scrollWidth > ul.clientWidth) ul.scrollTo({left: Math.max(0, a.offsetLeft - ul.clientWidth/3), behavior:"smooth"}); } } });
  }, {rootMargin:"-45% 0px -50% 0px"});
  $$("section.sec").forEach(s => io.observe(s));
}

chapters(); concept(); reqFilters(); reqList(); reqEvents(); cdInit(); inventory(); playerInit(); sourcesInit(); navSpy();
})();
