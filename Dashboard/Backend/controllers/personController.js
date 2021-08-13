const express = require('express');
const {
    database
} = require('../util/db');

//Mostrar todos los registros de personas
const getAllPersons = (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products?page=1
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 5; // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit; // 0, 10, 20, 30
        endValue = page * limit; // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 5;
    }

    database.table('person as p')
        .join([{
            table: "person_skills as s",
            on: `s.id_person_skill = p.id_person_skill_fk`
        }
        ])
        .withFields(['s.id_person_skill',
            'c.per_skills as skill',
            'p.id_person',
            'p.person_name',
            'p.person_lastname',
            'p.person_id',
            'p.person_birthdate',
            'p.person_city',
            'p.person_department',
            'p.person_country',
            'p.person_postalcode',
            'p.person_career',
            'p.person_skill',
            'p.person_description',
        ])
        .slice(startValue, endValue)
        .sort({
            id_person: .1
        })
        .getAll()
        .then(pers => {
            if (pers.length > 0) {
                res.status(200).json({
                    count: pers.length,
                    products: pers
                });
            } else {
                res.json({
                    message: "No existen personas registradas"
                });
            }
        })
        .catch(err => console.log(err));
}

//Filtrar personas por id
const getPersonById = (req, res) => {
    let perId = req.params.perId;
    database.table('person as p')
        .join([{
            table: "person_skills as s",
            on: `s.id_person_skills = p.id_person_skills_fk`
        },
        ])
        .withFields(['s.id_person_skill',
            'c.per_skills as skill',
            'p.id_person',
            'p.person_name',
            'p.person_lastname',
            'p.person_id',
            'p.person_birthdate',
            'p.person_city',
            'p.person_department',
            'p.person_country',
            'p.person_postalcode',
            'p.person_career',
            'p.person_skill',
            'p.person_description',
        ])
        .filter({
            'p.id_person': perId
        })
        .get()
        .then(per => {
            //console.log(prod);
            if (per) {
                res.status(200).json(per);
            } else {
                res.json({
                    message: `No se encontró persona con id ${personId}`
                });
            }
        }).catch(err => res.json(err));
}

//Obtener personas por habilidades
const getPersonsBySkill = (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products/category/categoryName?page=1

    // Get category title value from param
    const skill_title = req.params.skillName;

    database.table('person as p')
        .join([{
            table: "person_skills as s",
            on: `s.id_person_skills = p.id_person_skills_fk`
        },
        ])
        .withFields(['s.id_person_skill',
            'c.per_skills as skill',
            'p.id_person',
            'p.person_name',
            'p.person_lastname',
            'p.person_id',
            'p.person_birthdate',
            'p.person_city',
            'p.person_department',
            'p.person_country',
            'p.person_postalcode',
            'p.person_career',
            'p.person_skill',
            'p.person_description',
        ])
        .sort({
            id_person: 1
        })
        .getAll()
        .then(persons => {
            if (persons.length > 0) {
                res.status(200).json({
                    count: persons.length,
                    persons: persons
                });
            } else {
                res.json({
                    message: `No se encontraron personas con la habilidad ${skill_title}`
                });
            }
        }).catch(err => res.json(err));

}
//Obtener habilidades
const getSkills = (req, res) => {
    //let product_sub_cat = req.params.catName;
    database.table('person_skill')
        .getAll()
        .then(per => {
            //console.log(prod);
            if (per) {
                res.status(200).json(per);
            } else {
                res.json({
                    message: `No existen habilidades registradas`
                });
            }
        }).catch(err => res.json(err));
}
//Obtener skills por ID
const getSkillByID = (req, res) => {
    let skillId = req.params.skillId;
    database.table('person_skill')
        .filter({
            'id_product_skill': skillId
        })
        .getAll()
        .then(per => {
            // console.log(prod);
            if (per) {
                res.status(200).json(per);
            } else {
                res.json({
                    message: `No se encontraron habilidades por ese ID`
                });
            }
        }).catch(err => res.json(err));
}

// Crear nueva habilidad
const addNewSkill = async (req, res) => {

    database.table('person_skill')
        .insert({
            person_skill_name: req.body.person_skill_name,
        }).then((newSkill) => {

        res.json({
            message: `Habilidad agregada exitosamente`,
            success: true,

        })
    }).catch(err => res.json(err));


}


module.exports = {
    getAllPersons,
    getPersonById,
    getPersonsBySkill,
    getSkills,
    getSkillByID,
    addNewSkill
};