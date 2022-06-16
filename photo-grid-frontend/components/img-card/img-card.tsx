import Image from "next/image";

const ImgCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src="https://images.unsplash.com/photo-1638913661377-abd9e8cf1998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzg2MDB8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NTQxMDE5NQ&ixlib=rb-1.2.1&q=80&w=400"
        alt="Picture of the author"
        width="350px"
        height="300px"
      />
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tags
        </span>
      </div>
    </div>
  );
};

export default ImgCard;
