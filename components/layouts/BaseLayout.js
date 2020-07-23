import Header from '../shared/Header';

const BaseLayaut = props => {

    const { className, children } = props;  

    return (
        <div className="layout-container">
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>      
    )
}

export default BaseLayaut;