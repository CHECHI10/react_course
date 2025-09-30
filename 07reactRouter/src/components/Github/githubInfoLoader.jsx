
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/CHECHI10')

  return response.json();
}