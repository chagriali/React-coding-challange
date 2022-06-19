interface IImgCardInfo {
  username: string;
  likes?: number;
}

const ImgCardInfo = (props: IImgCardInfo) => {
  return (
    <div className="mt-3 inline-flex">
      <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
        </svg>
        {props.likes != undefined && (
          <span className="pl-2">{props.likes}</span>
        )}
      </div>
      <p className="align-middle pt-2 pl-2">{props.username}</p>
    </div>
  );
};

export default ImgCardInfo;
