export function checkName(name) {
  const errors = []

  if (name.length < 3) {
    errors.push("El nombre debe tener al menos 3 caracteres")
  }
  if (name.match(/[0-9]/)) {
    errors.push("El nombre no puede contener números")
  }

  return errors
}
export function checkLastName(lastName) {
  const errors = []

  if (lastName.length < 6) {
    errors.push("Requiere 6 caracteres el enunciado")
  }
  if (lastName.match(/[0-9]/)) {
    errors.push("El apellido no puede contener números")
  }

  return errors
}
export function checkDni(dni) {
  const errors = []


  if (!dni.match(/^[0-9]*$/)) {
    errors.push("El DNI solo debe contener números")
  }
  if (!dni.match(/[0-9]/)) {
    errors.push("El DNI debe ser un numero")
  }
  
  return errors
}


