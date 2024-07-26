import Hero from "../assets/hero.jpg"

export default function Home() {
    return (
        <div>
            <section className="hero flex justify-center">
                <img src={Hero} alt="hero image" className="w-[95%] h-[500px] rounded-md"/>
            </section>
            <main className="flex flex-col align-center gap-4">
                <h1 className="self-center text-2xl mt-4">Welcome to my Library</h1>
                <p className="w-[80%] self-center mb-4 border p-5 text-gray-400 rounded-md"><span className="text-2xl font-serif text-gray-500">"</span>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Et, doloremque? Officia nulla quisquam quasi beatae rerum aperiam corporis nisi itaque velit ipsa, exercitationem, 
                animi doloribus. Sunt, vitae libero. Non, eligendi?<span className="text-2xl font-serif text-gray-500">"</span></p>
            </main>
        </div>
    );
}