import { render } from "@testing-library/react";
import ImgCard from "@/components/img-card/img-card";

describe("image card", () => {
  it("Should render correctly", async () => {
    const imgCard = render(
      <ImgCard
        urls={{
          small: "/placeholder.png",
          full: "/placeholder.png",
          regular: "/placeholder.png",
        }}
        width={500}
        height={500}
        user={{
          username: "john",
          bio: "",
        }}
      />
    );
    expect(imgCard).toMatchSnapshot();
  });
});
