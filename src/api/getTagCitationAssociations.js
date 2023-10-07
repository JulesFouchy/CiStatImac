import axios from 'axios'

export default async () => {
    return await axios.get('https://citatapi.cyclic.app/tagCitationAssociations')
        .then( response => response.data )
        .catch( error => console.log(error) )
}
