import { Direccion } from './direccion';
import { SocialMedia } from './socialmedia';
import { Telefono } from './telefono';
import { Cerveza } from './cerveza';

import { TipoCerveceria } from '../app.types';

export interface Cerveceria {
	cerveceriaid?: string,
	nombre: string,
	tipo: TipoCerveceria,
	fundacion: Date,
	//logo?: string,
	direcciones: Direccion[],
	socialmedia: SocialMedia[],
	telefonos: Telefono[],
	//cervezas?: Cerveza[]
}
