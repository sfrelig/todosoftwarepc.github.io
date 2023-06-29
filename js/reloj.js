(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            psegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        var semana = ['domingo','lunes',"martes", "miércoles", "jueves", "viernes", "sabado"];

        pDiaSemana.textContent = semana [diaSemana];

        pDia.textContent = dia;

        var meses = ['enero', 'febrero', 'marzo', 'abril','mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre','noviembre', 'diciembre'];
        pMes.textContent = meses[mes]; 

        pYear.textContent = year;

        if(horas>=12){
           horas=horas-12;
           ampm='PM';
        }else{
            ampm='AM'
        }

        if(horas==0){
           horas==12;
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos<10) {
            minutos = "0" + minutos};

        if (segundos<10) { 
            segundos = "0" + segundos};
        

        pMinutos.textContent = minutos;
        psegundos.textContent = segundos;

        /* hasta aquí la fecha y el reloj salen en pantalla 
        pero el reloj no se actualiza, a menos que toquemos 
        actualizar desde el navegador*/

    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())


