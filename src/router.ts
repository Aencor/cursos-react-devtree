// Importas el método Router para crear las URLs
import { Router } from 'express'

const router = Router()

//** Autenticación y Registro */
router.post('/auth/register', (req,res)=>{
  console.log(req.body)
})

// Routing
router.get('/', (req, res) => {
  res.send('Hola mundo en Express TS')
})

router.get('/nosotros', (req, res) => {
  res.send('Nosotros')
})

export default router