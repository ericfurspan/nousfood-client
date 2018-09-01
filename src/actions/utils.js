import convert from 'xml-js';


// Boilerplate code for handling errors from the API.  If the error response
// contains JSON then we return a rejected promise containing the decoded
// JSON.  If the error doesn't contain JSON then we return a rejected promise
// containing the status text.  If there is no error then we continue with
// the promise chain.
export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        } 
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

export const retrieveAbstractData = xmlString => {
    let json = convert.xml2js(xmlString, {compact: true})
    let abstractText = "";
    let pmid = json.PubmedArticleSet.PubmedArticle.MedlineCitation.PMID._text;
    let abstractElems = json.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Abstract.AbstractText
    if(abstractElems.length > 1) {
        Object.keys(abstractElems).forEach(key => {
            abstractText += abstractElems[key]._text
        })
    } else {
        if(abstractElems._text.length > 1) {
            Object.keys(abstractElems._text).forEach(key => {
                abstractText += abstractElems._text[key]
            })
        } else {
            abstractText = abstractElems._text
        }
    }
    let journalTitle = json.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Journal.Title
    let abstractTitle = json.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.ArticleTitle
    let pubYear = json.PubmedArticleSet.PubmedArticle.MedlineCitation.Article.Journal.JournalIssue.PubDate.Year
        if(pubYear){
            pubYear = pubYear._text
        } else {
            pubYear = 'NA'
        }
    let refLink = `https://www.ncbi.nlm.nih.gov/pubmed/${pmid}`
    return {
        journalTitle,
        abstractTitle,
        abstractText,
        pubYear,
        refLink
    }
}