import AdatModel from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import HibaView from "../View/HibaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
import DataService from "../Model/DataService.js";
const ALAPVEGPONT = "http://localhost:8000/api/writers"
class Controller {

    constructor() {
      this.adatleiro = new AdatModel();
        this.dataservice = new DataService();
        this.dataservice.getAxiosData(ALAPVEGPONT, this.adatokMegj.bind(this), this.hibaMegj.bind(this));
        
        this.dataservice.putAxiosData(ALAPVEGPONT,{
          id : 2,
          nev:"Atirt Petőfi Sándor",
          szul:1589,
      })
      
     
       
   
    this.UrlapView = new UrlapView($(".urlap"), this.adatleiro.leiro);
    
    $(window).on("katt", (event) => {
    
      this.dataservice.postAxiosData(ALAPVEGPONT,event.detail)
      console.log(event.detail);
    });
    $(window).on("torles", (event) => {
        console.log(event.detail);
        this.dataservice.deleteAxiosData(ALAPVEGPONT, event.detail.index);
      });
      $(window).on("megse", (event) => {
        console.log(event.detail);
      });
      $(window).on("kesz", (event) => {
        console.log(event.detail);
      });

      
    }
    adatokMegj(lista) {
      console.log(lista);
      new AdatView(lista, $(".lista"), this.adatleiro.leiro);
      console.log(this.adatleiro.leiro);
  }
      hibaMegj(error) {
        console.log(error);
        new HibaView(error, $(".lista"));
      }
  }
  export default Controller;


 
