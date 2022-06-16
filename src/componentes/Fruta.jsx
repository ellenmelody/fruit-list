import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../actions/frutas.action';


function Fruta({fruta}) {
  const dispatch = useDispatch();
  return(
    <div className="fruta"> 
      <ul> 
        <li> 
          <strong>Fruta: </strong>{fruta.nome}
        </li>
      </ul>

      <ul> 
        <li> 
          <strong>Quantidade: </strong>{fruta.quantidade}
        </li>
      </ul>
      <button onClick={() => dispatch(actions.remover(fruta))}>&times;</button>
    </div>
  );
};
export default Fruta;