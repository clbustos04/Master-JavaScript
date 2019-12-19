var bicicleta = {
  color:"rojo",
  modelo:"cross",
  freno:"disco",
  velocidadMaxima: "60km",
  cambiaColor: function(nuevoColor){
      this.color = nuevoColor;
      console.log(this);
  }
};

bicicleta.cambiaColor("blanco");
