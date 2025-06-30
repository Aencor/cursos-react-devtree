import colors from 'colors'
import server from './server'

// Ejecutas en el puerto 4000 en local y haces que sea dinámico en el servidor
const port = process.env.PORT || 4000

// Asignas puerto e inicias servidor
server.listen(port, () => {
  console.log(colors.bgGreen.white.bold(`Servidor Funcionando en el puerto', ${port}`))
})