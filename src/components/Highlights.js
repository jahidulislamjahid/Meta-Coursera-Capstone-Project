function Highlights(){
    return (
        <>
            <section className="highlights">
                <div className='highlights-header'>
                    <h2>Specials</h2>
                    <a href="#" className='yellow-button'>Online Menu</a>
                </div>
                <div className='highlights-cards'>
                    <div className='highlights-cards-item'>
                        <img src={require('../assets/greek-salad.jpg')} alt='Greek Salad' />
                        <div>
                            <h4>Greek Salad</h4>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with....</p>
                            <a href='#'>Order Delivery</a>
                        </div>
                    </div>
                    <div className='highlights-cards-item'>
                        <img src={require('../assets/bruchetta.jpg')} alt='Greek Salad' />
                        <div>
                            <h4>Bruschetta</h4>
                            <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and...</p>
                            <a href='#'>Order Delivery</a>
                        </div>
                    </div>
                    <div className='highlights-cards-item'>
                        <img src={require('../assets/lemon dessert.jpg')} alt='Greek Salad' />
                        <div>
                            <h4>Lemon Cake</h4>
                            <p>This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can...</p>
                            <a href='#'>Order Delivery</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Highlights;
