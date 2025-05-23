import { render , screen} from "@testing-library/react";
import Contract from "../Contract";


test("Should load contract us component",()=>{
    render(<Contract/>);

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})


