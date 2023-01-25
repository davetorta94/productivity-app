import { useForm } from "./useForm"

export const TodoForm = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-secondary m-1"
            >
                Agregar
            </button>
        </form>
    )
}








//export const TodoForm = ({onNewTodo}) => {
//
//    const {description, onInputChange, onResetForm} = useForm({
//        description: '',
//    });
//
//    const onFormSubmit = (event) => {
//        event.preventDefault();
//        if(description.length <= 1) return;
//
//        const newTodo = {
//            id: new Date().getTime(),
//            description: description,
//            done: false,
//        }
//
//        onNewTodo(newTodo)
//        onResetForm();
//
//    }
//
//  return (
//    <>
//        <form onSubmit={onFormSubmit}>
//            <input type="text"
//                    placeholder="¿Que hay que hacer?"
//                    name="description"
//                    value={description}
//                    onChange={onInputChange} />
//
//            <button type="submit"
//                    className="btn btn-info m-2">
//                Agregar tarea
//            </button>
//        </form>
//    </>
//  )
//}
//