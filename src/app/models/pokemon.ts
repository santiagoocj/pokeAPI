import { Movimiento } from './movimiento';
import { Move } from './move';
import { Sprite } from './sprite';
export class Pokemon {
    nombre: string;
    tipo: string;
    movimientos: Move[];
    imagenes: Sprite;
}
