const footer = document.getElementById("footer")
const galleryContainer = document.getElementById("galleryContainer")



footer.innerHTML = footerContent()
galleryContainer.innerHTML = gallery()

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


function gallery (){
  let numberPhotos = 29
  let imgs = ""

  for (let i = 0; i <= numberPhotos; i++ ){

      imgs += (`<div class="aspect-square overflow-hidden rounded-xl shadow-md">
      <img 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        src="/assets/gallery/gallery${i}.jpeg" 
        onclick="openModal('/assets/gallery/gallery${i}.jpeg')"
      >
    </div>`)

  }

  return(imgs)
}

// Abrir modal
function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imgModal").classList.remove("hidden");
  document.getElementById("imgModal").classList.add("flex");
}

// Cerrar modal
function closeModal() {
  document.getElementById("imgModal").classList.add("hidden");
  document.getElementById("imgModal").classList.remove("flex");
}

// También cerrar si hacen clic en el fondo oscuro
document.getElementById("imgModal").addEventListener("click", (e) => {
  if (e.target.id === "imgModal") {
    closeModal();
  }
});

// Cerrar al dar clic en la X
document.getElementById("closeModal").addEventListener("click", closeModal);