const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Esla base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption:true,
        default:false
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Este es el numero hasta donde quieres la tabla'
    })
    .check((argv,options)=>{
        if (isNaN(argv.b)){
            throw 'la base tiene que ser un numero';
        }
        return true;
    })
.argv;
module.exports=argv;

