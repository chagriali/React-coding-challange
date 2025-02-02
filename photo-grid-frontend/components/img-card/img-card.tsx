import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import ImgCardInfo from "../img-card-info/img-card-info";
import ImgLightBox, { IUser } from "../img-lightbox/img-lightbox";

export interface IUrls {
  small: string;
  regular: string;
  full: string;
}

interface IImgCardProps {
  urls: IUrls;
  user: IUser;
  width: number;
  height: number;
  likes?: number;
}

const ImgCard = (props: IImgCardProps) => {
  const [isImgLightBoxOpen, SetIsImgLightBoxOpen] = useState<boolean>(false);
  const [isMobileRendering, setIsMobileRendering] = useState<boolean>(false);
  useLayoutEffect(() => {
    function updateIsMobileRendering() {
      if (window.innerWidth < 700) {
        setIsMobileRendering(true);
      } else {
        setIsMobileRendering(false);
      }
    }
    window.addEventListener("resize", updateIsMobileRendering);
    updateIsMobileRendering();
    return () => window.removeEventListener("resize", updateIsMobileRendering);
  }, []);
  return (
    <div className="pb-4 break-inside">
      <Image
        onClick={() => {
          if (window.innerWidth > 700) SetIsImgLightBoxOpen(true);
        }}
        src={props.urls.small}
        alt="Picture of the author"
        width={props.width}
        height={props.height}
        layout="responsive"
        className="object-contain rounded-lg shadow hover:brightness-50 cursor-zoom-in"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD90lEQVR4nO3cwW+bSBQH4AcGw5HnJDhHaN3dHO1su9ojNGnPtrUb7dFuIiVHnEo5263Uv3vfGwab1myVA5DV6vcpgeD35HmeGYbJxUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zOb3N5BRexlu9/Jo+NCQFl/HbWrRK7s6Amcdy3jCfaftyOT/OmsnLxSFqkzu04Ns1Z+RxPOMtUc63fH6U5HP8O5/uo1Vyh9IJhTylwSjz0pV0y4Tex0dJ7iij3ck+WiV3J9RPvVhRLgO5O5V+KOSl7MesnXSRH++jNrlDAWurEW0i6ZOz8jI9mlwaDXkftckd8nXEdgnNVjI2sf6Q+VvLSMiMHJnupHC0j9rkrmlL87Lhs7JK86oM1fowVFq0jdrkjn2QKbMuTEvD8aGsfCQ9th9PbzHeR21yt1KWkUq3et+Tq4tDHpnXfZ67+7Zdltu1itrkbrEuRWVLWdmwHbl0shlXSQ7LLVtFbXLXZUmLphHOHK3IsWVtTg6Lk6PFV1Gb3G1Z9I1Xjb015NpSHq7jfntL7reoaW7JhD+pJQ2537llVuyGO1Em17iWJMt7f3ei/zeZcdGlKLDr1saW5XPV9F9bM2pV1CZ3yDxDZFx0HZcF0z+s8rpwVcuWPo5k1KqoTe7QwD58mp6Js/PUTn4tVEatx2ei3lAzu4M4t3uErQl5PN3YOb84NR+gitrkDnl8J51QNO23hjLH7SqQxxnp0trbfotmo9t0RE27U9k9hFw2PuBfLnVD0d/u9KMs8hNq2svrxFqXJXprZtmg9riXp5v0jTRI4afyn5lv1X8+gRaQ22XA/zT6sxatkgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD65tjf/5gXLYtHb/8l8kNZkVw5zEwjIjei8ru7rtJ7/YqcO3ISorTFsiLvt+eXZY7xlp5sWd6b7KscrpeZ80DBus2y6D1dviY3C+QP/9WUnGWkp8GrhZa1fE3DQiK1ssYrurdlDeblwZ86TzTctFuWf/dxPihy+kw31+/IuTOnm2v98I6EwoTe1cuKLsLEluVm5cFLHHf7pc2JKIPoZl4STpfFHzSRfnEyc5pQrmVJiO7l13yRHpdlPQ0LW5ZTHSInWN23WZZMedMJycUq0aa1FT1F1dyK6MugoHpvuY903Fv0a9Jqb+n7apesHlY0KSvRU6233CV9V5Z/RsdzixbzlsvSuUXL4nFOT9mVtq2nw9yiYPx9WebCHGt3IrW7yOnby51IuyzPKEgv9M31dLgTKUgayioH+oqrdavlsp5hWPTb3jM9vnQBjZyLl64AAP43/gHVSaMe2vmdiAAAAABJRU5ErkJggg=="
        placeholder="blur"
      />
      {isMobileRendering && (
        <ImgCardInfo likes={props.likes} username={props.user.username} />
      )}
      {isImgLightBoxOpen && (
        <ImgLightBox
          imgUrl={props.urls.full}
          user={props.user}
          width={props.width}
          height={props.height}
          handleClose={() => SetIsImgLightBoxOpen(false)}
        />
      )}
    </div>
  );
};

export default ImgCard;
