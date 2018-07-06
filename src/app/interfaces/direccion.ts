import { Coordenadas } from './coordenadas';
export interface Direccion {
  direccion: string,
  pais: string,
  estado: string,
  municipio: string,
  ubicacion: Coordenadas 
}
