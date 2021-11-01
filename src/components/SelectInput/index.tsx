import React from "react";

// styles
import { Container } from "./styles";

// interface
interface IHeaderFilter {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const DropDownOptions = ({
	options,
	defaultValue,
	onChange,
}: IHeaderFilter) => {
	return (
		<Container>
			<select defaultValue={defaultValue} onChange={onChange}>
				{options.map((option) => (
					<>
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					</>
				))}
			</select>
		</Container>
	);
};

export default DropDownOptions;
