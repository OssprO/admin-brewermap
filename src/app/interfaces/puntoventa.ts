import { Direccion } from './direccion';
import { Cerveza } from './cerveza';
import { TipoPuntoVenta } from '../app.types';
import { SocialMedia } from './socialmedia';
import { Telefono } from './telefono';
import { Horario } from './horario';

export interface PuntoVenta {
	puntoventaid?: string,
	nombre: string,
	tipo: TipoPuntoVenta,
	//logo?: string, 
	direcciones: Direccion[],
	socialmedia: SocialMedia[],
	telefonos: Telefono[],
	cervezas: Cerveza[],
	horario: Horario[],
	fundacion: Date,
	descripcion: string
}
