function About(){
    return (
        <>
            <section className="about">
                <div className='about-content'>
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
                        Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus.</p>
                </div>
                <div className='about-media'>
                    <img className='chefs' src={require('../assets/chefs.jpg')}/>
                    <img className='restaurant' src={require('../assets/restaurant.jpg')}/>
                </div>
            </section>
        </>
    );
}

export default About;