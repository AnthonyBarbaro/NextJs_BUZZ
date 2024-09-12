// pages/api/stores.js
import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://api.dutchie.com/v1/stores', {
            headers: {
                Authorization: `Bearer ${process.env.DUTCHIE_API_KEY}`, // Add your Dutchie API key in .env.local
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch stores from Dutchie' });
    }
}
