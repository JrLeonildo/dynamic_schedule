function carregar(){
  const msg = document.getElementById("msg");
  const img = document.getElementById('imagem');
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos!`;
  if(hora >=5 && hora<12){
    //Manhã
    img.src = "imgs/manhã.jpg"
    msg.innerHTML = `Bom Dia! Agora são ${hora} horas e ${min} minutos!`
  }else if(hora>=12 && hora<=16){
    //Tarde
    img.src  = "imgs/tarde.jpg"
    msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${min} minutos!`
  }else if(hora>=17 && min<=60 && hora<18 ){
    //Fim de tarde
    img.src = "imgs/fim_de_tarde.jpg"
    msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${min} minutos!`
  }else{
    //Noite
    img.src = "imgs/noite.jpeg"
    msg.innerHTML = `Boa Noite! Agora são ${hora} horas e ${min} minutos!`
  }
}
