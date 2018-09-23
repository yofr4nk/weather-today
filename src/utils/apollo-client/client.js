import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

class ApolloService {
	constructor(uri) {
		this.uri = uri;
		this.init();
	}

	init() {
		this.createClient();
	}

	createClient() {
		this.client = new ApolloClient({
			uri: this.uri
		});
	}

	query(query, variables) {
		return this.client.query({
			query: gql(query),
			variables
		});
	}

	mutation(query, variables) {
		return this.client.mutate({
			mutation: gql(query),
			variables
		});
	}
}

export default ApolloService;