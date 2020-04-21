import axios from 'axios'

const dataTemplate = [
    {
        label: 'IMAC 2022',
        id: '10',
        backgroundColor: '#874EDD',
    },
    {
        label: 'IMAC 2021',
        id: '9',
        backgroundColor: '#4EDD98',
    },
    {
        label: 'IMAC 2020',
        id: '8',
        backgroundColor: '#F45B80',
    },
     {
        label: 'IMAC 2019',
        id: '7',
        backgroundColor: '#5CDCEE',
        hidden: true,
    },
    {
        label: 'IMAC 2018',
        id: '6',
        backgroundColor: '#4670DD',
        hidden: true,

    },
    {
        label: 'IMAC 100 AV. BIRI',
        id: '4',
        backgroundColor: '#F9822C',
        hidden: true,
    },
    {
        label: 'PROF',
        id: '2',
        backgroundColor: '#FDC132',
    },
    {
        label: 'ADMINISTRATION',
        id: '3',
        backgroundColor: '#439E2D',
        hidden: true,
    },
    {
        label: 'AUTRE',
        id: '1',
        backgroundColor: '#B90000',
        hidden: true,
    },
]

export default async (state) => {
    return await axios.get('https://citatapi.herokuapp.com/allCitations')
        .then( response => countPerAuthorAndMonth(response.data, state.selectedSchoolYear) )
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

const countPerAuthorAndMonth = (data, year) => {
    let dataWithArrays = dataTemplate.map( obj => ({
        ...obj,
        data: new Array(12).fill(0)
    }))
    data.forEach( citation => {
        if (year === getSchoolYear(citation['dateCitation'])) {
            const index = getMonthIndex(citation['dateCitation'])
            dataWithArrays.find( el => el['id'] == citation['idTypeAuteur'])['data'][index] += 1
        }
    })
    return dataWithArrays
}