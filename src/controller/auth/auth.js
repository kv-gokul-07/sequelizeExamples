import customers from "src/models/customers";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const generateWebToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRESIN
    })
}

   //Api for Sign up
export const signup = async (request, response, next) => {

    const requestBody = request.body;
    
    if(!['1', '2'].includes(requestBody?.userType)) {
        response.status(400).json({
            status: "Error",
            message: "Invalid User Type"
        })
    }

    const newUser = customers.create({
        userType: requestBody.userType,
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        email: requestBody.email,
        password: requestBody.password
    })

    if(!newUser) {
        return response.status(400).json({
            status: 'Error',
            message: 'Failed to create User'
        })
    }

    return response.status(200).json({
        status: 'Success',
        message: 'User Created'
    })
}
   //Api for Login
export const login = async (request, response, next) => {

    const {email, password} = request.body;

    if(!email || !password) {

        return response.status(400).json({
            status: 'Error',
            message: 'Invalid Credentials'
        })
    }

    const result = await customers.findOne({ where: { email: email, password: password }});

    if(!result) {
        return response.status(400).json({
            status: 'Error',
            message: "Incorrect Email or User doesn't exist"
        }) 
    }

    return response.status(200).json({
        status: 'Success',
        message: 'Login Success',
        data: result    
    })
}