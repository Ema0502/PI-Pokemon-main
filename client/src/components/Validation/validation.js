const validation = (input) => {
  const errors = {};

  if (!input.id) {
    errors.id = "Debe ingresar un ID";
  } else if (!/^\d+$/.test(input.id)) {
    errors.id = "El ID solo puede contener números";
  }

  if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  } else if (!/^.{1,20}$/.test(input.name)) {
    errors.name = "El nombre debe contener máximo 20 caracteres";
  }

  if (!input.image) {
    errors.image = "Debe ingresar una imagen";
  } else if (!/^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif)$/.test(input.image)) {
    errors.image = "La imagen debe ser de tipo jpg, jpeg, png o gif";
  }

  if (!input.hp) {
    errors.hp = "Debe ingresar el HP";
  } else if (!/^\d+$/.test(input.hp)) {
    errors.hp = "El HP solo puede contener números";
  }

  if (!input.attack) {
    errors.attack = "Debe ingresar el ataque";
  } else if (!/^\d+$/.test(input.attack)) {
    errors.attack = "El ataque solo puede contener números";
  }

  if (!input.defense) {
    errors.defense = "Debe ingresar la defensa";
  } else if (!/^\d+$/.test(input.defense)) {
    errors.defense = "La defensa solo puede contener números";
  }

  if (!input.speed) {
    errors.speed = "Debe ingresar la velocidad";
  } else if (!/^\d+$/.test(input.speed)) {
    errors.speed = "La velocidad solo puede contener números";
  }

  if (!input.height) {
    errors.height = "Debe ingresar el tamaño";
  } else if (!/^\d+$/.test(input.height)) {
    errors.height = "El tamaño solo puede contener números";
  }

  if (!input.weight) {
    errors.weight = "Debe ingresar el peso";
  } else if (!/^\d+$/.test(input.weight)) {
    errors.weight = "El peso solo puede contener números";
  }

  if (!input.pokemonTypes || input.pokemonTypes.length === 0) {
    errors.pokemonTypes = "Debe seleccionar al menos un tipo";
  }

  return errors;
};

export default validation;