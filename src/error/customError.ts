export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class ProductNotFound extends CustomError{ 
    constructor(){
        super(404, "Produto não encontrado")
    }
}