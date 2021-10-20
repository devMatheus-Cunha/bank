import React from "react"
import {
	 Loader,
} from "semantic-ui-react"

// styles
import { Container } from "./styles"

const LoaderComponent = () => (
	<Container>
		<Loader active inline="centered" size="medium" />
	</Container>
)

export default LoaderComponent
