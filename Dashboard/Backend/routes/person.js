const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController.js');

router.get('/', ProfileController.getAll);
router.get('/:personId', ProfileController.getByPK);
router.get('/byQuery/:query', ProfileController.getByQuery);
router.get('/skill/:skillId', ProfileController.getBySkill);
router.post('/', ProfileController.insert);
router.put('/:id', ProfileController.modify);
router.delete('/:id', ProfileController.delete);

module.exports = router;