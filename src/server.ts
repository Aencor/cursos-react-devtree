// Mandas a llamar a express
//const express = require('express') // CJS Common JS
import express from 'express' // ESM Modules
// Configuras las variables globales del .env
import 'dotenv/config'
// Llamar al Router para crear las URLs
import router from './router'
// Haces la conexión a la base de datos desde el archivo de configuración de Mongo
import {connectDB} from './config/db'
// Creas una app que utiliza express
const app = express()

// Ejecutar la conexión a la DB
connectDB()

// Leer datos de formulario
app.use(express.json())

// Método use nos va a permitir mapear las peticiones con la URL correcta del archivo router
app.use('/', router)

export default app