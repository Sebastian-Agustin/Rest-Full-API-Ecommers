const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
//App es el objeto que devuelve la funcion de express.
//App tiene como metodo get. que usa para el routing de la pagina, a get se le especifica la url, y la respuesta del servidor
//res.send es para mandar el tipo de informacion al programa
// app.use(express.json()); // Aca le estas diciendo a express que el formato que el cliente mande se pueda leer en el servidor
// Ya que el servidor no entiende lo que esta recibiendo por el cliente
// app.use(express.text());
// app.use(express.urlencoded({extended:false}))//lo que estoy haciendo aca es decirle al servidor que los datos a recibir son texto y ningun dato complejo
app.post("/", (req, res) => {
  console.log(req.body); //De esta forma veo lo que el client me esta mandando
  res.send("Datos Actualizados"); // aca le mando un mensaje por consola para ver si los datos fueron actualizados
});
//: Con estos dos puntos express entiende que el params va hacer dinamico y el valor que  traiga de la url 
// app.get("/hello/:user", (req, res ) => {
//   console.log(req.params.user)
//   res.send(`hello ${req.params.user}`)
// })


// app.get("/name/:nombre/age/:age", (req, res) => { 
//   console.log(req.params.nombre)
//   console.log(req.params.age)
//   res.send(`Bienvenido ${req.params.nombre},  edad: ${req.params.age}`)
// })


// app.get("/:x/:y", (req, res)=>{
//   console.log(req.params.x)
//   console.log(req.params.y)
//   const {x, y} = req.params
//   res.send(`Resultado : ${parseInt(x) + parseInt(y)}`)
// })

// app.get("/search/:name", (req, res) =>{
//   if(req.query.q === 'javascript'){
//     res.send("Libros de javascript")
//   }else if(req.query.q === "planeta"){
//     res.send(`Tu planeta es ${req.params.name}`)
//   }
//   else{
//     res.send("pagina normal")
//   }
// })


//Introduccion al middwares. Es una funcion que guarda o registra datos antes de hacer la peticion al servidor
//Es decir es un intermediario que lo que permite es ejecutar logica antes de hacer la peticion
//Como se hace ?
//Next es una funcion de express que lo que permite es decirle que una que termino la logica pase a la peticion, lo que permite es que la el cliente no quede esperando a que el servidor le responda
//App.all es un metodo que permite definir rutas que se activan para cualquier metodo en especifico
app.use( (req, res,next )=>{
 console.log(`Routhe: ${req.url} Metodo : ${req.method}`)
 next()
} )

app.get('/Usuario', (req, res) => {
  res.send('Usuario page')
})
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
