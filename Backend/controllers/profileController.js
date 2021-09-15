const {User, Profile,  Skill, Sequelize} = require('../models/indexModel.js');
const Op = Sequelize.Op;

const ProfileController = {

    getAll(res) {
        Profile.findAll({
                include: [User],
                order: [
                    ['lastname', 'ASC']
                ]
            })
            .then(profile => res.send(profile))
    },
    getByPK(req, res) {
        id = req.userId
        Profile.findOne({
                include: [User],
                where: {
                    profile_Id: id
                }
            })
            .then(profile => res.send(profile))
    },
    getByQuery(req, res) {
        Profile.findAll({
                include: [User],
                where: {
                    name: {
                        [Op.like]: '%'+ req.params.query +'%'
                    }
                }
            })
            .then(profile => res.send(profile))
    },
    getBySkill(req, res) {
        Profile.findAll({
                include: [User],
                where: {
                    User_Id: req.params.User_Id
                }
            })
            .then(profile => res.send(profile))
    },
    insert(req, res) {
        Profile.create({
            include: [User],
            })
            .then(profile => res.send({
                profile,
                message: 'Registro creado con éxito'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para crear un nuevo registro'
            }))
    },
    modify(req, res) {
        id = req.userId
    
        Profile.update(
            req.body
            , {
                where: {
                    profile_Id: id
                }
            })
            .then(profile => res.send({
                profile,
                message: 'Registro modificado exitosamente'
            }))
            .catch(err => res.send({
                message: 'Hubo un problema para modificar el registro'
            }))
    },
    delete(req, res) {
        Profile.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(profile => res.send({
                profile,
                message: 'Registro eliminado con éxito'
            }))
            .catch(err => res.send({
                message: 'No fue posible eliminar el registro'
            }))
    }
}

module.exports = ProfileController;