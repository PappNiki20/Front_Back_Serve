import AdatModel from "../Model/AdatModel.js";
import KartyaView from "../View/KartyakView.js";
import DataService from "../Model/DataService.js";
class KartyaController {
    constructor() {
        this.dataservice = new  DataService();
        this.dataservice.getAxiosData("api/writers",this.adatokMegj)
        this.adatleiro = new AdatModel();
        console.log(this.adatleiro.leiro())
    }
    adatokMegj(lista){
        new KartyaView(lista, $(".fotablak"))
    }
  }
  export default KartyaController;


 
