

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password?: string;
    role: string;

    createAt?: string;
    updateAt?: string;
}

//  EL SIGNO DE INTERROGACION ( ? ) ES PORQUE YO NO VOY A NECESITAR ESA INFORMACION DEL LADO DEL FRONT-END