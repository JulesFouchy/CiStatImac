export default (state, id) => {
    return state.dbTypesAuteur.find(el => el['idTypeAuteur'] === id)['nomTypeAuteur']
}
