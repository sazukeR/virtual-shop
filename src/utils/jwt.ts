import jwt from 'jsonwebtoken';

// ESTA ES LA FUNCION QUE CONFIGURA NUESTRO TOKEN, LA VAMOS A USAR EN LA API/LOGIN PARA GUARDAR UN TOKEN DE ACCESO CUANDO EL USUARIO INCIE SESION

// ES UNA SIMPLE FUNCION QUE RECIBE EL ID Y EL EMAIL, LO ENVIAREMOS COMO PAYLOAD CUANDO LO ESTEMOS CREANDO, JUNTO CON UNA LLAVE CRECRETA QUE INVENTAMOS Y LA EXPIRACION DEL TOKEN

export const signToken = (_id: string, email: string) => {


    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("Error en variable de entorno")
    }

    return jwt.sign(

       //payload
        {_id, email},

        //seed
        process.env.JWT_SECRET_SEED,

        //expires
        {expiresIn: "30d"},

    )
 

}


export const isValidToken = (token: string): Promise<string> => {


    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("Error en variable de entorno")
    }



    return new Promise((resolve, reject) => {



        try {
            jwt.verify(token, process.env.JWT_SECRET_SEED || "", (err, payload) => {

                if(err) return reject("JWT No es valido");

                const {_id} = payload as {_id: string}

                resolve(_id)

            })
        } catch (error) {
            return reject("JWT No es valido");
        }





    })


}

