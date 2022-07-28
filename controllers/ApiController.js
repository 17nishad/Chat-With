const bcrypt = require('bcrypt');
let users = [];

class ApiController {

    async getUsers (req,res) {

        res.json(users)
    }

    async signUp(req, res){

        try {
            
            let user_name = req.body.user_name ? req.body.user_name :'';
            let password = req.body.password ? req.body.password: ''
            let hashedPassword  = await bcrypt.hash(password,10);

            users.push({user_name, hashedPassword})
            res.status(201).send();
        } catch {

            res.status(500).send();
        }
    }

    async login(req, res) {

        try {

            let user_name = req.body.user_name;
            let password = req.body.password;
            const user = users.find(user => user.user_name === user_name);
            
            if(user && user != null) {
                if(await bcrypt.compare(password, user.hashedPassword)) {
                    console.log(password, user.hashedPassword);
                    res.status(200).send();
                } else {
                    res.status(401).send();
                }
            } else{
                res.status(404).send();
            }
        } catch {

            res.status(500).send();
        }

    }
}

module.exports = ApiController;
