export const ADICIONAR_FRUTA = 'ADICIONAR_FRUTA';
export const REMOVER_FRUTA = 'REMOVER_FRUTA';


const actions = {
    adicionar: fruta => ({
        type:'ADICIONAR_FRUTA',
        payload:fruta
    }),
    remover: fruta => ({
        type:'REMOVER_FRUTA',
        payload:fruta
    })
}
export default actions;