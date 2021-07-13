import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projectImage, setProjectImage] = useState(() => [
        'https://cdn.pixabay.com/photo/2017/03/01/09/10/animals-2107902_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/02/03/18/15/satellite-3128213_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/10/20/17/41/hot-air-balloon-1756150_960_720.jpg',
        'https://cdn.pixabay.com/photo/2012/03/01/00/20/styrofoam-19493_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/08/09/13/18/aircraft-2614524_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_960_720.jpg',
        'https://cdn.pixabay.com/photo/2014/06/27/12/36/fish-378286_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/07/04/13/20/bicycle-3516132_960_720.jpg',

    ]);

    // const handleToggle = () => {
    //     setActive(!isActive);
    // }

    return (
        <ProjectContext.Provider value={[projectImage,setProjectImage]}>
            {props.children}
        </ProjectContext.Provider>
    );
};