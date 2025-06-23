type SelectProductColorProps = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectProductColor({
  colors,
  productColor,
  setProductColor
}: SelectProductColorProps) {
  return (
    <div className="mt-6 ">
      <h4 className="text-md font-medium tracking-wider capitalize"></h4>
      <div className="mt-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`rounded-full w-6 h-6 border-2 mr-2
             ${color === productColor && "border-primary"}`}
            style={{backgroundColor: color}}
            onClick={() => setProductColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}
