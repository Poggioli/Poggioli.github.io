import { FC, useContext, useMemo, useState } from "react";
import { render } from "@testing-library/react";
import NavProvider, { NavContext, NavProviderProps } from ".";
import { NavContextType } from "../../../@types/nav";

interface ITestNavProvider extends NavProviderProps {
  titleValue: string;
}

const TestNavProvider: FC<ITestNavProvider> = ({ children, titleValue }) => {
  const [title, setTitle] = useState(titleValue);

  const value = useMemo(() => ({ title, setTitle }), [title]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

describe("<NavProvider/ >", () => {
  const TestComponent: FC<{ titleValue: string }> = ({ titleValue }) => {
    const { title, setTitle } = useContext(NavContext) as NavContextType;
    setTitle(titleValue);
    return <span>{title}</span>;
  };

  const setup = ({ title = "title" }) => {
    return render(
      <NavProvider>
        <TestComponent titleValue={title} />,
      </NavProvider>,
    );
  };

  it("should render default text", () => {
    const { queryByText } = setup({});
    const textValue: string = "title";
    const textElement = queryByText(textValue);
    expect(textElement).toBeInTheDocument();
  });

  it("should render another text", () => {
    const textValue: string = "another title value";
    const { queryByText } = setup({ title: textValue });
    const textElement = queryByText(textValue);
    expect(textElement).toBeInTheDocument();
  });
});

export default TestNavProvider;
