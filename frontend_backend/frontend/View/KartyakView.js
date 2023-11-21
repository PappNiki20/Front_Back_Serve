import NevekDivView from "./NevekDivView.js";
class KartyaView{
    #lista = [];
    /* #leiro */
  constructor(lista, szuloElem/* leiro */) {
    this.#lista = lista;
   /*  this.#leiro = leiro; */
    szuloElem.append(`<div class="Tablak">`);
    this.divElem = szuloElem.children(".Tablak");
    this.megjelenit()
  }
  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new NevekDivView(elem, this.divElem, index);
    });
  }
}
export default KartyaView