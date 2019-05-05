import React from 'react';
import simpson from './data/simpson.json';

function TvInfoBox(){

return(
    <div>
       {simpson.map((episode) => {
               return(
                <div>
                    <a href={episode._links.self.href}>
                        <h2>{episode.name}</h2>
                        <h3>Season: {episode.season}</h3>
                        <img src={episode.image ? episode.image.medium : '#' } />
                        <p>{episode.summary}</p>
                    </a>
                </div>
               )
           })}
           
       {simpson[0].image.medium}
   </div>
)
}

export default TvInfoBox;