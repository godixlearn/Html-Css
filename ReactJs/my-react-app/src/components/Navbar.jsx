

function Navbar(){
    return (
        <header>
            <div class="container navbar">
                <h2 class="logo">
                <i class="fa-solid fa-heart" style={{color: "rgb(251, 7, 29)"}}></i>
                Health Center
                </h2>

                <nav id="navbarLinks">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;