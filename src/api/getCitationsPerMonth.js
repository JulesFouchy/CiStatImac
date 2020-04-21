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

export default async () => {
    return await axios.get('https://citatapi.herokuapp.com/allCitations')
        .then( response => countPerAuthorAndMonth(response.data) )
        .catch( error => console.log(error) )
}

const countPerAuthorAndMonth = (data) => {
    let dataWithArrays = dataTemplate.map( obj => ({
        ...obj,
        data: new Array(12).fill(0)
    }))
    data.forEach( citation => {
        const index = getYearIndex(citation['dateCitation'])
        dataWithArrays.find( el => el['id'] === citation['idTypeAuteur'])['data'][index] += 1
    })
    return dataWithArrays
}