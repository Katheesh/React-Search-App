import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spansRows = Math.ceil(height / 10 );
        this.setState({ spans: spansRows });
    }

    render() {
        return (
            <div class="w-full md:w-1/2 lg:w-1/3 px-2 my-2 container">
                <div class="shadow-md bg-white transform hover:bg-green-400 transition duration-500 hover:scale-105">
                    <img
                        class="h-48 w-full object-cover"
                        ref={this.imageRef}
                        src={this.props.image.urls.regular}
                        alt={this.props.image.alt_description} />
                    <div class="flex flex-col p-4 overlay">
                        <p class="text text-gray-600">{this.props.image.alt_description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCard;