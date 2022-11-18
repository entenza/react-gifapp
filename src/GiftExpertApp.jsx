import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

function GiftExpertApp(props) {

    const [categories, setCategories] = useState([ ]);
    
    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        setCategories( (category) => [...category, newCategory])
    }
    
    return (
        <>  
            <h3>En honor a Manuel (Maluma) y Osvaldo (el tanke)....</h3>  
            <h1>Categoria de gifs...</h1> 
            

            <AddCategory  onNewCategory={ onAddCategory }  />
            
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={category}
                    />
                )) 
            }
            
            
        </>
    );
}

export default GiftExpertApp;