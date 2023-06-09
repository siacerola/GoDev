const findAll = (
    statusCode,
    itemList,
    message,
    res
) => {

    res.status(statusCode).json({
        itemList: itemList,
        message: message,
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

const deleteOne = (
    statusCode,
    itemName,
    status,
    res
) => {
    res.status(statusCode).json({
        message: `${itemName}: ${status}`,
        statusCode:statusCode
    })
}

const findAndUpdate = (
    statusCode,
    status,
    res
) => {
    res.status(statusCode).json({
        message: `${status}`,
        statusCode:statusCode
    })
}

module.exports = {
    findAll: findAll,
    insertOne: insertOne,
    deleteOne: deleteOne,
    findAndUpdate:findAndUpdate
}