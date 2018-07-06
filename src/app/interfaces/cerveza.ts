import { PuntoVenta } from './puntoventa';

export interface Cerveza {
	cervezaid?: string,
	nombre: string,
	//fotografia: string,
	descripcion: string,
	disponibilidad: boolean,
	estilo: string,
	abv: string,
	ibu: number,
	srm: number,
	puntosventa?: PuntoVenta[]
}
