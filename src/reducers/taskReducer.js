const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.concat([action.data])
            
        case 'ALL_TASK':
            return state.action.data

        case 'DELETE_TASK':
            return state.filter((post) => post.id !== action.id)

        case 'EDIT_TASK':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)

        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        description: action.data.newDescription,
                        taskDate: action.data.newTaskDate,
                        taskTime: action.data.newTaskTime,
                        editing: !post.editing
                    }
                } else return post;
            })

        default:
            return state;
    }
}

export default taskReducer;