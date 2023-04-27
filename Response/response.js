const findAll = (
    statusCode,
    itemList,
    res
) => {

    res.status(statusCode).json({
        roleName: itemList,
        message: "successfully get all user role model",
        statusCode
    })
}


const insertOne = (
    statusCode,
    itemName,
    status,
    res
) => {
    res.status(statusCode).json({
        message: `${itemName} ${status}`,
        statusCode:statusCode
    })
}

module.exports = {
    findAll: findAll,
    insertOne:insertOne
}