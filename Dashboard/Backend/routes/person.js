const router = require('express').Router();
const PersonController = require('../controllers/PersonController.js');

router.get('/', PersonController.getAll);
router.get('/:personId', PersonController.getByPK);
router.get('/byQuery/:query', PersonController.getByQuery);
router.get('/skill/:skillId', PersonController.getBySkill);
router.post('/', PersonController.insert);
router.put('/:id', PersonController.modify);
router.delete('/:id', PersonController.delete);

module.exports = router;