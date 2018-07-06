import { Direccion } from './direccion';
import { TipoOrganizacion } from '../app.types';
import { SocialMedia } from './socialmedia';
import { Telefono } from './telefono';

export interface Organizacion {
	organizacionid?: string,
	nombre: string,
	//logo?: string,
	tipo: TipoOrganizacion,
	direcciones: Direccion[],
	socialmedia: SocialMedia[],
	telefonos: Telefono[],
	representante: string,
	descripcion: string
}
