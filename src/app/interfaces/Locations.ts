/* export interface Locations {
    region: string;
    c_digo_dane_del_departamento: number;
    departamento: string;
    c_digo_dane_del_municipio: number;
    municipio:string;
} */

export interface Locations {
    region: string;
    code: number;
    cities: [];
}