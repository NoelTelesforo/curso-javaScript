localStorage.removeItem('nombre');


// Actualiza un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));


// Limpia el localStorage
localStorage.clear();