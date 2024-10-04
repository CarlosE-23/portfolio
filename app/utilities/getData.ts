export default async function getData<T>(url: string) {
  try {
    const res = await fetch(url);
    const data: T = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
