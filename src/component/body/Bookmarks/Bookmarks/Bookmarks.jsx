const Bookmarks = ({readingTime,bookmark}) => {
    return (
        <div className="w-1/3">
            <div className="bg-[#6047EC1A] py-5 text-center rounded-lg border-2 border-[#6047EC] mb-6">
                <h3 className="font-bold text-2xl text-[#6047EC]">Spent time on read: {readingTime} min</h3>
            </div>
            <div className="p-7 bg-[#1111110D] rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Bookmarked Blogs:</h3>
                {
                    bookmark.map((bookmark, idx) => <p className="bg-white rounded-lg p-5 mb-3" key={idx}>{bookmark.title}</p>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;