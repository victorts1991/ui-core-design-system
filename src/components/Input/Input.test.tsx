import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {Input} from "@/components/Input/Input";

describe('Input Component', () => {
    it('should render children correctly', () => {
        render(<Input>Click Me</Input>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

})