import axios from 'axios'

const state ={
    AdminProfil :{
        
    }
   
}

const getters = {
    AdminProfilState : (state)=>state.AdminProfil
    
}

const mutations ={
    
    GET_ADMIN_PROFIL(state,data){
        state.AdminProfil = data
    },  
    
    
    LOGIN(){
        
    }
 
    
    
}

const actions = {
    getAdminProfil({commit}){
        
        axios
            .get('/admin/profil')
                .then(res=>{
                    commit('GET_ADMIN_PROFIL',res.data)
                })
                .catch(err=>{
                    console.log(err);
                })
    },
    
    editAdminProfil({commit},user){
    
        return new Promise((resolve,reject)=>{
            axios 
                .post('/admin/login',user)
                    .then(res=>{
                        commit('LOGIN')

                        resolve(res.data)
                    }
                    ,error=>{
                        
                        reject(error)
                    })
        })

    },
    
    

    
    
}

export default {
    state,
    getters,
    mutations,
    actions
}