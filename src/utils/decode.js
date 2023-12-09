let tokens = JSON.parse(args[0])

const apiResponse = await Functions.makeHttpRequest({
    url: `https://api-beta.daggle.xyz/user/jwt`,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    data: { tokens: tokens.tokens }
});
if (apiResponse.error) {
    throw Error("Request failed");
}
const { data } = apiResponse;
return Functions.encodeString(JSON.stringify(data));
