import React from 'react';

export function NavBar(){
    return(
        <div className='containerNavBar'>
            <div className='logo'>
                <img src='http://cdn.onlinewebfonts.com/svg/img_550407.png' className='treeIcon'></img>
                <h1 className='title'>Merry Deco</h1>
            </div>
            <ul className='containerList'>
                <li className='listItem'>Home</li>
                <li className='listItem'>Trees</li>
                <li className='listItem'>Lights</li>
                <li className='listItem'>Ornaments and Tree accesories</li>
                <li className='listItem'>Kitchenwear and Tablewear</li>
                <li className='listItem'>Home Decor</li>
            </ul>
        </div>
    );
};