import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
    return (
        <div className='h-full w-full d-flex justify-content-center align-items-center bg-transparent'>
            <Loader 
                type='Puff'
                color='#efefef'
                height={100}
                width={100}
            />
        </div>
    );
}

export default LoaderComponent;