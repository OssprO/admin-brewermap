import { Direccion } from './direccion';
import { TipoProveedor } from '../app.types';
import { SocialMedia } from './socialmedia';
import { Telefono } from './telefono';

export interface Proveedor {
	proveedorid?: string,
	nombre: string,
	//fotografia?: string,
	descripcion: string,
	tipo: TipoProveedor,
	contacto: string,
	direcciones: Direccion[],
	socialmedia: SocialMedia[],
	telefonos: Telefono[]
}
