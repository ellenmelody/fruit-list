import {ADICIONAR_FRUTA} from "../actions/frutas.action";
import {REMOVER_FRUTA} from "../actions/frutas.action";

const INITIAL_STATE = {
  frutas: []
}
const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADICIONAR_FRUTA:
      return { frutas: [...state.frutas, { ...action.payload} ]};
      case REMOVER_FRUTA:
        return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }; 
        default:
          return state;  
  }
} 
export default reducers;