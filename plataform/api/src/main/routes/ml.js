import { adaptRoute } from "../adapters/route-adapter"
import { makePredictController } from "../factories/controllers/predict-controller-factory"

export default (router) => {
    router.post('/ml/predict', adaptRoute(makePredictController()))
}