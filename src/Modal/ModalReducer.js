

const MODAL_OR_NOT ='modalReducer/MODAL_OR_NOT';
const SPOT_MODAL ='modalReducer/SPOT_MODAL';

// type initialStateType ={
//     isModal: boolean,
//     modal: string
// }
const initialState = {
    isModal: false,
    modal: 'none'
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OR_NOT:
            return {
                ...state,
                isModal: action.isModal
            };
        case SPOT_MODAL:
            return {
                ...state,
                modal: action.modal
            };

        default:
            return state
    }
};

export const modalDisplayAC =(isModal)=>({type: MODAL_OR_NOT, isModal});
export const changeModalSuccess =(modal)=>({type: SPOT_MODAL, modal});















// const CHANGE_VALUE ='modalReducer/CHANGE_VALUE';
//
//
// const initialState = {
//     isModal: false,
//     modal: false
// };
//
//
// export const modalReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CHANGE_VALUE:
//             return {
//                 ...state,
//                 value: action.value
//             };
//
//         default:
//             return state
//     }
// };
//
// export const modalDisplayAC =(value)=>({type: CHANGE_VALUE, value, });













