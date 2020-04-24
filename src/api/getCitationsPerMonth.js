import axios from 'axios'

export default async (state) => {
    return await axios.get('https://citatapi.herokuapp.com/typesAuteur')
        .then( typesAuteur => {
            const auteursParsed = typesAuteur.data.reverse().map( el => ({
                id: el.idTypeAuteur,
                label: el.nomTypeAuteur,
                backgroundColor: el.couleur
            }))
            return axios.get('https://citatapi.herokuapp.com/allCitations')
                .then( response => countPerAuthorAndMonth(response.data, state.selectedSchoolYear, auteursParsed) )
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

const getMonthIndex = (date) => {
    return (new Date(date).getMonth() + 4) % 12
}

const countPerAuthorAndMonth = (data, year, authors) => {
    const dataWithArrays = authors.map( obj => ({
        ...obj,
        data: new Array(12).fill(0)
    }))
    data.forEach( citation => {
        if (year === getSchoolYear(citation['dateCitation'])) {
            const index = getMonthIndex(citation['dateCitation'])
            dataWithArrays.find( el => el['id'] === citation['idTypeAuteur'])['data'][index] += 1
        }
    })
    return dataWithArrays
}
