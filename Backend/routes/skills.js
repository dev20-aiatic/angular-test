const router = require('express').Router();
const SkillController = require('../controllers/skillController.js');

router.get('/', SkillController.getAll);
router.get('/:skillId', SkillController.getByPK);
router.get('/byQuery/:query', SkillController.getByQuery);
router.post('/', SkillController.insert)
router.put('/:id', SkillController.modify);
router.delete('/:id', SkillController.delete);

module.exports = router;