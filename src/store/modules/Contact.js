import axios from 'axios'

const state ={
   messages :[],
   message :{},
}

const getters = {
    messagesState :(state)=>state.messages,
    messageState :(state)=>state.message,
    
}

const mutations ={
    
    TEST(){},

    GET_MESSAGES(state,data){
        state.messages = data
    },
    GET_MESSAGE(state,data){
        state.message = data
    }
 
    
    
}

const actions = {
    
    //send a contact message by user
    contactMe({commit},message){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/contact',message)
                    .then(res=>{
                        commit('TEST')

                        resolve(res.data)
                    }
                    ,error=>{
                        
                        reject(error)
                    })
        })

    },

    // get all messsages by admins 
    getMessages ({commit}){
        return new Promise((resolve,reject)=>{
            axios
                .get("/admin/contact")
                    .then((res)=>{
                        resolve(res.data)
                        commit("GET_MESSAGES",res.data)
                    }),(error)=>{
                        reject(error)
                    }
        })
    },
    // get one messsage by admins 
    getMessage ({commit},id){
        return new Promise((resolve,reject)=>{
            axios
                .get("/admin/contact/"+id)
                    .then((res)=>{
                        resolve(res.data)
                        commit("GET_MESSAGE",res.data)
                    }),(error)=>{
                        reject(error)
                    }
        })
    }
  
    
    

    
    
}

export default {
    state,
    getters,
    mutations,
    actions
}