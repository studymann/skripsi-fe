const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To ...</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic veritatis repellat tempora iste aut praesentium. Modi totam itaque ullam, soluta labore excepturi molestias vitae repellendus non odit blanditiis voluptatum.</p>
                        <button className="btn btn-accent px-7 text-xl">See More...</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero