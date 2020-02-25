import Nombre from "./nombre.js";
import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";

class Main {

    constructor() {
        this.doctor1 = new Doctor(new Nombre("Ivan", "Medrano", "Rios" ), "Dentista", 3121497852, 20114658);
        this.doctor2 = new Doctor(new Nombre("Diego", "Morales", "Bravo" ), "Internista", 3121484752, 20114569);
        this.paciente1 = new Paciente(new Nombre ("Alex", "Ramos", "Flores" ), new Fecha(1996, 5, 5), 3122584658);
        this.hospital = new Hospital ("Hospital Mercy", "Roberto Gaytan 264");
    }

    probarNombre() {
        let nombre1 = new Nombre("Guillermo", "Beas", "Lerdo");
        console.log(nombre1.getNombreCompleto());
        console.log(nombre1.getApellidoNombre());
        console.log(nombre1.getIniciales());
    }

    probarTiempo() {
        let tiempo = new Tiempo(5, 50, "PM");
        console.log(tiempo.getFormato12());
        console.log(tiempo.getFormato24());
    }

    probarFecha(){
        let fecha1 = new Fecha(8, 8, 1998);
        console.log(fecha1.getMeses());
        console.log(fecha1.getAños());
        console.log(fecha1.getSemanas());
        console.log(fecha1.getDias());
        console.log(fecha1.getFecha());
        console.log(fecha1.getDiaFecha());
    }

    probarDoctor(){
        let doctor2 = new Doctor(new Nombre("Maritza", "Rodriguez", "Miranda" ), "Anestesiologa", 3121487525, 20114789);
        console.log(doctor2.getPerfil());
    }

   probarPaciente() {
        let paciente2 = new Paciente(new Nombre ("Roberto", "Gomez", "Bolaños" ), new Fecha(1996, 10, 22), 312149648);
        console.log(paciente2.getPerfil());
    } 

    probarCita(){
        let cita1 = new Cita(new Fecha(2020, 2, 1), new Tiempo(11, 1, "PM"), this.doctor1.nombre, this.paciente1.nombre);
        console.log(cita1.getPerfil());
    }

    probarHospital() {
        console.log(this.hospital.nombre);
        console.log(this.hospital.direccion);
        this.hospital.registrarDoctores(this.doctor1);
        this.hospital.registrarDoctores(this.doctor2);
        this.hospital.listarDoctores();
    }
}

let app = new Main();
app.probarNombre();
app.probarTiempo();
app.probarFecha();
app.probarDoctor();
app.probarPaciente();
app.probarCita();
app.probarHospital();