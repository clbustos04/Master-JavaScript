var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador (agrega funcionalidad extra a una clase)
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con logo: " + logo);
        };
    };
}
//Clase
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.darMensaje = function () {
        return "Hola";
    };
    Camiseta = __decorate([
        estampar("Metallica")
    ], Camiseta);
    return Camiseta;
}());
//Clase hija
var Musculosa = /** @class */ (function (_super) {
    __extends(Musculosa, _super);
    function Musculosa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musculosa.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Musculosa.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Musculosa;
}(Camiseta));
var sudadera = new Musculosa("rojo", "musculosa", "umbro");
sudadera.setCapucha(true);
sudadera.setColor("amarillo");
console.log(sudadera.darMensaje(), sudadera.getCapucha(), sudadera.getColor());
var polera = new Camiseta("", "", "");
//polera.estampacion();
/*
var poleron = new Camiseta();
var polera = new Camiseta();
//camiseta.color = "rojo";
//camiseta.modelo = "manga larga";

poleron.setColor("Rojo");
console.log(poleron.getColor());

polera.setColor("Blanco");
console.log(polera.getColor()); */
/*
var polera = new Camiseta("rojo","sin mangas","apolo");
console.log(polera);*/ 
