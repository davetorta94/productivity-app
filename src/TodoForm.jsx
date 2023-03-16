import { useForm } from "./useForm"

export const TodoForm = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
            category: '',
        }

        onNewTodo(newTodo);
        onResetForm();
        window.location.reload()
    }

    

    return (

        <>
        <div className="formulario mt-2 d-flex justify-content-center">
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                name="description"
                value={ description }
                onChange={ onInputChange }
                className="input"
            />

            <button 
                type="submit"
                className="boton m-1"
            >
                Agregar
            </button>
        </form>
        </div>
        

        
        
        </>
    
    )
}