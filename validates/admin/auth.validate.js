module.exports.loginPost = (req, res, next) => {
  if(!req.body.email) {
    req.flash("error", `Vui lòng nhập email`);
    backURL=req.header('Referer') || '/';
    res.redirect(backURL);
    return;
  }

  if(!req.body.password) {
    req.flash("error", `Vui lòng nhập password`);
    backURL=req.header('Referer') || '/';
    res.redirect(backURL);
    return;
  }


  next();
}