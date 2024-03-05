
const express = require('express');
const fs = require('fs')
const app = express()
const port = 3000
const allUsers = 'user.json'
app.use(express.json());


app.get("/", (req, res) => {
    fs.readFile(allUsers, 'utf8', (err, data) => {
        if (err) {
            console.error('erorr al leer:', err)
            return;
        }
        try {
            const objJSON = JSON.parse(data)
            res.json({ objJSON })
        } catch (parseError) {
            console.error('error al leer el json: ', parseError)
        }



    }
    )
})

app.post("/login", (req, res) => {

    fs.readFile(allUsers, 'utf8', (err, data) => {
        if (err) {
            console.error('erorr al leer:', err)
            return;
        }
        try {
            const objJSON = JSON.parse(data)
            const { user, password } = req.body

            if (objJSON.usuarios.user === user && objJSON.usuarios.password === password) {
                res.send('bienvendo')
            } else {
                res.send('usuario no encontrado')
            }



        } catch (parseError) {
            console.error('error al leer el json: ', parseError)
        }





    })
})







    // app.post("/register", (req, res) => {
    //     const { user, password, name, email } = req.body
    //     if (user && password && name && email) {
    //         res.send('entre')
    //     }

    //     else {
    //         res.send('no entre')

    //     }


    // })














    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
