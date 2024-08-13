import React,{useState} from 'react';
import { useCameraContext } from '../context/CameraContext';

export const HoverArea = () => {
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
            className="hover-area"
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
        {name:'MAIN'},
        {name:'PROJECTS'},
        {name:'CONTECT'},
    ];
    return (
        <div className={`category-section ${isVisible ? 'visible' : ''}`}>
            <ul>
                {categoryContents.map((item,index)=>{
                    return(
                        <li key={index} onClick={()=>handleClick(index)}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    );
};
