import Image from "next/image";

interface IImgLightBox {
  imgUrl: string;
  width: number;
  height: number;
  handleClose: () => void;
}

const ImgLightBox = (props: IImgLightBox) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start"></div>
              <div>
                <Image
                  src={props.imgUrl}
                  alt="Picture of the author"
                  width={props.width}
                  height={props.height}
                  layout="responsive"
                  className="object-contain"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD90lEQVR4nO3cwW+bSBQH4AcGw5HnJDhHaN3dHO1su9ojNGnPtrUb7dFuIiVHnEo5263Uv3vfGwab1myVA5DV6vcpgeD35HmeGYbJxUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zOb3N5BRexlu9/Jo+NCQFl/HbWrRK7s6Amcdy3jCfaftyOT/OmsnLxSFqkzu04Ns1Z+RxPOMtUc63fH6U5HP8O5/uo1Vyh9IJhTylwSjz0pV0y4Tex0dJ7iij3ck+WiV3J9RPvVhRLgO5O5V+KOSl7MesnXSRH++jNrlDAWurEW0i6ZOz8jI9mlwaDXkftckd8nXEdgnNVjI2sf6Q+VvLSMiMHJnupHC0j9rkrmlL87Lhs7JK86oM1fowVFq0jdrkjn2QKbMuTEvD8aGsfCQ9th9PbzHeR21yt1KWkUq3et+Tq4tDHpnXfZ67+7Zdltu1itrkbrEuRWVLWdmwHbl0shlXSQ7LLVtFbXLXZUmLphHOHK3IsWVtTg6Lk6PFV1Gb3G1Z9I1Xjb015NpSHq7jfntL7reoaW7JhD+pJQ2537llVuyGO1Em17iWJMt7f3ei/zeZcdGlKLDr1saW5XPV9F9bM2pV1CZ3yDxDZFx0HZcF0z+s8rpwVcuWPo5k1KqoTe7QwD58mp6Js/PUTn4tVEatx2ei3lAzu4M4t3uErQl5PN3YOb84NR+gitrkDnl8J51QNO23hjLH7SqQxxnp0trbfotmo9t0RE27U9k9hFw2PuBfLnVD0d/u9KMs8hNq2svrxFqXJXprZtmg9riXp5v0jTRI4afyn5lv1X8+gRaQ22XA/zT6sxatkgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD65tjf/5gXLYtHb/8l8kNZkVw5zEwjIjei8ru7rtJ7/YqcO3ISorTFsiLvt+eXZY7xlp5sWd6b7KscrpeZ80DBus2y6D1dviY3C+QP/9WUnGWkp8GrhZa1fE3DQiK1ssYrurdlDeblwZ86TzTctFuWf/dxPihy+kw31+/IuTOnm2v98I6EwoTe1cuKLsLEluVm5cFLHHf7pc2JKIPoZl4STpfFHzSRfnEyc5pQrmVJiO7l13yRHpdlPQ0LW5ZTHSInWN23WZZMedMJycUq0aa1FT1F1dyK6MugoHpvuY903Fv0a9Jqb+n7apesHlY0KSvRU6233CV9V5Z/RsdzixbzlsvSuUXL4nFOT9mVtq2nw9yiYPx9WebCHGt3IrW7yOnby51IuyzPKEgv9M31dLgTKUgayioH+oqrdavlsp5hWPTb3jM9vnQBjZyLl64AAP43/gHVSaMe2vmdiAAAAABJRU5ErkJggg=="
                  placeholder="blur"
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    console.log("closing");
                    props.handleClose();
                  }}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgLightBox;
