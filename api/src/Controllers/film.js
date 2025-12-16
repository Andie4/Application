const express = require("express");
// const jwt = require("jsonwebtoken");
const router = express.Router();
// const passport = require("passport");

const FilmObject = require("../Models/film");

// const { connection } = require("mongoose");

// const JWT_MAX_AGE = "6m"; // 6 months


//ajouter un film 
router.post("/add", async (req, res) => {
    //visualisation des données envoyées 
    console.log("données envoyées:", req.body); 
        try {
            let { nom, date, realisateur } = req.body;
        
            if (!nom || !date || !realisateur) {
            return res.status(400).send({
                ok: false,
                code: "ALL_FIELDS_REQUIRED",
                message: "Il faut remplir les trois champs",
            });
            }
        
            // nouveau film
            const film = new FilmObject({ nom, date, realisateur });
            await film.save();
        
            res.status(201).send({ ok: true, data: film });
        } catch (error) {
            console.log(error);
            res.status(500).send({ ok: false, code: "SERVER_ERROR" });
        }
        }
);

module.exports = router;
