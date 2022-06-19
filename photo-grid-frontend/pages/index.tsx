import Navbar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import React, { useEffect, useState } from "react";
import ImgCard, { IUrls } from "@/components/img-card/img-card";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import { IUser } from "@/components/img-lightbox/img-lightbox";
import axios from "axios";

interface IImage {
  id: string;
  created_at: Date;
  updated_at: Date;
  urls: IUrls;
  user: IUser;
  width: number;
  height: number;
  likes: number;
}

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [imgList, setImgList] = useState<IImage[]>([]);
  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    const result = await axios({
      method: "GET",
      url: "https://api.unsplash.com/photos",
      params: {
        client_id: process.env.CLIENT_ID,
        page,
      },
    });
    setImgList((prevImgList) => [
      ...prevImgList,
      ...result.data.filter(
        (e: any) => imgList.findIndex((img) => img.id === e.id) == -1
      ),
    ]);
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <InfiniteScroll
        dataLength={imgList.length}
        next={fetchData}
        hasMore={true}
        loader={<h3>Loading ...</h3>}
      >
        <Masonry
          breakpointCols={{
            default: 3,
            1200: 3,
            1000: 2,
            700: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {imgList.map((e) => (
            <ImgCard
              key={e.id}
              urls={e.urls}
              user={e.user}
              width={e.width / 10}
              height={e.height / 10}
              likes={e.likes}
            />
          ))}
        </Masonry>
      </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default Home;
