import { render } from "@testing-library/react";
import Home from ".";
import TestNavProvider from "../../components/navbar/context/nav-provider.test";

describe("<Home/>", () => {
  const setTitleMock = jest.fn();
  const setup = () => {
    return render(
      <TestNavProvider setTitle={setTitleMock}>
        <Home />
      </TestNavProvider>,
    );
  };

  it('should call setTitleMock with ".toString()" value', () => {
    setup();
    expect(setTitleMock).toHaveBeenCalledTimes(1);
    expect(setTitleMock).toHaveBeenCalledWith(".toString()");
  });

  it("should have text title in document", () => {
    const { getByText } = setup();
    const joaoLabel = getByText(/joao/im);
    const toStringLabel = getByText(/.tostring()/im);

    expect(joaoLabel).toBeInTheDocument();
    expect(toStringLabel).toBeInTheDocument();
  });

  it("should have text subtitle in document", () => {
    const { getByText } = setup();
    const joaoLabel = getByText(/João Vitor Pogiolli/im);

    expect(joaoLabel).toBeInTheDocument();
  });

  it("should have text body in document", () => {
    const { getByText } = setup();
    const bodyLabelPart1 = getByText(
      /Passionate about frontend development,/im,
    );
    const bodyLabelPart2 = getByText(
      /problem solving, UI\/UX, family and birds./im,
    );

    expect(bodyLabelPart1).toBeInTheDocument();
    expect(bodyLabelPart2).toBeInTheDocument();
  });
});
