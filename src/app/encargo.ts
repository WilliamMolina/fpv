import { Saldo } from './saldo';

export class Encargo{
    numero: string;
    codigoVerificacion: number;
    persona: string;
    identificacion: string;
    nombre: string;
    codigoPlanInversion: string;
    nombrePlanInversion: string;
    saldo: Saldo;
  }