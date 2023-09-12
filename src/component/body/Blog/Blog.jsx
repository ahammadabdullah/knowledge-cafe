const Blog = ({blog}) => {
    // eslint-disable-next-line react/prop-types
    const {title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    console.log(hashtags);
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
                <p>{reading_time} min read</p>
            </div>
            <h3 className="font-bold text-4xl">{title}</h3>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> #{hashtag}</span> )
                }
            </p>
            <p className="underline text-purple-700"><a href="">Mark as read</a></p>
        </div>
    );
};

export default Blog;