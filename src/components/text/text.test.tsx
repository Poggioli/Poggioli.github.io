import { render } from "@testing-library/react";
import Text from ".";

describe("<Text />", () => {
  it("should render text", () => {
    const { queryByText } = render(<Text>Value</Text>);
    const element = queryByText("Value");
    expect(element).toBeInTheDocument();
  });
});
