import Fecha from "./fecha.js.js"
import Tiempo from "./tiempo.js.js"
import Doctor from "./doctor.js.js"
import Paciente from "./paciente.js.js"

export default class Cita {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */

    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }

    getCita(){
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${this.doctor.nombre}, ${this.paciente.nombre}`;
    }
}