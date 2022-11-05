import { PredicController } from "../../../presentation/controllers"
import { makeModel } from "../usecases/model-factory"
import { makePredictValidation } from "../validations/predict-validation-factory"

export const makePredictController = () => {
  const controller = new PredicController(makeModel(), makePredictValidation())
  return makeLogControllerDecorator(controller);
}