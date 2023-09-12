import profile from "../../../public/images/profile.png"
const Header = () => {
    return (
        <header className="max-w-7xl mx-auto flex justify-between items-center py-4 mb-4 border-b-2">
            <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;