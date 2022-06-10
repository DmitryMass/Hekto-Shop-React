import React from 'react';

const ProductInput = ({
  field: { onChange, onBlur, name, value },
  form,
  type,
}) => {
  let placeholder;
  switch (name) {
    case 'product':
      placeholder = 'Product';
      break;
    case 'price':
      placeholder = 'Price';
      break;
    case 'type':
      placeholder = 'Type';
      break;
    case 'brand':
      placeholder = 'Brand';
      break;
    case 'description':
      placeholder = 'Description';
      break;
  }
  return (
    <div className="productInput">
      <input
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default ProductInput;
