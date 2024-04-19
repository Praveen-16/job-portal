import axios from 'axios';
const API_URL = 'http://localhost:8800/api-v1';

export const API = axios.create({
    baseURL: API_URL,
    responseType:'json',
});

export const apiRequest = async({url, token, data, method}) => {
    try {
        const result = await API(url, {
            method:method || "GET",
            data:data,
            headers:{
                'content-type':'application/json',
                Authorization:token ? `Bearer ${token}` : ""
            }
        });
        return result?.data
    } catch (error) {
        const err = error.responce.data;
        console.log(error)
        return { status:err.success, message: err.message}
    }
}

export const handleFileUpload = async (uploadFile) => {
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', 'jobportal')

    try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/dml36pzpq/image/upload", formData)
        console.log(response)
        return response.data.secure_url
    } catch (error) {
        console.log(error)
    }
}

export  const updateURL = ({
    pageNum, query, cmpLoc, sort, navigation, location, jtype, exp
}) => {
    const params = new URLSearchParams();

    if(pageNum && pageNum > 1){
        params.set('page', pageNum)
    }

    if(query){
        params.set('search', query);
    }

    if(cmpLoc){
        params.set('location', cmpLoc);
    }

    if (sort) {
        params.set('sort', sort);
    }


    if (jtype) {
        params.set('jobType', jtype);
    }

    if (exp) {
        params.set('exp', exp);
    }

    const newURL = `${location.pathname}?${params.toString()}`;
    navigation(newURL, { replace: true });

    return newURL

}