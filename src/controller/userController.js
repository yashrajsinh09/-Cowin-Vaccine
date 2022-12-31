const userModel = require("../models/userModel")
const { isValidName, isValidphone, isValidAge, isValidpin, isValidAdhar, isValidpassword } = require("../util/validator")
const bcrypt = require("bcrypt")


const createUser = async (req, res) => {
    try {
        const data = req.body
        let { Name, PhoneNumber, Age, Pincode, AadharNumber, password } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "all fields are mandatory" })

        if (!Name) return res.status(400).send({ status: false, message: "Name is mandatory" })
        if(!isValidName(Name)) return res.status(400).send({status:false,message:"Enter a valid name"})

        if(!PhoneNumber) return res.status(400).send({ status: false, message: "PhoneNumber is mandatory" })
        if(!isValidphone(PhoneNumber)) return res.status(400).send({status: false, message: "Enter a valid PhoneNumber"})

        let ExitsPhone = await userModel.findOne({PhoneNumber})
        if(ExitsPhone) return res.status(400).send({status: false, message: ` this ${PhoneNumber} PhoneNumber is already exits.`})

        if(!Age) return res.status(400).send({ status: false, message: "Age is mandatory" })
        if(!isValidAge(Age))  return res.status(400).send({status: false, message: "Enter a valid Age"})

        if(!Pincode) return res.status(400).send({ status: false, message: "pincode is mandatory" })
        if(!isValidpin(Pincode))  return res.status(400).send({status: false, message: "Enter a valid pincode"})

        if(!AadharNumber) return res.status(400).send({ status: false, message: "AadharNumber is mandatory" })
        if(!isValidAdhar(AadharNumber))  return res.status(400).send({status: false, message: "Enter a valid AadharNumber"})

        let ExitsAdhar = await userModel.findOne({AadharNumber})
        if(ExitsAdhar) return res.status(400).send({status: false, message: ` this ${AadharNumber} AadharNumber is already exits.`})

        if(!password) return res.status(400).send({ status: false, message: "password is mandatory" })
        if(!isValidpassword(password))  return res.status(400).send({status: false, message: "Enter a valid password"})

        let hash = bcrypt.hashSync(password,10)
        data.password = hash


    }

    catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }
}