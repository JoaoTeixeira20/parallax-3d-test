import React, { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';

const CardContentRenderer = (): ReactElement => {

    const params = useParams();

    return (<div><div>hello renderer {params['id']}</div>
        <Link to="/">go back</Link>
    </div>)
}

export default CardContentRenderer