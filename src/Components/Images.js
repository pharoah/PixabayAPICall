import React, { Component } from 'react';




class Images extends Component{

addToPhoto = (event) => {
			
			const image = event.target.attributes.getNamedItem('image_src').value;
			this.props.callbackFromParent(image);
			console.log(image);
			event.preventDefault();
		}

render(){
	

	let images = this.props.image_list.map((image)=>{

		
		return (
		
			<li> <span><img src= { image.largeImageURL } width = "400" height="300" /> </span>
				<span><button id = {image.id} image_src = { image.largeImageURL } onClick = { this.addToPhoto }>Add</button></span>
			</li>
			

			);
	});


    return (
           <div className="container images">
           

           	{this.props.saved ? console.log(this.props.saved): null}
             <ul>
            
             	{ images }
            
             </ul>
            </div>
                
            
    );
}

}

export default Images