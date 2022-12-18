async function checkExists(element, model, field) {
    const queryModel = await model.find({field:element})
    console.log(queryModel)
            if (queryModel.length === 1) {
                return true
            } else return false
}

module.exports = checkExists