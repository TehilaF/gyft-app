export const addContributor = async (contributorData: any) => {
  try {
    const response = await fetch(
      "http://localhost:5147/Contributors/NewContributor",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contributorData),
      }
    );

    if (!response.ok) throw new Error("Failed to add contributor");

    return await response.json(); // Assuming the API returns the created contributor
  } catch (error) {
    console.error("Error adding contributor:", error);
    throw error;
  }
};
