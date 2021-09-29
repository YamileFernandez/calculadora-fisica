const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

const calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
const  calcularPerimetroCuadrado  =  ( )  =>  {
    const  LadoDelCuadrado  =  documento . querySelector ( "# lado-cuadrado" ) . valor ;
    const  resultado  =  PerimetroDelCuadrado ( LadoDelCuadrado ) ;
    documento . querySelector ( "#resultado" ) . innerHTML  =  resultado ;
  } ;