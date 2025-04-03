import {$host} from "@/http";

export const sendUserRequest = async (
	{name, email, message}: {name: string, email: string, message: string},
) => {
	const {data} = await $host.post(`/form-request/send`, {name, email, message});
	return data;
}