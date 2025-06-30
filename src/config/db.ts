import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {
  try{
    // Pruebas la conexión usando los valores de la variable global del .env
    const { connection }  = await mongoose.connect(process.env.MONGO_URI)
    const url = `${connection.host}:${connection.port}`
    // Test de la conexión
    console.log(connection)
    // Indicas a que DB estás conectado
    console.log(colors.bgBlue.white.italic.bold(`Mongo DB conectado ${url}`))
  } catch(error){
    // Si hay un error muestras el mensaje de error
    console.log(colors.bgRed.bold(error.message))
    // Terminas la ejecución en caso de error
    process.exit(1)
  }
}