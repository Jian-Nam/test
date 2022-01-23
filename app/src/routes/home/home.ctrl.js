"use strict";

const output = {
    main : (req, res) => {
        res.render("home/index.html")
    },
    p1 : (req, res) =>{
        res.render("home/skim_p1.html")
    },
    p2 : (req, res) =>{
        res.render("home/skim_p2.html")
    },
    p3 : (req, res) =>{
        res.render("home/skim_p3.html")
    },
    works : (req, res) =>{
        res.render("home/skim_work.html")
    },
    about : (req, res) =>{
        res.render("home/skim_about.html")
    },
}

const process = {
    
}

module.exports ={
    output,
}