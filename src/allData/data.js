//Fetching data function:
export const datafetch = async () => {
  const data = await fetch('http://localhost:3000/sportshop.json');
  const posts = await data.json();
  return posts;
};

  