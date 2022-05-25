const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosPatch,
        usuariosDelete } = require('../controller/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);









module.exports = router;