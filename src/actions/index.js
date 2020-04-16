import axios from 'axios'

export default {
    loadDatabase: () => (state, actions) => {
        // ---- CITATIONS ----
        axios.get('https://citatapi.herokuapp.com/allCitations')
            .then(response => {
                actions.setCitations(response.data.sort((a, b) => {
                    return Number(b.likesCitation) - Number(a.likesCitation)
                }))
                actions.getTopCitations()
            })
            .catch(error => { console.log(error) })
        // ---- TAGS ----
        axios.get('https://citatapi.herokuapp.com/allTags')
            .then(response => {
                actions.setTags(response.data)
            })
            .catch(error => { console.log(error) })
        //
        return state
    },
    setCitations: (citations) => (state) => {
        return {...state, dbCitations: citations}
    },
    setTags: (tags) => (state) => {
        return {...state, dbTags: tags}
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
        topCitations_NavContent: newPage+1
    }),
    setNavContentToEmpty: () => state => ({
        ...state,
        topCitations_NavContent: ''
    })
}
