const {Product, Skill, Sequelize} = require('../models/indexModel.js');
const Op = Sequelize.Op;

const ProfileController = {
    getAll(res) {
        Person.findAll({
                include: [Skill],
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(person => res.send(person))
    },
    getByPK(req, res) {
        Person.findAll({
                include: [Skill],
                where: {
                    id: req.params.personId
                }
            })
            .then(person => res.send(person))
    },
    getByQuery(req, res) {
        Person.findAll({
                include: [Skill],
                where: {
                    name: {
                        [Op.like]: '%'+ req.params.query +'%'
                    }
                }
            })
            .then(person => res.send(person))
    },
    getBySkill(req, res) {
        Person.findAll({
                include: [Skill],
                where: {
                    Skill_Id: req.params.Skill_Id
                }
            })
            .then(person => res.send(person))
    },
    insert(req, res) {
        Person.create({
                ...req.body
            })
            .then(person => res.send({
                person,
                message: 'Registro creado con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para crear un nuevo registro'
            }))
    },
    modify(req, res) {
        Person.update({
                ...req.body
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(person => res.send({
                person,
                message: 'Registro modificado exitosamente'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para modificar el registro'
            }))
    },
    delete(req, res) {
        Person.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(person => res.send({
                person,
                message: 'Registro eliminado con éxito'
            }))
            .catch(err => res.send({
                message: 'No fue posible eliminar el registro'
            }))
    }
}

module.exports = ProfileController;