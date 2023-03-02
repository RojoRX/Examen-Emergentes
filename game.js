class Personaje {
	constructor(nombre, tipo, salud, velocidad) {
		this.nombre = nombre;
		this.tipo = tipo;
		this.salud = salud;
		this.velocidad = velocidad;
		this.x = 0;
		this.y = 0; 
	}
	mover(x, y) {
		this.x = x;
		this.y = y;
	}
}
class Movimientos {
	constructor(personaje) {
		this.personaje = personaje;
	}

	moverArriba() {
		this.personaje.mover(this.personaje.x, this.personaje.y - this.personaje.velocidad);
		this.dibujarPersonaje();
	}

	moverAbajo() {
		this.personaje.mover(this.personaje.x, this.personaje.y + this.personaje.velocidad);
		this.dibujarPersonaje();
	}

	moverIzquierda() {
		this.personaje.mover(this.personaje.x - this.personaje.velocidad, this.personaje.y);
		this.dibujarPersonaje();
	}

	moverDerecha() {
		this.personaje.mover(this.personaje.x + this.personaje.velocidad, this.personaje.y);
		this.dibujarPersonaje();
	}
	dibujarPersonaje() {
		const characterDiv = document.getElementById('character');
		characterDiv.style.position = 'absolute';
		characterDiv.style.left = this.personaje.x + 'px';
		characterDiv.style.top = this.personaje.y + 'px';
		characterDiv.innerHTML = `<strong>${this.personaje.nombre}</strong> - ${this.personaje.tipo} - Salud: ${this.personaje.salud}`;
	}
}
const miPersonaje = new Personaje('Erick', 'Rojas', 100, 10);
const misMovimientos = new Movimientos(miPersonaje);
document.getElementById('move-up').addEventListener('click', () => misMovimientos.moverArriba());
document.getElementById('move-down').addEventListener('click', () => misMovimientos.moverAbajo());
document.getElementById('move-left').addEventListener('click', () => misMovimientos.moverIzquierda());
document.getElementById('move-right').addEventListener('click', () => misMovimientos.moverDerecha());
misMovimientos.dibujarPersonaje();
