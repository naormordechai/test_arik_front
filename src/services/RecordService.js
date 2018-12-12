import axios from 'axios'

const RECORD_URL = (process.env.NODE_ENV !== 'development')
    ? '/record'
    : '//localhost:8080/record';

    async function query() {
        return await axios.get(RECORD_URL)
    }

    export default {
        query
    }