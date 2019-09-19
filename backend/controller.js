const bodyparser = require("body-parser");
var { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Post = require("./models/Post");

module.exports = function(app){
//------------------------ Validação de Registro -----------------------------------------------------\\
    const regValidation = [
        check("email")
        .not()
        .isEmpty()
        .withMessage("Email é necessário")
        .isEmail()
        .withMessage("Email should be an email address"),
        check("username")
        .not()
        .isEmpty()
        .withMessage("Username é necessário")
        .isLength({min:2})
        .withMessage("Email should be at least 2 letters"),
        check("password")
        .not()
        .isEmpty()
        .withMessage("Password é necessário")
        .isLength({min:6})
        .withMessage("Password should be at least 6 characters"),
        check(
            "password_con",
            "Password confirmation is required or should be the same password"
        ).custom(function(value,{req}){
            if(value!==req.body.password){
               throw new Error("Password don't match"); 
            }
            return value;
        }),
        check("email").custom(value =>{
            return User.findOne({email:value}).then(function(user){
                if(user){
                    throw new Error("This email is already in use");
                }
            });
        })
    ];




//---------------- Função para registrar usuário -----------------------------------\\
    function register(req,res)
    {
        var errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.send({errors: errors.mapped()});
        }
        var user = new User(req.body);
        user.password = user.hashPassword(user.password);
        user.save().then(user=>{
            return res.json(user);
        })
        .catch(err => res.send(err));
    }
        app.post('/api/register',regValidation,register);
        app.get("/", (req,res) => res.json("Start...."));

        const logValidation =[
            check("email")
            .not()
            .isEmpty()
            .withMessage("Email is required!"),
            check("password")
            .not()
            .isEmpty()
            .withMessage("Password is required!!!")
        ];

//------------------ Login do Usuário -------------------------\\
        function loginUser(req,res){
            var errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.send({errors: errors.mapped()});
            }
            User.findOne({
                email: req.body.email
            })
            .then(function(user){
                if(!user){
                    return res.send({error: true, message: "User don't exist!"});
                }
                if(!user.comparePassword(req.body.password, user.password)){
                    return res.send({error: true, message: "Wrong password!!"});
                }
                req.session.user = user;
                req.session.isLoggedIn = true;
                return res.send({message: "You are signed in"});
                res.send(user);
            })
            .catch(function(error){
                console.log(error);
                
            });
        }
        app.post("/api/login", logValidation,loginUser);

//------------- Se logado rota recebe valor true --------------------\\
        function isLoggedIn(req,res,next){
            if(req.session.isLoggedIn){
                res.send(true);
            }else{
                res.send(false);
            }
        }

        app.get("/api/isloggedin", isLoggedIn);

//-----------------------------

        const postValidation = [
            check("post")
            .not()
            .isEmpty()
            .withMessage("Please write something")
        ];

        function addPost(req,res){
            var errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.send({ errors: errors.mapped() });
            }
            var post = new Post(req.body);
            if(req.session.user){
                post.user = req.session.user._id;
                post
                .save()
                .then(post =>{
                    res.json(post);
                })
                .catch(error => {
                    res.json(error);
                });
            }else{
                return res.send({ error: "You are not logged in!!"});
            }
        }
        app.post("/api/addpost",postValidation,addPost);



//--------------------------------------------------------------------\\\

        function showPosts(req, res){
            Post.find()
            .populate("user", ["username", "email"])
            .sort({ vote: "desc"})
            .then(post => {
                res.json(post);
            })
            .catch(error => {
                res.json(error);
            });
        }
        app.get("/api/showposts", showPosts);

        app.get("/api/logout", (req, res) => {
            req.session.destroy();
            res.send({ message: "Logged out!"});
        });

};
