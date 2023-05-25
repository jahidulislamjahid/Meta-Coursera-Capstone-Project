function Testimonials(){
    return (
        <>
            <section className="testimonials">
                <div className='testimonials-panel'>
                    <div className='testimonials-header'>
                        <h1>Testimonials</h1>
                    </div>
                    <div className='testimonials-cards'>
                        <div className='testimonials-cards-item'>
                            <img className='ratings' src={require('../assets/ratings.png')}/>
                            <img className='photo' src={require('../assets/profile1.jpg')}/>
                            <h4>Selena G.</h4>
                            <p>"Really enjoyed the atmosphere."</p>
                        </div>
                        <div className='testimonials-cards-item'>
                            <img className='ratings' src={require('../assets/ratings.png')}/>
                            <img className='photo' src={require('../assets/profile2.jpg')}/>
                            <h4>Brandon M.</h4>
                            <p>"The greek salad was excellent!"</p>
                        </div>
                        <div className='testimonials-cards-item'>
                            <img className='ratings' src={require('../assets/ratings.png')}/>
                            <img className='photo' src={require('../assets/profile3.jpg')}/>
                            <h4>Peter R.</h4>
                            <p>"You have to try Greek Salad!"</p>
                        </div>
                        <div className='testimonials-cards-item'>
                            <img className='ratings' src={require('../assets/ratings.png')}/>
                            <img className='photo' src={require('../assets/profile4.jpg')}/>
                            <h4>Neha J.</h4>
                            <p>"Awesome place with delicious food"</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
