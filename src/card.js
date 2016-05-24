import React from 'react';
import { getClassesStatic } from  './addons/get-classes';

const Card = (props) => (
    <div className={ getClassesStatic('card', props) }>
        { props.children }
    </div>
);

export default Card;
