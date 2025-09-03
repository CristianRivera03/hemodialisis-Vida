const footer = document.getElementById("footer")



footer.innerHTML = footerContent()


function footerContent (){
    return `
    <!--Redes-->
       <div class="flex flex-col justify-between gap-4">
         <h5 class="text-lg font-bold">Hemodiálisis + Vida</h5>
         <div class="flex flex-row justify-center gap-6"> 

          <!--Whatsapp-->
          <div class="group flex items-center justify-center 
              bg-white hover:bg-green-500
              transition-colors duration-300 ease-in-out
              rounded-full w-12 h-12">
            <a href="https://wa.me/+50369954755">
              <ion-icon class="text-2xl -m-1.5 text-sky-800 group-hover:text-white" name="logo-whatsapp"></ion-icon>
            </a>
          </div>



          <!--Facebook-->
          <div class="group flex items-center justify-center 
            bg-white hover:bg-sky-400
            transition-colors duration-300 ease-in-out
            rounded-full w-12 h-12">
            <a target="_blank" rel="noopener" href="https://www.facebook.com/karina.hernandez.783378">
              <ion-icon class="text-2xl -m-1.5 text-sky-800 group-hover:text-white" name="logo-facebook"></ion-icon>
            </a>
          </div> 


          <!--Tiktok-->
          <div class="group flex items-center justify-center 
            bg-white hover:bg-gradient-to-bl from-cyan-400 via-black/50 to-red-400
            transition-colors duration-300 ease-in-out
            rounded-full w-12 h-12">
            <a target="_blank" rel="noopener" href="https://www.tiktok.com/@c.Hemodiálisisisvid?is_from_webapp=1&sender_device=pc">
              <ion-icon class="text-2xl -m-1.5 text-sky-800 group-hover:text-white" name="logo-tiktok"></ion-icon>
            </a>
          </div>
          
          <!-- Instagram -->
          <div class="group flex items-center justify-center 
            bg-white hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-violet-800
            transition-colors duration-300 ease-in-out
            rounded-full w-12 h-12">
            <a target="_blank" rel="noopener" href="https://www.instagram.com/c.hemodialisis_mas_vida2">
              <ion-icon class="text-2xl -m-1.5 text-sky-800 group-hover:text-white" name="logo-instagram"></ion-icon>
            </a>
          </div>
          
       </div>
       </div>

       <!-- telefono -->
      <div class="flex flex-col justify-around gap-4">
        <h5 class="text-lg font-bold">Numero de telefono</h5>
        <a target="_blank" rel="noopener" href="tel:+50326391585"><ion-icon class="" name="call-outline"></ion-icon> 2639-1585</a>
      </div>


      <!-- Ubicacion -->
      <div class="flex flex-col justify-around gap-4">
        <h1 class="text-lg font-bold" >Ubicacion</h1>
        <a target="_blank" rel="noopener" href="https://maps.app.goo.gl/7avaRXXGp4oVJvF87?g_st=ac">4a Calle Oriente #9 Barrio El Calvario Jiquilisco Usulutan</a>
      </div>


      <!-- horario -->
      <div class="flex flex-col justify-between gap-4">
        <h1 class="text-lg font-bold" >Horario de atencion:</h1>
        <p>Turno uno | <b>5:00 AM</b></p>
        <p>Turno dos | <b>10:00 AM</b></p>
      </div>

      <!-- creditos -->
      <div class="md:col-span-4 justify-center ">
        <p>© 2025 <b>Centro de Hemodiálisis + Vida </b>| Todos los derechos reservados</p>
      </div>
    
    
    `;
}

function heroContent (titulo , imagen){

    return `
    <div class="bg-sky-400 text-white font-bold justify-between items-center flex flex-row w-auto h-6 p-6">
        <p class="text-xs md:text-base">
          4a Calle Oriente #9 Barrio El Calvario Jiquilisco Usulutan
        </p>
        <p class="text-xs md:text-base">6995-4755</p>
      </div>
      <nav class=" p-4 bg-white md:px-6 flex flex-row justify-between text-gray-800 items-center">
        <h1>Hemodiálisis + Vida</h1>
        <div class="nav-links duration-500 md:static absolute md:min-h-fit md:w-auto bg-white left-0 top-[-100%] w-full items-center px-5 py-5 ">
          <ul class="flex md:flex-row flex-col md:items-center md:gap-4 gap-6">
            <li>
              <a class="hover:text-black active:text-sky-400" href="">Inicio</a>
            </li>
            <li>
              <a class="hover:text-black active:text-sky-400" href="/pages/servicios.html">Servicios</a>
            </li>
            <li>
              <a class="hover:text-black active:text-sky-400" href="">¿Quienes somos?</a>
            </li>
            <li>
              <a class="hover:text-black active:text-sky-400" href="">Galeria</a>
            </li>
            <li>
              <a class="hover:text-black active:text-sky-400" href="">Contactenos</a>
            </li>
          </ul>
        </div>
        
        
        <div class="flex items-center gap-6">
          
          <div class="bg-sky-400 py-2 px-3 rounded-full hover:scale-110 transition-transform text-white font-bold">
            <a href="https://wa.me/69954755" target="_blank" rel="noopener noreferrer">Realiza tu cita</a>
          </div>
          
          <ion-icon onclick="onToggleMenu(this)" class="text-3xl cursor-pointer md:hidden" name="menu"></ion-icon>
        </div>
      </nav>
      <!-- Start hero section content-->
      <div class="flex-1 flex items-center">
        
        <div class="text-center mx-auto " >
          <h1 class="text-6xl font-bold text-white">Centro De Hemodiálisis Mas Vida</h1>
          <p  class="text-3xl mt-5 font-semibold text-white">Salud y bienestar. Tu cuidado es nuestra prioridad</p>
          <a  class="bg-sky-400 hover:bg-sky-200  px-5 py-2 inline-block  rounded-full text-white font-bold hover:scale-110 transition-transform mt-5" 
          href="https://wa.me/+50369954755" 
          target="_blank" rel="noopener noreferrer">Haz tu cita</a>
        </div>
        
      </div>  
      <!-- end hero section content -->
    
    `;


}
