const mongoose = require("mongoose");

const MODELNAME = "film";

const filmSchema = new mongoose.Schema(

    {
        nom: { type: String, required: true },
        date: { type: Date, required: true },
        realisateur: { type: String, required: true },
    },
    { timestamps: true }
);

const Film = mongoose.model(MODELNAME, filmSchema);
module.exports = Film;
