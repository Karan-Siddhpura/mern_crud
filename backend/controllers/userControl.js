const User = require("../models/userModel");

const userCtrl = {
    getUser: async (req, res) => {
        await User.find().then((data) => {
            res.send(data)
        }).catch((err) => {
            console.log(err);
        });
    },

    saveUser: (req, res) => {
        const { fname, lname, email } = req.body;
        console.log(fname);

        const user = new User({ fname: fname, lname: lname, email: email })
        user.save().then((data) => {
            console.log(`Data saved successfully`);
            res.status(201).send(data)
        }).catch((err) => {
            console.log(err);
        });
    },

    updateUser: (req, res) => {
        const id = req.params.id;
        const { fname, lname, email } = req.body;
        User.findByIdAndUpdate({ _id: id }, { fname: fname, lname: lname, email: email }).then((data) => {
            console.log(`Data updated successfully`);
            res.send("Data updated successfully");
        }).catch((err) => {
            console.log(err);
        });
    },

    deleteUser: (req, res) => {
        const id = req.params.id;

        User.findByIdAndDelete(id).then((data) => {
            console.log(`Data deleted successfully`);
            res.send("Data deleted successfully");
        }).catch((err) => {
            console.log(err);
        })
    }
};


module.exports = userCtrl;