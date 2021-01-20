import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} image={img} />
    });

    return (
    	<div class="flex flex-wrap mt-2 mx-2">
            	{imgs}
	    </div>
    )
}

export default ImageList;