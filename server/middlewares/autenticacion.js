/**
 * Verificar del token
 */

const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }
        req.usuario = decode.usuario;
        next();
    });
};

/**
 * Verificar admin role
 */


let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {
        res.json({
            ok: false,
            err: {
                message: 'que '
            }
        });
    }
}


module.exports = {
    verificaToken,
    verificaAdminRole
};