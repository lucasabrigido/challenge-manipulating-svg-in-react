import React, { useState, useEffect } from 'react';
import Tooltbar from '../tooltbar/tooltbar';
import Svgs from '../../utils/svgs';
import useWidth from '../../hooks/useWidth/useWidth';

import './avatar.scss';

const infosBody = [ 'Cabeça', 'Garganta', 'torax', 'abdomen', '???', '???', 
    '???', '???', 'Perna Esquerda', 'Perna Direita', 'clitoris', 'pé esquerdo', 'pé direito', 'mão esquerda', 
    'ombro esquerdo', 'ombro direito', 'mão direita', 'braço esquerdo', 'braço direito', '???', '???'
];

const Avatar = () => {

    const [ locateInfo, setLocateInfo ] = useState({
        isVisible: false,
        text: '',
        x: '0',
        y:'0'
    });

    const width = useWidth();



    useEffect(()=>{
        setLocateInfo({isVisible: false })
    },[width])

    const onClickHandler = (event) =>{
        let paths = Array.from(document.getElementsByTagName('path'));
        const currentBody = paths.findIndex(path => path === event.target);
        if(currentBody >= 0){
            setLocateInfo({
                ...locateInfo,
                isVisible: true,
                text: infosBody[currentBody],
                x: `${event.clientX+20}`,
                y: `${event.clientY+20}`
            });
        } else {
            setLocateInfo({
                ...locateInfo,
                isVisible: false,
                text: '',
                x: '0',
                y: '0'
            });
        }
    }

    return (
        <div onClick={onClickHandler} className='avatar-body' >
            <Svgs name='avatarBody'/>
            { locateInfo.isVisible && 
                <Tooltbar styles={
                        width <= 550 
                        ? { left: '0', top: '0', position:'relative', width: '100vh' } 
                        : { left: locateInfo.x+'px', top: locateInfo.y+'px' }
                    }
                    text={locateInfo.text}
                />
            }
        </div>
    )
};

export default Avatar;