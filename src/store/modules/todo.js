const state={
    todos:[]
}

const getters={
    getTodos:function(state){
        return state.todos
    }
}
const mutations={
    setTodos:function(state,newTodos){
        state.todos=newTodos
    }
}
const actions={
    fetchTodos:function({commit}){
        //applé l'API 
        let todos=["commencer le projet","réviser vue js"]
        commit("setTodos",todos)
    }
}
export default {
    state,getters,actions,mutations
}