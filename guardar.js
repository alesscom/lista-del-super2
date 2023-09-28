
function guardar(){
  db.collection("productos").add({
   cantidad:document.getElementById("cantidad").value,
   nombre:document.getElementById("producto").value,
   precio:document.getElementById("precio").value,
  })
  .then((docRef)=>{
    alert("registro exitoso");
  })
  .catch((error)=>{
    alert("hubo un error");
  })
}