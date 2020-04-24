import axios from 'axios'

export default async () => {
    return await axios.get('https://citatapi.herokuapp.com/typesAuteur')
        .then( typesAuteur => {
            const auteursParsed = typesAuteur.data.reverse().map( el => ({
                id: el.idTypeAuteur,
                label: el.nomTypeAuteur,
                backgroundColor: el.couleur
            }))
            return axios.get('https://citatapi.herokuapp.com/allCitations')
                .then( response => countPerAuthorAndYear(response.data, auteursParsed) )
                .catch( error => console.log(error) )
        })
        .catch( error => console.log(error) )
}

const getSchoolYear = (date) => {
    const _date = new Date(date)
    const year = _date.getFullYear()
    if (_date.getMonth() < 8) // before september
        return year - 1
    else
        return year
}
const nbYears = () => {
    return getSchoolYear(new Date()) - 2018 + 1
}
const getYearIndex = (date) => {
    return getSchoolYear(date) - 2018
}

const countPerAuthorAndYear = (data, auteurs) => {
    const dataWithArrays = auteurs.map( obj => ({
        ...obj,
        data: new Array(nbYears()).fill(0)
    }))
    data.forEach( citation => {
        const index = getYearIndex(citation['dateCitation'])
        dataWithArrays.find( el => el['id'] === citation['idTypeAuteur'])['data'][index] += 1
    })
    return dataWithArrays
}
