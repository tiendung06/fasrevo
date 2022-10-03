class HomeController{
    home(req, res){
        res.send('OK')
    }
}

export default new HomeController();