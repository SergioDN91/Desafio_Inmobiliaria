const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
  },

  {
    nombre: "Casa moderna con piscina",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    descripcion: "Hermosa casa moderna con amplios espacios y piscina.",
    ubicacion: "890 Sunset Boulevard, Miami, FL 33101",
    habitaciones: 5,
    banos: 4,
    costo: 6500,
    smoke: true,
    pets: true
  }
];

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

const contenedorVenta = document.querySelector("#propiedades-venta");
const contenedorAlquiler = document.querySelector("#propiedades-alquiler");

let htmlVenta = "";
let htmlAlquiler = "";

for (const propiedad of propiedades_venta.slice(0,3)) {

  htmlVenta += `
  
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

for (const propiedad of propiedades_alquiler.slice(0,3)) {

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

contenedorVenta.innerHTML = htmlVenta;
contenedorAlquiler.innerHTML = htmlAlquiler;