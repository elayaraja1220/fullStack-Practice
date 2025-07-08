function productsValidation({name, description, price, offerprice, stock, category, image}) {
    if(!name || typeof name !== 'string' || name.trim().length<2) {
        return 'Product name is required and must be at least 2 characters.';
    }

    if(description && description.length>10000) {
        return 'Description is too long (max 10000)'
    }
    
    if(price === undefined || isNaN(price) || price < 0) {
        return 'price must be a valide non-negative number'
    }
    if(offerprice === undefined || isNaN(offerprice) || offerprice < 0 || offerprice > price) {
        return 'Offer price must be a valide non-negative number'
    }
    if(stock === undefined || isNaN(stock) || stock < 0 || !Number.isInteger(Number(stock))) {
        return 'Stock must be a valid non-negative whole number'
    }
    if(stock === 0) {
        return 'Out of stock'
    }

    if(category && typeof category !== 'string') {
        return 'Categroy must string'
    }
    if(image && typeof image !== 'string') {
        return 'Image must string'
    }

    return  null
}

module.exports = productsValidation