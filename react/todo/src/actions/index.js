import todoApi from '../apis/todoApi';

export const fetchTodos = () => 
    async dispatch => {
        const response = await todoApi.get('/todos/');
        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        })
}; 

export const createTodo = formValues =>
    async dispatch => {
        const response = await todoApi.post('/todos/', formValues);

        dispatch({
            type: 'CREATE_TODO',
            payload: response.data
        });
    };