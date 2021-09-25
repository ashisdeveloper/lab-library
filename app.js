export async function request(url, data = {}, authorization = 0) {
	let method = Object.keys(data).length > 0 ? "POST" : "GET";
	let result;
	if (method == "POST")
		result = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: authorization,
			},
			body: JSON.stringify(data),
		});
	else result = await fetch(url);
	let finalResult = await result.json();
	finalResult = { ...finalResult, status: result.status };
	return finalResult;
}
