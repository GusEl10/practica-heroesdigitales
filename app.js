// we require and "instantiated" express
const Express = require ('express')
const App = Express()
// we require the native module called "path"
const Path = require ('path')



// create the server
App.listen (3030, () => console.log('Servidor Corriendo'));



// Routing tree
App.get ('/', function (req,res){
    res.send (`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio.
    Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.
    Recuerda: ¡nunca pares de creer en ti!.`);
})

App.get ('/heroes', function (req,res){
    let file = Path.resolve ('heroes.json');
    res.sendFile (file)
})