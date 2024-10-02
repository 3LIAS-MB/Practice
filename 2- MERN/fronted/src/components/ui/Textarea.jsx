import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref) => {
  return (
    <textarea
      className="bg-zinc-800 px-3 py-2 block my-2 w-full"
      ref={ref}
      {...props}
    >
      {props.children}
    </textarea>
  );
});

// 'component definition is missing display name' indica que el componente que has definido
//  utilizando forwardRef no tiene un nombre de visualización (display name),
//  lo cual es útil para depurar en herramientas de desarrollo y trazas de errores.
Textarea.displayName = "Textarea";

export default Textarea;
