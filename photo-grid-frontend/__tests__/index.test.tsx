import { render } from "@testing-library/react";
import Home from "@/pages/index";
import axios from "axios";
import { act } from "react-dom/test-utils";

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe("index", () => {
  it("Should render correctly", async () => {
    // Provide the data object to be returned
    mockedAxios.mockResolvedValue({
      data: [
        {
          id: "testiId1",
          urls: { small: "/placeholder.png" },
          width: 500,
          height: 500,
        },
        {
          id: "testiId2",
          urls: { small: "/placeholder.png" },
          width: 500,
          height: 500,
        },
      ],
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    });

    let home: any;
    await act(async () => {
      home = render(<Home />);
    });
    expect(home).toMatchSnapshot();
  });
});
