import axios from 'axios'

const state ={
   visites :[],
}

const getters = {
    visitesState :(state)=>state.visites,
    
}

const mutations ={
    
    TEST(){},

    GET_VISITES(state,data){
        state.visites = data
    },
    
}

const actions = {
    
    //send a contact message by user
    makeVisite(){
    
        return new Promise((resolve,reject)=>{
            axios 
                .get('/visite')
                    .then(res=>{
                        resolve(res.data)
                        alert("visite")
                    }
                    ,error=>{
                        reject(error)
                    })
        })

    },

    // get all visites by admins 
    getVisites ({commit}){
        return new Promise((resolve,reject)=>{
            axios
                .get("/admin/visites")
                    .then((res)=>{
                        resolve(res.data)
                        commit("GET_VISITES",res.data)
                    }),(error)=>{
                        reject(error)
                    }
        })
    },
    
    
}

export default {
    state,
    getters,
    mutations,
    actions
}