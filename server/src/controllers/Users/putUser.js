const { Usuario } = require ('../../db');

const updateUser = async (req, res) => {
    try {
        const { nombre, apellido, dni, numeroTramite, telefono, genero, notificaciones,
             provincia, direccion, localidad, codigoPostal } = req.body;

        const usuario = await Usuario.findOne({where: {email}});
        if (!usuario) { return res.status(404).json({ error: "El usuario no existe." });}


            usuario.nombre = nombre;
            usuario.apellido = apellido;
            usuario.dni = dni;
            usuario.numeroTramite = numeroTramite;
            usuario.telefono = telefono;
            usuario.genero = genero;
            usuario.notificaciones = notificaciones;
            usuario.provincia = provincia;
            usuario.direccion = direccion;
            usuario.localidad = localidad;
            usuario.codigoPostal = codigoPostal;
            

            await usuario.save();

    return res.status(200).json({ message: "Se ha actualizado la información del usuario.", usuario});


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateStateUser = async (req, res) => {
    try{
      const {email, estadoInactividad} = req.query
      if(!email) return res.status(400).json({error:"Se necesita el email para poder desactivar la cuenta"});

      const usuario = await Usuario.findOne({where: {email}})
      if(!usuario) return res.state(404).json({error:"No se encontró el usuario."})

      usuario.estadoInactividad = estadoInactividad;

      await usuario.save()

      return res.status(200).json({ message: "El usuario ha sido desactivado temporalmente.", usuario });

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports = { updateUser, updateStateUser };
