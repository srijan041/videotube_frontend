import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTweets } from "../../store/Slices/tweetSlice";
import { TweetAndComment, TweetsList } from "../../components";

function ChannelTweets() {
    const dispatch = useDispatch();
    const auth_username = useSelector((state) => state.auth?.userData?.username);
    const username = useSelector((state) => state.user?.profileData?.username);
    const tweets = useSelector((state) => state.tweet?.tweets);

    useEffect(() => {
        if (username) dispatch(getUserTweets(username));
    }, [dispatch, username]);

    return (
        <>
            {auth_username === username && <TweetAndComment tweet={true}/>}
            {tweets?.map((tweet) => (
                <TweetsList
                    key={tweet?._id}
                    avatar={tweet?.ownerDetails?.avatar.url}
                    content={tweet?.content}
                    createdAt={tweet?.createdAt}
                    likesCount={tweet?.likesCount}
                    tweetId={tweet?._id}
                    username={tweet?.ownerDetails?.username}
                    isLiked={tweet?.isLiked}
                />
            ))}
        </>
    );
}

export default ChannelTweets;
