const productsSeed = [
    {
        productID:'001C',
        name:'CeraVe Foaming Facial Cleanser',
        price:200,
        skinType:['oily'],
        productType:['cleanser'],
        sensitive:false
    },
    {
        productID:'002C',
        name:'Neutrogena Ultra Gentle Daily Cleanser',
        price:200,
        skinType:['oily'],
        productType:['cleanser'],
        sensitive:false
    }
]

const json = JSON.stringify(productsSeed)

module.exports = json