export async function classify(file) {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const response = await fetch('/api/classify', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching forecast: ${error}`);
    throw error;
  }
}
