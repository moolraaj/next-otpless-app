'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const loadAllContinents = async () => {
    let resp = await axios.get('/api/v1/subget');
    return resp.data;
};



const ContinentPage = React.memo(() => {
    let [continent, setContinent] = useState([]); 

    console.log(continent)

    let fetchData = async () => {
        let resp = await loadAllContinents();
        setContinent(resp);
    };

    useEffect(() => {
        fetchData();
    }, []);

     

    return (
        <>
            {continent===undefined?('no data found') : (continent.map((ele) => (
                <div key={ele._id}>
                    <h1>{ele.title}</h1>
                    <h1>{ele.description}</h1>
                    <h1>{ele.slug}</h1>
                </div>
            )))}
        </>
    );
});

 
ContinentPage.displayName = "ContinentPage";

export default ContinentPage;
