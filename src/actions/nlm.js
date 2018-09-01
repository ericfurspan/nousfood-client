import {normalizeResponseErrors, retrieveAbstractData} from './utils';

export const FETCH_NOOTROPIC_SCIENCE_REQUEST = 'FETCH_NOOTROPIC_SCIENCE_REQUEST'
export const fetchNootropicScienceRequest = () => ({
    type: FETCH_NOOTROPIC_SCIENCE_REQUEST,
})
export const FETCH_NOOTROPIC_SCIENCE_SUCCESS = 'FETCH_NOOTROPIC_SCIENCE_SUCCESS'
export const fetchNootropicScienceSuccess= (data) => ({
    type: FETCH_NOOTROPIC_SCIENCE_SUCCESS,
    data
})
export const FETCH_NOOTROPIC_SCIENCE_ERROR = 'FETCH_NOOTROPIC_SCIENCE_ERROR'
export const fetchNootropicScienceError= (error) => ({
    type: FETCH_NOOTROPIC_SCIENCE_ERROR,
    error
})


const esearch = (searchTerm) => () => {
    const ESEARCH_URL = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${searchTerm}&sort=relevance&retmode=json&retstart=0&retmax=10`

    return fetch(ESEARCH_URL, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            return data.esearchresult.idlist
        })
        .catch(err => console.error(err))
}
const efetch = (id) => () => {
    const EFETCH_URL = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${id}&retmode=xml`

    return fetch(EFETCH_URL, {
        method: 'GET'
    })
        .then(res => res.text())
        .then(data => {
            // convert xml text to json object
            return retrieveAbstractData(data)
        })
        .catch(err => console.error(err))
}

export const fetchNootropicScience = (searchTerm) => (dispatch, getState) => {
    dispatch(fetchNootropicScienceRequest());

    const data = {
        [searchTerm]: []
    }

    return dispatch(esearch(searchTerm))
        .then(ids => {
            return ids.forEach(id => {
                // efetch id and add abstract data object to final data array
                return dispatch(efetch(id))
                    .then(res => {
                        data[searchTerm].push(res)
                        return data
                    })
                    .catch(err => console.error(err))
            })
        })
        .then(() => dispatch(fetchNootropicScienceSuccess(data)))
        .catch(err => dispatch(fetchNootropicScienceError(err)))
}