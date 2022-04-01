import React from 'react';
import useFetch from "../../../hooks/useFetch"
import Feed from '../Community/Feed';

const Userpost = (props) => {
    const {data: userPosts, isLoading, error}  = useFetch('http://localhost:5000/community/user-posts/' + props.userID);
    var header = `${props.username}'s Posts`
    if (props.isOwner){
        header = `My Posts`
    }
    return (
        <div className="d-flex">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading posts...</div>}
                {userPosts &&
                    <>
                        <div style={{scrollMarginTop: '20rem'}} id='UserPost'></div>
                        <Feed posts={userPosts} id='UserPost' feed={header}></Feed>
                    </>
                }
        </div>
        // <div style={{width: 300, scrollMarginTop: '20rem'}} id='UserPost' >
        //     <h3 style={{scrollMarginTop: '200px'}}>My Posts (Scroll test)</h3>
        //     <span >
        //     Genshin Impact (Chinese: 原神 Yuánshén) 
        //     is a free-to-play action RPG developed and published by miHoYo.
        //     Outside of China, Genshin Impact is published by subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse.
        //     The game features a fantasy open-world environment and action based combat system using elemental magic, 
        //     character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources. 
        //     The game can only be played with an internet connection and features a limited multiplayer mode allowing up to four players in a world.

        //     Genshin Impact (Chinese: 原神 Yuánshén) 
        //     is a free-to-play action RPG developed and published by miHoYo.
        //     Outside of China, Genshin Impact is published by subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse.
        //     The game features a fantasy open-world environment and action based combat system using elemental magic, 
        //     character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources. 
        //     The game can only be played with an internet connection and features a limited multiplayer mode allowing up to four players in a world.

        //     Genshin Impact (Chinese: 原神 Yuánshén) 
        //     is a free-to-play action RPG developed and published by miHoYo.
        //     Outside of China, Genshin Impact is published by subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse.
        //     The game features a fantasy open-world environment and action based combat system using elemental magic, 
        //     character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources. 
        //     The game can only be played with an internet connection and features a limited multiplayer mode allowing up to four players in a world.
        //     </span>
        // </div>
    );
}

export default Userpost;
