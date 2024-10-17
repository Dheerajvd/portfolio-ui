import axios from 'axios';
import { endpoints } from './endpoints';

function getBaseUrl(env) {
    if (env === 'dev') {
        return 'http://localhost:3000/api/';
    } else if (env === 'prod') {
        return 'https://api.example.com';
    }
    return 'http://localhost:3000/api/';
}

// Create an Axios instance
const api = axios.create({
    baseURL: getBaseUrl('dev'),
    timeout: 10000,
    headers: {
        'api_key': '$2b$12$DbCv8SAcrVj8Xyvc4uVJUO',
        'api_password': '$2b$12$DbCv8SAcrVj8Xyvc4uVJUO',
        'Content-Type': 'application/json',
    },
});

// Function to call getKeys API and get the auth token
async function getAuthToken() {
    try {
        const postData = { "username": "dalabanjandheeraj" }
        const response = await api.post(endpoints.GET_KEYS, postData);
        let token = false;
        if (response.data.statusCode === 200) {
            token = response.data.authToken;
        }
        sessionStorage.setItem('authToken', token);
        return token;
    } catch (error) {
        console.error('Error fetching auth token:', error);
        throw new Error('Failed to fetch auth token');
    }
}

// Helper function for POST requests
export const postApi = async (endPoint, postData, additionalHeaders = {}) => {
    let token = sessionStorage.getItem('authToken');

    // If no token, attempt to get it
    if (!token) {
        try {
            token = await getAuthToken(); // Try to fetch the token
        } catch (error) {
            console.error('Failed to get token. Cannot make POST request.', error);
            throw new Error('Authentication failed.'); // Handle token retrieval failure
        }
    }

    const headers = {
        ...api.defaults.headers,
        'Authorization': `Bearer ${token}`,
        ...additionalHeaders,
    };

    try {
        return await api.post(endPoint, postData, { headers });
    } catch (error) {
        // If the error is a 401, try to refresh the token
        if (error.response && error.response.status === 401) {
            console.warn('401 error received, trying to refresh token.');
            try {
                token = await getAuthToken(); // Attempt to refresh token
                headers['Authorization'] = `Bearer ${token}`; // Update the header with new token
                return await api.post(endPoint, postData, { headers }); // Retry the request
            } catch (tokenError) {
                console.error('Failed to refresh token. Cannot make POST request.', tokenError);
                throw new Error('Authentication failed.'); // Handle token refresh failure
            }
        }
        throw error; // Rethrow the error for other failures
    }
};

// Helper function for GET requests
export const getApi = async (endPoint, additionalHeaders = {}) => {
    let token = sessionStorage.getItem('authToken');

    // If no token, attempt to get it
    if (!token) {
        try {
            token = await getAuthToken(); // Try to fetch the token
        } catch (error) {
            console.error('Failed to get token. Cannot make GET request.', error);
            throw new Error('Authentication failed.'); // Handle token retrieval failure
        }
    }

    const headers = {
        ...api.defaults.headers,
        'Authorization': `Bearer ${token}`,
        ...additionalHeaders,
    };

    // Now make the GET request only after ensuring the token is available
    return await api.get(endPoint, { headers })
        .catch(async (error) => {
            // If the error is a 401, try to refresh the token
            if (error.response && error.response.status === 401) {
                console.warn('401 error received, trying to refresh token.');
                try {
                    token = await getAuthToken(); // Attempt to refresh token
                    headers['Authorization'] = `Bearer ${token}`; // Update the header with new token
                    return await api.get(endPoint, { headers }); // Retry the request
                } catch (tokenError) {
                    console.error('Failed to refresh token. Cannot make GET request.', tokenError);
                    throw new Error('Authentication failed.'); // Handle token refresh failure
                }
            }
            throw error; // Rethrow the error for other failures
        });
};
