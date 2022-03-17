
const isLoggedIn = (req, res, next) => {
    console.log(req)
    if (req.isAuthenticated()){
        res.send({status: 200})
    }
    res.send({status: 401, error: 'not logged in'});
};

export default isLoggedIn;