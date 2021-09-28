// Cargamos el módulo de express para poder crear rutas
const router = require('express').Router();
// Cargamos el Controlador Habilidades
const SkillController = require('../controllers/skill.controller.js');

// Creamos las rutas correspondientes de tipo GET, POST, PUT requeridas por el controlador 
router.get('/', SkillController.getAll);
router.get('/:skillId', SkillController.getByPK);
router.get('/byQuery/:query', SkillController.getByQuery);
router.post('/', SkillController.insert)
router.put('/:id', SkillController.modify);
router.delete('/:id', SkillController.delete);

// Exportamos la configuración
module.exports = router;