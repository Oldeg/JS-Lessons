import React, { useState } from 'react';
import API from './API';
import './lesson_3';


const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSearchResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');

    const searchFilm = () => {
       const promise = API.searchFilmsByTitle(searchName)
        promise.then(data =>{
        setSearchResult(JSON.stringify(data))

        })


    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        const promise = API.searchFilmsByType(searchNameByType, type)
        promise.then(data => {
            setSerachResultByType(JSON.stringify(data))
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;