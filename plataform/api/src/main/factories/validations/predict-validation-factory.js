import { ValidationComposite } from "../../../validation"
import { RequiredFieldValidation } from "../../../validation/validators/field-required-validation"

export const makePredictValidation = () => {
    const validations = []
    for (const field of ['img']) {
      validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}