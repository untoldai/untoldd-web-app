import axios from "axios";

// Function to handle POST requests
export const postRequest = async ({ url, data, headers }) => {
    try {
        const response = await axios.post(url, data, { headers });
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.response ? error.response.data : error.message };
    }
};

// Function to handle GET requests
export const getRequest = async ({ url, headers }) => {
    try {
        const response = await axios.get(url, { headers });
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.response ? error.response.data : error.message };
    }
};

// Function to handle PUT requests
export const putRequest = async ({ url, data, headers }) => {
    try {
        const response = await axios.put(url, data, { headers });
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.response ? error.response.data : error.message };
    }
};

// Function to handle DELETE requests
export const deleteRequest = async ({ url, headers }) => {
    try {
        const response = await axios.delete(url, { headers });
        return { data: response.data, error: null };
    } catch (error) {
        return { data: null, error: error.response ? error.response.data : error.message };
    }
};
