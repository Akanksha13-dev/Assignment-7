//import express from "express";
var express = require("express");
var router = express.Router();
var Pool = require('pg').Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432
});
//SENDS ALL MEMBERS OF JSON DATA
router.get("/", function (req, res) {
    pool.query('SELECT * FROM student ORDER BY id ASC', function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result.rows);
        res.status(200).json(result.rows);
    });
});
//SEND A SPECIFIC MEMEBER FROM JSON DATA
router.get("/:id", function (req, res) {
    var id = req.params.id;
    pool.query("SELECT * FROM student where id =" + id, function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result.rows);
        res.status(200).json(result.rows);
    });
});
//ADD MEMBER TO THE EXISTING JSON
router.post("/", function (req, res) {
    var newValue = {
        ID: req.body.id,
        First__Name: req.body.first__name,
        Middle__Name: req.body.middle__name,
        Last__Name: req.body.last__name,
        Email: req.body.email,
        Phone_Number: req.body.phone_number,
        Role: req.body.role,
        Address: req.body.address,
        DateTime: req.body.datetime
    };
    if (!newValue.First__Name || !newValue.Last__Name || !newValue.Email || !newValue.Phone_Number || !newValue.Role || !newValue.Address) {
        res.status(400).json({ message: "Give Correct Input" });
    }
    // else if (data.some(data => newValue.Phone_Number === data.Phone_Number)) {
    //     res.status(400).json({ message: `User Already Exists` })
    // }
    else {
        pool.query("SELECT id FROM student where \"phone_number\" ='" + newValue.Phone_Number + "'", function (error, result) {
            if (error) {
                throw error;
            }
            if (result.rows.length !== 0) {
                console.log(result);
                res.status(400).json({ message: "User Already Exists" });
            }
            else {
                var query = "INSERT into student (\"first__name\", \"middle__name\", \"last__name\", \"email\", \"phone_number\", \"role\", \"address\",\"datetime\") VALUES ('" + newValue.First__Name + "','" + newValue.Middle__Name + "','" + newValue.Last__Name + "','" + newValue.Email + "','" + newValue.Phone_Number + "','" + newValue.Role + "','" + newValue.Address + "','" + newValue.DateTime + "');";
                pool.query(query, function (error, results) {
                    if (error) {
                        throw error;
                    }
                    res.status(200).json({ message: "Added User Successfully !", addedRecord: newValue });
                });
            }
        });
    }
});
//EDIT MEMBER
router.put('/:id', function (req, res) {
    var id = req.params.id;
    pool.query("SELECT * FROM student where id =" + id, function (error, result) {
        if (error) {
            throw error;
        }
        if (result.rows.length === 0) {
            res.status(400).json({ message: "User Not Exists" });
        }
        else {
            var firstName_1 = req.body.first__name;
            var middleName_1 = req.body.middle__name;
            var lastName_1 = req.body.last__name;
            var email_1 = req.body.email;
            var phoneNumber_1 = req.body.phone_number;
            var role_1 = req.body.role;
            var address_1 = req.body.address;
            var dateTime_1 = req.body.datetime;
            // if (phoneNumber.length !== 10) {
            //     res.status(400).json({ message: `Give Correct Input` })
            //     return
            // }
            var query = "UPDATE student SET \"first__name\"='" + firstName_1 + "', \"middle__name\"='" + middleName_1 + "', \"last__name\"='" + lastName_1 + "', \"email\"='" + email_1 + "', \"phone_number\"=" + phoneNumber_1 + ",\"role\"='" + role_1 + "', \"address\"='" + address_1 + "' where id=" + id + ";";
            console.log(query);
            pool.query(query, function (error, result) {
                if (error) {
                    throw error;
                }
                res.status(200).json({
                    message: "Updated Row with id = " + id + " Successfully",
                    updatedRecord: {
                        id: id,
                        first__name: firstName_1,
                        middle__name: middleName_1,
                        last__name: lastName_1,
                        email: email_1,
                        phone__number: phoneNumber_1,
                        role: role_1,
                        address: address_1,
                        datetime: dateTime_1
                    }
                });
            });
        }
    });
});
//DELETE MEMBER
router["delete"]('/:id', function (req, res) {
    var id = req.params.id;
    pool.query("SELECT * FROM student where id =" + id, function (error, result) {
        if (error) {
            throw error;
        }
        if (result.rows.length === 0) {
            res.status(400).json({ message: "User Not Exists" });
        }
        else {
            var query = "DELETE from student where id=" + id + ";";
            console.log(query);
            pool.query(query, function (error, result) {
                if (error) {
                    throw error;
                }
                res.status(200).json({ message: "Deleted Row with id = " + id + " Successfully !" });
            });
        }
    });
});
module.exports = router;
