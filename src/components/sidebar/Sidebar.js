import React,{useEffect, useState} from 'react';
import { useCameraContext } from '../../context/CameraContext';
import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.css";

export const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (!isHovered) {
            setIsHovered(true);
        }
    }

    const handleMouseLeave = () => {
        if (isHovered) {
            setIsHovered(false);
        }
    }
    return (
        <div 
            className={styles.hoverArea}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        <CategorySection isVisible={isHovered}/>
        </div>
    );
};


export const CategorySection = ({ isVisible }) => {
    const { setTargetPosition } = useCameraContext();
    const handleClick = (index) => {
        setTargetPosition(index);
        console.log("카테고리;"+index);
    }
    const categoryContents = [
        {name:'MAIN', path:'/planet-web'},
        // {name:'PROJECTS', path:'/projects'},
        {name:'CONTACT', path:'/contact'},
    ];
    return (
        <div className={isVisible?styles.categoryVisible:styles.categoryHide}>
            <ul>
                {categoryContents.map((item,index)=>{
                    return(
                        <li key={index} onClick={()=>handleClick(index)}>
                            <Link to={item.path}>
                            {item.name}
                        </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
