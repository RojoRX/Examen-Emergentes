let request = new XMLHttpRequest();
request.open('GET', 'MOCK_DATA.json');
request.responseType = 'json';

request.onload = function() {
  let datos = request.response;
  mostrarTabla(datos);
};

request.send();

function mostrarTabla(datos) {
    let tabla = document.getElementById('tabla-body');
  
    datos.forEach(function(dato) {
      let fila = document.createElement('tr');
      let id = document.createElement('td');
      let nombres = document.createElement('td');
      let cualidades = document.createElement('td');
      let nota = document.createElement('td');
      let estado=document.createElement("td");
      
      if (dato.nota > 51) {
        estado.textContent = "Aprobado";
      } else {
        estado.textContent = "Reprobado";
      }
  
      id.textContent = dato.id;
      nombres.textContent = dato.nombres;
      cualidades.textContent = dato.cualidades;
      nota.textContent = dato.nota;
      
  
      fila.appendChild(id);
      fila.appendChild(nombres);
      fila.appendChild(cualidades);
      fila.appendChild(nota);
      fila.appendChild(estado);
      tabla.appendChild(fila);
    });
  }
  