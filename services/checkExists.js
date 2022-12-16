async function checkExists(element, model, field) {
    const queryModel = await model.find({field:element})
            if (queryModel.length < 1) {
                res.send(`Error! "${element}" does not exist! in ${field} Directory!`)
            }
}

module.exports = {checkExists}