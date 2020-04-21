export default {
    // data
    dbCitations: [],
    dbTypesAuteur: [],
    dbTags: [
        {name: 'Race',      id: '1',},
        {name: 'Shlag',     id: '2',},
        {name: 'Love',      id: '3',},
        {name: 'Crous',     id: '4',},
        {name: 'Titre',     id: '5',},
        {name: 'Sel',       id: '6',},
        {name: 'Art',       id: '7',},
        {name: 'Science',   id: '8',},
        {name: 'Beauf',     id: '9',},
        {name: 'Sad Life',  id: '10'},
        {name: 'Genius',    id: '11'},
        {name: 'Malaisant', id: '12'},
    ],
    // -------- TOP CITATIONS --------
    topCitations: [],
    topCitations_CurrentPage: 0,
    topCitations_NavContent: 1,
    topCitations_NbCitatsPerPage: 5,
    // -------- TOP CONNERIES --------
    topConneries: [],
    // -------- OVER TIME ------------
    bShowYears: false,
    // Years
    yearsList: [],
    yearsDatasets: [],
    // Months
    selectedSchoolYear: 0,
    monthsDatasets: [],
    //
    overTimeChart: null,
}
