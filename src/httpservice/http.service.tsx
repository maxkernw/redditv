

const get = async <T extends unknown>(url: string): Promise<T | Error> => {
    try {
        const data = await fetch(url);
        const json: T = await data.json();

        return json;
    }
    catch (error) {
        return new Error("Something went wrong");
    }
}

export default get;