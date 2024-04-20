import '@google/model-viewer';

export function setupModelViewer(element) {
  // Create a model-viewer element
  const modelViewer = document.createElement('model-viewer');
  modelViewer.setAttribute('camera-controls', '');
  modelViewer.setAttribute('auto-rotate', '');
  modelViewer.setAttribute('ar', '');
  modelViewer.setAttribute('src', './hammock.glb'); // Your GLB file with variants included
  modelViewer.setAttribute('alt', 'A 3D model of a hammock');

  // Variant names from the provided array
  const variantsArray = [
    "Padding - Citrine",
    "Padding - Garlic",
    "Pillow - Citrine",
    "Pillow - Garlic",
    "Base - Citrine",
    "Base - Garlic",
    "Metal - Citrine - Colourway A",
    "Metal - Citrine - Colourway B",
    "Metal - Garlic - Colourway A",
    "Metal - Garlic - Colourway B",
    "Rope - Citrine - Colourway A",
    "Rope - Citrine - Colourway B",
    "Rope - Garlic"
  ];

  // Adding the variant selector
  const variantSelector = document.createElement('select');
  variantSelector.addEventListener('change', (event) => {
    modelViewer.variantName = event.target.value;
  });

  // Populate the selector with options from the variants array
  variantsArray.forEach(variant => {
    const option = document.createElement('option');
    option.textContent = variant.replace(/ - /g, ' '); // Replace " - " with " " for display text
    option.value = variant; // The variant name as it is defined in the GLB file
    variantSelector.appendChild(option);
  });

  // Append the selector and model viewer to the element
  element.appendChild(modelViewer);
  element.appendChild(variantSelector);

}
