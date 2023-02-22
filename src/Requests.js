const baseurl = 'https://youtube-v3-alternative.p.rapidapi.com/'
const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };
    


export { options, baseurl }