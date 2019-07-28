/**
 *  Configuraciones para los distintos ambientes
 */

//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BD
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://style:wExZWpDxQnbzggtE@cluster0-fd7ok.mongodb.net/cafe';
}
process.env.URLDB = urlDB;