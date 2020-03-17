function ApiError(){};

ApiError.prototype = new Error();
ApiError.prototype.name = 'ApiError';
ApiError.prototype.constructor = ApiError;
ApiError.prototype.errorCode = null;
ApiError.prototype.errors = [];
ApiError.INVALID_PARAMETERS = 0;
ApiError.RESOURCE_ALREADY_EXISTS = 1;
ApiError.RESOURCE_NOT_FOUND = 2;
ApiError.RESOURCE_ALREADY_DELETED = 3;
ApiError.AUTHENTICATION_ERROR = 4;
ApiError.AUTHORIZATION_ERROR = 5;
ApiError.RESOURCE_HAS_DEPENDENCIES = 6;

function createApiError(name, init) {
  function E(message, code, errors, ...args) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }

    this.message = message;
    this.code = code;
    this.errors = errors;

    this.toJSON = () => ({
      code: this.code,
      message: this.message,
      stack: this.stack,
      errorCode: this.errorCode,
      errors: this.errors
    });

    if (init) {
      init.apply(this, [message, code, errors, ...args]);
    }
  }

  E.prototype = new ApiError();
  E.prototype.name = name;
  E.prototype.constructor = E;

  return E;
}

module.exports.ApiError = ApiError;

module.exports.InvalidParametersError = createApiError('InvalidParametersError', function(errors) {
  this.message = 'Invalid parameters';
  this.code = 400;
  this.errors = errors;
  this.errorCode = ApiError.INVALID_PARAMETERS;
})

module.exports.ResourceAlreadyExistsError = createApiError('ResourceAlreadyExistsError', function(message) {
	this.message = 'Resource already exists for the given input';
	if (typeof message === 'string'){
		this.message = 'Resource already exists for ' + message || 'Resource already exists';
	}
	else if (Array.isArray(message)){
		this.errors = message;
	}
	this.code = 419;
	this.errorCode = ApiError.RESOURCE_ALREADY_EXISTS;
});

module.exports.ResourceNotFoundError = createApiError('ResourceNotFoundError', function(message) {
	this.message = 'Resource not found for ' + message || 'Resource not found';
	this.code = 404;
	this.errorCode = ApiError.RESOURCE_NOT_FOUND;
});

module.exports.ResourceAlreadyDeletedError = createApiError('ResourceAlreadyDeletedError', function(message) {
	this.message = 'Resource already deleted for ' + message || 'Resource already deleted';
	this.code = 403;
	this.errorCode = ApiError.RESOURCE_ALREADY_DELETED;
});

module.exports.AuthenticationError = createApiError('AuthenticationError', function(message) {
	this.message = 'Invalid credentials';
	this.code = 401;
	this.errorCode = ApiError.AUTHENTICATION_ERROR;
});

module.exports.AuthorizationError = createApiError('AuthorizationError', function(message) {
	this.message = 'Authorization error';
	this.code = 401;
	this.errorCode = ApiError.AUTHORIZATION_ERROR;
});

module.exports.ResourceHasDependeciesError = createApiError('ResourceHasDependeciesError', function() {
	this.message = 'The resource has associate dependencies';
	this.code = 403;
	this.errorCode = ApiError.RESOURCE_HAS_DEPENDENCIES;
});