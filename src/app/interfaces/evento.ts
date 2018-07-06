import { Cerveceria } from './cerveceria';
import { Direccion } from './direccion';
import { TipoEvento } from '../app.types';
import { SocialMedia } from './socialmedia';
import { Telefono } from './telefono';
import { Horario } from './horario';

export interface Evento {
	cerveceriaid?: string,
	nombre: string,
	//fotografia?: string,
	tipo: TipoEvento,
	descripcion: string,
	organizador: string,
	direcciones: Direccion[],
	socialmedia: SocialMedia[],
	telefonos: Telefono[],
	cervecerias: Cerveceria[],
	horario: Horario[]
}
