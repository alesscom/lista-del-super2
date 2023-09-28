function lista(){
    db.collection("productos").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
            document.getElementById("imprimir").innerHTML= `${doc.data().cantidad}`
            document.getElementById("imprimir2").innerHTML= `${doc.data().nombre}`
            document.getElementById("imprimir3").innerHTML= `${doc.data().precio}`
    });
    
});
}