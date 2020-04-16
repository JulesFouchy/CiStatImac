import axios from 'axios'

export default {
    loadDatabase: () => (state, actions) => {
        // ---- CITATIONS ----
        axios.get('https://citatapi.herokuapp.com/allCitations')
            .then(response => {
                actions.setCitations(response.data)
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
    getCitationsLesPlusLikees: (indexStart, count) => state => {
        const min = indexStart
        const max = indexStart + count
        return { ...state, citationsLesPlusLikees: [
            {
                text: 'Je vais goûter pour oublier.',
                author: 'Emilie confinée',
                nbLikes: 0,
                ranking: 1
            },
            {
                text: 'Purée hier y\'a 2 grands mecs qui sont venus dans ma chambre, ils ont sortis leur outil, et ils m\'ont rebouché mon trou. C\'était rapide mais qu\'est-ce qu\'ils ont bien bossé.Purée hier y\'a 2 grands mecs qui sont venus dans ma chambre, ils ont sortis leur outil, et ils m\'ont rebouché mon trou. C\'était rapide mais qu\'est-ce qu\'ils ont bien bossé.Purée hier y\'a 2 grands mecs qui sont venus dans ma chambre, ils ont sortis leur outil, et ils m\'ont rebouché mon trou. C\'était rapide mais qu\'est-ce qu\'ils ont bien bossé.',
                author: 'Jules Fouchyer',
                nbLikes: 111,
                ranking: 2
            }
        ]}
    },
    increment: () => state => {
        console.log(state)
        return { ...state, count: state.count + 1 } // on retourne le nouveau state avec notre compteur mis à jour
    },
    decrement: () => state => {
        console.log(state)
        return { ...state, count: state.count - 1 }
    },

    setIp: ip => state => {
        return { ...state, ip: ip } // on retourne le nouveau state en modifiant l'adresse ip dans notre state
    },

    getIpFromApi: () => (state, actions) => {
        const request = axios.get('https://api.ipify.org?format=json')

        request.then(response => {
            return actions.setIp(response.data.ip)
        })
            .catch(error => { console.log(error) })
    },
    getEspaceVertsDataFromApi: ({count, callBack}) => (state, actions) => {
        const request = axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=espaces_verts&facet=categorie&rows=' + (count || 10))
        request
            .then(response => {
                // je calcul mon nouveau state via l'action parseEspaceVertsData qui soccupe de faire mon tri sur les données reçus
                const newState = actions.parseEspaceVertsData(response.data.records)
                // une fois le state calculé, j'appel mon fonction de callback avec mes nouvelles données
                if ( callBack !== undefined) { callBack(newState.espacesVertsData.categories, newState.espacesVertsData.categoriesCount) }
                return newState // enfin je retourne le state car c'est le but de toute action (retrouver le nouveau state)
            })
            .catch(error => { console.log(error) })
    },
    parseEspaceVertsData: list => state => {
        const categories = list.map( x => x.fields.categorie) // on récupère uniquement la catégorie de chaque espace vert
        // à l'aide de la fonction reduce (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce)
        // je compte le nombre d'éléments dans chaque catégories
        const categoriesCount = categories.reduce((obj, value) => {
            obj[value] = (obj[value] || 0) + 1
            return obj
        }, {})
        return {
            ...state,
            espacesVertsData: {
                categories: Object.keys(categoriesCount), // je récupère un tableau représentant les categories
                categoriesCount:  Object.values(categoriesCount) // et le nombre d'element dans chaque categories
            }
        }
    }
}
