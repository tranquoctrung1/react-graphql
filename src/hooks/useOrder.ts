import { gql, useMutation, useQuery } from '@apollo/client';

const GET_ORDER = gql`
	query Query($amount: Int) {
		getOrders(amount: $amount) {
			consumerName
			note
			price
		}
	}
`


const INSERT_ORDER = gql`
	mutation Mutation($orderInput: OrderInput) {
		createOrder(orderInput: $orderInput) {
			consumerName
			note
		}
	}
`

export const useOrder = (amount: number) => {
	const {error, data, loading} = useQuery(GET_ORDER, {
		variables: {
			amount: amount
		}
	});

	return {error, data, loading}
} 


export const useInsertOrder = () =>
{
	const [createOrder, {error, data, loading}] = useMutation(INSERT_ORDER)

	return [createOrder, {error, data, loading}];
}