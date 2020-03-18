const Validator = require("fastest-validator");
const { InvalidParametersError } = require('../../errors/Api');

class BaseController {
	/**
	 * Validate fields from template rules
	 * @param {Object} template
	 * @param {Object} input
	 */
	validate(template, input)
	{
		let returnErrors = [];

		const validator = new Validator;

		let check = validator.compile(template);

    const currentErrors = check(input);

		if (currentErrors !== true) {
			currentErrors.map(err => {
				let error = {}
				error[err.field] = err.message;
				returnErrors.push(error)
      })

			throw new InvalidParametersError(returnErrors);
		}
	}
}

module.exports = BaseController;