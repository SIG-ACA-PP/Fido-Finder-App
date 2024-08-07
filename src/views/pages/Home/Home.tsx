import { useState } from 'react';
import CardImage from '../../../components/molecules/CardImage';
import NotRegistered from '../../../components/molecules/NotRegistered';
import { useLoaderData } from 'react-router-dom';
// import formatDateTime from '../../../lib/utils/formatDateTime';
import { format, parse } from '@formkit/tempo';

const Home = () => {
  // const posts: ApiPost[] = [];
  const { posts } = useLoaderData() as { posts: ApiPost[] };
  const [isRegistered] = useState<boolean>(true);

  return (
    <main className="relative">
      {isRegistered ? (
        <div className="px-5 flex flex-col gap-4 overflow-y-scroll">
          {posts.map((post) => {
            const { id, users, pets, locationInfo, lost_datetime } = post;

            const finalImg = users.img ? users.img : 'img/lost-dog.jpg';
            const finalLocation = locationInfo.community
              ? locationInfo.community
              : locationInfo.mun;
            const finalDate = format(
              parse(lost_datetime),
              'DD MMMM, YYYY - h:mm A',
              'es'
            );

            return (
              <CardImage
                is_lost={post.is_lost}
                key={id}
                avatarUrl={finalImg}
                userId={users.id}
                user={users.name!}
                date={finalDate}
                location={finalLocation}
                petImg={pets.img}
                petName={pets.name}
                postId={id}
                petId={pets.id}
              />
            );
          })}
        </div>
      ) : (
        <NotRegistered />
      )}
    </main>
  );
};

export default Home;
