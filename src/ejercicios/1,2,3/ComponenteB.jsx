import PropTypes from 'prop-types'
import { Contacto } from './contacto.class'

const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <div>Nombre: {contacto.nombre}</div>
            <div>Apellido: {contacto.apellido}</div>
            <div>Contacto: {contacto.email}</div>
            <div>
                Estado:{' '}
                {contacto.conectado
                    ? 'Contacto En Línea'
                    : 'Contacto No Disponible'}
            </div>
        </div>
    )
}

export { ComponenteB }

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}
