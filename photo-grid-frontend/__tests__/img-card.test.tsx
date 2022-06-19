import { fireEvent, render, screen } from "@testing-library/react";
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

  it("Should display lightbox", async () => {
    const { container } = render(
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
    const img = screen.getByAltText("Picture of the author");
    fireEvent.click(img);
    const modal = container.querySelector('[aria-labelledby="modal"]');
    expect(modal).not.toBeNull();
  });

  it("Should not display lightbox", async () => {
    const { container } = render(
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
    const modal = container.querySelector('[aria-labelledby="modal"]');
    expect(modal).toBeNull();
  });
});
