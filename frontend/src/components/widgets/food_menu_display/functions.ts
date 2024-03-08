import EnsaladaDePollo from './EnsaladaPollo.jpg';

export async function setFormData() {
  const blob = await fetch(EnsaladaDePollo.src).then((r) => r.blob());

  // Creamos un nuevo objeto File
  const fileImage = new File([blob], 'ensaladaPollo.webp', {
    type: blob.type,
  });

  const formData = new FormData();
  formData.append('product_name', 'Milanesaa');
  formData.append('description', 'Prueba de comida en este caso milanesa2');
  formData.append('price', '2000');
  formData.append('image', fileImage);

  return formData;
}
