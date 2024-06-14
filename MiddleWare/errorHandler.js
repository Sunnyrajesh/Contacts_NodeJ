const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    let errorMessage = {
        title: '',
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack // Only show stack trace in non-production environments
    };

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            errorMessage.title = 'Validation Error';
            break;
        case constants.UNAUTHORIZED:
            errorMessage.title = 'Unauthorized';
            break;
        case constants.FORBIDDEN:
            errorMessage.title = 'Forbidden';
            break;
        case constants.NOT_FOUND:
            errorMessage.title = 'Not Found';
            break;
        default:
            errorMessage.title = 'Internal Server Error';
            break;
    }

    res.status(statusCode).json(errorMessage);
};

module.exports = errorHandler;
