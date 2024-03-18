const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
//Funcion de Autenticación


// Almacenamiento temporal de los usuarios (simulado)
let users = [
    {
        "user": "chacho",
        "password": "12345"
    },
    {
        "user": "chacha",
        "password": "12Abx345"
    },
    {
        "user": "checho",
        "password": "12abc45"
    },
    {
        "user": "chicho",
        "password": "12234234345"
    },
    {
        "user": "chucho",
        "password": "12345123123"
    }

];
let msg= [
    'HOLIS ESTAS AUTENTICADO'
]




// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Verificar si el usuario existe y la contraseña coincide
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

// Ruta para el registro de usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Verificar si el usuario ya existe
    if (users.some(user => user.username === username)) {
        res.status(400).json({ message: 'El usuario ya existe' });
    } else {
        // Agregar nuevo usuario
        users.push({ username, password });
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }
});
// Ruta para obtener todos los datos almacenados
app.get('/data', (req, res) => {
    const { username, password } = req.headers;
    const user = users.find(user => user.username === username && user.password === password);
    if(user){
        res.json({ msg });

    }else{
        res.status(401).json({message:'credenciales invalidas'})
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
