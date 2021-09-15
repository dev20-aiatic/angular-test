const { Skill,Sequelize} = require('../models/indexModel.js');

const Op = Sequelize.Op;

const SkillController = {
    getAll(res) {
        Skill.findAll()
            .then(skill => res.send(skill))
    },
    getByPK(req, res) {
        Skill.findAll({
                where: {
                    id: req.params.Skill_Id
                }
            })
            .then(skill => res.send(skill))
    },
    getByQuery(req, res) {
        Skill.findAll({
                where: {
                    name: {
                        [Op.like]: '%'+ req.params.query +'%'
                    }
                }
            })
            .then(skill => res.send(skill))
    },
    insert(req, res) {
        Skill.create({
                name: req.body.name
            })
            .then(skill => res.send({
                skill,
                message: 'Habilidad creada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para crear la habilidad'
            }))
    },
    modify(req, res) {
        Skill.update({
                ...req.body
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(skill => res.send({
                skill,
                message: 'Habilidad modificada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para modificar la habilidad'
            }))
    },
    delete(req, res) {
        Skill.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(skill => res.send({
                skill,
                message: 'Habilidad eliminada con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para eliminar la habilidad'
            }))
    }
}

module.exports = SkillController;