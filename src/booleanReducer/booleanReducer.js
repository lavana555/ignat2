//export  const GET_USERS='GETUSERS'
 export  const LOADING_STATUS='LOADINGSTATUS'
export  const ERROR_MESSAGE='ERROR_MESSAGE'
export const SUCCESS_STATUS='SUCCESS_STATUS'

const initialState={
    booleans: [
        {name: 'LOADING', value: false, message: ''},
        {name: "ERROR", value: false, message: ''},
        {name: "SUCCESS", value: false, message: ''}]
}


export const booleanReducer=(state=initialState,action)=>{

    switch (action.type) {
        case SUCCESS_STATUS: {
            return {
                ...state,
                booleans: state.booleans.map(b=>(b.name==='SUCCESS')?{...b,value:action.success}:b)
            }
        }
        case LOADING_STATUS: {
            return {
                ...state,
                booleans: state.booleans.map(b=>(b.name==='LOADING')?{...b,value:action.loading}:b)
            }

        }
        case ERROR_MESSAGE : {

            return {
                ...state,
                booleans: state.booleans.map(b=>(b.name==='ERROR')?{...b,message:action.message}:b)
            }
        }
        default: {
            return state;
        }

    }
}

export const successAC=(success)=>({
    type:SUCCESS_STATUS,
    success


})


export const errorAlertSuccess=(message)=>({
    type:ERROR_MESSAGE,
      message

})



export const loadAC=(loading)=>({
  type:LOADING_STATUS,
  loading

})




