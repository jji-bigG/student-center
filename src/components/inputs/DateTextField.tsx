import React, { Dispatch, SetStateAction, useState } from "react";
import HintedInput from "./input_with_corner_hint";

interface Props {
  label: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<string>>;
}
function DateTextField({ label, placeholder, setValue }: Props) {
  const [input, setInput] = useState("");

  const handleChange = (v: string) => {
    // restricting the length
    if (v.length > 2 && v.charAt(2) !== "/") {
      v = v.substring(0, 2);
    }
    if (v.length > 5 && v.charAt(5) !== "/") {
      v = v.substring(0, 5);
    }
    if (v.length > 10) {
      v = v.substring(0, 10);
    }
    // restricting the characters to only numeric
    v.replace(/[^0-9\/]/g, "");

    setInput(v);
    setValue(v);
  };

  return (
    <HintedInput
      label={label}
      hint="Date"
      placeholder={placeholder}
      getValue={handleChange}
      value={input}
    />
  );
}

export default DateTextField;
