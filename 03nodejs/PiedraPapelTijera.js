let usuario= Math.floor(Math.random()*3+1)
let maquina= Math.floor(Math.random()*3+1)

    if(usuario ===1 && maquina==2 ){
        console.log('PERDISTE , usaste Piedra, la maquina PAPEL ')
     }
     if(usuario ===1 && maquina ==3){
        console.log('GANASTE, usaste Piedra, la maquina TIJERAS')
     }

     if(usuario ===2 && maquina ===1){
        console.log('GANASTE, usaste papel y la maquina PIEDRA');
     }

     if(usuario ===2 && maquina ===2){
        console.log('empate');
     }
       
     
     
     
     
     
            console.log(usuario);