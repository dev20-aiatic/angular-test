const router = require('express').Router();
const ProfileController = require('../controllers/ProfileController.js');
const {validation} = require('../middleware/validation.js')

router.get('/', ProfileController.getAll);
router.get('/get', validation, ProfileController.getByPK);
router.get('/byQuery/:query', ProfileController.getByQuery);
router.get('/user/:userId', ProfileController.getBySkill);
router.post('/', ProfileController.insert);
router.put('/mod', validation, ProfileController.modify);
router.delete('/:id', ProfileController.delete);

module.exports = router;