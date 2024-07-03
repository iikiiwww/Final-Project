
const customError = require('../errors');
const { createTokenUser, createJWT } = require('../utils');
const User = require('../api/v1/users/model');

const signin = async (email, password) => {
    const result = await User.findOne({ email });
    if (!result) {
        throw new customError.UnauthorizedError('invalid credentials');
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new customError.UnauthorizedError('invalid credentials');
    }
    const token = await createJWT({ payload: createTokenUser(result) });
    if (!token) {
        throw new customError.InternalServerError('failed to create token');
    }

    return { token, role: result.role, email: result.email };
};

module.exports = { signin };
