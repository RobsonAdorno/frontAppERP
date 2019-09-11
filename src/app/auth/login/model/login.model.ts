export interface Login {
    email:string,
    password:string,
    profiles: {
        type:[string]
    }
}