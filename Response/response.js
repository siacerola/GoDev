const findAll = (
    statusCode,
    itemList,
    message,
    res
) => {
    res.status(statusCode).json({
        roleName: itemList,
        message: message,
        statusCode
    })
}

module.exports = {
    findAll:findAll
}