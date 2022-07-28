let pokemon;
let opcion;

pokemon = prompt(
  "¡Hola! Elige tu pokemon: Charmander / Bulbasaur / Squirtle (Escribe ESC para salir del cuestionario): "
);

while (pokemon != "ESC") {
  switch (pokemon) {
    case "Charmander":
      alert("¡Genial! Elegiste a un pokemon tipo fuego.");
      opcion = prompt(
        "¿Lo aceptas? Una vez aceptado ya no se puede cambiar (Ingresar S para si / N para no ): "
      );
      if (opcion == "S") {
        alert("¡Felicitaciones! Tu primer pokemon es Charmander");
      }
      break;
    case "Bulbasaur":
      alert("¡Genial! Elegiste a un pokemon tipo planta.");
      opcion = prompt(
        "¿Lo aceptas? Una vez aceptado ya no se puede cambiar (Ingresar S para si / N para no ): "
      );
      if (opcion == "S") {
        alert("¡Felicitaciones! Tu primer pokemon es Bulbasaur");
      }
      break;
    case "Squirtle":
      alert("¡Genial! Elegiste a un pokemon tipo agua");
      opcion = prompt(
        "¿Lo aceptas? Una vez aceptado ya no se puede cambiar (Ingresar S para si / N para no ): "
      );
      if (opcion == "S") {
        alert("¡Felicitaciones! Tu primer pokemon es Squirtle");
      }
      break;
    default:
      alert("¡Genial! A partir de ahora tu pokemon se apodara: " + pokemon);
      break;
  }
  pokemon = prompt(
    "¿Quieres agregarle un apodo a tu pokemon? Escribelo aqui. (Escribe ESC para salir del cuestionario): "
  );
}
