/* eslint-disable react/no-unknown-property */
const Blog = ({blog, handleMarkAsRead, handleBookmark}) => {
    // eslint-disable-next-line react/prop-types
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="space-y-8 border-b-2 mb-4 pb-4">
            <img className="w-full rounded-lg" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h4 className="font-bold text-2xl">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <p>{reading_time} min</p>
                    
                    <button onClick={()=>handleBookmark(blog)}
                    ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V3z" clipRule="evenodd"></path></svg></button>
                </div>
            </div>
            <h3 className="font-bold text-4xl">{title}</h3>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> #{hashtag}</span> )
                }
            </p>
            <p onClick={() => handleMarkAsRead(id, reading_time)} className="cursor-pointer underline text-purple-700 w-fit">Mark as read</p>
        </div>
    );
};

export default Blog;