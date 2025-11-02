//apps/component/StatusMessage.jsx
'use client'

export function handleError(error) {
  console.error("An error occurred:", error.message);
  const container = document.getElementById("product-container");
  if (container) {
    container.setAttribute("aria-busy", "false");
    container.innerHTML = `
      <div class="status error">Error loading products. Please try again later.</div>
    `;
  }
}