// declare module "*.svg" {
//   import * as React from "react";

//   const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   export default ReactComponent;
// }

declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}