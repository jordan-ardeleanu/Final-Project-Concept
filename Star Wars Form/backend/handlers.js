app.get('/auth/steam',
    passport.authenticate('steam'),
    function(req, res) {
        // The request will be redirected to Steam for authentication, so
        // this function will not be called.
});

app.get('/auth/steam/return',
    passport.authenticate('steam', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
});