function Hero(){
    return (
        <>
        <section className='hero-section'>
            <div className="hero-section-panel">
                <div className='hero-section-card'>
                    <h1>Litle Lemon</h1>
                    <h4>Chicago</h4>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/booking" className='yellow-button'>Reserve a Table</a>
                </div>
                <div className='hero-section-media'>
                    <img src={require('../assets/restauranfood.jpg')} alt="Food" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;
