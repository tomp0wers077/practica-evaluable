// Función para generar identificador UUID de forma aleatoria.
const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

export { generarUuidAleatorio };

const eliminarDiscente = (id) => {
  const index = discentes.findIndex((discente) => discente.id === id);//obtener indice concreto del discente

  if (index !== -1) {
    discentes.splice(index, 1);//splice elimina desde el indice que le indiques hasta donde indiques
    mostrarDiscentes();
  }
};


const actualizarDiscente =(id)=>{
  discentes.map((discente)=>{
    if(discente.id=== id){
      discente.nombre =document.getElementById('nombre').value;
      discente.apellidos=document.getElementById('apellidos').value;
      discente.acepta=document.getElementById('permite').checked
      mostrarDiscentes();
      limpiarFormulario()
    }
  })
  
}


const editarDiscente=(id)=>{
  const discenteEditar = discentes.find((discente)=>discente.id ===id)
  
  if(discenteEditar){
    document.getElementById('nombre').value=discenteEditar.nombre;
    document.getElementById('apellidos').value=discenteEditar.apellidos;
    document.getElementById('permite').checked=discenteEditar.acepta;

    const btnActualizar = document.getElementById('actualizar');
    btnActualizar.addEventListener('click', ()=>actualizarDiscente(discenteEditar.id));
  }
}

 const mostrarDiscentes = () => {
  const listadoElement = document.getElementById('listado')
  listadoElement.innerHTML = ""; 

  discentes.map((discente) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <div>
            <p>Nombre: ${discente.nombre} ${discente.apellidos}</p>
            <p>Acepta: ${discente.acepta ? "Sí" : "No"}</p>
        </div>
        <p class="acciones">
          <button id=${discente.id} class="mini borde editar">Editar</button>
          <button id=${discente.id} class="mini borde eliminar">
            Eliminar
          </button>
        </p>
      `;

      const btnEditar = article.querySelector('.borde.editar');
      btnEditar.addEventListener('click', ()=>editarDiscente(discente.id));

      const btnEliminar = article.querySelector('.borde.eliminar');
      btnEliminar.addEventListener('click', ()=>eliminarDiscente(discente.id));

    return listadoElement.appendChild(article);
  });

  return listadoElement;
};
export {mostrarDiscentes};

 const limpiarFormulario=()=>{
  document.getElementById('nombre').value=''
  document.getElementById('apellidos').value=''
  document.getElementById('permite').checked=false
}
export {limpiarFormulario};


const guardarDiscente=()=>{
  discentes.push(
    {
    id:generarUuidAleatorio(),
    nombre:document.getElementById('nombre').value,
    apellidos:document.getElementById('apellidos').value,
    acepta:document.getElementById('permite').checked
  }
  )
  mostrarDiscentes();
  limpiarFormulario();
}

export {guardarDiscente};
