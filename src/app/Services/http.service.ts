import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { festivos } from '../models/festivos';
import { entorno } from '../../environments/variableEntorno';

@Injectable({
    providedIn: 'root'
})

export class festivosServicios{
    public festivosList:festivos[]=[]

    constructor(private cliente:HttpClient){}

    public validarFestivo(fecha:string[]):Observable<any>{
        const direccion = `${entorno.apiBaseUrl}/festivos/verificar/${fecha[0]}/${fecha[1]}/${fecha[2]}`
        return this.cliente.get<any>(direccion)
    }

    public obtenerFestivo(anno:string):Observable<any>{
        const direccion = `${entorno.apiBaseUrl}/festivos/obtener/${anno}`
        return this.cliente.get<any>(direccion)
    }
}