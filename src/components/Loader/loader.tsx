import './loader.css';

const Loader = () => {
    return (
        <div className='container-loader'>
            <div className="lds-css">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Loader;