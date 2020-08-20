import React, { useState, useEffect } from 'react';
import Tooltbar from '../tooltbar/tooltbar';
import Svgs from '../../utils/svgs';
import useWidth from '../../hooks/useWidth/useWidth';
import { useTranslation } from 'react-i18next';

import './avatar.scss';

const infosBody = ['HEAD', 'NECK', 'CHEST', 'STOMACH', '???', 'BELLY_BUTTON', 
    'RIGHT_HIP', 'LEFT_HIP', 'RIGHT_LEG', 'LEFT_LEG', 'VULVA', 'RIGHT_FOOT', 'LEFT_FOOT', 
    'RIGHT_HAND', 'RIGHT_SHOULDER', 'LEFT_SHOULDER', 'LEFT_HAND', 'RIGHT_ARM', 'LEFT_ARM', 'ABDOMEN', '???'
];

const Avatar = () => {

    const [ locateInfo, setLocateInfo ] = useState({
        isVisible: false,
        text: '',
        x: '0',
        y:'0'
    });

    const { t } = useTranslation();

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
                    text={t(locateInfo.text)}
                />
            }
        </div>
    )
};

export default Avatar;