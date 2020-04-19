export default {
    // data
    dbCitations: [],
    dbTypesAuteur: [],
    dbTags: [
        {name: 'Race',      id: '1',  color: '#874EDD'},
        {name: 'Shlag',     id: '2',  color: '#F45B80'},
        {name: 'Love',      id: '3',  color: '#5CDCEE'},
        {name: 'Crous',     id: '4',  color: '#F9822C'},
        {name: 'Titre',     id: '5',  color: '#4EDD98'},
        {name: 'Sel',       id: '6',  color: '#FDC132'},
        {name: 'Art',       id: '7',  color: '#35ADC8'},
        {name: 'Science',   id: '8',  color: '#36316E'},
        {name: 'Beauf',     id: '9',  color: '#439E2D'},
        {name: 'Sad Life',  id: '10', color: '#B90000'},
        {name: 'Genius',    id: '11', color: '#4670DD'},
        {name: 'Malaisant', id: '12', color: '#C535C8'},
    ],
    // -------- TOP CITATIONS --------
    topCitations: [],
    topCitations_CurrentPage: 0,
    topCitations_NavContent: 1,
    topCitations_NbCitatsPerPage: 6,
    topConneries: [],
    count: 0,
    ip: '',
    espacesVertsData: {
        categories: [],
        categoriesCount: []
    }
    // -------- TOP CONNERIES --------
    // -------- TOP TAGS --------
    topConneries: [{authorType: 'IMAC 2021', nbCitationsAuthorType: 80}, {authorType: 'IMAC 2022', nbCitationsAuthorType: 52}],
}
