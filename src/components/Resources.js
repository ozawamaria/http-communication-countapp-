import React from 'react';

const Resources = ({ resources }) => {
    return(
        <React.Fragment>
            {resources.map((resources)=>(
                <p key={resources.id}>{resources.title}</p>
            ))};
        </React.Fragment>
    );
};

export default Resources;

/*memo
  map関数はたくさんのデータを配列で受け取った際に、
  配列の中身分同じ処理を行う時に便利
*/