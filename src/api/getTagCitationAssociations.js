import axios from 'axios'

export default async () => {
    return await axios.get('https://citatapi.herokuapp.com/tagCitationAssociations')
        .then( response => response.data )
        .catch( error => console.log(error) )
}