VANTA.CLOUDS({
  el: ".content",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  speed: 0.70
})


document.addEventListener("DOMContentLoaded", function() {

  const data = [
    { title: "Registro Información", text: "Permite ingresar toda la información del cliente, se pueden ingresar todos sus datos de contacto para conocerlo y poder llevar la trazabilidad de los tratamientos.", image: "./img/LC-REGISTRO-INFO.jpg" },
    { title: "Entrevista personalizada y Segura Del cliente", text: "Permite ingresar información absolutamente confidencial que el cliente tenga y desee mantener protegida con contraseña.", image: "./img/LA-ENTREVISTA-PERSO.jpg" },
    { title: "Registros fotográficos específicos", text: "Permite registrar imágenes del cliente, su rostro y situaciones de salud visibles para llevar la trazabilidad del cliente.", image: "./img/LC-FOTO-REGISTRO.jpg" },
    { title: "Altísima Definición en Captura del Iris", text: "Captura de imágenes en altísima precisión del iris para análisis con mapas topográficos en cientos de billonésimas de precisión.", image: "./img/LC-ALTISIMA-DEFI.jpg" },
    { title: "Estudio Avanzado de Iridologia", text: "Identificación didáctica de los hallazgos en el iris con mapa topográfico e interpretación ilustrativa de la zona en análisis con relación a la afectación.", image: "./img/LC-ESTUDIO-AVANZADO.jpg" },
    { title: "Análisis focalizando hallazgos en el iris", text: "Permite zonificar algún hallazgo del iris separando la novedad.", image: "./img/LC-ANALISIS-FOCALIZANDO.jpg" },
    { title: "Análisis amplificado de Ambos iris Derecho e Izquierdo", text: "Visión amplificada para identificar debilidades metabólicas generalizadas del cliente.", image: "./img/LC-ANALISIS-AMPLI.jpg" },
    { title: "Resultados Por Tendencias Sistemas del Cuerpo", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/LC-RESULTADOS-TENDENCIA.jpg" },
    { title: "Resultados Por Tendencias de Sistemas con mayor Desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/LC-RESULTADOS-TENDENCIA.jpg" }, 
    { title: "Resultados Por Tendencias órganos, glándulas y tejidos con desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/lc-resultado-glandula.jpg" }, 
    { title: "Sugerencia de Productos Integrado con La Línea Healthity", text: "Productos Liposomales de absorción del 100% a la célula. Espacio indicado para tratamientos, sugerencias. Integrado con toda la gama de tratamientos de Healthity: desde aquí se pueden dar sugerencias de tratamientos, cuidado personal, masajes, estilo de vida, hábitos alimenticios, cuidado personal, e indicaciones terapéuticas personalizadas que de el profesional.", image: "./img/LC-SUGERENCIA.jpg" },
    { title: "Reporte completo del cliente para impresión Física o para exportarlo", text: "Genera un reporte detallado de todo el proceso que se hizo para imprimirlo o exportarlo. De esta manera, se puede hacer seguimiento a las sugerencias y tratamientos dados. Permite hacer Backap diario, quincenal o mensual.", image: "./img/lc-ultima.png" }
  ];
  

  function updateContent(title) {
    const item = data.find(item => item.title === title);
    if (item) {
      document.querySelector(".slider-text h1").textContent = item.title;
      document.querySelector(".slider-images img").setAttribute('src', item.image);
      document.querySelector(".slider-images a").setAttribute('href', item.image); 
      document.querySelector(".slider-images img").classList.add('example-image-link');
      document.getElementById("text-related").textContent = item.text;
    }
  }

  const titleListColumn1 = document.getElementById("title-list-column1");
  const titleListColumn2 = document.getElementById("title-list-column2");
  
  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    li.classList.add('li-items');
    li.addEventListener("click", function() {
      updateContent(item.title);
    });
    if (index % 2 === 0) {
      titleListColumn1.appendChild(li);
    } else {
      titleListColumn2.appendChild(li);
    }
  });

  if (data.length > 0) {
    updateContent(data[0].title);
  }
});
