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
    showYears: true,
    yearsList: ['2018','2019','2020'],
    monthList: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    labelsList : (showYears ?  yearsList : monthList),
    yearDataset:
    [
        {
            label: 'IMAC 2022',
            data: [67.8, 50, 3],
            backgroundColor: '#B90000',
            hidden: false,
        },
        {
            label: 'IMAC 2021',
            data: [20.7,12,3],
            backgroundColor: '#B90000',
            hidden: false,
        },
        {
            label: 'IMAC 2020',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#B90000',
            hidden: true,
        },
            {
            label: 'IMAC 2019',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#B90000',
            hidden: true,
        },
        {
            label: 'IMAC 2018',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#B90000',
            hidden: true,
        },
        {
            label: 'IMAC 100 AV. BIRI',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#F9822C',
            hidden: true,
        },
        {
            label: 'PROF',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#FDC132',
        },
        {
            label: 'ADMINISTRATION',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#439E2D',
            hidden: true,

        },
        {
            label: 'AUTRE',
            data: [11.4, 12.3, 8.9],
            backgroundColor: '#B90000',
            hidden: true,
        },
    ],
    yearDataset: [],
    yearChart: null,
}
