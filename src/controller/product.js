import productData from "src/models/productData";

//APi for to add products
export const createProduct = async (request, response, next) => {

    const requestBody = request.body;

    if(!requestBody?.title) {
        return response.status(401).json({
            status: 'Error',
            message: 'Product name is required'
        })  
    }

    if(!['1', '2'].includes(requestBody?.createdBy)) {
        return response.status(401).json({
            status: 'Error',
            message: "Doesn't have access to add Product"
        })  
    }



    const newProduct = productData.create({
        title: requestBody?.title,
        isFeatured: requestBody?.isFeatured,
        productImage: requestBody?.productImage,
        price: requestBody?.price,
        shortDescription: requestBody?.shortDescription,
        description: requestBody?.description,
        productUrl: requestBody?.productUrl,
        category: requestBody?.category,
        createdBy: requestBody?.createdBy,
        tags: requestBody?.tags,
        deleteAt: new Date()
    })
    
    return response.status(200).json({
        status: 'Success',
        message: 'Product Created'
    })
}

//APi for to get Product List
export const getProductsList = async(request, response, next) => {

    const result = await productData.findAll();

    return response.status(200).json({
       status: 'Success',
       data: result,
   })
}

//APi for to get Product by ID
export const getByProductId = async(request, response, next) => {
     const result = await productData.findOne({where: {id: request?.params?.id}});
     return response.status(200).json({
        status: 'Success',
        data: result,
        message: ''
    })
}