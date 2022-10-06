class HomeController {
  home(req, res) {
    res.send("Home Controller");
  }
}

export default new HomeController();
