class NevekDivView {
  #adat = {};

  constructor(adat, szuloElem) {
    this.#adat = adat;
    this.divElem = szuloElem;
    this.div = this.divElem.children(".Tablak");
    this.#div();
  }

  #div() {
    let txt = "";
    txt += "<div class='egynev'>";
    for (const key in this.#adat) {
      const element = this.#adat[key];
      txt += `<p>${element}</p>`;
    }
    txt+=`<button type="button">Kiválaszt</button>`
    txt += "</div>";
    this.divElem.append(txt);
  }
  }
  
  export default NevekDivView;