let users = [
    {
        id: 1,
        name: "John",
        email: "john@mail.com",
        password: "john123",
        token: "HelloIsJohnsToken"
    }, {
        id: 2,
        name: "Sarah",
        email: "sarah@mail.com",
        password: "sarah123",
        token: "HelloIsSarahsToken"
    }];


exports.findByToken = function(token, cb) {
    process.nextTick(function () {
        for (let i = 0, len = users.length; i < len; i++) {
            let user = users[i];
            if (user.token === token) {
                return cb(null, user);
            }
        }
        return cb(null, null);
    });
};
