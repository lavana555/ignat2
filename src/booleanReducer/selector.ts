

export const  errorMessage=(state:any)=>{
    return    state.map((ee: {message: any;name: any;}) => ee.name === 'ERROR'?ee.message:'')

}


export const  statusSuccess=(state:any)=>{

    let value= state.filter((ee: {value: any;name: any;}) => ee.name === 'SUCCESS'?ee.value:false)

    return value[0]
}



export const  loadingStatus=(state:any)=>{

    let value= state.filter((ee: {value: any;name: any;}) => ee.name === 'LOADING'?ee.value:false)

    return value.value
}