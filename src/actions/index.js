import axios from 'axios'
import getAuthorTypeFromID from '../helper/getAuthorTypeFromID'

export default {
    loadDatabase: () => (state, actions) => {
        // ---- CITATIONS ----
        axios.get('https://citatapi.herokuapp.com/allCitations')
            .then(response => {
                actions.setCitations(response.data.sort((a, b) => {
                    return Number(b.likesCitation) - Number(a.likesCitation)
                }))
                actions.computeState()
            })
            .catch(error => { console.log(error) })
        // ---- TAGS ----
        axios.get('https://citatapi.herokuapp.com/allTags')
            .then(response => {
                actions.setTags(response.data)
            })
            .catch(error => { console.log(error) })
        // ---- AUTHOR TYPE ----
        axios.get('https://citatapi.herokuapp.com/typesAuteur')
            .then(response => {
                actions.setTypesAuteur(response.data)
                actions.computeState()
            })
            .catch(error => { console.log(error) })
        //
        return state
    },
    computeState: () => (state, actions) => {
        actions.getTopCitations()
        actions.computeTopConneries()
    },
    setCitations: (citations) => (state) => {
        return {...state, dbCitations: citations}
    },
    setTags: (tags) => (state) => {
        return {...state, dbTags: tags}
    },
    setTypesAuteur: (typesAuteur) => (state) => {
        return {...state, dbTypesAuteur: typesAuteur}
    },
    getTopCitations: () => state => {
        const count = state.topCitations_NbCitatsPerPage
        const start = state.topCitations_CurrentPage * count
        return {
            ...state,
            topCitations: state.dbCitations.slice(start, start + count).map((citation, index) => ({
                text: citation.contenuCitation,
                author: citation.auteurCitation,
                nbLikes: citation.likesCitation,
                ranking: start + 1 + index
            }))
        }
    },
    topCitationsNavToPage: (newPage) => state => ({
        ...state,
        topCitations_CurrentPage: newPage,
        topCitations_NavContent: newPage + 1
    }),
    setNavContentToEmpty: () => state => ({
        ...state,
        topCitations_NavContent: ''
    }),

    /********* TOP CONNERIES *************/
    // authorType: nbCitationsAuthorType: dbTypesAuteur
    computeTopConneries: () => state => {
        const citationsCount = state.dbCitations.reduce((acc, citation) => {
            const authorType = getAuthorTypeFromID(state, citation.idTypeAuteur)
            acc[authorType] = (acc[authorType] || 0) + 1;
            return acc
        }, {})
        const tab = Object.entries(citationsCount).map( pair => {
            const authorType = pair[0]; const count = pair[1]
            return {
                authorType: authorType,
                nbCitationsAuthorType: count
            }
        })
        const sortConneries = tab.sort((a, b) => {
            return Number(b.nbCitationsAuthorType) - Number(a.nbCitationsAuthorType)
        })
        
        return {
            ...state,
            topConneries: sortConneries
        }
    },
}
