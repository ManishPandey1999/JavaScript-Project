const dynamicAPIData = (apiBaseUrl) => (apiEndUrl) => {
    const fetchDynamicUrl = `${apiBaseUrl}${apiEndUrl}`;
    return fetch(fetchDynamicUrl)
        .then((urlResponse) => {
            if(!urlResponse.ok){
                throw new Error(urlResponse.statusText);
            }
            return urlResponse.json();
        }) .catch((err) => {
            console.error(err);
        })
}
export const apiFetchUrl = dynamicAPIData('https://jsonplaceholder.typicode.com');