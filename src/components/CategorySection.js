import React,{useState} from 'react';

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
    const categoryContents = [
        {name:'MAIN', url:""},
        {name:'PROJECTS', url:""},
        {name:'CONTECT', url:""},
    ];
    return (
        <div className={`category-section ${isVisible ? 'visible' : ''}`}>
            <ul>
                {categoryContents.map((item,index)=>{
                    return(
                        <li>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    );
};
