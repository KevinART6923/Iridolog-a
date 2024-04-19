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
    { title: "Control de Tiempo de atención", text: "Permite llevar el tiempo de la atención y el costo por tiempo; así mismo la clasificación de la atención y el reporte final.", image: "./img/Control-tiempos.jpg" },
    { title: "Registro Información", text: "Permite ingresar toda la información del cliente para conocerlo y poder llevar la trazabilidad de los tratamientos.", image: "./img/registro-informacion.jpg" },
    { title: "Entrevista personalizada y Segura Del cliente", text: "Permite ingresar información absolutamente confidencial que el cliente tenga y desea se mantenga protegida con contraseña.", image: "./img/entrevista-personalisada.jpg" },
    { title: "Información Peso, Altura, IMGC", text: "Permite llevar la trazabilidad del proceso del tratamiento del Peso, Altura, Índice de masa grasa corporal.", image: "./img/Información-Peso.jpg" },
    { title: "Sugerencias y Trazabilidad de ejercitamiento corporal", text: "Permite llevar el proceso del cliente de ejercicio físico, Hombros, pecho, cuello, antebrazo, cintura, bíceps, caderas, muslos, pantorrilla.", image: "./img/ejercitamiento-corporal.jpg" },
    { title: "Monitor de Temperatura Corporal", text: "Permite registrar la temperatura corporal oral, axila, oído, frente, recto, en grados centígrados y Fahrenheit según clasificación hombre/mujer y su edad.", image: "./img/monitor-temperatura.jpg" },
    { title: "Ciclos Bio energéticos", text: "Análisis especializado de ciclos bioenergéticos, físico, emocional e intelectual.", image: "./img/ciclos-bioenergeticos.jpg" },
    { title: "Monitor Presión Sanguínea y Ritmo Cardiaco", text: "Permite registrar información para trazabilidad de la tensión arterial sistólica y diastólica, así mismo promedios y sugerencias.", image: "./img/presion-sanguinea-monitor.jpg" },
    { title: "Registros fotográficos específicos", text: "Permite registrar imágenes del cliente, su rostro y situaciones de salud visibles para llevar la trazabilidad del cliente.", image: "./img/registros-fotograficos.jpg" },
    { title: "Altísima Definición en Captura del Iris", text: "Captura de imágenes en altísima precisión del iris para análisis con mapas topográficos en cientos de billonésimas de precisión.", image: "./img/altisima-definicion-iris.png" },
    { title: "Estudio Avanzado de Iridologia", text: "Identificación didáctica de los hallazgos en el iris con mapa topográfico e interpretación ilustrativa de la zona en análisis con relación a la afectación.", image: "./img/estudio-avanzado-iridologia.jpg" },
    { title: "Análisis focalizando hallazgos en el iris", text: "Permite zonificar algún hallazgo del iris separando la novedad.", image: "./img/analisis-focalizando-iris.jpg" },
    { title: "Análisis amplificado de Ambos iris Derecho e Izquierdo", text: "Visión amplificada para identificar debilidades metabólicas generalizadas del cliente.", image: "./img/analisis-amplificado-ambos.jpg" },
    { title: "Resultados Por Tendencias Sistemas del Cuerpo", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/resultados-tendencias.jpg" },
    { title: "Espacio Indicado para Tratamientos, sugerencias...", text: "Desde aquí se pueden dar sugerencias de tratamientos, cuidado personal, masajes, estilo de vida, hábitos alimenticios, cuidado personal, e indicaciones terapéuticas personalizadas que de el profesional.", image: "./img/espacio-para-tratamientos.jpg" },
    { title: "Resultados Por Tendencias de Sistemas con mayor Desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/resultados-sistemas-mayor.png" },
    { title: "Resultados Por Tendencias órganos, glándulas y tejidos con desbalance", text: "Resultados según estado Agudo, Subagudo, Crónico o Degenerativo.", image: "./img/resultados-tendencias-organos.jpg" },
    { title: "Detalles Numéricos y resumen general por Sistemas", text: "Resumen detallado de cada órgano y sistema del cuerpo numéricamente según cada iris.", image: "./img/detalles-numericos-y.jpg" },
    { title: "Reporte completo del cliente para impresión Física o para exportarlo", text: "Genera un reporte detallado de todo el proceso que se hizo para imprimirlo o exportarlo; de esta manera, poder hacer seguimiento a las sugerencias y tratamientos dados. Permite hacer Backap diario, quincenal o mensual.", image: "./img/resultados-completos.png" },
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















$(document).ready(function(){
  /********************************** 
      Efecto Submenu Quienes Somos 
  **********************************/
  $("#btn-quienes-somos").click(function(e){
      e.preventDefault();
      $(".contenedor-submenu-quienes-somos").toggleClass("active");
      $(".btn-quienes-somos").toggleClass("active");
      $(".contenedor-submenu-productos").removeClass("active");
      $(".btn-productos").removeClass("active");
      
      if ($(".contenedor-submenu-quienes-somos").hasClass("active")) {
          $(".contenedor-modal").addClass("active");            
      } else {
          $(".contenedor-modal").removeClass("active");
      }

      $(".contenedor-modal").click(function(){
          $(".contenedor-submenu-quienes-somos").removeClass("active");
          $(".contenedor-modal").removeClass("active");
          $(".btn-quienes-somos").removeClass("active");    
      });
  });

  /****************************** 
      Efecto Submenu Productos 
  ******************************/
  $("#btn-productos").click(function(e){
      e.preventDefault();
      $(".contenedor-submenu-productos").toggleClass("active");
      $(".btn-productos").toggleClass("active");
      $(".contenedor-submenu-quienes-somos").removeClass("active");
      $(".btn-quienes-somos").removeClass("active");
      
      if ($(".contenedor-submenu-productos").hasClass("active")) {
          $(".contenedor-modal").addClass("active");            
      } else {
          $(".contenedor-modal").removeClass("active");
      }

      $(".contenedor-modal").click(function(){
          $(".contenedor-submenu-productos").removeClass("active");
          $(".contenedor-modal").removeClass("active");
          $(".btn-productos").removeClass("active");    
      });
  });
  
  /***************************
      Btn Cerrar Modal
  ***************************/
  $("#btn-cerrar-modal").click(function(e){
      e.preventDefault();
      $(".contenedor-modal").removeClass("active");
  });

  /*********************
      Menu Responsive
  *********************/
  $("#btn-menu").click(function(e){
      e.preventDefault();
      if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
          $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
      } else{
          $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
      }

      $(".contenedor-menu-responsive").toggleClass("active");

      if ($(".contenedor-menu-responsive").hasClass("active")) {
          $(".contenedor-modal-responsive").addClass("active");            
      } else {
          $(".contenedor-modal-responsive").removeClass("active");
      }

  });
  
  /********************
      Cerrar Modal
  ********************/
  $(".contenedor-modal-responsive").click(function(){
      $(".contenedor-menu-responsive").removeClass("active");
      $(".btn-menu").removeClass("active");
      $(".contenedor-modal-responsive").removeClass("active");

      if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
          $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
      } else{
          $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
      } 
  });

  $("#btn-cerrar-modal-responsive").click(function(e){
      e.preventDefault();
      $(".contenedor-modal-responsive").removeClass("active");
      $(".contenedor-menu-responsive").removeClass("active");
      $(".btn-menu").removeClass("active");
  });


});