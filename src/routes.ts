import { Router } from 'express'
import MonsterController from './controllers/MonsterController'

const routes = Router()

routes.post('/monster/create', MonsterController.create)
routes.put('/monster/update', MonsterController.update)
routes.get('/monster/:id', MonsterController.get)
routes.get('/monsters', MonsterController.list)
routes.get('/', (req, res) => {
  res.send('healthy')
})

export default routes