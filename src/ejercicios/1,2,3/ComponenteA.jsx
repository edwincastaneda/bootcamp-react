import { ComponenteB } from './ComponenteB'
import { Contacto } from './contacto.class'

const ComponenteA = () => {
    const defaultContacto = new Contacto('John', 'Doe', 'jdoe@gmail.com', true)

    return <ComponenteB contacto={defaultContacto}></ComponenteB>
}

export { ComponenteA }
