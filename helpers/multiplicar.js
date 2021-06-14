const fs=require('fs');
const colors = require('colors');
const crearArchivoTabla= async(numero=5,listar=false,hasta=10)=>{

    try{
    
    let salida,consola='';
    for (let i = 1; i <= hasta; i++) {
        salida += `${numero} x ${i} = ${numero*i}\n`;
        consola += `${numero} ${'x'.green} ${i} = ${numero*i}\n`;
    }
    if (listar) {
        console.log('---------------------------'.green);
        console.log(`--------tabla del ${numero}-------`);
        console.log('----------------------------'.green);
        console.log(consola);
            
        }

    fs.writeFileSync(`./salida/tabla-${numero}.txt`,salida);
    return(`tabla-${numero}.txt`);
}catch(err){
    throw err;

}

}
module.exports={
    crearArchivoTabla:crearArchivoTabla
}