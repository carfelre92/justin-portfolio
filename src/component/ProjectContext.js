import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projectImage, setProjectImage] = useState(() => [

        {
            _id: 1,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2018/02/03/18/15/satellite-3128213_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',

        },
        {
            _id: 2,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2016/10/20/17/41/hot-air-balloon-1756150_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },
        {
            _id: 3,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2012/03/01/00/20/styrofoam-19493_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },
        {
            _id: 4,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2017/08/09/13/18/aircraft-2614524_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },
        {
            _id: 5,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },
        {
            _id: 6,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2014/06/27/12/36/fish-378286_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },
        {
            _id: 7,
            contentDetails: [
                'https://cdn.pixabay.com/photo/2018/07/04/13/20/bicycle-3516132_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/08/08/15/52/ferns-6531279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
            ],
            projectName: 'Sky Tower',
            projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            projectRole: 'Architect',
            tools: 'Figma',
            client: 'Capsule Corporation',
            year: '2020',
        },

        // {
        //     _id: 8,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2018/02/03/18/15/satellite-3128213_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',

        // },
        // {
        //     _id: 9,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2016/10/20/17/41/hot-air-balloon-1756150_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },
        // {
        //     _id: 10,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2012/03/01/00/20/styrofoam-19493_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },
        // {
        //     _id: 11,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2017/08/09/13/18/aircraft-2614524_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },
        // {
        //     _id: 12,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },
        // {
        //     _id: 13,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2014/06/27/12/36/fish-378286_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },
        // {
        //     _id: 14,
        //     contentDetails: [
        //         'https://cdn.pixabay.com/photo/2018/07/04/13/20/bicycle-3516132_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2018/09/25/22/50/rails-3703349_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2015/04/12/13/12/aggregate-718793_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2016/11/21/13/58/ball-1845545_960_720.jpg',
        //         'https://cdn.pixabay.com/photo/2020/06/03/15/20/landscape-5255326_960_720.jpg',
        //     ],
        //     projectName: 'Sky Tower',
        //     projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     projectRole: 'Architect',
        //     tools: 'Figma',
        //     client: 'Capsule Corporation',
        //     year: '2020',
        // },

    ]);

    return (
        <ProjectContext.Provider value={[projectImage, setProjectImage]}>
            {props.children}
        </ProjectContext.Provider>
    );
};


// 'https://cdn.pixabay.com/photo/2018/02/03/18/15/satellite-3128213_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2016/10/20/17/41/hot-air-balloon-1756150_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2012/03/01/00/20/styrofoam-19493_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2017/08/09/13/18/aircraft-2614524_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2014/06/27/12/36/fish-378286_960_720.jpg',
// 'https://cdn.pixabay.com/photo/2018/07/04/13/20/bicycle-3516132_960_720.jpg',