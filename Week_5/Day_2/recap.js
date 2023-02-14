router.get('/profile', async (req, res) => {
  let user = await User.findById();
  let data = {
    layout: false,
  };

  res.render('profile', data);
});

module.exports = router;
