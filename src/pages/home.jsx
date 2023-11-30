import Hero from "../components/Fragments/home/hero"
import HomeLayout from "../components/Layouts/HomeLayout"

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Hero />
                <div className="min-h-screen w-full flex items-center justify-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores sunt dolor nam voluptatibus dolorem quia saepe assumenda ullam, sit quas debitis rem odio in repellat nesciunt? Possimus dolorum magni obcaecati perspiciatis repellendus est doloribus aperiam doloremque quia, iste id veritatis maxime fugit nostrum ipsa minus autem commodi sint aliquam corrupti consequatur dolor repudiandae. Magnam minima facere dignissimos ducimus nihil fugiat, at assumenda molestiae maiores deleniti nobis animi veniam, maxime adipisci, perferendis cumque. Magnam nesciunt consectetur fuga eius fugit odio amet autem eveniet architecto, explicabo voluptas repellat iste esse ab modi sed reprehenderit recusandae, suscipit rerum molestiae. Odio, nulla. Tempore?
                    </p>
                </div>
            </HomeLayout>
        </>
    )
}

export default HomePage