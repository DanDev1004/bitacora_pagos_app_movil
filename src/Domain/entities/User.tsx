export interface User {
    id?:               string;
    nombres:           string;
    apellidos:         string;
    telefono:          string;
    email:             string;
    imagen?:           string;
    password:          string;
    confirmPassword:   string;
    session_token?:    string;
}