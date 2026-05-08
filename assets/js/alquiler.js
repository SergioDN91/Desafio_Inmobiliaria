const propiedades_alquiler = [

  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    descripcion: "Elegante condominio moderno ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
  },

  {
    nombre: "Departamento minimalista",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    descripcion: "Departamento moderno y minimalista ideal para parejas.",
    ubicacion: "742 Evergreen Terrace",
    habitaciones: 1,
    banos: 1,
    costo: 1800,
    smoke: true,
    pets: false
  }

];

const contenedorAlquiler = document.querySelector("#propiedades-alquiler");

let htmlAlquiler = "";

for (const propiedad of propiedades_alquiler) {

  htmlAlquiler += `
  
  <div class="col-md-4 mb-4 d-flex">

    <div class="card">

      <img src="${propiedad.src}" class="card-img-top">

      <div class="card-body">

        <h5 class="card-title">
          ${propiedad.nombre}
        </h5>

        <p class="card-text">
          ${propiedad.descripcion}
        </p>

        <p>
          <i class="fas fa-map-marker-alt"></i>
          ${propiedad.ubicacion}
        </p>

        <p>
          <i class="fas fa-bed"></i>
          ${propiedad.habitaciones} Habitaciones |

          <i class="fas fa-bath"></i>
          ${propiedad.banos} Baños
        </p>

        <p>
          <i class="fas fa-dollar-sign"></i>
          ${propiedad.costo}
        </p>

        ${
          propiedad.smoke
            ? `<p class="text-success">
                <i class="fas fa-smoking"></i>
                Permitido fumar
              </p>`
            : `<p class="text-danger">
                <i class="fas fa-smoking-ban"></i>
                No se permite fumar
              </p>`
        }

        ${
          propiedad.pets
            ? `<p class="text-success">
                <i class="fas fa-paw"></i>
                Mascotas permitidas
              </p>`
            : `<p class="text-danger">
                <i class="fas fa-ban"></i>
                No se permiten mascotas
              </p>`
        }

      </div>

    </div>

  </div>
  `;
}

contenedorAlquiler.innerHTML = htmlAlquiler;